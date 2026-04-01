Site hosted here: https://sophondroplet.github.io/Portfolio-website/

## Resume Workflow (Markdown -> Live Preview -> PDF)

Resume source:
- `assets/current_resume/resume.md`
- `assets/current_resume/resume.zh.md`

Live preview:
1. Run `bundle exec jekyll serve --livereload`
2. Open `http://127.0.0.1:4000/resume/`
3. Edit `assets/current_resume/resume.md` and see changes live

Export PDF (Windows):
1. Keep local server running
2. Run:
   - `powershell -ExecutionPolicy Bypass -File .\scripts\export-resume-pdf.ps1`
3. Output PDFs are written to:
   - `assets/files/resume-latest-en.pdf`
   - `assets/files/resume-latest-zh.pdf`
