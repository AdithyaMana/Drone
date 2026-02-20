# REQUIREMENTS.md

## Format
| ID | Requirement | Source | Status |
|----|-------------|--------|--------|
| REQ-01 | Create `PixelBlock` component enforcing 4px borders, hard 4x4 offset shadows, and `neonColor` prop | SPEC Goal 2, Aesthetics | Complete |
| REQ-02 | Create `CyberText` component managing 'VT323' (uppercase) and 'Share Tech Mono' with hard text-shadows, exact `lineHeight`, `includeFontPadding: false`, and `textAlignVertical: 'center'` | SPEC Goal 2, Constraints | Complete |
| REQ-03 | Create `KillSwitch` component as a large, blocky red timer-stopping button | SPEC Goal 2 | Complete |
| REQ-04 | Implement `LobbyScreen` utilizing horizontal scroll view for retro track/par time cartridges | SPEC Goal 3 | Complete |
| REQ-05 | Implement `ScannerScreen` with `expo-camera` mocked data and two-stage targeting state machine (Cyan: MAP BEACON -> Magenta: DRONE) | SPEC Goal 3 | Complete |
| REQ-06 | Implement `TelemetryHudScreen` with deep black background, massive centered 'Share Tech Mono' timer, and 5 hollow/filling checkpoint `PixelBlock` squares | SPEC Goal 3 | Complete |
| REQ-07 | Implement `PodiumScreen` displaying raw time, penalties, and calculated final score | SPEC Goal 3 | Complete |
| REQ-08 | Enforce strict 4px/8px grid system across all layouts | SPEC Goal 1 | Complete |
| REQ-09 | Enforce strict 0px border radius on all elements | SPEC Goal 1 | Complete |
| REQ-10 | Utilize specific color palette: BG #0B001A, Text/Borders #FFFFFF, Green #39FF14, Magenta #FF00EA, Cyan #00F0FF | SPEC Goal 1, Constraints | Complete |
| REQ-11 | Configure application navigation using `expo-router` | SPEC Goal 3, Constraints | Complete |
