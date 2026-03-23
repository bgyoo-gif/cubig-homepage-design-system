# Design Spec: cubig-learn-pillar1

Generated: 2026-03-23
Source: `input/cubig-learn-pillar1 (2).html`
Design System: `.claude/skills/design-system.md` v5.0

---

## Overall Structure Summary

- Section count: 12 sections (Hero + TOC + 7 article sections + FAQ + Bridge/Next + Where CUBIG Fits + CTA)
- Document type: **Article / Educational pillar page** (Learn > Pillar 1)
- Tone: Informational / Technical education
- Key characteristics:
  - Long-form article structure with table of contents
  - Mix of text-heavy explanation, data/KPI, card grids, checklists, and FAQ
  - Article-type layout: body max-width 860px for readability
  - Section headers use `--left` alignment (article convention)
  - Eyebrow usage: **prohibited** per user instruction
  - Breadcrumb: Learn > Pillar 1

---

## Layout Rhythm Plan

To avoid monotony (3+ consecutive white/light backgrounds), the following background rhythm is planned:

| # | Section | Background |
|---|---------|------------|
| 1 | Hero | white (text-only, no bg image) |
| 2 | TOC | surface-light |
| 3 | Why AI Fails | white |
| 4 | KPI Band (inside section 3) | ds-bg--grad-deep (on ds-kpi-band component) |
| 5 | Three Data Conditions | white |
| 6 | What AI-Ready Means | surface-light |
| 7 | Practical Stack | white |
| 8 | Production Checklist | white |
| 9 | Industry Examples | surface-light |
| 10 | Anti-patterns | white |
| 11 | FAQ | surface-light |
| 12 | Bridge / Where to go next | dark (ds-section--dark) |
| 13 | CTA Band | ds-bg--wave-teal (full-width) |

Background images used (no duplicates):
- `ds-bg--grad-deep` on KPI band
- `ds-bg--wave-teal` on CTA band
- `ds-bg--paint-lavender` on ds-banner--full (key point callout)

---

## Section-by-Section Design

---

### Section 1: Hero (text-only)

**Pattern: [A] Hero text-only -- ds-hero--text-only**

- Hero type: text-only (no background image, no screenshot)
- Breadcrumb: `Learn > Pillar 1 : Category Definition` (small text above title)
- h1 title: "AI-ready Data Infrastructure for Enterprise AI"
- Title brand keyword: `AI-ready` -- apply `ds-text--brand`
- Description: "Enterprise AI fails in production when data is Restricted, Unusable, or execution becomes Unstable. This article defines what AI-ready means as an operational condition -- not a specification -- and explains what it takes to build it."
- Callout below description (ds-banner--full ds-bg--paint-lavender):
  "True AI-ready data means it is usable, privacy-safe, and stable for production execution."
- Background: white (no bg image -- Hero text-only rule)
- Background bg-image location: none
- Alignment: left (article type)
- Responsive:
  - mobile (375px): h1 font-size 24px, single column, padding-top 100px
  - tablet (768px): h1 font-size 28px
  - sm-desktop (1024px): h1 font-size 32px
  - desktop (1440px): h1 font-size 36px, max-width 860px
- Notes: No eyebrow. Breadcrumb uses ds-caption style. padding-top 100px fixed.

---

### Section 2: Table of Contents

**Pattern: Custom inline navigation (sticky TOC bar)**

- Background: surface-light
- Layout: Horizontal link bar, centered
- Links (7 items):
  1. Why AI fails
  2. Three conditions
  3. What AI-ready means
  4. Practical stack
  5. Production checklist
  6. Anti-patterns
  7. FAQ
- Component: `ds-section--light` with horizontal flex links
- Each link styled as: ds-text-sm, ds-color-text-secondary, hover brand-purple
- Responsive:
  - mobile: horizontal scroll (overflow-x auto, nowrap)
  - tablet+: centered flex-wrap
- Notes: Sticky behavior optional (position: sticky, top: 58px). Thin border-bottom separator.

---

### Section 3: Why Enterprise AI Fails After Deployment

**Pattern: [D] Section Header (--left, --underline) + Article text + [F] KPI Band**

- Header title: "Why enterprise AI fails after deployment"
- Title brand keyword: `fails` -- apply `ds-text--brand`
- Header description: "AI systems rarely fail during training. They fail after deployment, when the real world starts changing the conditions behind the model."
- Header alignment: left
- Background: white
- Background bg-image location: none (KPI band has its own bg)

**Body content (860px max-width):**

1. **Article paragraph 1:** "AI systems rarely fail during training. They fail after deployment, when the real world starts changing the conditions behind the model. The same code, the same model version, the same architecture -- but different outcomes. Teams investigate the model first. In most cases, the model is not the problem."

2. **Article paragraph 2:** "The problem is that **PoC runs on fixed conditions**. Production runs on changing ones. Data schemas evolve upstream. Preprocessing logic gets updated. Runtime dependencies shift. Access policies change. The model doesn't know any of this -- it processes whatever arrives. When what arrives is different from what it was trained on, results degrade silently."

3. **KPI Band (ds-kpi-band ds-bg--grad-deep):**
   - 42% / "of US enterprises halted most AI initiatives -- up from 17% the prior year" / Source: S&P Global, 2025
   - 60% / "of AI projects will fail by 2026 without AI-optimized data infrastructure" / Source: Gartner, Feb 2025
   - 30% / "of GenAI projects abandoned after PoC -- before reaching production" / Source: Gartner, Jul 2024
   - Grid: 3-column (auto-adjusts to 1col on mobile)
   - Note: KPI band has 3 items, adjust grid to `repeat(3, 1fr)` instead of default 4

4. **Article paragraph 3:** "These failures share a common pattern. The issue is not model quality. It is the absence of infrastructure that makes data **ready for production AI** -- not just available, not just cleaned, but genuinely usable, privacy-safe, and stable in production."
   - Inline link: "how execution conditions change after deployment" -> /learn/release-state

- Responsive:
  - mobile (375px): KPI band stacks to 1col, text 16px
  - tablet (768px): KPI band 3col
  - sm-desktop (1024px): article body 720px
  - desktop (1440px): article body 860px

---

### Section 4: The Three Data Conditions That Block Production AI

**Pattern: [D] Section Header (--left) + [G] Card Grid 3col**

- Header title: "The three data conditions that block production AI"
- Title brand keyword: `three data conditions` -- apply `ds-text--brand`
- Header description: "Enterprise AI production failures almost always trace back to one or more of three conditions. Understanding these as a framework -- not a checklist -- is the starting point for building AI-ready data infrastructure."
- Header alignment: left
- Background: white
- Background bg-image location: none

**3-column card grid (ds-card-grid ds-card-grid--3col):**

Card 1:
- Badge: `ds-card__badge--red` "RESTRICTED"
- Title: "Restricted Data"
- Description: "Sensitive, regulated, or policy-controlled data that cannot be safely used with AI. Privacy rules, access controls, and compliance requirements block it from reaching models."
- Bullet list (ds-bullet ds-bullet--dot):
  - PII and personal identifiers
  - Regulated health and financial records
  - Confidential business data
  - Cross-border data with sovereignty constraints

Card 2:
- Badge: `ds-card__badge--teal` "UNUSABLE" (using teal for warning/caution tone)
- Title: "Unusable Data"
- Description: "Data that exists but cannot be reliably used for AI training, validation, or inference. The problem is not access -- it is fitness. Unusable data makes models silently unreliable."
- Bullet list:
  - Missing values and sparse features
  - Class imbalance and coverage gaps
  - Distribution shift between environments
  - Data that exists but cannot reach the pipeline

Card 3:
- Badge: `ds-card__badge--gray` "UNSTABLE"
- Title: "Unstable Execution"
- Description: "A production state where data and execution conditions change after deployment -- schema shifts, pipeline updates, runtime variance -- making results impossible to reproduce or diagnose."
- Bullet list:
  - Schema changes in upstream sources
  - Preprocessing logic updates
  - Runtime dependency drift
  - Input window and distribution shifts

**Callout below cards (ds-banner):**
- Label: "Key point"
- Text: "These three conditions are connected. Restricted data creates pressure to use Unusable substitutes. Unusable data masks execution instability. Unstable execution makes it impossible to know whether Restricted or Unusable conditions are responsible for failures. AI-ready data infrastructure addresses all three as a connected system."

- Responsive:
  - mobile: 1col cards
  - tablet: 2col cards
  - desktop: 3col cards

---

### Section 5: What "True AI-Ready" Means

**Pattern: [D] Section Header (--left) + [Q] Banner (definition) + [G] Card Grid 3col**

- Header title: "What true AI-ready means"
- Title brand keyword: `AI-ready` -- apply `ds-text--brand`
- Header description: none (definition box follows directly)
- Header alignment: left
- Background: surface-light
- Background bg-image location: none

**Definition box (ds-banner--full ds-bg--paint-lavender):**
- Title label: "AI-Ready Data"
- Text: "True AI-ready data is usable, privacy-safe, and stable for production execution. It requires resolving Restricted Data, Unusable Data, and Unstable Execution conditions as a connected infrastructure layer -- not as isolated data quality fixes."

**3-column card grid (ds-card-grid ds-card-grid--3col):**

Card 1:
- Badge: `ds-card__badge--brand` "CONDITION 1"
- Title: "Usable"
- Description: "Data can actually be used for training, validation, and decisions -- not just stored or partially accessible. Coverage is representative. Rare classes are present. Missing values are handled explicitly. The data that reaches the model reflects the distribution it will encounter in production."

Card 2:
- Badge: `ds-card__badge--brand` "CONDITION 2"
- Title: "Privacy-Safe"
- Description: "Sensitive information is protected while data remains useful and compliant for AI workflows. Privacy protection doesn't mean making data inaccessible -- it means making it safe to use under the relevant regulatory and policy constraints without destroying its utility for the model."

Card 3:
- Badge: `ds-card__badge--brand` "CONDITION 3"
- Title: "Stable in Production"
- Description: "AI runs stay reproducible even as environments, schemas, and pipelines change over time. Execution conditions are tracked, compared, and reproducible on demand. When behavior changes, the cause can be identified -- which layer changed, and when."
- Inline link: "Release State" -> /learn/release-state

**Article paragraph below:**
"The infrastructure that achieves these three conditions is what Cubig builds: **AI-Ready Data Infrastructure** for enterprise AI. The implementation architecture -- <span class="ds-text--product">SynTitan</span>, <span class="ds-text--product">DTS</span>, and <span class="ds-text--product">LLM Capsule</span> -- is called the **AI-Ready Data OS**. It is not a single product but an infrastructure layer composed of three distinct layers, each solving a different blocker."

- Responsive:
  - mobile: 1col
  - tablet: 2col
  - desktop: 3col

---

### Section 6: A Practical Stack for AI-Ready Data Infrastructure

**Pattern: [D] Section Header (--left) + [N] Number Steps (ds-bullet--number)**

- Header title: "A practical stack for AI-ready data infrastructure"
- Title brand keyword: `practical stack` -- apply `ds-text--brand`
- Header description: "Building AI-ready conditions in production requires three distinct layers. Each addresses a different failure mode. They can work independently, but they are designed to work together."
- Header alignment: left
- Background: white
- Background bg-image location: none

**Numbered steps (ds-bullet ds-bullet--number):**

Step 1:
- Title (bold): "Execution stability platform"
- Description: "Stabilizes production AI execution by locking execution conditions into a versioned Release State, binding every run to that state, and providing diff and re-run capabilities. Addresses Unstable Execution. Enables incident response, regression verification, and traceability across releases."
- Inline link: /proof

Step 2:
- Title (bold): "Data privacy & quality capability"
- Description: "Makes Restricted and Unusable data usable at enterprise scale. Generates privacy-safe synthetic datasets using differential privacy -- replacing restricted data, expanding coverage, fixing imbalance, and enabling training and validation without exposing sensitive records."

Step 3:
- Title (bold): "Security capability for LLM usage"
- Description: "Protects sensitive data -- including PII and regulated fields -- at the point of LLM interaction. Detects and anonymizes sensitive fields before prompts reach external APIs, and re-maps anonymized tokens in outputs for downstream use within the secure perimeter."

- Responsive:
  - mobile: full width, stacked
  - desktop: max-width 860px
- Notes: Each step item has bold title + description text. Use ds-bullet__item with strong tag for title.

---

### Section 7: Production Checklist

**Pattern: [D] Section Header (--left) + [E] Icon Section Title + [M] Checklist 2col (ds-grid--2 + ds-bullet--check)**

- Header title: "Production checklist: how to tell if your data is AI-ready"
- Title brand keyword: `AI-ready` -- apply `ds-text--brand`
- Header description: "AI-readiness is not a one-time assessment -- it is an ongoing operational condition. The following checklist reflects the minimum state that production AI systems should maintain across all three problem areas."
- Header alignment: left
- Background: white
- Background bg-image location: none

**Sub-section 1: Restricted Data**
- Icon title (ds-section-title-icon): lock icon + "Restricted Data"
- Checklist (ds-bullet ds-bullet--check), single column (4 items):
  1. Privacy and compliance boundaries are clearly defined per data asset
  2. Access controls are enforced programmatically, not just by policy
  3. Privacy-safe alternatives exist for restricted datasets needed in training or validation
  4. LLM workflows have an inline protection layer before prompts reach external APIs

**Sub-section 2: Unusable Data**
- Icon title: alert-triangle icon + "Unusable Data"
- Checklist (4 items):
  1. Training data class distribution is documented and version-controlled
  2. Per-class recall metrics are tracked -- not just aggregate accuracy
  3. Coverage gaps in rare classes are identified and addressed before training runs
  4. Distribution between training and production environments is actively compared

**Sub-section 3: Unstable Execution**
- Icon title: refresh-cw icon + "Unstable Execution"
- Checklist (5 items):
  1. Execution conditions are captured at each run -- data snapshot, schema, preprocessing, runtime
  2. Every AI run is bound to a specific, versioned execution state
  3. Diffs between releases are available for incident response
  4. Prior runs can be reproduced under their original execution conditions
  5. When behavior shifts, the root cause layer (data, schema, pipeline, runtime) can be isolated

- Responsive:
  - mobile: single column checklists
  - tablet+: single column (items are long text, 2col would be cramped)
  - desktop: max-width 860px
- Notes: Since individual items are long sentences, keep 1-column layout per sub-section (not 2col grid). Use ds-grid--1 for each checklist block.

---

### Section 8: How These Blockers Appear in Practice (Industry Examples)

**Pattern: [D] Section Header (--left) + [G] Card Grid 1col (ds-grid--1)**

- Header title: "How these blockers appear in practice"
- Title brand keyword: `blockers` -- apply `ds-text--brand`
- Header description: "The three data blockers are not abstract. They appear consistently across enterprise AI use cases. Here are examples of how each blocker manifests in real production pipelines."
- Header alignment: left
- Background: surface-light
- Background bg-image location: none

**3 stacked cards (ds-grid--1, each ds-card):**

Card 1:
- Badge: `ds-card__badge--red` "RESTRICTED DATA"
- Subtitle: "Financial Services"
- Description: "In fraud detection pipelines, transaction records often contain PII and regulated financial data. Teams cannot use this data directly for LLM-assisted analysis -- so the entire AI workflow stalls at the data access layer. <span class="ds-text--product">LLM Capsule</span> resolves this by removing sensitive fields at the prompt level before the data reaches any external model."

Card 2:
- Badge: `ds-card__badge--teal` "UNUSABLE DATA"
- Subtitle: "Manufacturing"
- Description: "In quality inspection models, rare defect classes are severely underrepresented in training data. The model appears accurate on aggregate metrics but misses edge-case defects in production. <span class="ds-text--product">DTS</span> generates privacy-safe synthetic samples for rare classes, rebalancing the dataset without exposing original records."

Card 3:
- Badge: `ds-card__badge--brand` "UNSTABLE EXECUTION"
- Subtitle: "Telecom"
- Description: "In telecom churn prediction pipelines, execution state drift often occurs when upstream customer feature schemas change between runs -- new columns added, existing types coerced -- causing the model to produce inconsistent scores without any alert. <span class="ds-text--product">SynTitan</span>'s Release State detects schema diffs at ingestion and flags the change before the next training run."

- Responsive:
  - All breakpoints: single column stacked cards
  - desktop: max-width 860px
- Notes: Cards use ds-card with badge + subtitle + description. No images needed.

---

### Section 9: Common Anti-Patterns

**Pattern: [D] Section Header (--left) + [L] Checklist variant (ds-bullet--dot)**

- Header title: "Common anti-patterns (PoC to production failure)"
- Title brand keyword: `anti-patterns` -- apply `ds-text--brand`
- Header description: "These patterns appear consistently in enterprise AI deployments that stall or degrade after moving from PoC to production."
- Header alignment: left
- Background: white
- Background bg-image location: none

**Bullet list (ds-bullet ds-bullet--dot), 6 items:**
1. Treating PoC accuracy as a reliable predictor of production performance -- PoC conditions are artificially stable
2. Relying on one-time data quality fixes instead of infrastructure that maintains quality as conditions change
3. Using production data directly for training without verifying distribution against the inference environment
4. Treating model versioning as equivalent to execution state tracking -- model registries don't capture schema, pipeline, or runtime
5. Labeling production AI failures as "model drift" without isolating which execution condition changed
6. Accepting non-reproducible AI runs as inherent to the technology -- irreproducibility is a process failure, not a model property

- Responsive:
  - All breakpoints: single column
  - desktop: max-width 860px

---

### Section 10: FAQ

**Pattern: [P] FAQ -- ds-grid--1 + ds-card**

- Header title: "Frequently Asked Questions"
- Title brand keyword: `Questions` -- apply `ds-text--brand`
- Header alignment: left
- Background: surface-light
- Background bg-image location: none

**7 FAQ items (ds-grid--1, each item as ds-card):**

1. Q: "What is AI-ready data infrastructure?"
   A: "AI-ready data infrastructure is the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. It resolves three blockers: Restricted Data (compliance and access constraints), Unusable Data (missing values, bias, coverage gaps), and Unstable Execution (schema drift, pipeline changes, runtime variance). It is not a data quality project -- it is the operational foundation that makes production AI reliable."

2. Q: "Why does AI fail after deployment?"
   A: "AI fails after deployment because execution conditions change. PoC runs on fixed, curated data under controlled conditions. Production runs on live data with evolving schemas, updated pipelines, and shifting runtime environments. The model doesn't change -- the conditions around it do. Without infrastructure to track and stabilize those conditions, production AI is essentially non-reproducible."

3. Q: "What makes data unusable for AI?"
   A: "Data is Unusable for AI when it exists but cannot be reliably used for training, validation, or inference. The most common causes are missing values (incomplete features), class imbalance (rare classes underrepresented), coverage gaps (insufficient distribution across segments), and restricted access (data exists but cannot reach the model safely). Unusable data produces models that appear to perform well in development and fail silently in production."

4. Q: "What is the difference between data drift and execution state drift?"
   A: "Data drift refers to changes in the statistical distribution of values within a stable schema -- the real world changing over time. Execution state drift refers to changes in the conditions around the model -- schema, preprocessing logic, runtime dependencies -- that alter behavior without any model update. Most production AI failures investigated as data drift are actually execution state drift."

5. Q: "How does synthetic data help with privacy and dataset usability?"
   A: "Differential privacy synthetic data generation creates statistically equivalent datasets without containing real personal information. For Restricted Data, it provides privacy-safe alternatives that can be used for training and validation without exposing sensitive records. For Unusable Data, it expands coverage of rare classes and fills distribution gaps -- providing new examples rather than replicating existing ones."

6. Q: "What does reproducible execution mean in production AI?"
   A: "Reproducible execution means the ability to re-run an AI pipeline under the same conditions as a prior run and verify that results match a known baseline. It requires locking all execution conditions -- data snapshot, schema, preprocessing logic, feature configuration, runtime dependencies -- into an immutable Release State, and binding every run to that state. This makes it possible to identify what changed when behavior shifts, and to reproduce prior behavior for incident response."

7. Q: "What is a Release State?"
   A: "A Release State is a versioned, immutable snapshot of all conditions under which an AI run executes -- including data schema, preprocessing logic, feature configuration, and runtime dependencies. Every AI run is bound to a specific Release State. This binding enables two critical capabilities: diffing between releases to trace what changed, and reproducing any prior run for incident response and regression verification."

- Responsive:
  - All breakpoints: single column stacked cards
  - desktop: max-width 860px

---

### Section 11: Where CUBIG Fits + Operational Example

**Pattern: [Q] Banner (ds-banner) x2**

- Background: white
- Background bg-image location: none

**Banner 1 (ds-banner--brand):**
- Text: "Databricks and Snowflake store your data. MLflow tracks your models. **CUBIG is the layer between them and your AI** -- making data usable, reproducible, and blocker-free in production."
- Link (separate line): "See how" -> /

**Banner 2 (ds-banner):**
- Label: "Operational Example"
- Text: "A public sector team needed to monitor policy sentiment across media and online communities in real time -- but fragmented data sources and privacy constraints made direct integration impossible. Using synthetic data-driven analytics and agent-based monitoring models built on Cubig AI-Ready Data Infrastructure, the team achieved early detection of opinion leader influence and policy sentiment shifts before they escalated to public-facing issues."
- Link (separate line): "See enterprise use cases" -> /#enterprise-use-cases

- Responsive:
  - All breakpoints: full width within container, centered text
  - desktop: max-width 860px

---

### Section 12: Bridge / Where to Go Next

**Pattern: [R] Dark Link Cards -- ds-card--dark**

- Background: dark (ds-section--dark)
- Background bg-image location: none
- Label: "Where to go next"

**6 link cards in ds-grid--2:**

1. "Read Pillar 2: Release State" / "How to make AI execution reproducible in production" -> /learn/release-state
2. "See operational evidence" / "6 production case records -- before/after/diff/reproduce" -> /proof
3. "Explore SynTitan" / "Execution stability platform -- Release State & Run Binding" -> /syntitan
4. "Explore DTS" / "Data privacy & quality -- differential privacy synthetic data" -> /dts
5. "Explore LLM Capsule" / "Security capability for LLM usage with sensitive data" -> /llm-capsule
6. "Read: Why AI Fails After Deployment" / "The production failure pattern explained" -> /learn/why-ai-fails-after-deployment

- Each card: ds-card ds-card--dark with arrow icon + title + subtitle
- Responsive:
  - mobile: 1col
  - tablet+: 2col

---

### Section 13: CTA Band

**Pattern: [K] CTA Band -- ds-cta-band (full-width, outside container)**

- Background: ds-bg--wave-teal (full-width)
- Background bg-image location: ds-cta-band (section-level, full-width)
- Title: "Enterprise AI doesn't have to break here."
- Title size: 64px (ds-text-7xl)
- Title color: white
- Description: "CUBIG builds the infrastructure layer that removes these exact problems -- restricted data, unusable data, unstable execution -- from production AI."
- Description color: rgba(255,255,255,0.85)
- Buttons:
  - Primary: "Explore SynTitan" -> /syntitan
  - Secondary: "Talk to our engineers" -> contact email
- Footnote: none

- Responsive:
  - mobile: title 40px, stacked buttons
  - tablet: title 64px, inline buttons
  - desktop: max-width inner 860px

---

## Global Notes

1. **Article layout:** All body content sections (3-11) use max-width 860px centered within ds-container. This is achieved by wrapping article body in a `<div class="ds-article-body">` with `max-width: 860px; margin: 0 auto;`.

2. **Product names:** SynTitan, DTS, LLM Capsule appear as `<span class="ds-text--product">ProductName</span>` (Oxanium font). Never apply Oxanium to headings or data numbers.

3. **Inline links:** Preserve all original links. Style with `color: var(--ds-color-brand-purple)`.

4. **No eyebrow on any section** per user instruction. Section headers have title + description only (no eyebrow span).

5. **Background image budget (no duplicates):**
   - ds-bg--grad-deep: KPI band (section 3)
   - ds-bg--paint-lavender: banner--full (section 5 definition)
   - ds-bg--wave-teal: CTA band (section 13)

6. **Font minimum contrast:** No text color lighter than neutral-400 (#9c9c9c). All body text uses text-primary or text-secondary.

7. **Section IDs:** Each section must have `id="section-N"` for anchor navigation + original IDs from source (why-fails, three-conditions, what-ai-ready-means, stack, checklist, industry-examples, antipatterns, faq).

8. **Responsive container padding:** 16px (mobile) / 32px (tablet) / 32px (sm-desktop) / 120px (desktop), max-width 1440px.
