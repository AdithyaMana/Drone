---
phase: 3.6
plan: 1
wave: 1
---

# Plan 3.6.1: Aesthetic Overhaul (Modern Arcade Depth)

## Objective
Relax the strict flat DOS terminal data-ink ratio to introduce spatial depth, translucency, and texture without affecting the lag-free React Native frame rate.

## Context
- SPEC rules, Phase 3.5 Aesthetic Additions
- components/CyberBackground.tsx
- components/PixelBlock.tsx
- components/CyberTimerText.tsx

## Tasks

<task type="auto">
  <name>Add Perspective Grid & Void</name>
  <files>components/CyberBackground.tsx</files>
  <action>
    - Replace the pure black void `#0B001A` background with `LinearGradient` from `#1A0B2E` (top) to `#05000A` (bottom).
    - Anchor the grid container to the bottom half. Apply CSS/Native properties `transform: [{ perspective: 1000 }, { rotateX: '70deg' }]` to the exact grid wrapper to create a 3D floor pointing to the horizon.
    - Add a slight opacity static noise or stipple pattern overlaid above everything via another pointerEvents="none" view.
  </action>
  <verify>Get-Content components/CyberBackground.tsx</verify>
  <done>CyberBackground successfully implements a vanishing retro grid and gradient skylight.</done>
</task>

<task type="auto">
  <name>Add Translucent Frosted UI Layer</name>
  <files>components/PixelBlock.tsx</files>
  <action>
    - Instead of hollow boxes, inject a frosted/translucent inner fill across `PixelBlock` base variants using `backgroundColor: 'rgba(15, 5, 25, 0.7)'`. 
    - Keep outer borders and 4x4 sharp offset shadows.
  </action>
  <verify>Get-Content components/PixelBlock.tsx</verify>
  <done>PixelBlocks simulate frosted glass layers against background details.</done>
</task>

<task type="auto">
  <name>Timer Glow Refinement</name>
  <files>components/CyberTimerText.tsx</files>
  <action>
    - Refine `CyberTimerText` text rendering. Add a secondary text glow parameter if supported by React Native `elevation` or simple soft radius mapping to emulate massive neon light bleed off the primary timer numbers.
  </action>
  <verify>Get-Content components/CyberTimerText.tsx</verify>
  <done>Text correctly bleeds bright blurred lights under the hard shadows.</done>
</task>

## Success Criteria
- [ ] Layered depth established via translucent backgrounds.
- [ ] Vanishing synth-wave 3D floor exists visually.
- [ ] No impact on Timer execution speed.
