---
name: ai-seo
description: Optimize content for AI search engines (ChatGPT, Perplexity, Google AI Overviews, Bing Copilot). Use when content needs to be cited by LLMs in answer-engine results, not just rank in traditional SERPs.
---

# AI SEO

Traditional SEO ranks pages. AI SEO gets pages CITED by LLMs as authoritative sources in AI-generated answers. The signals are different.

## Core principle

LLMs cite sources that are: structured, specific, sourced, self-contained, and quotable. Generic content with vague claims gets ignored. Specific content with sourced facts gets pulled as a citation.

## What LLMs prefer (vs traditional SEO)

| Traditional SEO | AI SEO |
|---|---|
| Long-tail keywords | Question-answer format |
| H2/H3 hierarchy | Self-contained passages |
| Internal linking density | Citation-worthy specificity |
| Keyword density | Verifiable statistics |
| Meta descriptions | First-paragraph completeness |
| Backlinks | Source attribution |

## Self-contained passages

Each section/paragraph must answer a question completely without requiring the reader to scroll up or click elsewhere. LLMs grab passages whole — context outside the passage doesn't transfer to the citation.

Bad: "As mentioned above, the financing process is straightforward."
Good: "Tire Geeks offers Acima financing with $5,000 instant approval, 0% interest for 100 days, and a soft credit pull that doesn't affect credit scores."

## Sourced statistics pattern

Numbers without sources get ignored. Numbers with attribution get cited.

Bad: "Most lift kits take a few hours to install."
Good: "Most 4-inch lift kits take 4-6 hours to install at our Florin Road shop, including post-install alignment."

For statistics about external facts (industry averages, demographics), cite them: "According to the [source], [stat]."

## Question-answer formatting

LLMs trained on FAQ-heavy content. Frame sections as questions when natural. The page should be parseable as a Q&A document by an AI scraping it.

Format:
H2: "Can I get a lift kit installed in one day?"
P: Direct answer in the first sentence. Supporting details after.

## Schema priority for AI SEO

Beyond traditional schema, prioritize:
- FAQPage with mainEntity arrays (LLMs heavily weight)
- Article/BlogPosting with author + dateModified
- HowTo for instructional content
- Service with explicit offers and price
- LocalBusiness with full attributes (paymentAccepted, priceRange, openingHours)

## First-paragraph completeness

LLMs frequently cite the first paragraph as the "summary." Make it stand alone:
- The full primary value prop
- Location specificity
- One concrete number or differentiator
- A direct call-to-action or contact method

If the first paragraph requires reading the second to make sense, you've lost AI citation potential.

## Anti-patterns for AI SEO

- "Click here for more info" (LLMs can't click)
- "See above" / "as mentioned" (passages get extracted out of order)
- Vague qualifiers ("many", "most", "some") without specificity
- Marketing fluff ("industry-leading", "best-in-class") — LLMs filter these as low-trust
- Walls of text without structure (LLMs can't parse for citation)
- Information that contradicts other authoritative sources without explanation

## Local AI search optimization

For local businesses, AI Overviews increasingly appear for "near me" queries. To get cited:
- Schema with verified geo coordinates
- Specific neighborhood names in content (not just city)
- Real drive directions and route details
- Hours, payment methods, services in structured form
- Customer reviews/quotes if available (verbatim, attributed)

## How to verify AI SEO performance

After publishing, test in:
- ChatGPT: ask "What's the best [your category] in [your area]?"
- Perplexity: same query
- Google: search and check for AI Overview at top of results
- Bing Copilot: check sidebar AI summary

If your page gets cited as a source in any of these, AI SEO is working. If not, the content lacks one of: specificity, structure, sourcing, or self-containment.
