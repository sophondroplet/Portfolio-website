param(
  [string]$UrlEn = "http://127.0.0.1:4000/resume/",
  [string]$UrlZh = "http://127.0.0.1:4000/resume-zh/",
  [string]$OutputPathEn = "assets/files/resume-latest-en.pdf",
  [string]$OutputPathZh = "assets/files/resume-latest-zh.pdf",
  [string]$BrowserPath = ""
)

$ErrorActionPreference = "Stop"

function Resolve-BrowserPath {
  param([string]$Preferred)

  if ($Preferred -and (Test-Path $Preferred)) {
    return (Resolve-Path $Preferred).Path
  }

  $candidates = @(
    "$env:ProgramFiles\Microsoft\Edge\Application\msedge.exe",
    "$env:ProgramFiles(x86)\Microsoft\Edge\Application\msedge.exe",
    "$env:ProgramFiles\Google\Chrome\Application\chrome.exe",
    "$env:ProgramFiles(x86)\Google\Chrome\Application\chrome.exe"
  )

  foreach ($path in $candidates) {
    if (Test-Path $path) { return $path }
  }

  throw "No supported browser found. Install Edge/Chrome or pass -BrowserPath."
}

$repoRoot = Resolve-Path (Join-Path $PSScriptRoot "..")
$browser = Resolve-BrowserPath -Preferred $BrowserPath

function Export-Pdf {
  param(
    [string]$SourceUrl,
    [string]$OutputPath
  )

  $targetPdf = Join-Path $repoRoot $OutputPath
  $targetDir = Split-Path $targetPdf -Parent
  $tempProfile = Join-Path $env:TEMP ("resume-export-" + [Guid]::NewGuid().ToString())

  if (!(Test-Path $targetDir)) {
    New-Item -ItemType Directory -Path $targetDir | Out-Null
  }

  if (Test-Path $targetPdf) {
    Remove-Item $targetPdf -Force -ErrorAction SilentlyContinue
  }

  New-Item -ItemType Directory -Path $tempProfile | Out-Null

  $args = @(
    "--headless",
    "--disable-gpu",
    "--no-first-run",
    "--no-default-browser-check",
    "--disable-extensions",
    "--disable-background-networking",
    "--run-all-compositor-stages-before-draw",
    "--no-pdf-header-footer",
    "--print-to-pdf-no-header",
    "--user-data-dir=$tempProfile",
    "--print-to-pdf=$targetPdf",
    $SourceUrl
  )

  Write-Host "Rendering: $SourceUrl"
  & $browser $args *> $null

  $written = $false
  for ($i = 0; $i -lt 80; $i++) {
    Start-Sleep -Milliseconds 250
    if ((Test-Path $targetPdf) -and ((Get-Item $targetPdf).Length -gt 0)) {
      $written = $true
      break
    }
  }

  Remove-Item $tempProfile -Recurse -Force -ErrorAction SilentlyContinue

  if (!$written) {
    throw "PDF export failed. Output not found at $targetPdf"
  }

  Write-Host "Saved PDF to: $targetPdf"
}

Write-Host "Using browser: $browser"
Export-Pdf -SourceUrl $UrlEn -OutputPath $OutputPathEn
Export-Pdf -SourceUrl $UrlZh -OutputPath $OutputPathZh
