Write-Host "Patching portfolio structure..."

# Safety check
if (!(Test-Path "package.json")) {
  Write-Error "package.json not found. Run this inside the project folder."
  exit
}

# Folders
$folders = @(
  "src/components",
  "src/pages",
  "src/data",
  "src/styles",
  "src/assets"
)

foreach ($folder in $folders) {
  if (!(Test-Path $folder)) {
    New-Item -ItemType Directory -Path $folder | Out-Null
    Write-Host "Created folder: $folder"
  }
}

# Files
$files = @(
  "src/components/Navbar.tsx",
  "src/components/Footer.tsx",
  "src/components/ProjectCard.tsx",
  "src/components/SkillCard.tsx",
  "src/components/TimelineItem.tsx",

  "src/pages/Home.tsx",
  "src/pages/Education.tsx",
  "src/pages/Skills.tsx",
  "src/pages/Projects.tsx",
  "src/pages/Experience.tsx",
  "src/pages/Contact.tsx",

  "src/data/projects.ts",
  "src/data/skills.ts",
  "src/data/experience.ts",

  "src/styles/globals.css"
)

foreach ($file in $files) {
  if (!(Test-Path $file)) {
    New-Item -ItemType File -Path $file | Out-Null
    Write-Host "Created file: $file"
  }
}

Write-Host "Portfolio structure ready. No rebuild performed."