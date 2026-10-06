New-Item -ItemType Directory -Force -Path "public/images","public/icons" | Out-Null

$files = @{
  "public/images/logo.png" = "https://www.figma.com/api/mcp/asset/534ba8ba-c7f5-412e-bc2a-50d887d6abdf/8ac6e.png"
  "public/images/hero-bg.png" = "https://www.figma.com/api/mcp/asset/27e24174-4675-443a-96a4-0797b5a4779f"
  "public/images/hero-overlay.png" = "https://www.figma.com/api/mcp/asset/86e26b00-2d9c-41c8-acfa-651d13ec069b"
  "public/images/hero-mark.svg" = "https://www.figma.com/api/mcp/asset/a566ebe2-bc6e-4559-bd4d-39a94b31f198/ebafb.svg"
  "public/images/stat-left.png" = "https://www.figma.com/api/mcp/asset/18b3c52c-af0c-417d-baf4-f5070f892366/e0852.png"
  "public/images/stat-right.png" = "https://www.figma.com/api/mcp/asset/18b3c52c-af0c-417d-baf4-f5070f892366/718cf.png"
  "public/images/stat-center.png" = "https://www.figma.com/api/mcp/asset/18b3c52c-af0c-417d-baf4-f5070f892366/531a0.png"
  "public/images/mark-dark.svg" = "https://www.figma.com/api/mcp/asset/efe5c97a-eb1d-42cd-ac02-fa5a162ca53d/a6be6.svg"
  "public/images/founder.jpg" = "https://www.figma.com/api/mcp/asset/d2210873-4820-4baf-97af-91fcf6b8fcf0/3b575.png"
  "public/images/inb-badge.svg" = "https://www.figma.com/api/mcp/asset/d2210873-4820-4baf-97af-91fcf6b8fcf0/ec906.svg"
  "public/images/inb-badge-mark.svg" = "https://www.figma.com/api/mcp/asset/d2210873-4820-4baf-97af-91fcf6b8fcf0/253cb.svg"
  "public/icons/medal.svg" = "https://www.figma.com/api/mcp/asset/d2210873-4820-4baf-97af-91fcf6b8fcf0/2c762.svg"
  "public/images/method-bg.png" = "https://www.figma.com/api/mcp/asset/e5cfdb2e-6778-464f-8b10-c8556152d69d/39244.png"
  "public/icons/step-1.svg" = "https://www.figma.com/api/mcp/asset/e5cfdb2e-6778-464f-8b10-c8556152d69d/2a2d3.svg"
  "public/icons/step-2.svg" = "https://www.figma.com/api/mcp/asset/e5cfdb2e-6778-464f-8b10-c8556152d69d/aaa2e.svg"
  "public/icons/step-3.svg" = "https://www.figma.com/api/mcp/asset/e5cfdb2e-6778-464f-8b10-c8556152d69d/bb789.svg"
  "public/icons/step-4.svg" = "https://www.figma.com/api/mcp/asset/e5cfdb2e-6778-464f-8b10-c8556152d69d/a54f8.svg"
  "public/images/marker-1.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/ecf15.png"
  "public/images/marker-2.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/c1aa3.png"
  "public/images/marker-3.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/e7ded.png"
  "public/images/marker-4.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/b9aa8.png"
  "public/images/marker-5.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/4f77d.png"
  "public/images/marker-6.png" = "https://www.figma.com/api/mcp/asset/09bd2eb7-7ef5-4619-b6f4-148f8431628f/8c3fd.png"
  "public/icons/pillar-1.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/0c38a.svg"
  "public/icons/pillar-2.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/2d0e9.svg"
  "public/icons/pillar-3.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/c5b2f.svg"
  "public/icons/pillar-4.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/99eba.svg"
  "public/icons/pillar-5.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/3328b.svg"
  "public/icons/pillar-6.svg" = "https://www.figma.com/api/mcp/asset/f14dca3c-531d-49f9-a7eb-0c6ed5b5a6b6/eaeba.svg"
  "public/images/cta-bg.png" = "https://www.figma.com/api/mcp/asset/f33626dd-0a01-4ec3-a59b-3241cea10f2e/c43c7.png"
  "public/images/chart-area.svg" = "https://www.figma.com/api/mcp/asset/07dd18f5-de2f-4a0f-8428-52f91ce62e85/e808f.svg"
  "public/images/chart-line.svg" = "https://www.figma.com/api/mcp/asset/07dd18f5-de2f-4a0f-8428-52f91ce62e85/4da0d.svg"
}

foreach ($pair in $files.GetEnumerator()) {
  Write-Host ("Downloading " + $pair.Key)
  curl.exe -L --fail --silent --show-error -o $pair.Key $pair.Value
  if (-not $?) { Write-Host ("FAILED " + $pair.Key) }
}

Write-Host "Done."
Get-ChildItem public/images, public/icons | Select-Object Name, Length
