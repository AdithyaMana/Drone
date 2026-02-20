---
phase: 3
plan: 3
wave: 2
---

# Plan 3.3: Screen Flow (HUD & Podium)

## Objective
Finalize the telemetry UI flow using the strict monospace typography logic, a massive centered timer, and the final penalty breakdown grid required for the Podium screen.

## Context
- SPEC rules regarding 'VT323' vs 'Share Tech Mono' font rendering.
- app/_layout.tsx and components structure

## Tasks

<task type="auto">
  <name>Build TelemetryHudScreen</name>
  <files>app/hud.tsx</files>
  <action>
    - Ensure background is pure black `#000000` (deviating from 0B001A for absolute contrast per spec).
    - Top row: A horizontal Flex layout consisting of 5 `PixelBlock` squares. Default them to hollow (border only), with 1 or 2 filled solid `#39FF14` (Toxic Green) to mock checkpoint progress. Match 8px grid gaps.
    - Dead center: Massive `CyberText` (type: 'number') timer mocked at `02:59.883`. Let it span the width if possible, but keep `lineHeight` locked.
    - Bottom: Render the `KillSwitch` taking up the full width, anchored to the bottom using strict pixel padding.
    - `KillSwitch` onPress routes immediately to `/podium`.
  </action>
  <verify>Get-Content app/hud.tsx</verify>
  <done>Screen matches high-contrast aesthetic and routes to Podium correctly.</done>
</task>

<task type="auto">
  <name>Build PodiumScreen</name>
  <files>app/podium.tsx</files>
  <action>
    - Layout a vertical stack of `PixelBlock` containers calculating: Raw Time, Penalties, and Final Score.
    - Emphasize the math using colors (e.g. `Raw Time: #FFFFFF`, `Missed Gates (+10s): #FF00EA`, `Final: #39FF14`).
    - Bottom row: Two horizontal `PixelBlock` buttons ("REMATCH" and "STANDINGS").
    - "REMATCH": calls `useRaceContext` methods to clear IDs, then `router.push('/scanner')`.
    - "STANDINGS": routes to `/lobby`.
  </action>
  <verify>Get-Content app/podium.tsx</verify>
  <done>Podium vertical scores stack successfully handles routing resets.</done>
</task>

<task type="auto">
  <name>Update Index Redirect</name>
  <files>app/index.tsx</files>
  <action>
    - Refactor `app/index.tsx` to act purely as an automated `Redirect` to `/lobby` using `expo-router`'s `{ Redirect }` component. 
    - The phase 1 test component dump should be completely overwritten by a 1-line redirect.
  </action>
  <verify>Get-Content app/index.tsx</verify>
  <done>App immediately loads into the Lobby without flashing the previous test screen.</done>
</task>

## Success Criteria
- [ ] Telemetry font is purely Share Tech Mono explicitly set to scale heavily.
- [ ] Podium Math blocks stack neatly on top of each other conforming strictly to a multiple of 8 padding constraint.
- [ ] The app resets seamlessly loops back to Lobby or Scanner.
