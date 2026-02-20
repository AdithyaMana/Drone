# DECISIONS.md

## Log
- **0001 (Setup)**: Utilize `expo-router` for all internal navigation to maintain modern React Native best practices while simulating a strict, non-modern pixel-perfect interface in the components themselves.
- **0002 (Architecture)**: Extracting custom text (with negative cropping padding overrides to mitigate system-font clips) and the hard neon shadow rendering into singular wrapper components (`CyberText`, `PixelBlock`) to prevent style drift.

## Phase 1 Decisions

**Date:** 2026-02-20

### Scope
- Absolutely no default Expo Router boilerplate, headers, tabs, or smooth transitions. All styles enforce 0px radius, `#0B001A` background, and multiples of 8.

### Approach
- Chose: Initialize with Blank TypeScript Expo Template (`npx create-expo-app@latest -t expo-template-blank-typescript`), manually install `expo-router`, `@expo-google-fonts/vt323`, and `@expo-google-fonts/share-tech-mono` to prevent rogue themes from leaking.
- Reason: Default Router templates have heavy styling defaults and "safe area" bugs that often compromise structural constraints like absolute padding 0 grids on a pixel level.

### Constraints
- Android font-clipping fixes applied directly to `CyberText`, controlling exact `lineHeight` metrics based on device scaling.
