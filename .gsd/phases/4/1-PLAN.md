---
phase: 4
plan: 1
wave: 1
---

# Plan 4.1: Mock Schema

## Objective
Create a strict structured dataset mirroring the physical database schema for courses and gates.

## Context
- SPEC rules
- ROADMAP.md Phase 4 Requirement

## Tasks

<task type="auto">
  <name>Create MockDatabase</name>
  <files>data/MockDatabase.ts</files>
  <action>
    - Export `Course` and `Gate` interfaces.
    - `Course` needs `course_id`, `name`, `par_time_ms`.
    - `Gate` needs `gate_id`, `course_id`, `sequence_order`, `penalty_weight_ms`.
    - Create `MOCK_COURSES` and `MOCK_GATES` constants populated with 3 courses and 5 gates per course.
  </action>
  <verify>Get-Content data/MockDatabase.ts</verify>
  <done>Mock data structured cleanly and exported.</done>
</task>

## Success Criteria
- [ ] data/MockDatabase.ts exports statically typed grids of courses and gates.
