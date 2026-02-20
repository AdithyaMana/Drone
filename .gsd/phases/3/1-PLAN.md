---
phase: 3
plan: 1
wave: 1
---

# Plan 3.1: Global State (RaceContext)

## Objective
Establish a lightweight React Context provider to handle the fast-paced global state needed between physical hardware scans and HUD rendering, specifically tracking the active track and scanned drone identifiers.

## Context
- .gsd/SPEC.md
- app/_layout.tsx

## Tasks

<task type="auto">
  <name>Create RaceContext</name>
  <files>contexts/RaceContext.tsx</files>
  <action>
    - Ensure a `contexts/` directory exists or is created.
    - Implement a `RaceContext` with `selectedCourseId: string | null` and `scannedDroneId: string | null`.
    - Provide a robust provider (`RaceProvider`) and custom hook (`useRaceContext`) to access setters/getters safely.
    - Do NOT add complex reducers or unnecessary boilerplate; keep it minimal and high-performance.
  </action>
  <verify>Get-Content contexts/RaceContext.tsx</verify>
  <done>Context initializes successfully with null defaults and exports provider/hook.</done>
</task>

<task type="auto">
  <name>Inject RaceProvider</name>
  <files>app/_layout.tsx</files>
  <action>
    - Wrap the existing `expo-router` Stack inside the new `RaceProvider`.
    - Ensure font loading logic (null return) remains outside/around the provider so fonts load before rendering any context consumers.
  </action>
  <verify>Select-String -Path app/_layout.tsx -Pattern "RaceProvider"</verify>
  <done>Stack is wrapped in RaceProvider and no layout styling is compromised.</done>
</task>

## Success Criteria
- [ ] Global state structure is strictly defined and typed.
- [ ] The app layout maintains its 0px padding void wrap but successfully injects context.
