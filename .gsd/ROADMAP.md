# ROADMAP.md

> **Current Phase**: Phase 3
> **Milestone**: v1.0

## Must-Haves (from SPEC)
- [x] Strict 4px/8px grid system and zero border radius.
- [x] Custom typography handling (`VT323` and `Share Tech Mono`) with proper cropping/paddings fixes.
- [x] Retro neon component library (`PixelBlock`, `CyberText`, `KillSwitch`).
- [x] Fully functional `expo-router` navigation flow: Lobby -> Scanner -> Telemetry Hud -> Podium.
- [x] Mocked hardware scanning and backend data.

## Phases

### Phase 1: Foundation (Expo Setup & Typography)
**Status**: ✅ Complete
**Objective**: Scaffold the Expo/Expo-Router project, install fonts (`VT323`, `Share Tech Mono`), and configure global styles enforcing the strict grid and specific color palette.
**Requirements**: REQ-08, REQ-09, REQ-10, REQ-11

### Phase 2: Foundational Components
**Status**: ✅ Complete
**Objective**: Build the core reusable UI layer: `PixelBlock`, `CyberText`, and `KillSwitch`, perfectly aligned with strictly enforced retro "hard shadow" and typography clipping rules.
**Requirements**: REQ-01, REQ-02, REQ-03

### Phase 3: Screen Implementations & Navigation
**Status**: ✅ Complete
**Objective**: Develop the main user flow including the `LobbyScreen` (cartridge select), `ScannerScreen` (target switching logic), `TelemetryHudScreen` (monospace timer and checkpoint tracking), and `PodiumScreen` (score breakdown). Connect them with `expo-router`.
**Requirements**: REQ-04, REQ-05, REQ-06, REQ-07

### Phase 3.5: Arcade UI "Juice" & Greebling
**Status**: ✅ Complete
**Objective**: Enhance visual fidelity globally using CRT backgrounds, grid nodes, and internal blooms without lag limits.

### Phase 3.6: Aesthetic Overhaul
**Status**: ✅ Complete
**Objective**: Develop spatial depth, floor transforms, translucent layered rendering, and intense text glows.

### Phase 4: Mock Data & Logic Integration
**Status**: ✅ Complete
**Objective**: Implement state management and hooks to handle the flow of mock data from tracking/scanning to finish lines, powering the interactions established in Phase 3.
