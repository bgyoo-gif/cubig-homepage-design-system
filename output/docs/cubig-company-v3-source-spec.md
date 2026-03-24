# Design Spec: cubig-company-v3-source

Generated: 2026-03-24
Source: `input/cubig-company-v3-source.html`
Design System: `.claude/skills/design-system.md` v5.0

---

## Overview

- Section count: 12
- Document type: Company profile / Corporate overview (persuasion + trust building)
- Tone: Professional, evidence-based, infrastructure-focused
- Special notes: Company page -- requires visual diversity to avoid monotony across many text-heavy sections. Partner/Cert grids mandatory. Eyebrow fully prohibited per user rule.

---

## Background Image Allocation Plan

Each `ds-bg--*` used only once. No section-level background images except where explicitly noted.

| Component | ds-bg class |
|-----------|-------------|
| KPI Band (Section 5) | ds-bg--grad-deep |
| CTA Band (Section 12) | ds-bg--grad-navy |
| Banner--full (Section 4 bridge) | ds-bg--wave-teal |
| Banner--full (Section 7 overlap note) | ds-bg--paint-lavender |

---

## Section-by-Section Design

---

### Section 1: Hero

- **Pattern**: [A] Hero text-only (`ds-hero--text-only`)
- **Section class**: `ds-section ds-section--hero`
- **Background**: white (no background image -- Hero text-only rule)
- **Background bg-image location**: none

**Content mapping:**
- h1 title: "Cubig builds enterprise AI data infrastructure"
  - Brand keyword highlight: `<span class="ds-text--brand">AI data infrastructure</span>`
- Description: "The layer that makes restricted, unusable, and unstable enterprise data production-ready for AI."
- Sub-line (ds-body-s, text-secondary): "Implemented as the AI-Ready Data OS: SynTitan . DTS . LLM Capsule" -- product names use `<span class="ds-text--product">SynTitan</span>` etc.
- Buttons:
  - Primary: "Talk to our engineers" -> /contact
  - Secondary: "Explore SynTitan" -> /syntitan
  - Secondary: "See production cases" -> /proof
- Below buttons: ds-banner (simple, not --full) with definition text: "True AI-ready data is usable, privacy-safe, and stable for production execution."

**Responsive:**
- mobile (375px): 1col, stacked buttons, h1 24px
- tablet (768px): 1col, inline buttons, h1 28px
- sm-desktop (1024px): h1 32px, description max-width 720px
- desktop (1440px): h1 36px, description max-width 860px, container padding 120px

---

### Section 2: Category Definition

- **Pattern**: [Q] Banner / Callout (`ds-banner`) + body text in ds-grid--1
- **Section class**: `ds-section`
- **Background**: white
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none (eyebrow prohibited)
  - title: "What is AI-ready data <span class='ds-text--brand'>infrastructure</span>?"
  - Brand keyword: "infrastructure"
  - description: "AI-ready data infrastructure is the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution."
  - Alignment: center

**Content mapping:**
- Primary definition paragraph (ds-body-l, font-weight medium): "AI-ready data infrastructure is the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution."
- Two supporting paragraphs (ds-body-m, text-secondary): full text from original
- Link row: "Read: AI-Ready Data Infrastructure" (ds-btn--ghost) + "Operational Evidence" (ds-btn--ghost)

**Responsive:**
- mobile: 1col, full-width text
- tablet+: centered text block, max-width 860px

---

### Section 3: Mission

- **Pattern**: [G] Card Grid 2col (`ds-card-grid ds-card-grid--2col`)
- **Section class**: `ds-section ds-section--light`
- **Background**: surface-light
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "Why we <span class='ds-text--brand'>exist</span>."
  - Brand keyword: "exist"
  - description: none
  - Alignment: center

**Content mapping:**
- 2 cards in `ds-card-grid--2col`:
  - Card 1 (Mission):
    - `ds-card__badge ds-card__badge--brand`: "MISSION"
    - ds-card__description (ds-body-l, medium weight): "Enterprise AI adoption stalls because data is restricted, unusable, or execution becomes unstable in production."
  - Card 2 (What We Believe):
    - `ds-card__badge ds-card__badge--gray`: "WHAT WE BELIEVE"
    - ds-card__description (ds-body-s, text-secondary): full "What we believe" paragraph from original

**Responsive:**
- mobile: 1col stacked
- tablet+: 2col

---

### Section 4: What We Do (Three Problems + Solution)

- **Pattern**: [G] Card Grid 3col (`ds-card-grid ds-card-grid--3col`) + [Q] Banner--full
- **Section class**: `ds-section`
- **Background**: white
- **Background bg-image location**: ds-banner--full component only (ds-bg--wave-teal)
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "Make data usable, privacy-safe, and <span class='ds-text--brand'>stable for production AI</span>."
  - Brand keyword: "stable for production AI"
  - description: none
  - Alignment: center

**Content mapping:**
- 3 cards in `ds-card-grid--3col`:
  - Card 1 (Restricted Data):
    - `ds-card__badge ds-card__badge--red`: "RESTRICTED DATA"
    - ds-card__description: "Sensitive or regulated data can't be used safely for AI. Compliance requirements block training, validation, and inference."
    - Footer text (ds-body-s, brand-purple): "LLM Capsule + DTS"
  - Card 2 (Unusable Data):
    - `ds-card__badge ds-card__badge--teal`: "UNUSABLE DATA"
    - ds-card__description: original text
    - Footer: "DTS + SynTitan"
  - Card 3 (Unstable Execution):
    - `ds-card__badge ds-card__badge--gray`: "UNSTABLE EXECUTION"
    - ds-card__description: original text
    - Footer: "SynTitan"

- Below cards: `ds-banner--full ds-bg--wave-teal`
  - Text: "We make enterprise data usable -- by removing restrictions and expanding coverage. Privacy-safe -- by protecting sensitive fields and generating synthetic datasets. Stable in production -- by defining execution conditions and keeping results reproducible."
  - Text color: text-primary (light bg overlay)

**Responsive:**
- mobile: 1col cards
- tablet: 2col cards
- desktop: 3col cards

---

### Section 5: Company Stats (KPI Band)

- **Pattern**: [F] KPI Band (`ds-kpi-band`)
- **Section class**: `ds-section ds-section--light`
- **Background**: surface-light (section), bg image on KPI band component
- **Background bg-image location**: ds-kpi-band component (ds-bg--grad-deep)
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "Where we are <span class='ds-text--brand'>today</span>."
  - Brand keyword: "today"
  - description: none
  - Alignment: center

**Content mapping:**
- `ds-kpi-band ds-bg--grad-deep` with 4 items (overlay 0.35):
  1. "2021" / "Founded" / "Seongnam-si, Korea . Belfast, UK"
  2. "3x" / "Problems Solved" / "Restricted . Unusable . Unstable"
  3. "AWS" / "Marketplace Partner" / "LLM Capsule available on AWS Marketplace"
  4. "2+" / "Global Entities" / "CUBIG Corp (Korea) . CUBIG Ltd (UK)"
- Text color: white (dark bg)
- KPI numbers use ds-kpi-band__number (DM Sans, not Oxanium)

**Responsive:**
- mobile: 1col
- tablet: 2col
- desktop: 4col

---

### Section 6: Founding Story

- **Pattern**: [N] Number Steps (`ds-bullet--number`) for timeline feel, or plain text with year highlight
- **Section class**: `ds-section`
- **Background**: white
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "How we got <span class='ds-text--brand'>here</span>."
  - Brand keyword: "here"
  - description: none
  - Alignment: center

**Content mapping:**
- Year marker: large "2021" displayed as decorative text (ds-data style, text-tertiary, large size for visual interest)
- 3 paragraphs from original story content, each as ds-bullet--dot list items to break up long prose:
  1. Founding context paragraph
  2. Existing tools gap paragraph
  3. What we built paragraph
- Each paragraph preserved in full, converted to ds-body-m with text-secondary color

**Responsive:**
- mobile: 1col, year 20px
- tablet+: year displayed prominently, text below

---

### Section 7: Team

- **Pattern**: [G] Card Grid 3col (`ds-card-grid ds-card-grid--3col`)
- **Section class**: `ds-section ds-section--light`
- **Background**: surface-light
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "The people <span class='ds-text--brand'>building</span> it."
  - Brand keyword: "building"
  - description: "Our team comes from enterprise AI, data engineering, and privacy technology. We've built and broken AI systems at scale -- which is why we know exactly where production AI fails."
  - Alignment: center

**Content mapping:**
- 3 cards in `ds-card-grid--3col`:
  - Card 1: CUBIG Team
    - ds-card__badge ds-card__badge--brand: "ENGINEERING"
    - ds-card__title--sm: "CUBIG Team"
    - ds-card__subtitle: "AI Infrastructure Engineers"
    - ds-card__description: bio text from original
  - Card 2: Research & Privacy
    - ds-card__badge ds-card__badge--teal: "RESEARCH"
    - ds-card__title--sm: "Research & Privacy"
    - ds-card__subtitle: "Differential Privacy Specialists"
    - ds-card__description: bio text from original
  - Card 3: Enterprise Engineering
    - ds-card__badge ds-card__badge--gray: "PLATFORM"
    - ds-card__title--sm: "Enterprise Engineering"
    - ds-card__subtitle: "Platform & Integration"
    - ds-card__description: bio text from original

**Responsive:**
- mobile: 1col
- tablet: 2col (last card full-width)
- desktop: 3col

---

### Section 8: Platform & Capabilities

- **Pattern**: [G] Card Grid 3col with gradient cards (`ds-card-grid--3col` + `ds-card--gradient`)
- **Section class**: `ds-section`
- **Background**: white
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "The structure that makes data <span class='ds-text--brand'>AI-ready</span>."
  - Brand keyword: "AI-ready"
  - description: "SynTitan is the core execution platform. DTS and LLM Capsule provide specialized capabilities when you need privacy-safe data expansion and secure AI usage."
  - Alignment: center

**Content mapping:**
- 3 gradient cards in `ds-card-grid--3col`:
  - Card 1 (SynTitan):
    - `ds-card--gradient ds-card--gradient-blue`
    - Inner: badge "PLATFORM" (brand), title `<span class="ds-text--product">SynTitan</span>`, description, feature tags below divider: "Release State . Run Binding . Reproducible Execution"
    - Ghost button: "Explore SynTitan ->"
  - Card 2 (DTS):
    - `ds-card--gradient ds-card--gradient-green`
    - Inner: badge "CAPABILITY" (teal), title `<span class="ds-text--product">DTS</span>`, description, feature tags
    - Ghost button: "Explore DTS ->"
  - Card 3 (LLM Capsule):
    - `ds-card--gradient ds-card--gradient-purple`
    - Inner: badge "CAPABILITY" (brand), title `<span class="ds-text--product">LLM Capsule</span>`, description, feature tags
    - Ghost button: "Explore LLM Capsule ->"

- Below cards: `ds-banner--full ds-bg--paint-lavender`
  - Line 1: "SynTitan performs data quality refinement as part of execution stability."
  - Line 2: "SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS also operates independently."
  - Text color: text-primary (light overlay)

- Button row below banner:
  - Primary: "Try SynTitan" -> https://syntitan.ai
  - Secondary: "Explore DTS" -> /dts

**Responsive:**
- mobile: 1col
- tablet: 2col (third card full-width)
- desktop: 3col

---

### Section 9: Partners (Partner Grid)

- **Pattern**: [I] Partner Logo Grid (`ds-partner-grid`) -- marquee animation
- **Section class**: `ds-section ds-section--light`
- **Background**: surface-light
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "Trusted by <span class='ds-text--brand'>enterprise and government</span>."
  - Brand keyword: "enterprise and government"
  - description: "From global cloud infrastructure and research partners to major Korean financial institutions and national defense -- CUBIG operates where the data stakes are highest."
  - Alignment: center

**Content mapping:**
- `ds-partner-grid` with marquee animation (full viewport width)
- Use DS official partner list ONLY (11 partners):
  1. partner-gartner.png / Gartner
  2. partner-navercloud.avif / Naver Cloud
  3. partner-sktelecom.avif / SK Telecom
  4. partner-kyobo.avif / Kyobo
  5. partner-korea army.avif / ROK Army
  6. partner-korea-airforce.avif / ROK Air Force
  7. partner-eumc.avif / EUMC
  8. partner-deutsche-telekom.avif / Deutsche Telekom
  9. partner-claroty.png / Claroty
  10. partner-korea-heritage-service.jpg / Korea Heritage Service
  11. partner-ministry-of-data-and-statistics.png / Ministry of Data and Statistics
- 2-set duplication for seamless loop
- JS: cloneNode for seamless marquee

**Important**: Ignore A-type partner categorization (Technology & Cloud / Finance & Enterprise / Defense & Public Sector). Use flat marquee with all 11 partners.

**Responsive:**
- mobile: logo 100px, gap reduced, animation 20s
- tablet+: logo 120px, gap 64px, animation 30s

---

### Section 10: Certifications & Awards (Cert Grid)

- **Pattern**: [I-2] Cert Grid (`ds-cert-grid`) -- marquee animation
- **Section class**: `ds-section`
- **Background**: white
- **Background bg-image location**: none
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "Certifications & <span class='ds-text--brand'>Recognition</span>"
  - Brand keyword: "Recognition"
  - description: none
  - Alignment: center

**Content mapping:**
- `ds-cert-grid` with marquee animation (full viewport width)
- Use DS official cert/awards list ONLY (11 items):
  1. Certifications / Information Security Fast Track / KISA / 2024 / cert-kisa.png
  2. Certifications / GS Certification / TTA / 2025 / cert-gs.png
  3. Certifications / ISO/IEC 27001 (ISMS) / ISO / 2026 / cert-iso.png
  4. Certifications / ISO/IEC 42001 (AIMS) / ISO / 2026 / cert-iso.png
  5. Awards / Information Security Innovation Award / Ministry of Science & ICT / 2024 / awards-ministry-of-science-and-ict.jpg
  6. Awards / Startup World Cup -- Finalist / Startup World Cup / 2025 / cert-startupworldcup.png
  7. Awards / Next Rise -- Global Innovator / Next Rise / 2025 / awards-NextRise.png
  8. Awards / T Challenge 2026 -- Finalist / Deutsche Telekom / 2026 / partner-deutsche-telekom.avif
  9. Awards / AI EXPO KOREA -- AI Medical Innovation Award / AI EXPO KOREA / 2025 / awards-koreaia.png
  10. Recognition / Emerging AI+X Top 100 / -- / 2026 / (no logo)
  11. Recognition / Representative Vendor, Hyper-Synthetic Data / Gartner / 2025 / cert-gartner.svg.png
- Each card: wreath (cert-left.png / cert-right.png), group label, cert name, org, year, logo
- 2-set duplication for seamless loop
- JS: cloneNode for seamless marquee

**Responsive:**
- mobile: card width 170px, animation 25s
- tablet+: card width 200px, animation 40s

---

### Section 11: Values + Contact (Combined)

- **Pattern**: [G] Card Grid 3col (values) + [G] Card Grid 2col (contact)
- **Section class**: `ds-section ds-section--light`
- **Background**: surface-light
- **Background bg-image location**: none

**Sub-section 11a: Values**
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "How we <span class='ds-text--brand'>work</span>."
  - Brand keyword: "work"
  - description: none
  - Alignment: center

- 3 cards in `ds-card-grid--3col`:
  - Card 1: badge (ds-badge--neutral) "01", title "Infrastructure, not features", description from original
  - Card 2: badge (ds-badge--neutral) "02", title "Production is the only test that counts", description from original
  - Card 3: badge (ds-badge--neutral) "03", title "Evidence over assertion", description from original

**Sub-section 11b: Contact**
- Separator: `ds-section-header ds-section-header--underline` with margin-top 64px
  - eyebrow: none
  - title: "Get in <span class='ds-text--brand'>touch</span>."
  - Brand keyword: "touch"
  - Alignment: center

- 4 cards in `ds-card-grid--2col`:
  - Card 1: "Enterprise & Architecture" / "Talk to an architect" / description / email link
  - Card 2: "General Inquiries" / "Press, partnerships, research" / description / email link
  - Card 3: "Korea Headquarters" / "CUBIG Corp" / address + business reg
  - Card 4: "United Kingdom" / "CUBIG Ltd" / address + company number

**Responsive:**
- Values: mobile 1col, tablet 2col, desktop 3col
- Contact: mobile 1col, tablet+ 2col

---

### Section 12: The Data Stack Gap + Final CTA

- **Pattern**: [G] Card Grid 3col (stack comparison) + [K] CTA Band
- **Section class**: `ds-section` (for stack comparison), then `ds-cta-band` (full-width)
- **Background**: white (stack section), bg image on CTA band
- **Background bg-image location**: ds-cta-band component (ds-bg--grad-navy)

**Sub-section 12a: Data Stack Gap**
- **Header**:
  - `ds-section-header ds-section-header--underline`
  - eyebrow: none
  - title: "The data stack has a gap. We built what <span class='ds-text--brand'>fills it</span>."
  - Brand keyword: "fills it"
  - description: "Storage, pipelines, model tracking -- enterprises have all of it. What they don't have is the layer that makes data actually usable for AI. That gap is where CUBIG operates."
  - Alignment: center

- 3 cards in `ds-card-grid--3col`:
  - Card 1 (neutral): badge "DATA PLATFORMS" (gray), description: "Databricks, Snowflake, dbt. Store, transform, query. Essential -- but don't make data AI-ready."
  - Card 2 (neutral): badge "AI/ML TOOLS" (gray), description: "MLflow, W&B, Vertex AI. Track experiments, version models. Don't fix the data those models run on."
  - Card 3 (highlighted): `ds-card--gradient ds-card--gradient-brand`, badge "CUBIG" (brand), description: "The AI-Ready Data OS. Removes restricted data blockers, fixes unusable data, stabilizes AI execution in production."

**Sub-section 12b: CTA Band**
- `ds-cta-band ds-bg--grad-navy` (full-width, outside ds-container, overlay 0.45)
- Title (64px, white): "Make your AI runs <span class='ds-text--brand'>reproducible</span> in production."
  - Note: ds-text--brand on dark bg should appear as white (override needed or just use white text without brand highlight on dark bg). Use plain white for all CTA text since it's on dark overlay.
  - Revised: Title all white, no brand highlight needed on dark bg
- Description (white 85%): "Experience reproducible execution in production. Try SynTitan, and explore DTS when you need privacy-safe data expansion."
- Buttons:
  - "Try SynTitan ->" (frosted white bg)
  - "Explore DTS ->" (frosted white bg)
- Footnote: "30-min review . no sales pitch"

**Responsive:**
- Stack cards: mobile 1col, tablet 2col, desktop 3col
- CTA: mobile title 40px stacked buttons, tablet 100px padding, desktop 120px padding + 64px title

---

## Layout Flow Summary

| # | Section | Background | Pattern | Visual Variety |
|---|---------|------------|---------|----------------|
| 1 | Hero | white | [A] Hero text-only | Large h1 + buttons |
| 2 | Category Definition | white | [Q] Banner + text | Centered prose block |
| 3 | Mission | surface-light | [G] 2col cards | Side-by-side cards |
| 4 | What We Do | white | [G] 3col cards + banner--full | 3 problem cards + bg-image banner |
| 5 | Stats (KPI) | surface-light | [F] KPI Band | Dark bg-image band with numbers |
| 6 | Founding Story | white | [N] Numbered text | Year marker + paragraphs |
| 7 | Team | surface-light | [G] 3col cards | Team profile cards |
| 8 | Platform & Capabilities | white | [G] 3col gradient cards + banner | Gradient border cards |
| 9 | Partners | surface-light | [I] Partner Grid | Marquee logo scroll |
| 10 | Certifications | white | [I-2] Cert Grid | Marquee cert cards |
| 11 | Values + Contact | surface-light | [G] 3col + 2col cards | Mixed grid layouts |
| 12 | Stack Gap + CTA | white + bg-image | [G] 3col + [K] CTA Band | Comparison + full-width CTA |

**Consecutive same-background check:**
- white, white -> 2 consecutive (Sections 1-2) -- acceptable (under 3)
- surface-light (3), white (4), surface-light (5) -- alternating OK
- white (6), surface-light (7), white (8), surface-light (9), white (10), surface-light (11), white (12) -- perfect alternation

**ds-grid--1 consecutive check:** No ds-grid--1 sections exist. All sections use varied layouts.

---

## Content Integrity Checklist

- [ ] All original text preserved without modification or abbreviation
- [ ] Partner list uses DS official 11 partners only (not A-type categorized list)
- [ ] Cert/Awards list uses DS official 11 items only
- [ ] Product names (SynTitan, DTS, LLM Capsule) use ds-text--product (Oxanium) only as standalone keywords
- [ ] h1/h2/data numbers use DM Sans (ds-font-base), never Oxanium
- [ ] No inline styles, no !important, no hardcoded colors
- [ ] All colors use var(--ds-*) CSS variables
- [ ] Section IDs: section-1 through section-12
- [ ] No eyebrow on any section (user rule)
- [ ] Each ds-bg--* used maximum once across entire page
- [ ] Background image overlay: 0.45 for CTA band, 0.35 for KPI band (per DS defaults)
