# Design Spec: cubig-learn-execution-state-drift

Generated: 2026-03-30
Source: input/cubig-learn-execution-state-drift.html
Output: output/html/cubig-learn-execution-state-drift-b-type.html

---

## Overall Structure Summary

- Section count: 10
- Document type: Learn article (educational / technical comparison)
- Tone: Analytical, educational -- explains a technical distinction (execution state drift vs model drift) and provides actionable diagnostic framework
- Layout mode: `<main class="ds-article">` -- 860px body width
- Header alignment: `--left` (article type)
- Special notes:
  - SynTitan mentioned as product name -> `.ds-text--product` (Oxanium)
  - All eyebrow/breadcrumb/hero-tag/faq-eyebrow removed
  - External links ("See how") -> button form

---

## Section-by-Section Design

---

### Section 1: Hero (text-only)
**Pattern: [A] ds-hero--text-only**

- Header eyebrow: none (removed -- original had breadcrumb + hero-tag)
- Header title: "Execution State Drift vs Model Drift: Why Most Teams Look in the Wrong Place"
- Title highlight keyword: "Execution State Drift" -> `ds-text--brand`
- Header description: "When production AI degrades, teams check the model first. But most failures are not model drift -- they are execution state drift. Schema changes, pipeline updates, runtime differences. Learn the distinction and how to isolate the root cause."
- Header alignment: left
- Background: white (no background image -- Hero text-only rule)
- Background bg-image location: none
- Component: ds-hero--text-only
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): h1 24px, padding 48px 16px, description 100%
  - tablet (768px): h1 28px, padding 60px 32px
  - sm-desktop (1024px): h1 32px, description max-width 720px
  - desktop (1440px): h1 36px, description max-width 860px
- Buttons: none (article hero -- no CTA buttons)
- Note: Remove geo-def callout from hero. The "True AI-ready data means..." quote is not part of this article's hero; it belongs to the homepage. Hero padding-top 100px.

---

### Section 2: Introduction -- "The Problem"
**Pattern: [D] ds-section-header--underline (left) + body text + [Q] ds-banner**

- Header eyebrow: none
- Header title: none (this is the opening body text, no explicit section heading in original)
- This section has NO section header -- it is the opening prose directly below the hero.
- Background: white
- Background bg-image location: none
- Components used:
  1. Opening bold statement: `<p class="ds-body-l" style bold>` -- "Your AI was accurate last month. This month it isn't. The model didn't change. The data did."
  2. Body paragraphs: `ds-body-m` text -- two paragraphs explaining the problem
  3. Callout banner: `ds-banner` -- "The key insight" content
     - Label: removed (eyebrow rule -- "// The key insight" label is removed)
     - Content: "Most production AI failures are blamed on model drift. Most of them are actually caused by changes in the execution environment -- **schema, pipeline, runtime** -- that no model registry or drift monitor will show you."
     - Structure: `ds-banner` with top/bottom border (no left thick border)
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): padding 48px 16px
  - tablet (768px): padding 72px 32px
  - sm-desktop (1024px): max-width 860px centered
  - desktop (1440px): max-width 860px centered

---

### Section 3: "What model drift is -- and what it misses"
**Pattern: [D] ds-section-header--underline --left + body text + [O] ds-table--2col**

- Header eyebrow: none
- Header title: "What model drift is -- and what it misses"
- Title highlight keyword: "model drift" -> `ds-text--brand`
- Header description: "Model drift is the degradation of model performance over time as the real-world distribution it was trained on diverges from the distribution it encounters in production."
- Header alignment: left
- Sub-title: none
- Background: surface-light (alternate from white above)
- Background bg-image location: none
- Components used:
  1. Section header with underline (left-aligned)
  2. Body paragraph: "But model drift monitoring has a fundamental blind spot..."
  3. Table (2-column comparison): `ds-table--2col`
     - Headers: "What model drift monitoring tracks" | "What it misses"
     - 4 rows of comparison data (preserve all original content)
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): table scrolls horizontally or stacks
  - tablet (768px): full table visible
  - sm-desktop (1024px): 860px
  - desktop (1440px): 860px

---

### Section 4: "What execution state drift is"
**Pattern: [D] ds-section-header--underline --left + [Q] ds-banner + [L] ds-bullet--check**

- Header eyebrow: none
- Header title: "What execution state drift is"
- Title highlight keyword: "execution state drift" -> `ds-text--brand`
- Header description: none (the definition box serves as the introduction)
- Header alignment: left
- Sub-title: none
- Background: white
- Background bg-image location: none
- Components used:
  1. Section header with underline (left-aligned)
  2. Definition banner: `ds-banner` -- formal definition of "Execution State Drift"
     - Title inside banner: "Execution State Drift" (bold, ds-h4)
     - Body: "A production state where the conditions under which an AI run executes have changed -- without any model update -- causing behavior to shift in ways that model versioning and drift monitoring cannot explain or trace."
  3. Transition paragraph: "Execution state drift happens when any of the following change between runs:"
  4. Checklist: `ds-bullet--check` (4 items)
     - Schema drift: Upstream data schema changes...
     - Pipeline drift: A normalization step, imputation rule...
     - Runtime drift: Library versions, environment variables...
     - Access drift: A data source that was reachable...
  5. Closing paragraph: "None of these appear in a model's version history. All of them change how the model behaves."
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): checklist single column
  - tablet (768px): checklist single column
  - sm-desktop (1024px): 860px
  - desktop (1440px): 860px

---

### Section 5: "Why this distinction matters for incident response"
**Pattern: [D] ds-section-header--underline --left + body text + [O] ds-table--3col**

- Header eyebrow: none
- Header title: "Why this distinction matters for incident response"
- Title highlight keyword: "incident response" -> `ds-text--brand`
- Header description: "When a production incident occurs, the first question is: what changed?"
- Header alignment: left
- Sub-title: none
- Background: surface-light (alternate)
- Background bg-image location: none
- Components used:
  1. Section header with underline (left-aligned)
  2. Body paragraph: "If the answer is model drift, the response is retraining. If the answer is execution state drift, retraining is the wrong response -- and may make things worse."
  3. Table (3-column): `ds-table--3col`
     - Headers: "Incident type" | "Correct response" | "Wrong response"
     - 3 rows preserving all original content
  4. Body paragraph: "The majority of production AI incidents involve execution state drift. Teams that treat every incident as model drift waste debugging cycles and delay resolution. In one documented case, root cause identification took 21 days before Release State isolation brought it to under 4 hours."
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): table horizontal scroll
  - tablet (768px): full table
  - sm-desktop (1024px): 860px
  - desktop (1440px): 860px

---

### Section 6: "How Release State isolates which layer changed"
**Pattern: [D] ds-section-header--underline --left + [Q] ds-banner + [L] ds-bullet--check + [Q] ds-banner--full (production example)**

- Header eyebrow: none
- Header title: "How Release State isolates which layer changed"
- Title highlight keyword: "Release State" -> `ds-text--brand`
- Header description: none
- Header alignment: left
- Sub-title: none
- Background: white
- Background bg-image location: ds-banner--full component only (for production example callout)
- Components used:
  1. Section header with underline (left-aligned)
  2. Definition banner: `ds-banner` -- formal definition of "Release State"
     - Title inside banner: "Release State" (bold, ds-h4)
     - Body: "A versioned, immutable snapshot of all conditions under which an AI run executes -- including data schema, preprocessing logic, feature configuration, and runtime dependencies. Diffing two Release States shows exactly which execution condition changed between runs."
  3. Transition paragraph: "When every AI run is bound to a Release State, incident response changes fundamentally:"
  4. Checklist: `ds-bullet--check` (4 items)
     - Diff the Release State of the broken run against the last known-good run
     - The diff shows exactly which execution condition changed -- schema, pipeline, runtime, or data
     - Reproduce the prior run under its locked Release State to verify baseline behavior
     - Determine whether the issue is execution drift (fixable without retraining) or data drift (requires retraining)
  5. Production example callout: `ds-banner--full ds-bg--grad-sage`
     - Title: "Production example: Telecom churn prediction"
     - Body: full telecom churn prediction paragraph (preserve all content)
     - Text color: text-primary (black) -- bright background image + white overlay
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): full width banner
  - tablet (768px): full width banner
  - sm-desktop (1024px): 860px content, banner full article width
  - desktop (1440px): 860px content, banner full article width

---

### Section 7: FAQ
**Pattern: [D] ds-section-header--underline + [P] ds-ac-card (accordion)**

- Header eyebrow: none (original had "faq-eyebrow" -- removed)
- Header title: "Frequently Asked Questions"
- Title highlight keyword: "Questions" -> `ds-text--brand`
- Header description: none
- Header alignment: center (FAQ is typically center-aligned)
- Sub-title: none
- Background: surface-light
- Background bg-image location: none
- Components used:
  1. Section header with underline (center-aligned)
  2. Accordion: `ds-ac-card` x 6 items -- MUST be accordion (not flat list)
     - Q1: What is the difference between model drift and execution state drift?
     - Q2: Can model drift monitoring detect execution state drift?
     - Q3: How do you distinguish execution state drift from model drift in production?
     - Q4: Why does schema change cause AI failures?
     - Q5: What is preprocessing drift?
     - Q6: How does SynTitan detect execution state drift?
       - Note: "SynTitan" in Q6 answer -> `<span class="ds-text--product">SynTitan</span>`
     - All answers preserve original content verbatim
- Grid: ds-grid--1
- Responsive:
  - mobile (375px): full width accordion
  - tablet (768px): full width
  - sm-desktop (1024px): 860px max
  - desktop (1440px): 860px max

---

### Section 8: "Where to go next"
**Pattern: [R] ds-card--dark**

- Header eyebrow: none (original had "// Where to go next" label -- removed)
- Header title: "Where to go next"
- Title highlight keyword: none
- Header description: none
- Header alignment: left (dark section)
- Sub-title: none
- Background: dark (ds-color-surface-dark)
- Background bg-image location: none
- Components used:
  1. Section title (white text, left-aligned) -- simple h3 in white
  2. Dark link cards: `ds-card--dark` x 4 items
     - Link 1: "See a production incident: 21 days to 4 hours root cause identification" -> /proof
     - Link 2: "Explore SynTitan -- Release State and Run Binding" -> /syntitan
       - "SynTitan" -> `<span class="ds-text--product">SynTitan</span>`
     - Link 3: "Read: Why AI Fails After Deployment" -> /learn/why-ai-fails-after-deployment
     - Link 4: "Read: What is Release State?" -> /learn/release-state
- Grid: ds-grid--1 (stacked link cards)
- Responsive:
  - mobile (375px): full width, padding 48px 16px
  - tablet (768px): padding 56px 32px
  - sm-desktop (1024px): 860px centered
  - desktop (1440px): 860px centered

---

### Section 9: "Where CUBIG fits" callout
**Pattern: [Q] ds-banner--full**

- Header eyebrow: none
- Header title: none (this is a standalone callout banner, not a full section)
- Title highlight keyword: none
- Background: bg-image applied to ds-banner--full component
- Background bg-image location: `ds-banner--full ds-bg--paint-lavender`
- Components used:
  1. Banner full-width: `ds-banner--full ds-bg--paint-lavender`
     - Content: "Databricks and Snowflake store your data. MLflow tracks your models. **CUBIG is the layer between them and your AI** -- making data usable, reproducible, and blocker-free in production."
     - Link: "See how" -> `ds-btn ds-btn--secondary` button (external link rule)
     - Text color: text-primary (black) -- bright background with white overlay
     - Text center-aligned
- Grid: N/A (single banner)
- Responsive:
  - mobile (375px): padding space-xl, text 100%
  - tablet (768px): padding space-xl
  - sm-desktop (1024px): text max-width 720px centered
  - desktop (1440px): text max-width 860px centered

---

### Section 10: CTA
**Pattern: [K] ds-cta-band**

- Header eyebrow: none (original had "// Remove this blocker from your stack" -- removed)
- Header title: "Enterprise AI doesn't have to break here."
- Title highlight keyword: "break" -> `ds-text--brand` (but CTA band uses inverse white text, so apply `ds-text--brand-light` instead)
- Header description: "CUBIG builds the infrastructure layer that removes these exact problems -- restricted data, unusable data, unstable execution -- from production AI."
- Background: bg-image (CTA rule)
- Background bg-image location: section (ds-cta-band full-width, outside container)
- Background class: `ds-bg--grad-deep` (dark tone for CTA)
- Components used:
  1. CTA band: `ds-cta-band ds-bg--grad-deep`
  2. Title: 64px (desktop), white text
  3. Description: white semi-transparent text
  4. Buttons (3):
     - Primary: "Explore SynTitan" -> /syntitan (gradient button)
       - "SynTitan" in button text -> `<span class="ds-text--product">SynTitan</span>`
     - Secondary: "Explore concept: Execution State" -> /learn/what-is-execution-state
     - Secondary: "See production cases" -> /proof
  5. Text color: white (dark background)
- Grid: N/A
- Responsive:
  - mobile (375px): title 24px, buttons stack vertically, padding 48px 16px
  - tablet (768px): title 28px, buttons wrap
  - sm-desktop (1024px): title 32px, description max-width 720px
  - desktop (1440px): title 64px, description max-width 860px

---

## Layout Flow & Background Alternation Check

| # | Section | Background | BG Image |
|---|---------|------------|----------|
| 1 | Hero | white | none |
| 2 | Introduction | white | none |
| 3 | Model drift | surface-light | none |
| 4 | Execution state drift | white | none |
| 5 | Incident response | surface-light | none |
| 6 | Release State | white | banner-full has ds-bg--grad-sage |
| 7 | FAQ | surface-light | none |
| 8 | Where to go next | dark | none |
| 9 | Where CUBIG fits | white | banner-full has ds-bg--paint-lavender |
| 10 | CTA | bg-image | ds-bg--grad-deep |

Alternation: white -> white -> light -> white -> light -> white -> light -> dark -> white -> bg-image
- Sections 1-2 are both white but Section 2 is the opening prose (no visual header), so it reads as one continuous hero+intro flow. Acceptable.
- No 3+ consecutive same-background issue.
- Background images used on 3 different components (banner-full x2, CTA x1), all different classes. No duplication.

---

## Product Name Occurrences (ds-text--product / Oxanium)

- "SynTitan" in FAQ Q6 answer
- "SynTitan" in dark link card #2
- "SynTitan" in CTA primary button
- "Release State" is NOT a product name -- it is a concept. Do NOT apply Oxanium.

---

## ds-grid--1 Consecutive Check

Sections 1-6 all use ds-grid--1 (single column article content). This is acceptable for an article-type page (`ds-article`) where the content is inherently linear prose. The visual variety is provided by alternating backgrounds (white/light), component diversity (banners, tables, checklists), and the dark section (#8). No redesign needed.

---

## Notes for Frontend Dev

1. Wrap everything in `<main class="ds-article">` for 860px unified width
2. All section headers use `ds-section-header--underline --left` except FAQ (center)
3. Tables must use `ds-table--2col` and `ds-table--3col` classes
4. FAQ must be accordion (`ds-ac-card`), not flat list
5. Dark link section (#8) is full-width dark background, content constrained to 860px
6. CTA band (#10) is full-width, outside the ds-article container
7. Banner--full (#9) is also full-width, outside the ds-article container
8. Image paths use absolute: `/cubig-homepage-design-system/reference/images/`
9. No footer needed in B-type output (handled by Framer shell)
10. No nav needed in B-type output (handled by Framer shell)
