---
name: marketing-context-loader
description: Load and apply the marketing-context.md file. Every marketing skill must read this before producing output.
---

# Marketing Context Loader

The marketing-context.md file at the project root is the single source of truth for all marketing decisions about Tire Geeks.

Before running any marketing skill (copywriting, brand-voice, content-strategy, ad-creative, seo, ai-seo, customer-research, competitor-alternatives), read marketing-context.md and apply:

- Section 2 — geographic focus and target audience for any local work
- Section 3 — ICP A vs ICP B distinction (financing-led vs lifestyle-led)
- Section 5 — competitive landscape for any positioning work
- Section 6 — differentiators for any value-prop work
- Section 9 — customer language verbatim phrases
- Section 10 — VOICE PROFILE block (capitalization, cadence, hard bans, signature phrases)
- Section 11 — style guide (formatting, terminology)
- Section 12 — proof points (real numbers, testimonials)
- Section 13 — keyword clusters and internal linking map

## Skill routing

Pair marketing-context with the right downstream skill:

- **brand-voice** — voice/cadence enforcement (run on every draft)
- **copywriting** — landing page, hero, feature copy
- **seo** — traditional SERP optimization (technical SEO, on-page, meta)
- **ai-seo** — answer-engine optimization (ChatGPT, Perplexity, Google AI Overviews citations); use when content needs to be cited by LLMs, not just rank
- **customer-research** — verbatim customer language for hero/section copy; use when ICP voice authenticity matters
- **competitor-alternatives** — implicit positioning against chains (Discount Tire, Big O, Les Schwab, Walmart) without naming them
- **writing-plans** — multi-step content briefs before drafting

Do not re-derive these answers. Update marketing-context.md when positioning shifts; do not duplicate context in skill prompts.
