---
phase: 3.7
plan: 1
wave: 1
---

# Plan 3.7.1: Global System Immersion (The Synthwave Horizon)

## Objective
Move all environment logic to the global `_layout.tsx` level to ensure a consistent, high-fidelity arcade experience. Re-align the 3D grid with a vanishing horizon line, a radial void background, and a dedicated static/glare glass layer.

## Context
- SPEC rules, Phase 3.6 Aesthetic Overhaul
- app/_layout.tsx
- app/ (all screens)
- components/CyberBackground.tsx
- components/ScreenGlass.tsx (new)

## Tasks

<task type="auto">
  <name>Build ScreenGlass Overlay</name>
  <files>components/ScreenGlass.tsx</files>
  <action>
    - Create a global overlay `pointerEvents="none"` `zIndex: 9999`.
    - Extract the noise base64 logic from `CyberBackground.tsx` and move it here, setting opacity to 5%.
    - Add a diagonal `LinearGradient` (white to transparent) simulating thick CRT screen glare.
  </action>
  <verify>Get-Content components/ScreenGlass.tsx</verify>
  <done>ScreenGlass renders noise and glare across the entire viewport.</done>
</task>

<task type="auto">
  <name>Refactor CyberBackground</name>
  <files>components/CyberBackground.tsx</files>
  <action>
    - Floor Transform: Update `transform: [{ perspective: 1000 }, { rotateX: '75deg' }]`.
    - Apply a `LinearGradient` mask over the grid so lines fade to 0 opacity exactly at the vertical center (Horizon).
    - Horizon Line: Create a 2px `#00F0FF` line dead center splitting the void and floor.
    - Void Background: Fake a radial gradient from `#1A0B2E` (center) to `#000000` (edges) for the top half or entire base.
    - Clean up removed glass elements (moved to `ScreenGlass`).
  </action>
  <verify>Get-Content components/CyberBackground.tsx</verify>
  <done>Synthwave floor and horizon correctly establish deep 3D space.</done>
</task>

<task type="auto">
  <name>Layout Integration & Global Transparency</name>
  <files>app/_layout.tsx, app/*.tsx, components/PixelBlock.tsx</files>
  <action>
    - Wrap `app/_layout.tsx`'s `<Stack />` in `<CyberBackground>`, and place `<ScreenGlass />` directly above it.
    - Ensure all screen files (`lobby`, `scanner`, `hud`, `podium`) map their top-level container backgrounds to `transparent` (removing solid blacks/purples). Also remove local usage of `CyberBackground` from `hud.tsx`.
    - Darken `PixelBlock` translucent background to `rgba(10, 0, 30, 0.85)` for readability.
  </action>
  <verify>Get-Content app/_layout.tsx</verify>
  <done>Whole app routes through the massive 3D void seamlessly without flashing solid screens.</done>
</task>

## Success Criteria
- [ ] UI overlays onto the 3D grid perfectly globally.
- [ ] No local screen backgrounds block the engine.
