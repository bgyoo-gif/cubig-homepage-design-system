# Design Spec: A-cubig-learn-prompt-data-leakage.html
Generated: 2026-03-15 (v2 -- ds-section-header--underline mandatory)
Source: input/A-cubig-learn-prompt-data-leakage.html

---

## A->B Conversion Pattern Summary

1. **Color system**: A-type custom vars (`--brand-purple`, `--blue-hi`) -> B-type `--ds-color-*` tokens
2. **Typography**: A-type inline font-family/size -> B-type `.ds-h1`, `.ds-h2`, `.ds-body-m` role classes
3. **Layout**: A-type `max-width:860px` single-column article -> B-type `.ds-container` + `.ds-section` + `.ds-grid` responsive structure
4. **Components**: A-type `.callout`, `.checklist` etc. -> B-type `.ds-banner`, `.ds-bullet--check` DS components
5. **Responsive**: A-type simple 768px media query -> B-type 5-stage breakpoint (375/768/1024/1440/1920)
6. **No inline styles**: All styling via CSS variables + DS classes
7. **Content preservation**: Zero text modification
8. **Section header**: ALL section headers MUST use `ds-section-header--underline` class (mandatory rule)

---

## Document Overview
- Section count: 8 (+ nav/footer)
- Document type: Educational / Informational (Learn article)
- Tone: Technical education with compliance urgency
- Notes: Article about prompt data leakage risks in enterprise LLM usage. Requires layout variety to avoid monotonous single-column appearance.

---

## Section-by-Section Design

### Section 1: Hero
- **Source**: Breadcrumb + tag "Secure LLM Usage P2" + title + subtitle + geo-def box
- **Content type**: Text hero
- **Layout catalog**: [A] Hero -- ds-hero--text-only
- **Components**:
  - Breadcrumb: `ds-caption` style (Learn > Secure LLM Usage P2)
  - Eyebrow: `ds-hero__eyebrow` ("// Secure LLM Usage - P2")
  - Title: `ds-hero__title` -- "Prompt Data Leakage in Enterprise LLM Usage:" with emphasis on "PII, Compliance, and the Inline Protection Gap"
  - Description: `ds-hero__description`
  - Geo-def: `ds-banner--brand` below description
- **Emphasis**: "usable", "privacy-safe", "stable for production execution" in strong + brand-purple
- **Responsive**: H1 follows typography responsive rules (24px -> 40px)
- **Notes**: Maintain pulse animation on tag dot. Hero has border-bottom separator.

---

### Section 2: Introduction / Problem Statement
- **Source**: Two lead sentences about discovering data reaching external API + explanatory paragraph + callout defining "prompt data leakage"
- **Content type**: Text + callout definition
- **Layout catalog**: [D] Section Header (minimal) + [Q] Banner/callout
- **Components**:
  - Lead sentences: `ds-body-l` (font-weight 500)
  - Body paragraphs: `ds-body-m` with text-secondary color
  - Definition callout: `ds-banner--brand` with label "// What prompt data leakage means"
- **Grid**: ds-grid--1 (narrative flow)
- **Notes**: Both lead-in sentences preserved as-is (no dedup). Callout uses left-border brand accent.

---

### Section 3: Where Sensitive Data Enters LLM Workflows
- **Source**: H2 title + intro paragraph + 5-item checklist
- **Content type**: List/checklist
- **Layout catalog**: [D] Section Header + [L] Checklist -- ds-bullet--check
- **Section header**: `ds-section-header ds-section-header--underline ds-section-header--left`
  - Eyebrow: "// Attack Vectors"
  - Title: "Where sensitive data enters LLM workflows"
- **Components**:
  - Intro: `ds-body-m`
  - `ds-bullet--check`: 5 items (Document embedding, RAG pipelines, User-provided context, Automated workflows, Log and audit data)
- **Grid**: ds-grid--1
- **Emphasis**: Each item has bold title (`<strong>`) + description
- **Notes**: 5 items in single column. Check icon in success green.

---

### Section 4: Compliance Exposure by Regulation
- **Source**: H2 title + 5-row 3-column comparison table (GDPR, HIPAA, CCPA, PIPA, Financial) + follow-up paragraph
- **Content type**: Comparison/table
- **Layout catalog**: [D] Section Header + [O] Table -- ds-table--3col
- **Section header**: `ds-section-header ds-section-header--underline ds-section-header--left`
  - Eyebrow: "// Compliance Risk"
  - Title: "Compliance exposure by regulation"
- **Components**:
  - `ds-table-wrap` > `ds-table ds-table--3col`: columns = Regulation / Protected data category / LLM risk
  - Follow-up paragraph: `ds-body-m`
- **Grid**: Full width table within container
- **Responsive**: Mobile gets `overflow-x: auto` wrapper for horizontal scroll
- **Notes**: Strong visual contrast from preceding checklist section. All 5 regulation rows preserved.

---

### Section 5: What Effective PII Protection Requires
- **Source**: H2 title + intro paragraph emphasizing "inline detection and anonymization layer" + 5-item checklist
- **Content type**: List/feature set
- **Layout catalog**: [D] Section Header + [J] Icon Feature Grid -- ds-feature-grid
- **Section header**: `ds-section-header ds-section-header--underline ds-section-header--left`
  - Eyebrow: "// Protection Requirements"
  - Title: "What effective PII protection for LLM workflows requires"
  - Description (intro paragraph): inside section header
- **Components**:
  - `ds-feature-grid` (2-column): 5 items with icons
    1. Detection before transmission (icon: search/magnifier)
    2. Anonymization that preserves usability (icon: shield)
    3. Output re-mapping (icon: arrows/sync)
    4. Audit trail (icon: clipboard/log)
    5. Context preservation (icon: brain/semantic)
- **Grid**: 2-column feature grid (last item sits alone in left)
- **Notes**: Using feature grid instead of another checklist creates essential layout variety.

---

### Section 6: FAQ
- **Source**: 5 FAQ Q&A pairs
- **Content type**: FAQ
- **Layout catalog**: [P] FAQ -- ds-grid--1 + ds-card
- **Section header**: `ds-section-header ds-section-header--underline`
  - Eyebrow: "// Frequently Asked Questions"
- **Components**:
  - Section wrapper: light gray background (`ds-color-surface-light`)
  - 5x stacked `ds-card` items:
    - Question: `ds-card__title--sm` (font-weight 500)
    - Answer: `ds-card__description` (text-secondary)
- **Grid**: ds-grid--1
- **Background**: #f7f7f7 (surface-light) for visual break
- **Notes**: All 5 FAQ items preserved verbatim. JSON-LD structured data stays in `<head>`.

---

### Section 7: Bridge Links (Where to Go Next)
- **Source**: Dark section with 4 navigation links
- **Content type**: Navigation/links
- **Layout catalog**: [R] Dark Link Card
- **Components**:
  - `ds-section--dark` wrapper
  - Label: `ds-caption` ("// Where to go next") in muted white
  - 4x link cards: `ds-card--dark` with border + arrow icon
    1. Explore LLM Capsule -- inline PII protection
    2. Explore SynTitan -- secure LLM workflows
    3. Explore DTS -- dataset-level restricted data replacement
    4. Read: Why AI Fails After Deployment
- **Grid**: ds-grid--1 (stacked vertically)
- **Notes**: Dark background creates strong visual separation before CTA.

---

### Section 8: CTA Band (Where CUBIG Fits + Final CTA)
- **Source**: "Where CUBIG fits" callout + "Enterprise AI doesn't have to break here" CTA with 2 buttons
- **Content type**: CTA
- **Layout catalog**: [K] CTA Band -- ds-cta-band
- **Components**:
  - `ds-cta-band` with gradient background
  - `ds-cta-band__title`: "Enterprise AI doesn't have to break here."
  - `ds-cta-band__description`: Merged text -- CUBIG builds infrastructure removing restricted data, unusable data, unstable execution
  - `ds-cta-band__actions`:
    - `ds-btn` "Explore LLM Capsule" (primary)
    - `ds-btn` "Talk to our engineers" (secondary)
  - `ds-cta-band__footnote`: "Where CUBIG fits" positioning text (Databricks/Snowflake reference)
- **Notes**: Two original CTA areas merged into single cohesive CTA band.

---

## Component Inventory

| Component | Count | Catalog Ref |
|-----------|-------|-------------|
| ds-hero--text-only | 1 | [A] |
| ds-banner--brand | 2 | [Q] |
| ds-section-header--underline | 4 | [D] (MANDATORY) |
| ds-bullet--check | 1 (5 items) | [L] |
| ds-table--3col | 1 (5 rows) | [O] |
| ds-feature-grid | 1 (5 items) | [J] |
| ds-card (FAQ) | 5 | [P] |
| ds-card--dark | 4 | [R] |
| ds-cta-band | 1 | [K] |

## Visual Rhythm

```
[A] Hero (white bg, text-only)
    |
[D+Q] Introduction (white bg, text + banner callout)
    |
[D+L] Data Entry Paths (white bg, section-header--underline + checklist)
    |
[D+O] Compliance Table (white bg, section-header--underline + table)
    |
[D+J] Protection Requirements (white bg, section-header--underline + 2-col feature grid)
    |
[P] FAQ (gray bg #f7f7f7, section-header--underline)
    |
[R] Bridge Links (dark bg #171719)
    |
[K] CTA Band (gradient bg)
```

Layout variety confirmed:
- text -> text+banner -> checklist -> table -> 2-col grid -> stacked cards -> dark cards -> gradient CTA
- No more than 2 consecutive ds-grid--1 sections without visual differentiation
- Background alternation: white -> white -> white -> white -> gray -> dark -> gradient

## Missing Components
None. All required components are defined in design-system.md.

---

## MANDATORY RULES

1. **ds-section-header--underline**: Every section header (Sections 3, 4, 5, 6) MUST use class `ds-section-header ds-section-header--underline`. This adds `padding-bottom: var(--ds-space-lg); border-bottom: 1px solid var(--ds-color-border-default); margin-bottom: var(--ds-space-xl);`
2. For article/learn pages, section headers should also include `ds-section-header--left` for left alignment
3. Zero inline styles
4. Zero !important
5. All classes use .ds- prefix
6. All colors/sizes reference CSS variables
7. 5-stage responsive breakpoint system

---

## Implementation Instructions (for frontend-dev)

1. **Output file**: `output/A-cubig-learn-prompt-data-leakage-b-type.html`
2. **HTML**: Complete single HTML file from `<!DOCTYPE html>`
3. **CSS**: All DS variables + component CSS + responsive media queries in `<style>` tag
4. **Fonts**: Google Fonts (DM Sans, Fragment Mono, Oxanium) + system fonts
5. **SEO**: Preserve all `<head>` meta tags and JSON-LD structured data from original
6. **Nav/Footer**: Preserve original structure, apply DS tokens only
7. **Content**: Zero text modification -- preserve every word from source
8. **No inline styles**: CSS variable pass-through only exception
9. **Class naming**: All custom classes use `.ds-` prefix
10. **No hardcoded colors/sizes**: Must reference CSS variables
11. **Animations**: Keep hero fadeUp + pulse animations
12. **Responsive**: 5-stage breakpoint system (375/768/1024/1440/1920)
13. **Section headers**: MUST include `ds-section-header--underline` CSS definition and apply it to all 4 section headers
