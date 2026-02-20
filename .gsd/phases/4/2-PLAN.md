---
phase: 4
plan: 2
wave: 1
---

# Plan 4.2: Engine & Context Update

## Objective
Build the zero-lag race engine hooked up to the local state, using `requestAnimationFrame` and avoiding whole-screen re-renders during the timer execution.

## Context
- SPEC rules, Phase 4 Requirements
- data/MockDatabase.ts

## Tasks

<task type="auto">
  <name>Update RaceContext State</name>
  <files>contexts/RaceContext.tsx</files>
  <action>
    - Add `finalRawTimeMs: number | null` and `finalPenaltiesMs: number | null` to the interface.
    - Provide setters: `setRaceResult(rawMs: number, penaltiesMs: number)`.
    - Update `resetRaceState` to clear these.
  </action>
  <verify>Get-Content contexts/RaceContext.tsx</verify>
  <done>RaceContext properly handles race results.</done>
</task>

<task type="auto">
  <name>Build useRaceEngine hook</name>
  <files>hooks/useRaceEngine.ts</files>
  <action>
    - Load gates for `courseId`.
    - Provide `startTimer`, `stopTimer`.
    - Maintain a raw milliseconds reference without updating React `useState` every tick.
    - Export a `CyberTimerText` ref update method (i.e. `setTimerNativeProps` if we abstract an editable={false} `TextInput`).
    - Expose gate marking functions `markGate(index: number, state: 'passed' | 'missed')`.
  </action>
  <verify>Get-Content hooks/useRaceEngine.ts</verify>
  <done>Race engine accurately holds references and exports mutation callbacks.</done>
</task>

## Success Criteria
- [ ] Context holds final time state.
- [ ] Hook initializes 5 gates accurately matching database schema.
