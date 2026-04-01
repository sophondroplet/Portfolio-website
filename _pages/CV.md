---
layout: single
title: "CV"
permalink: /cv/
author_profile: true
classes: wide
---

<div style="display:flex; gap:0.6rem; flex-wrap:wrap; margin-bottom:0.8rem;">
  <button id="download-resume-pdf" class="btn btn--primary" type="button">Download PDF</button>
</div>

<iframe
  id="resume-preview"
  src="{{ '/resume/' | relative_url }}"
  title="Resume Preview"
  style="width:100%; height:1200px; border:1px solid #d5dbe1; border-radius:8px; background:#fff;"
></iframe>

<script>
  (function () {
    var btn = document.getElementById("download-resume-pdf");
    var frame = document.getElementById("resume-preview");
    if (!btn || !frame) return;
    var lastLang = null;

    function getResumePathFromLanguage() {
      try {
        var lang = localStorage.getItem("site-language");
        if (lang === "zh-CN") return "{{ '/resume-zh/' | relative_url }}";
      } catch (e) {}
      return "{{ '/resume/' | relative_url }}";
    }

    function setResumePreviewSource() {
      var lang = "en";
      try {
        lang = localStorage.getItem("site-language") === "zh-CN" ? "zh-CN" : "en";
      } catch (e) {}

      var base = getResumePathFromLanguage();
      if (lastLang !== lang || !frame.getAttribute("src") || frame.getAttribute("src").indexOf(base) === -1) {
        frame.setAttribute("src", base);
        lastLang = lang;
      }
    }

    setResumePreviewSource();
    window.addEventListener("storage", function (event) {
      if (event.key === "site-language") {
        setResumePreviewSource();
      }
    });
    window.addEventListener("focus", setResumePreviewSource);
    document.addEventListener("visibilitychange", function () {
      if (!document.hidden) setResumePreviewSource();
    });
    window.setInterval(setResumePreviewSource, 600);

    btn.addEventListener("click", function () {
      try {
        var win = frame.contentWindow;
        if (!win) return;
        var isZh = false;
        try {
          isZh = localStorage.getItem("site-language") === "zh-CN";
        } catch (e) {}
        var fileName = isZh ? "resume-zh.pdf" : "resume-en.pdf";

        if (typeof win.exportResumePdf === "function") {
          win.exportResumePdf(fileName);
          return;
        }

        win.focus();
        win.print();
      } catch (e) {
        window.open(getResumePathFromLanguage(), "_blank");
      }
    });
  })();
</script>
