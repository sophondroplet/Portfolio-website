(() => {
  const STORAGE_KEY = "site-language";
  const EN = "en";
  const ZH = "zh-CN";

  const EN_NAME = "Lek Man";
  const ZH_NAME = "\u6587\u529b";
  const HOME_TITLE_EN = "Hi! I'm Lek Man";
  const HOME_TITLE_ZH = "\u55e8\uff01\u6211\u662f\u6587\u529b";

  const BAD_ZH_NAME_VARIANTS = [
    "\u83b1\u514b\u66fc",
    "\u83b1\u514b\u00b7\u66fc",
    "\u5217\u514b\u66fc",
    "\u5217\u514b\u00b7\u66fc"
  ];

  const MENU_OVERRIDES = {
    zh: {
      "Home": "\u9996\u9875",
      "\u5bb6": "\u9996\u9875",
      "About": "\u5173\u4e8e",
      "Projects": "\u9879\u76ee",
      "Experiences": "\u7ecf\u5386",
      "CV": "\u7b80\u5386"
    },
    en: {
      "\u9996\u9875": "Home",
      "\u5173\u4e8e": "About",
      "\u9879\u76ee": "Projects",
      "\u7ecf\u5386": "Experiences",
      "\u7b80\u5386": "CV"
    }
  };

  const UI_OVERRIDES = {
    zh: {
      "Hi! I'm Lek Man": HOME_TITLE_ZH,
      "\u55e8\uff0c\u6211\u662fLek Man": HOME_TITLE_ZH,
      "\u55e8\uff0c\u6211\u662f\u6587\u529b": HOME_TITLE_ZH,
      "Lek's Portfolio": "Lek \u7684\u4f5c\u54c1\u96c6",
      "Portfolio": "\u4f5c\u54c1\u96c6",
      "portfolio": "\u4f5c\u54c1\u96c6",
      "About me": "\u5173\u4e8e\u6211",
      "Highlights": "\u4eae\u70b9"
    },
    en: {
      "\u55e8\uff01\u6211\u662f\u6587\u529b": HOME_TITLE_EN,
      "Lek \u7684\u4f5c\u54c1\u96c6": "Lek's Portfolio",
      "\u4f5c\u54c1\u96c6": "Portfolio",
      "\u5173\u4e8e\u6211": "About me",
      "\u4eae\u70b9": "Highlights"
    }
  };

  const TERM_FIXES = {
    zh: [
      { from: /\u6295\u8d44\u7ec4\u5408\u7f51\u7ad9/g, to: "\u4f5c\u54c1\u96c6\u7f51\u7ad9" },
      { from: /\u6295\u8d44\u7ec4\u5408/g, to: "\u4f5c\u54c1\u96c6" },
      { from: /\u4ff1\u4e50\u90e8/g, to: "\u5b66\u4f1a" }
    ],
    en: [
      { from: /\u4f5c\u54c1\u96c6\u7f51\u7ad9/g, to: "portfolio website" }
    ]
  };

  function setCookie(name, value) {
    document.cookie = `${name}=${value}; path=/; max-age=31536000`;
    document.cookie = `${name}=${value}; path=/; domain=${location.hostname}; max-age=31536000`;
  }

  function getCookie(name) {
    const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : "";
  }

  function getCurrentLanguage() {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === EN || stored === ZH) return stored;

    const cookie = getCookie("googtrans");
    return cookie.includes(`/${ZH}`) ? ZH : EN;
  }

  function setLanguage(lang) {
    localStorage.setItem(STORAGE_KEY, lang);
    setCookie("googtrans", `/auto/${lang}`);
    location.reload();
  }

  function applySavedLanguage() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved !== EN && saved !== ZH) return;

    const cookie = getCookie("googtrans");
    if (!cookie.includes(`/${saved}`)) {
      setCookie("googtrans", `/auto/${saved}`);
      location.reload();
    }
  }

  function createToggleButton(targetLang) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lang-toggle-btn notranslate";
    button.setAttribute("translate", "no");
    button.textContent = targetLang === ZH ? "\u4e2d\u6587" : "English";
    button.setAttribute("aria-label", targetLang === ZH ? "Switch language to Chinese" : "Switch language to English");
    button.addEventListener("click", () => setLanguage(targetLang));
    return button;
  }

  function injectPinnedLanguageButton() {
    const nav = document.querySelector(".greedy-nav");
    if (!nav || nav.querySelector(".lang-toggle-pin")) return;

    const current = getCurrentLanguage();
    const target = current === ZH ? EN : ZH;

    const pin = document.createElement("div");
    pin.className = "lang-toggle-pin";
    pin.appendChild(createToggleButton(target));

    const visibleLinks = nav.querySelector(".visible-links");
    if (visibleLinks) {
      nav.insertBefore(pin, visibleLinks);
      return;
    }

    const toggle = nav.querySelector(".greedy-nav__toggle");
    if (toggle) {
      nav.insertBefore(pin, toggle);
    } else {
      nav.appendChild(pin);
    }
  }

  function setTextIfMapped(el, map) {
    if (!el || !el.textContent) return;
    const raw = el.textContent.trim();
    if (!raw) return;
    if (map[raw]) el.textContent = map[raw];
  }

  function preserveFeatureRowLinks() {
    document.querySelectorAll(".archive__item .btn, .feature__item .btn, a.btn--primary").forEach((a) => {
      const anchor = a;
      if (!anchor.dataset.originalHref) {
        anchor.dataset.originalHref = anchor.getAttribute("href") || "";
      }
      if (
        anchor.dataset.originalHref &&
        (!anchor.getAttribute("href") || anchor.getAttribute("href").startsWith("javascript"))
      ) {
        anchor.setAttribute("href", anchor.dataset.originalHref);
      }
      anchor.style.pointerEvents = "auto";
      anchor.style.cursor = "pointer";
    });
  }

  function snapshotCardCtaLinks() {
    const cards = Array.from(document.querySelectorAll(".feature__item, .archive__item"));
    const map = [];

    cards.forEach((card, index) => {
      const btn = card.querySelector("a.btn, a.btn--primary");
      const titleLink = card.querySelector(".archive__item-title a, h2 a, h3 a");
      const href =
        (btn && btn.getAttribute("href")) ||
        (titleLink && titleLink.getAttribute("href")) ||
        card.dataset.ctaHref ||
        "";

      if (href && !href.startsWith("javascript") && href !== "#") {
        card.dataset.ctaHref = href;
        map[index] = href;
      }
    });

    try {
      localStorage.setItem(`cta-map:${location.pathname}`, JSON.stringify(map));
    } catch (e) {}
  }

  function getSavedCtaMap() {
    try {
      const raw = localStorage.getItem(`cta-map:${location.pathname}`);
      const parsed = raw ? JSON.parse(raw) : [];
      return Array.isArray(parsed) ? parsed : [];
    } catch (e) {
      return [];
    }
  }

  function ensureFeatureButtonsExist(currentLang) {
    const label = currentLang === ZH ? "\u67e5\u770b\u66f4\u591a" : "See More";
    const savedMap = getSavedCtaMap();
    Array.from(document.querySelectorAll(".feature__item, .archive__item")).forEach((card, index) => {
      const body = card.querySelector(".archive__item-body");
      if (!body) return;

      const existingBtn = body.querySelector("a.btn, a.btn--primary");
      const hrefFromCard = card.dataset.ctaHref || savedMap[index] || "";
      const hrefFromBtn = existingBtn ? existingBtn.getAttribute("href") || "" : "";
      const href = hrefFromBtn && !hrefFromBtn.startsWith("javascript") && hrefFromBtn !== "#" ? hrefFromBtn : hrefFromCard;
      if (!href) return;

      let fixedWrap = body.querySelector(".cta-fixed");
      if (!fixedWrap) {
        fixedWrap = document.createElement("p");
        fixedWrap.className = "cta-fixed notranslate";
        fixedWrap.setAttribute("translate", "no");
        body.appendChild(fixedWrap);
      }

      let fixedBtn = fixedWrap.querySelector("a");
      if (!fixedBtn) {
        fixedBtn = document.createElement("a");
        fixedBtn.className = "btn btn--primary notranslate";
        fixedWrap.appendChild(fixedBtn);
      }

      fixedBtn.dataset.originalHref = href;
      fixedBtn.setAttribute("href", href);
      fixedBtn.textContent = label;
      fixedBtn.style.pointerEvents = "auto";
      fixedBtn.style.cursor = "pointer";

      if (existingBtn && existingBtn !== fixedBtn) {
        existingBtn.style.display = "none";
      }
    });
  }

  function repairFeatureButtonsFromCardLinks() {
    document.querySelectorAll(".feature__item, .archive__item").forEach((card) => {
      const titleLink = card.querySelector(".archive__item-title a, h2 a, h3 a");
      const btn = card.querySelector("a.btn, a.btn--primary");
      if (!btn || !titleLink) return;

      const href = btn.getAttribute("href") || "";
      const titleHref = titleLink.getAttribute("href") || "";
      if (!titleHref) return;

      if (!btn.dataset.originalHref || btn.dataset.originalHref.startsWith("javascript")) {
        btn.dataset.originalHref = titleHref;
      }

      if (!href || href.startsWith("javascript") || href === "#") {
        btn.setAttribute("href", btn.dataset.originalHref || titleHref);
      }
    });
  }

  function stabilizeActionButtons(currentLang) {
    const seeMoreEn = "See More";
    const seeMoreZh = "\u67e5\u770b\u66f4\u591a";
    const normalize = (v) => (v || "").replace(/\s+/g, " ").trim();
    const knownLabels = new Set([seeMoreEn, seeMoreZh, "Learn More", "\u4e86\u89e3\u66f4\u591a"]);

    document.querySelectorAll(".archive__item .btn, .feature__item .btn, a.btn--primary").forEach((a) => {
      const anchor = a;
      anchor.classList.add("notranslate");

      if (!anchor.dataset.originalHref) {
        anchor.dataset.originalHref = anchor.getAttribute("href") || "";
      }

      const originalHref = anchor.dataset.originalHref;
      if (originalHref && (!anchor.getAttribute("href") || anchor.getAttribute("href").startsWith("javascript"))) {
        anchor.setAttribute("href", originalHref);
      }

      const label = normalize(anchor.textContent);
      if (knownLabels.has(label)) {
        anchor.textContent = currentLang === ZH ? seeMoreZh : seeMoreEn;
      }
    });
  }

  function attachButtonClickFallback() {
    document.addEventListener(
      "click",
      (event) => {
        const clicked = event.target;
        if (!clicked || !clicked.closest) return;

        const card = clicked.closest(".feature__item, .archive__item");
        if (!card) return;

        const asButton = clicked.closest("a.btn, a.btn--primary");
        const text = (clicked.textContent || "").replace(/\s+/g, " ").trim();
        const isSeeMoreText = text === "See More" || text === "\u67e5\u770b\u66f4\u591a";

        if (!asButton && !isSeeMoreText) return;

        const titleLink = card.querySelector(".archive__item-title a, h2 a, h3 a");
        const cardHref = card.dataset.ctaHref || "";
        if (!titleLink && !cardHref) return;

        const targetHref =
          (asButton && (asButton.dataset.originalHref || asButton.getAttribute("href"))) ||
          (titleLink ? titleLink.getAttribute("href") : "") ||
          cardHref;

        if (!targetHref || targetHref.startsWith("javascript") || targetHref === "#") {
          event.preventDefault();
          if (cardHref) window.location.href = cardHref;
          return;
        }

        if (asButton) {
          asButton.setAttribute("href", targetHref);
        }
      },
      true
    );
  }

  function replaceNameText(el, currentLang) {
    if (!el || !el.textContent) return;
    let next = el.textContent;

    if (currentLang === ZH) {
      next = next.replace(/\bLek Man\b/g, ZH_NAME);
      BAD_ZH_NAME_VARIANTS.forEach((bad) => {
        next = next.replace(new RegExp(bad, "g"), ZH_NAME);
      });
    } else {
      next = next.replace(new RegExp(ZH_NAME, "g"), EN_NAME);
    }

    if (next !== el.textContent) el.textContent = next;
  }

  function applyTermFixes(el, currentLang) {
    if (!el || !el.textContent) return;

    const rules = currentLang === ZH ? TERM_FIXES.zh : TERM_FIXES.en;
    let next = el.textContent;
    rules.forEach((rule) => {
      next = next.replace(rule.from, rule.to);
    });

    if (next !== el.textContent) el.textContent = next;
  }

  function enforceOverrides() {
    const current = getCurrentLanguage();
    const isZh = current === ZH;
    const menuMap = isZh ? MENU_OVERRIDES.zh : MENU_OVERRIDES.en;
    const uiMap = isZh ? UI_OVERRIDES.zh : UI_OVERRIDES.en;

    document.querySelectorAll(".greedy-nav .visible-links a, .greedy-nav .hidden-links a").forEach((a) => {
      setTextIfMapped(a, menuMap);
      replaceNameText(a, current);
      applyTermFixes(a, current);
    });

    document
      .querySelectorAll(
        ".site-title, .author__name, .author__bio, .page__meta, .page__title, .page__content h1, .page__content h2, .page__content h3, .archive__item-title, .archive__item-excerpt"
      )
      .forEach((el) => {
      setTextIfMapped(el, uiMap);
      replaceNameText(el, current);
      applyTermFixes(el, current);
    });

    const heroTitle = document.querySelector(".page__hero--overlay .page__title");
    if (heroTitle) {
      const text = heroTitle.textContent ? heroTitle.textContent.trim() : "";
      if (isZh && (text === HOME_TITLE_EN || text.includes("Lek Man") || text.includes("\u83b1\u514b") || text.includes("\u66fc"))) {
        heroTitle.textContent = HOME_TITLE_ZH;
      }
      if (!isZh && text === HOME_TITLE_ZH) {
        heroTitle.textContent = HOME_TITLE_EN;
      }
    }

    preserveFeatureRowLinks();
    snapshotCardCtaLinks();
    repairFeatureButtonsFromCardLinks();
    stabilizeActionButtons(current);
    ensureFeatureButtonsExist(current);
  }

  function suppressGoogleBanner() {
    const selectors = [
      "iframe.goog-te-banner-frame",
      ".goog-te-banner-frame",
      ".goog-te-banner-frame.skiptranslate",
      "iframe[class*='VIpgJd-ZVi9od']",
      ".VIpgJd-ZVi9od-ORHb",
      "#goog-gt-tt"
    ];

    selectors.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        if (el && el.parentNode) el.parentNode.removeChild(el);
      });
    });

    document.documentElement.style.top = "0px";
    document.body.style.top = "0px";
    document.body.classList.remove("translated-ltr", "translated-rtl", "skiptranslate");
  }

  function startPostTranslateFixes() {
    suppressGoogleBanner();
    snapshotCardCtaLinks();
    enforceOverrides();

    const overrideDelays = [600, 1400, 2600, 4200];
    overrideDelays.forEach((delay) => {
      window.setTimeout(() => {
        enforceOverrides();
      }, delay);
    });

    let bannerTicks = 0;
    const bannerTimer = window.setInterval(() => {
      suppressGoogleBanner();
      bannerTicks += 1;
      if (bannerTicks >= 240) window.clearInterval(bannerTimer);
    }, 500);
  }

  window.googleTranslateElementInit = function googleTranslateElementInit() {
    if (!window.google || !window.google.translate) return;

    if (!document.getElementById("google_translate_element")) {
      const holder = document.createElement("div");
      holder.id = "google_translate_element";
      holder.setAttribute("aria-hidden", "true");
      document.body.appendChild(holder);
    }

    new window.google.translate.TranslateElement(
      {
        pageLanguage: EN,
        includedLanguages: "en,zh-CN",
        autoDisplay: false
      },
      "google_translate_element"
    );

    applySavedLanguage();
    injectPinnedLanguageButton();
    startPostTranslateFixes();
  };

  document.addEventListener("DOMContentLoaded", () => {
    injectPinnedLanguageButton();
    attachButtonClickFallback();
    startPostTranslateFixes();
  });
})();
