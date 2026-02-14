---
title: Semantic Layers: Beyond YAML
date: 2026-02-14
summary: Reflections on the evolution of semantic layers, their role in analytics, and our journey building a Python-powered, Ibis-driven solution at Auto Trader UK.
---

## Why Semantic Layers Matter

In the world of data analytics, semantic layers promise a single source of truth for business logic. They bridge the gap between raw data and meaningful insights, letting teams define metrics, dimensions, and relationships once—then reuse them across dashboards, notebooks, and applications. Without a semantic layer, every team reinvents the wheel, risking inconsistency and confusion.

But the value goes deeper: as businesses scale, the need for a highly documented, discoverable repository of metrics becomes critical. When definitions are scattered or tribal, trust in data erodes. A semantic layer, done well, becomes the living dictionary of how a business measures itself—empowering analysts, engineers, and leaders alike.

## The Landscape: YAML and Its Limits


The landscape is evolving quickly. Most modern semantic layer tools—like dbt Semantic Layer, Cube, and Transform—lean heavily on YAML for configuration. YAML is readable, but it’s also brittle: indentation errors, lack of type safety, and limited expressiveness make complex logic hard to manage. As our needs grew, so did the friction. We wanted something more robust, testable, and familiar to engineers.

One solution that stands out is [Malloy](https://malloydata.dev/). Malloy’s approach is genuinely impressive: it combines a powerful modeling language with a focus on documentation, discoverability, and developer experience. The ability to define metrics and relationships in a way that is both expressive and easy to navigate sets a high bar for the industry. Malloy’s commitment to making metrics first-class, well-documented citizens is something we deeply admire—and aspire to in our own work.

## Our Approach: Python + Ibis

Inspired by the strengths of tools like Malloy, we set out to build a semantic layer that fits our engineering culture at Auto Trader UK. Instead of YAML, we chose Python as our semantic layer language. This lets us use real code for metric definitions, version control, and testing—making our logic as robust and maintainable as any other part of our stack.

To keep things platform-agnostic, we paired Python with [Ibis](https://ibis-project.org/), a library that generates SQL for multiple backends (BigQuery, Snowflake, DuckDB, and more). Now, our business logic lives in Python modules, and Ibis handles the translation to whatever SQL dialect we need. This approach means we can document, test, and evolve our metrics in one place, while giving analysts and engineers a single, trusted repository to explore and extend.

## Lessons Learned

Building a semantic layer in Python gave us flexibility and confidence. We can refactor, test, and extend our logic like any other codebase. Ibis shields us from vendor lock-in, and our analysts get consistent, reliable metrics—no matter where the data lives. The journey wasn’t without bumps, but the payoff is a semantic layer that truly fits our engineering culture.

The biggest lesson? The value of a well-documented, highly visible repository of business metrics cannot be overstated. It’s not just about code—it’s about trust, clarity, and empowering everyone to make better decisions. We’re grateful for the inspiration from Malloy and others, and excited to keep pushing the boundaries of what a semantic layer can do for our business.
