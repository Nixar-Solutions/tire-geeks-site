---
name: seo
description: Audit, plan, and implement SEO improvements across technical SEO, on-page optimization, structured data, Core Web Vitals, and content strategy.
---

# SEO

Improve search visibility through technical correctness, performance, and content relevance, not gimmicks.

## Principles

1. Fix technical blockers before content optimization.
2. One page should have one clear primary search intent.
3. Prefer long-term quality signals over manipulative patterns.
4. Mobile-first indexing is the default.
5. Recommendations should be page-specific and implementable.

## Technical checklist

Crawlability: robots.txt allows important pages, no unintentional noindex, shallow click depth, no redirect chains > 2, canonical tags self-consistent.

Indexability: consistent URL format, sitemaps reflect public surface, no duplicate URLs without canonical control.

Performance: LCP < 2.5s, INP < 200ms, CLS < 0.1.

Structured data: Organization/LocalBusiness on homepage, Article/BlogPosting on editorial, Product+Offer on products, BreadcrumbList on interior pages, FAQPage only when content matches.

## On-page

Title tags: 50-60 chars, keyword near front, human-legible.
Meta descriptions: 120-160 chars, honest description.
Headings: one H1, H2/H3 reflect actual hierarchy.

## Internal linking

Link from strong pages to pages you want to rank. Use descriptive anchor text. Avoid generic anchors.

## Audit output shape

[HIGH] severity: blocks rich results
[MEDIUM] severity: missing recommended fields
[LOW] severity: consistency cleanup

Each finding: File path:line, Issue description, Fix recommendation.

## Anti-Patterns

- Keyword stuffing → write for users first
- Thin near-duplicate pages → consolidate or differentiate
- Schema for content not present → match schema to reality
- Generic "improve SEO" outputs → tie every recommendation to a page or asset
