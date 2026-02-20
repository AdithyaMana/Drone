---
phase: 3
plan: 2
wave: 2
---

# Plan 3.2: Screen Flow (Lobby & Scanner)

## Objective
Implement the first two stages of the strict retro UI flow using only the approved styling rules.

## Context
- Phase 2 Custom Components (CyberText, PixelBlock, KillSwitch)
- contexts/RaceContext.tsx

## Tasks

<task type="auto">
  <name>Build LobbyScreen</name>
  <files>app/lobby.tsx</files>
  <action>
    - Delete `app/index.tsx` as `/lobby` is our new entry feature flow. Or replace it with a redirect.
    - Render a `ScrollView` `horizontal={true}` filling the screen.
    - Map 3 distinct mocked courses: each is a chunky `PixelBlock` card acting as a retro cartridge (`padding: 32`, `borderWidth: 4`).
    - Inside cards: render `CyberText` Title and Par Time. 
    - Wrap cards in `TouchableOpacity` -> OnPress, call `setSelectedCourseId()` via `useRaceContext`, then navigate `/scanner`.
  </action>
  <verify>Get-Content app/lobby.tsx</verify>
  <done>User can horizontally scroll courses and tap to route to the Scanner.</done>
</task>

<task type="auto">
  <name>Build ScannerScreen</name>
  <files>app/scanner.tsx</files>
  <action>
    - Create a two-stage local state machine: `stage: 1 | 2` (1 = map, 2 = drone).
    - Hardcoded colors based on stage: Cyan for Stage 1, Magenta for Stage 2.
    - Scaffold a placeholder View for where `expo-camera` would go, maintaining the #0B001A background for now.
    - Implement a massive absolute positioned transparent button (the "developer bypass") that overlays the entire view.
    - On bypass tap: if Stage 1, advance to Stage 2. If Stage 2, set `scannedDroneId` in context and route to `/hud`.
    - Display massive neon `CyberText` targeting instructions ("SCAN MAP BEACON" / "SCAN DRONE") centered over the mock camera.
  </action>
  <verify>Get-Content app/scanner.tsx</verify>
  <done>Scanner state changes color on tap, then routes to HUD.</done>
</task>

## Success Criteria
- [ ] Lobby horizontal flat-list maps exactly to multiple 8px multipliers.
- [ ] Scanner strictly switches between the Cyan targeting constraints and Magenta targeting constraints.
