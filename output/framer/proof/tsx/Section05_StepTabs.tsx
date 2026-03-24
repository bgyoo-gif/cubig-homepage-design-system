import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

// ─── Image Base ───────────────────────────────────────────────────────────────
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Tab Data ─────────────────────────────────────────────────────────────────
interface TabData {
  tabLabel: string
  title: string
  description: React.ReactNode
  rootCause: string
  resolution: string
  codeLines: { type: "muted" | "remove" | "add" | "warn"; text: string }[]
}

const tabs: TabData[] = [
  {
    tabLabel: "Release State Diff",
    title: "Release State Comparison",
    description: (
      <>
        When output behavior changes between runs, <span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>SynTitan</span> diffs the two Release States to surface exactly which execution condition changed.
      </>
    ),
    rootCause:
      "Feature column type coerced from integer to string upstream. Preprocessing normalization version updated in the same window.",
    resolution:
      "Restored prior schema type constraint. Pinned preprocessing version in Release State.",
    codeLines: [
      { type: "muted",  text: "// Release State diff: RS-0041 → RS-0042" },
      { type: "remove", text: "− schema.feature_col_7: dtype=int64" },
      { type: "add",    text: "+ schema.feature_col_7: dtype=object" },
      { type: "muted",  text: "// 1 schema fingerprint change detected" },
      { type: "warn",   text: "! Run Binding: RS-0042 flagged before production" },
    ],
  },
  {
    tabLabel: "Schema Fingerprint",
    title: "Schema Fingerprint Change",
    description: (
      <>
        <span style={{ fontFamily: '"Oxanium", sans-serif', fontWeight: 700 }}>SynTitan</span> captures a schema fingerprint at each ingestion. When the fingerprint changes, it is logged in the Release State and surfaced in the Change Log before the run proceeds.
      </>
    ),
    rootCause:
      "Upstream data feed removed two feature columns without downstream notification.",
    resolution:
      "Run halted before training. Schema contract enforced. Upstream notified within the same hour.",
    codeLines: [
      { type: "muted",  text: "// Schema fingerprint audit log" },
      { type: "warn",   text: "schema_fingerprint: CHANGED" },
      { type: "remove", text: "prev: sha256:a4f2b...3c91" },
      { type: "add",    text: "curr: sha256:d9e7a...11fa" },
      { type: "muted",  text: "// columns_added: 0" },
      { type: "remove", text: "// columns_removed: 2 [user_segment_v2, tenure_bucket]" },
      { type: "muted",  text: "// type_changes: 1" },
    ],
  },
  {
    tabLabel: "Preprocessing Diff",
    title: "Preprocessing Logic Change",
    description: (
      <>
        Preprocessing steps are versioned inside each Release State. When logic changes — normalization, imputation, encoding — the diff shows exactly which step changed and what the expected effect is.
      </>
    ),
    rootCause:
      "Normalization method switched from min-max to z-score — changing the scale of all downstream feature inputs.",
    resolution:
      "Reverted to prior Release State for immediate rollback. New method evaluated in staging before reintroduction.",
    codeLines: [
      { type: "muted",  text: "// Preprocessing diff: RS-0042 → RS-0043" },
      { type: "remove", text: "− step: normalize_amount" },
      { type: "remove", text: "  method: min-max  range: [0, 1000]" },
      { type: "add",    text: "+ step: normalize_amount" },
      { type: "add",    text: "  method: z-score  params: μ=0, σ=1" },
      { type: "warn",   text: "! normalization method changed" },
      { type: "muted",  text: "// all downstream feature scores affected" },
    ],
  },
  {
    tabLabel: "Runtime Dependency",
    title: "Runtime Dependency Change",
    description: (
      <>
        Runtime environment versions — libraries, Python runtime, inference server — are captured in each Release State. Unexpected version changes are surfaced as execution state drift events.
      </>
    ),
    rootCause:
      "Container image updated in CI/CD pipeline without version-pinning the AI dependencies.",
    resolution:
      "Dependency versions pinned in Release State manifest. Container image rebuild triggered with verified versions.",
    codeLines: [
      { type: "muted",  text: "// Runtime dependency audit: RS-0043" },
      { type: "remove", text: "− sklearn: 1.2.2" },
      { type: "add",    text: "+ sklearn: 1.4.0" },
      { type: "remove", text: "− pandas: 1.5.3" },
      { type: "add",    text: "+ pandas: 2.1.0" },
      { type: "warn",   text: "! 2 runtime dependencies changed" },
      { type: "warn",   text: "! imputation behavior may differ" },
    ],
  },
]

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionDescription?: string
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section05_StepTabs({
  marginTop = 0,
  sectionTitle = "What Traceability Looks Like in Practice",
  sectionDescription = "Every SynTitan run produces structured artifacts that make execution conditions inspectable, comparable, and reproducible. These are the operational records teams use for incident response and regression verification.",
}: Props) {
  const [activeTab, setActiveTab] = useState(0)

  const tab = tabs[activeTab]

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700&family=Oxanium:wght@700&family=Fragment+Mono:ital@0;1&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          background-color: #ffffff;
          padding: 80px 16px;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
          -webkit-font-smoothing: antialiased;
        }
        @media (min-width: 768px)  { .s5-section { padding: 80px 32px; } }
        @media (min-width: 1024px) { .s5-section { padding: 80px 32px; } }
        @media (min-width: 1440px) { .s5-section { padding: 80px 120px; max-width: 1440px; margin-left: auto; margin-right: auto; } }

        .s5-container { width: 100%; max-width: 1200px; margin: 0 auto; }

        /* ── Section Header ── */
        .s5-section-header {
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        @media (max-width: 767px) { .s5-section-header { text-align: left; } }

        .s5-header-title {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @media (min-width: 768px)  { .s5-header-title { font-size: 28px; } }
        @media (min-width: 1024px) { .s5-header-title { font-size: 32px; } }
        @media (min-width: 1440px) { .s5-header-title { font-size: 40px; } }

        .s5-brand { color: #725bea; }

        .s5-header-desc {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
          text-wrap: pretty;
        }
        @media (min-width: 1440px) { .s5-header-desc { max-width: 860px; } }

        /* ── Tab Nav ── */
        .s5-tab-nav {
          display: flex;
          justify-content: center;
          gap: 12px;
          flex-wrap: wrap;
          margin-bottom: 64px;
        }
        @media (max-width: 767px) {
          .s5-tab-nav {
            justify-content: flex-start;
            flex-wrap: nowrap;
            overflow-x: auto;
            -webkit-overflow-scrolling: touch;
            scrollbar-width: none;
            padding-bottom: 8px;
          }
          .s5-tab-nav::-webkit-scrollbar { display: none; }
        }

        .s5-tab-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 24px;
          border-radius: 9999px;
          border: 1px solid #e6e7e9;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: #636363;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        .s5-tab-btn:hover,
        .s5-tab-btn--active {
          background-color: #0f0f0f;
          border-color: #0f0f0f;
          color: #ffffff;
          font-weight: 600;
        }

        .s5-tab-num {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 22px;
          height: 22px;
          border-radius: 50%;
          background-color: #ececec;
          border: 1px solid #e6e7e9;
          font-size: 12px;
          font-weight: 700;
          color: #636363;
          flex-shrink: 0;
          transition: all 0.2s;
        }
        .s5-tab-btn:hover .s5-tab-num,
        .s5-tab-btn--active .s5-tab-num {
          background-color: #ffffff;
          border-color: #ffffff;
          color: #0f0f0f;
        }

        /* ── Panel Layout ── */
        .s5-panel {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: start;
        }
        @media (min-width: 1024px) { .s5-panel { grid-template-columns: 5fr 7fr; gap: 64px; } }
        @media (min-width: 1440px) { .s5-panel { gap: 80px; } }

        /* ── Left Content ── */
        .s5-content {
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        .s5-content-title {
          font-family: "DM Sans", sans-serif;
          font-size: 30px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          text-wrap: balance;
        }
        @media (min-width: 768px) { .s5-content-title { font-size: 36px; } }

        .s5-content-desc {
          font-size: 16px;
          color: #636363;
          line-height: 1.7;
          text-wrap: pretty;
        }

        .s5-meta {
          display: flex;
          flex-direction: column;
          gap: 16px;
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid #e6e7e9;
        }

        .s5-meta-label {
          display: inline-block;
          width: fit-content;
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 10px;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          font-weight: 600;
          padding: 3px 10px;
          border-radius: 9999px;
        }
        .s5-meta-label--cause {
          background: rgba(255, 48, 48, 0.08);
          color: #ff3030;
        }
        .s5-meta-label--resolution {
          background: rgba(14, 130, 76, 0.08);
          color: #0e824c;
        }

        .s5-meta-text {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin: 0;
        }

        /* ── Code Block ── */
        .s5-code-block {
          background-color: #0f0f0f;
          border: none;
          border-radius: 8px;
          padding: 16px;
          font-family: "Fragment Mono", "Geist Mono", monospace;
          font-size: 14px;
          line-height: 1.9;
          color: #bababa;
          overflow-x: auto;
        }

        .s5-code--muted  { color: #636363; }
        .s5-code--remove { color: #ff6b6b; }
        .s5-code--add    { color: #34d399; }
        .s5-code--warn   { color: #fbbf24; }

        /* ── Bottom Banner ── */
        .s5-banner {
          margin-top: 48px;
          padding: 16px 24px;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          font-size: 14px;
          line-height: 1.7;
          text-align: center;
          word-break: keep-all;
          overflow-wrap: break-word;
          color: #0f0f0f;
        }

        .s5-banner a {
          display: block;
          margin-top: 12px;
        }

        .s5-btn-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid #e6e7e9;
          background-color: transparent;
          color: #0f0f0f;
          padding: 8px 16px;
          text-decoration: none;
          transition: background-color 0.2s;
        }
        .s5-btn-secondary:hover { background-color: #f7f7f7; }

        .s5-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
      `}</style>

      <section className="s5-section" id="section-5" style={{ marginTop }}>
        <div className="s5-container">

          {/* Section Header */}
          <div className="s5-section-header">
            <h2 className="s5-header-title">
              What <span className="s5-brand">Traceability</span> Looks Like in Practice
            </h2>
            <p className="s5-header-desc">
              Every <span className="s5-product">SynTitan</span> run produces structured artifacts that make execution conditions inspectable, comparable, and reproducible. These are the operational records teams use for incident response and regression verification.
            </p>
          </div>

          {/* Tab Navigation */}
          <nav className="s5-tab-nav" role="tablist" aria-label="Technical artifact types">
            {tabs.map((t, i) => (
              <button
                key={i}
                className={`s5-tab-btn${activeTab === i ? " s5-tab-btn--active" : ""}`}
                role="tab"
                aria-selected={activeTab === i}
                onClick={() => setActiveTab(i)}
              >
                <span className="s5-tab-num">{i + 1}</span>
                {t.tabLabel}
              </button>
            ))}
          </nav>

          {/* Active Panel */}
          <div className="s5-panel" role="tabpanel">

            {/* Left: Text content */}
            <div className="s5-content">
              <h3 className="s5-content-title">{tab.title}</h3>
              <p className="s5-content-desc">{tab.description}</p>

              <div className="s5-meta">
                <span className="s5-meta-label s5-meta-label--cause">Root cause</span>
                <p className="s5-meta-text">{tab.rootCause}</p>
                <span className="s5-meta-label s5-meta-label--resolution">Resolution</span>
                <p className="s5-meta-text">{tab.resolution}</p>
              </div>
            </div>

            {/* Right: Code block */}
            <div>
              <div className="s5-code-block">
                {tab.codeLines.map((line, i) => (
                  <div key={i} className={`s5-code--${line.type}`}>
                    {line.text}
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Bottom Banner */}
          <div className="s5-banner" role="note">
            These artifact types are produced by <span className="s5-product">SynTitan</span> during every AI run. State Cards, Change Logs, Schema Diffs, Preprocessing Diffs, and Re-run Records are all standard outputs — not manual reports.
            <a href="/syntitan" className="s5-btn-secondary">See execution state comparison</a>
          </div>

        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_StepTabs, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "What Traceability Looks Like in Practice",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    defaultValue:
      "Every SynTitan run produces structured artifacts that make execution conditions inspectable, comparable, and reproducible. These are the operational records teams use for incident response and regression verification.",
  },
})
