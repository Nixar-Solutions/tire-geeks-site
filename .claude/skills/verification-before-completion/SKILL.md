---
name: verification-before-completion
description: Use when about to claim work is complete, fixed, or passing, before committing or creating PRs - requires running verification commands and confirming output before making any success claims; evidence before assertions always
---

# Verification Before Completion

Claiming work is complete without verification is dishonesty, not efficiency.

## The Iron Law

NO COMPLETION CLAIMS WITHOUT FRESH VERIFICATION EVIDENCE.

If you haven't run the verification command in this message, you cannot claim it passes.

## The Gate Function

BEFORE claiming any status:
1. IDENTIFY what command proves this claim
2. RUN the FULL command fresh
3. READ full output, check exit code, count failures
4. VERIFY output confirms the claim
5. ONLY THEN make the claim

Skip any step = lying, not verifying.

## Red Flags - STOP

- Using "should", "probably", "seems to"
- Expressing satisfaction before verification
- About to commit/push without verification
- Trusting agent success reports
- "Just this once" / "I'm tired" / "Linter passed = build passes"

## When To Apply

ALWAYS before any success claim, expression of satisfaction, commit, push, PR creation, or moving to next task. Applies to exact phrases, paraphrases, synonyms, and any wording implying success.

Run the command. Read the output. THEN claim the result. Non-negotiable.
