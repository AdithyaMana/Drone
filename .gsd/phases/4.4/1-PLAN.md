---
phase: 4.4
plan: 1
wave: 1
---

# Plan 4.4.1: Leaderboard Integration & Game Loop Completion

## Objective
Finalize the game loop by implementing a global `/standings` screen to display race results, sorted and ranked using `MockScores` from `MockDatabase.ts`. Ensure consistent global aesthetics.

## Context
- SPEC rules
- data/MockDatabase.ts
- app/standings.tsx (new)
- app/podium.tsx
- app/_layout.tsx

## Tasks

<task type="auto">
  <name>Add MockScores to MockDatabase</name>
  <files>data/MockDatabase.ts</files>
  <action>
    - Define a `Score` interface (`score_id`, `course_id`, `player_handle`, `total_time_ms`).
    - Create a `MOCK_SCORES` array with dummy score records spanning the mock courses (`track-1`, `track-2`, `track-3`). Ensure varying `total_time_ms` for ranking logic.
  </action>
  <verify>Get-Content data/MockDatabase.ts</verify>
  <done>MockScores interface and dataset are properly exported.</done>
</task>

<task type="auto">
  <name>Create Standings Screen</name>
  <files>app/standings.tsx</files>
  <action>
    - Create `app/standings.tsx` matching the `transparent` background schema from Phase 3.7.
    - Fetch `MOCK_SCORES` and filter by `selectedCourseId` from `RaceContext`. Sort ascending by `total_time_ms`.
    - Map the top 10 scores using `PixelBlock` wrappers and `CyberText`.
    - Implement color hierarchy: Rank 1 (Yellow `#FFFF00`), Rank 2 (Cyan `#00F0FF`), Rank 3 (Magenta `#FF00EA`), others (White `#FFFFFF`).
    - Add a "BACK TO LOBBY" `KillSwitch` or `PixelBlock` that clears state and pushes to `/lobby`.
  </action>
  <verify>Get-Content app/standings.tsx</verify>
  <done>Standings screen routes properly and displays ranked hierarchical rows mapped to course ID.</done>
</task>

<task type="auto">
  <name>Wire Application Routing</name>
  <files>app/podium.tsx, app/_layout.tsx</files>
  <action>
    - Update `podium.tsx` "STANDINGS" button to push to `/standings` instead of `/lobby` without clearing the race context (we need the course ID).
    - Add `Stack.Screen name="standings"` into `app/_layout.tsx`.
  </action>
  <verify>Get-Content app/_layout.tsx; Get-Content app/podium.tsx</verify>
  <done>Podium correctly navigates to the new standings view, maintaining context state.</done>
</task>

## Success Criteria
- [ ] Rankings match accurately with formatted times globally.
- [ ] Color hierarchy works for ranks 1-3.
- [ ] End-to-end race loop completely functions from lobby to standings to lobby reset.
