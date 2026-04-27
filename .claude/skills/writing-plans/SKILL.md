---
name: writing-plans
description: Use when you have a spec or requirements for a multi-step task, before touching code.
---

# Writing Plans

Write comprehensive implementation plans assuming the engineer has zero context for the codebase. Document everything they need: which files to touch, code, testing, how to verify. Bite-sized tasks. DRY. YAGNI. TDD. Frequent commits.

Announce at start: "I'm using the writing-plans skill to create the implementation plan."

## File structure first

Before defining tasks, map out which files will be created or modified and what each is responsible for. Each file should have one clear responsibility. Files that change together should live together.

## Bite-sized task granularity

Each step is one action (2-5 minutes):
- "Write the failing test" - step
- "Run it to verify it fails" - step
- "Implement minimal code" - step
- "Run tests to verify pass" - step
- "Commit" - step

## Plan format

Each task includes:
- Exact file paths (Create/Modify/Test)
- Checkbox steps with actual code (not descriptions)
- Exact commands with expected output
- Commit message

## No placeholders

Plan failures — never write:
- TBD, TODO, "implement later", "fill in details"
- "Add appropriate error handling" without specifics
- "Similar to Task N" (repeat the code)
- Steps describing what without showing how

## Self-review

After writing the plan, check:
1. Spec coverage — every requirement maps to a task
2. Placeholder scan — no red flag patterns
3. Type consistency — names match across tasks
