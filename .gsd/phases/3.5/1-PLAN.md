---
phase: 3.5
plan: 1
wave: 1
---

# Plan 3.5.1: Arcade UI "Juice" & Greebling

## Objective
Enhance the visual fidelity of the application without comprising performance by introducing a global CRT background grid, HUD diagnostic data ("greebling"), and enhanced neon blooming on `PixelBlock`.

## Context
- Phase 3 layouts
- Phase 4 Logic integration (Timer must NOT be altered)

## Tasks

<task type="auto">
  <name>Create CRT/Grid Overlay</name>
  <files>components/CyberBackground.tsx</files>
  <action>
    - Ensure `expo-linear-gradient` is installed via native tools.
    - Create a wrapper component designed to act as the absolute lowest background.
    - Render a simulated dark grid using thin SVG/CSS lines or borders.
    - Render an overriding `pointerEvents="none"` absolute overlay faking CRT scanlines through small repeating gradients.
  </action>
  <verify>Get-Content components/CyberBackground.tsx</verify>
  <done>Reusable full-screen CyberBackground exists and fakes CRT scanline textures over a faint grid.</done>
</task>

<task type="auto">
  <name>Add HUD Greebling</name>
  <files>app/hud.tsx</files>
  <action>
    - Inject `CyberBackground` into the HUD screen to act as the massive dead void.
    - Around the absolute structure of `CyberTimerText`, map small 10px `CyberText` strings: `UPLINK: SECURE // BATT: 88%` (Top Left), `FREQ: 5.8GHz // LAT: 12ms` (Top Right), `MEM_ADDR: 0x8F9A2B` (Bottom corner). Use a dark muted color such as `#006666` or `#004d4d` to ensure it looks like a textured overlay and doesn't compete with the massive clock.
    - DO NOT TOUCH `useRaceEngine()` usage or timer injection.
  </action>
  <verify>Get-Content app/hud.tsx</verify>
  <done>Timer HUD is enveloped in low-contrast cyberpunk data fields while retaining full 0-lag execution speed.</done>
</task>

<task type="auto">
  <name>Enhance PixelBlock Bloom</name>
  <files>components/PixelBlock.tsx</files>
  <action>
    - Update the internal padding/styling.
    - Use absolute positioning inside the massive thick 4px border to create a 1px inner pure white stroke (or lighter shaded `neonColor`). This fakes the intense 'hot' core of a neon tube, improving the contrast against the deep shadow offset.
    - Keep `borderRadius: 0` strict.
  </action>
  <verify>Get-Content components/PixelBlock.tsx</verify>
  <done>PixelBlocks globally exhibit an inner 'hot' border while maintaining 4px chunk structures.</done>
</task>

## Success Criteria
- [ ] UI texture complexity is increased dramatically visually.
- [ ] No `useRaceEngine` side effects occur.
