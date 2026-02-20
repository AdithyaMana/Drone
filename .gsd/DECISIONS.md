# DECISIONS.md

## Log
- **0001 (Setup)**: Utilize `expo-router` for all internal navigation to maintain modern React Native best practices while simulating a strict, non-modern pixel-perfect interface in the components themselves.
- **0002 (Architecture)**: Extracting custom text (with negative cropping padding overrides to mitigate system-font clips) and the hard neon shadow rendering into singular wrapper components (`CyberText`, `PixelBlock`) to prevent style drift.
