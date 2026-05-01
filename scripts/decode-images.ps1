# Decodes WebP images from Google Drive MCP dump files into /public/images
# Handles two formats:
#   1. JSON dump files from MCP download (*.txt with {content, id, ...})
#   2. Standalone .b64 files (raw base64) named by output slug

$ErrorActionPreference = 'Stop'

$root      = Split-Path $PSScriptRoot -Parent
$dumpDir   = "C:\Users\Billg\.claude\projects\C--Users-Billg-OneDrive-Desktop-Monteros-Flooring\7b717dad-e6ec-49bf-b04e-0b5ac1b9429c\tool-results"
$inlineDir = Join-Path $root "scripts\inline-b64"
$outDir    = Join-Path $root "public\images"

New-Item -ItemType Directory -Force -Path $outDir | Out-Null

# Drive file ID -> SEO-friendly output filename
$mapping = @{
  "17xOu-1Qthxg16UXJLMRNigFUhE2GwiGz" = "hardwood-flooring-installation.webp"
  "1QBr94ODHE0HXenLz5b6kaqi1qtKf8bgQ" = "monteros-flooring-team-installation.webp"
  "1IDIwjUkb5xpO6bsQTA2ITvQdEhNt9wb5" = "laminate-flooring.webp"
  "1NDmSDNyPY76kNXbUTNl8HlVrHPjNCccv" = "laminate-flooring-detail.webp"
  "1_aY5wimtn5vrdIojTxJD2WsXeHCQNkJ_" = "luxury-vinyl-plank-detail.webp"
  "1pmpERH4GeN84o_uy-uOtOxtjuXON5X5A" = "luxury-vinyl-plank-flooring.webp"
  "10_h0gpMQnj7ucdxdJjdenQj-L4jzKcGc" = "laminate-vs-luxury-vinyl-comparison.webp"
  "1pFKxYJKWdCPNQCq8BEw2CDPk5ssKa2VJ" = "hardwood-floor-refinishing.webp"
  "1j5tSR0VBzzI7if5Nacoz7rdVc5MlimKf" = "hardwood-kitchen-flooring.webp"
  "1qxW7KCgerzRGR_U2ZuVyJwl6mzjEh-SH" = "commercial-flooring-installation.webp"
  "1b-USg7NhoajZlbCQCKjrF4MFqBRfAKP7" = "hardwood-staircase-installation.webp"
  "1LpDkyUAaIW1pLKQlC8HdVd0SwqwWvRZe" = "monteros-owner-portrait.webp"
  "1clOLg_4wZEh3ZJhHNlPYiQ-VNBUw7rOd" = "monteros-hardwood-flooring-logo.webp"
}

$written = 0

# Pass 1: process JSON dumps
if (Test-Path $dumpDir) {
  Get-ChildItem -Path $dumpDir -Filter "*.txt" | ForEach-Object {
    $content = Get-Content $_.FullName -Raw
    try {
      $obj = $content | ConvertFrom-Json
    } catch {
      Write-Warning "Could not parse JSON from $($_.Name)"
      return
    }
    $id = $obj.id
    if (-not $mapping.ContainsKey($id)) {
      Write-Warning "Unknown Drive id: $id (file $($_.Name))"
      return
    }
    $outName = $mapping[$id]
    $outPath = Join-Path $outDir $outName
    $bytes = [Convert]::FromBase64String($obj.content)
    [IO.File]::WriteAllBytes($outPath, $bytes)
    Write-Output ("Wrote {0,-46} {1,9:N0} bytes" -f $outName, $bytes.Length)
    $script:written++
  }
}

# Pass 2: process raw base64 files (named after Drive file ID, .b64 extension)
if (Test-Path $inlineDir) {
  Get-ChildItem -Path $inlineDir -Filter "*.b64" | ForEach-Object {
    $id = [System.IO.Path]::GetFileNameWithoutExtension($_.Name)
    if (-not $mapping.ContainsKey($id)) {
      Write-Warning "Unknown Drive id: $id (file $($_.Name))"
      return
    }
    $b64 = (Get-Content $_.FullName -Raw).Trim()
    $outName = $mapping[$id]
    $outPath = Join-Path $outDir $outName
    $bytes = [Convert]::FromBase64String($b64)
    [IO.File]::WriteAllBytes($outPath, $bytes)
    Write-Output ("Wrote {0,-46} {1,9:N0} bytes" -f $outName, $bytes.Length)
    $script:written++
  }
}

Write-Output ""
Write-Output "Total images written: $written / 13 expected"
