# SPEC.md — Project Specification

> **Status**: `FINALIZED`

## Vision
A strictly pixel-perfect, cyberpunk arcade aesthetic telemetry application for physical drone racing. The UI will prioritize a high data-ink ratio and retro neon styling (e.g., Neon Abyss), rejecting all smooth animations, rounded corners, and gradients in favor of thick borders, hard offset shadows, and monospaced typography. Designed as a production-ready expo-router application with mocked hardware scans and backend data.

## Goals
1. **Enforce Strict Aesthetic Rules**: Implement a cyberpunk arcade UI utilizing a rigid 4px/8px grid system, 0px border radii, thick solid borders (borderWidth: 4), and hard offset shadows for a "fake" pixel glow.
2. **Establish Foundational Components**: Build robust, reusable core UI components (`PixelBlock.tsx`, `CyberText.tsx`, `KillSwitch.tsx`) that centralize the styling rules and handle custom font rendering quirks in React Native.
3. **Develop Core Screens**: Implement a functional flow through `LobbyScreen` (track selection), `ScannerScreen` (two-stage map/drone scanning using expo-camera), `TelemetryHudScreen` (live timer and checkpoint tracking), and `PodiumScreen` (final score and penalty breakdown).

## Non-Goals (Out of Scope)
- Real hardware integration (scans and backend data will be mocked).
- Smooth shadows or modern drop-shadows.
- Rounded corners (border-radius > 0).
- Gradients or complex animations.
- Any UI elements that deviate from the specified strict color palette and grid.
- Extraneous features outside the core racing telemetry flow.

## Users
Drone pilots and racing officials acting as timing/scoring operators who require high-contrast, instantly readable telemetry data in challenging physical environments.

## Constraints
- **Framework**: React Native with Expo (expo-router).
- **Typography**: Must use 'VT323' (uppercase) for headers/buttons/labels and 'Share Tech Mono' for all numbers/timers. Must explicitly handle React Native custom font clipping with precise `lineHeight`, `includeFontPadding: false`, and `textAlignVertical: 'center'`.
- **Styling**: Strict adherence to the provided color palette: Background #0B001A, Primary Text/Borders #FFFFFF, Accents #39FF14 (Success), #FF00EA (Missed/Penalties), #00F0FF (Active/Targeting). Hard offset shadows required: `shadowOffset: { width: 4, height: 4 }`, `shadowOpacity: 1`, `shadowRadius: 0`, `elevation: 0`.

## Success Criteria
- [ ] Foundational components `PixelBlock.tsx`, `CyberText.tsx`, and `KillSwitch.tsx` created and strictly styled.
- [ ] `LobbyScreen` displays a horizontal list of tracks with par times.
- [ ] `ScannerScreen` successfully transitions state from "SCAN MAP BEACON" (cyan) to "SCAN DRONE" (magenta).
- [ ] `TelemetryHudScreen` displays a massive centered monospaced timer and 5 checkpoint blocks.
- [ ] `PodiumScreen` calculates and displays Final Score based on Raw Time + Penalties.
- [ ] Entire application navigates seamlessly via `expo-router` without any visual deviation from the cyberpunk arcade specification.
