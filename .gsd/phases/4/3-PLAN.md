---
phase: 4
plan: 3
wave: 2
---

# Plan 4.3: Wire HUD & Podium UI

## Objective
Connect the RaceEngine logic to the screens without creating UI stutter, integrating the HUD checkpoints map, the direct string mutation timer, and calculating the final time on the Podium scoreboard.

## Context
- SPEC rules, Phase 4 UI connections
- hooks/useRaceEngine.ts, contexts/RaceContext.tsx

## Tasks

<task type="auto">
  <name>Wire HUD Interface</name>
  <files>app/hud.tsx, components/CyberTimerText.tsx</files>
  <action>
    - Create `CyberTimerText` wrapper abstracting `TextInput editable={false}` for 0 lag React Native mutations. Apply 0px padding and correct font clipping fixes explicitly.
    - Inside `hud.tsx`, invoke `useRaceEngine()`.
    - Provide a massive absolute-positioned row/grid overlay over the screen that captures taps across the 5 gates, allowing user to manually trigger "pass" or "miss" events. 
    - Render the Top Row using the hooked `gates` state mapping.
    - `KillSwitch` triggers engine stop, writes elapsed numbers to `RaceContext`, then routes `/podium`.
  </action>
  <verify>Get-Content app/hud.tsx</verify>
  <done>HUD uses custom fast-tick timer ref and hooks checkpoints directly.</done>
</task>

<task type="auto">
  <name>Finalize Podium Scoreboard</name>
  <files>app/podium.tsx</files>
  <action>
    - Access `finalRawTimeMs` and `finalPenaltiesMs` directly from `RaceContext`.
    - Format them manually into strings.
    - Calculate Final = Raw + Penalties. Display all three rows accurately.
  </action>
  <verify>Get-Content app/podium.tsx</verify>
  <done>Mathematical summary executes properly on completion state.</done>
</task>

<task type="auto">
  <name>Wire Lobby Database</name>
  <files>app/lobby.tsx</files>
  <action>
    - Ensure Lobby reads from `data/MockDatabase.ts` export instead of local mocked arrays.
  </action>
  <verify>Get-Content app/lobby.tsx</verify>
  <done>Lobby drives choices from MockDatabase.</done>
</task>

## Success Criteria
- [ ] Timer string increments sequentially every frame strictly via ref.
- [ ] Screen renders correctly.
