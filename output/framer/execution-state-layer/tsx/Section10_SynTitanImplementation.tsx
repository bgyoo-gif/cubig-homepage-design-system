// Section10_SynTitanImplementation.tsx — How SynTitan implements ESL
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitleProduct?: string
  sectionTitleMid?: string
  sectionTitleBrand?: string
  sectionDesc?: string

  // Card 1
  c1Badge?: string
  c1Title?: string
  c1Body1?: string
  c1Body2?: string
  c1Dot1?: string
  c1Dot2?: string
  c1Dot3?: string
  diagWindowLabel?: string
  diagFileName?: string
  diagFileMeta?: string
  diagReadinessLabel?: string
  diagReadinessScore?: string
  diagReadinessBadge?: string
  diagRadarFootnote?: string

  // Card 2
  c2Badge?: string
  c2Title?: string
  c2Body?: string

  // Card 3
  c3Badge?: string
  c3Title?: string
  c3Body1?: string
  c3Body2?: string

  // Card 4
  c4Badge?: string
  c4Title?: string
  c4Body1?: string
  c4Body2?: string
  c4Dot1?: string
  c4Dot2?: string
  c4Dot3?: string
  c4Dot4?: string
}

export default function Section10_SynTitanImplementation({
  sectionTitleProduct = "SynTitan",
  sectionTitleMid = " implements the ",
  sectionTitleBrand = "Execution State Layer",
  sectionDesc = "SynTitan operationalizes the Execution State Layer through four integrated capabilities: AI Readiness profiling, multi-dimensional data quality scoring, full dataset versioning, and immutable execution metadata — ensuring every AI run is traceable to its exact data state.",
  c1Badge = "Feature",
  c1Title = "Data Profiling & AI Readiness Analysis",
  c1Body1 = "Before any AI execution begins, SynTitan runs automated profiling across all input datasets. Each file is evaluated against the AI-Ready standard, and the platform surfaces pass/warn/fail status per file in real time.",
  c1Body2 = "This ensures that only datasets meeting a verified readiness threshold enter the execution pipeline — preventing silent data quality failures from propagating into model outputs.",
  c1Dot1 = "Per-file profiling with pass / warn / fail status",
  c1Dot2 = "AI readiness score (0–100%) per dataset",
  c1Dot3 = "Profiling results stored as part of the execution state record",
  diagWindowLabel = "SynTitan — Data Profiling",
  diagFileName = "[SAPLE] CUBIG Data",
  diagFileMeta = "4.83 GB · 247 columns · 47 rows",
  diagReadinessLabel = "AI readiness",
  diagReadinessScore = "99%",
  diagReadinessBadge = "AI Ready",
  diagRadarFootnote = "*Detailed information is available in the AI Readiness tab.",
  c2Badge = "Feature",
  c2Title = "Six-Dimensional AI Readiness Score",
  c2Body = "AI readiness is broken down into six independently scored dimensions. Each dimension maps directly to a property the Execution State Layer must guarantee.",
  c3Badge = "Feature",
  c3Title = "Immutable Dataset Versioning",
  c3Body1 = "Every change to a dataset is recorded as an immutable version entry with a commit hash, timestamp, author, and change summary.",
  c3Body2 = "Any AI execution can be re-run against a past version to reproduce the exact result, without guesswork.",
  c4Badge = "Feature",
  c4Title = "Execution Metadata & Column Lineage",
  c4Body1 = "Each dataset version captures full structural metadata — storage size, column count, row count, column types, owner, and format — alongside per-column distribution statistics.",
  c4Body2 = "This metadata is frozen at the time of execution, forming the verifiable state record that auditors and engineers can inspect after the fact.",
  c4Dot1 = "Column schema: String, Numeric, ID, DateTime, Others",
  c4Dot2 = "Row-level distribution histograms per column",
  c4Dot3 = "Owner & version tag (e.g., v1, v2)",
  c4Dot4 = "Immutable at release — prevents post-hoc modification",
}: Props) {

  const sixDims = [
    { name: "Privacy", desc: "PII detection & safe handling", score: "100%", variant: "pass" },
    { name: "Integrity", desc: "Null, duplicate, type & distribution checks", score: "95%", variant: "pass" },
    { name: "Traceability", desc: "Snapshot, version label & change log", score: "100%", variant: "pass" },
    { name: "Contextuality", desc: "Column semantics & purpose alignment", score: "80%", variant: "warn" },
    { name: "Operational Reliability", desc: "Processing result verification", score: "97%", variant: "pass" },
    { name: "Conciseness", desc: "Low-value & redundant column removal", score: "89%", variant: "warn" },
  ]

  const dimRows = [
    { name: "Privacy", pct: 8, warn: true },
    { name: "Integrity", pct: 10, warn: true },
    { name: "Traceability", pct: 100, warn: false },
    { name: "Contextuality", pct: 50, warn: true },
    { name: "Operational Reliability", pct: 100, warn: false },
    { name: "Conciseness", pct: 100, warn: false },
  ]

  const versionRows = [
    { ver: "V 1.4", log: "Applied full Data State transformation pipeline: Scoping, Type Validation, Imputation, Distribution Repair, Harmonization, Leakage Guard.", score: "98%", variant: "green" },
    { ver: "V 1.3", log: "Target Quality validation, Resampling for class imbalance, and Leakage Guard implemented.", score: "97%", variant: "green" },
    { ver: "V 1.2", log: "Distribution Repair and Category Harmonization applied. Enforced data dependencies and reduced collinearity.", score: "82%", variant: "orange" },
  ]

  const snapshotHashes = [
    "e4d909c290d0fb1ca068ffadf22cb0d0",
    "1bc29b36f6235a82a6f6724fd3b16718",
    "c4ca4238a0b923820dcc509a6f75849b",
    "0f5902ac237024bda0c176cb93063ac4",
  ]

  return (
    <div>
      <style>{`
        .s10-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s10-inner { width: 100%; container-type: inline-size; }
        .s10-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s10-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s10-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s10-header__title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s10-header__title-brand { color: #725bea; }
        .s10-header__desc {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        .s10-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s10-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s10-card__badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid #725bea;
          color: #725bea;
          margin-bottom: 16px;
        }
        .s10-card__title {
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s10-card__body {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        .s10-card__body:last-child { margin-bottom: 0; }
        .s10-bullet {
          list-style: none;
          padding: 0;
          margin: 0 0 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s10-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s10-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s10-bullet__icon::before {
          content: "•";
          color: #725bea;
          font-size: 20px;
          line-height: 1;
        }

        /* --- Data Profiling Diagram --- */
        .s10-diag {
          margin-top: 24px;
          font-family: "DM Sans", sans-serif;
        }
        .s10-diag__window {
          background: #ffffff;
          border-radius: 18px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.10);
          overflow: hidden;
        }
        .s10-diag__titlebar {
          background: linear-gradient(180deg, #f2f2f2 0%, #ececec 100%);
          height: 36px;
          display: flex;
          align-items: center;
          padding: 0 14px;
          gap: 8px;
          border-bottom: 1px solid #e0e0e0;
        }
        .s10-diag__dot { width: 12px; height: 12px; border-radius: 50%; flex-shrink: 0; }
        .s10-diag__dot--close { background: #ff3030; }
        .s10-diag__dot--min   { background: #f59e0b; }
        .s10-diag__dot--max   { background: #0e824c; }
        .s10-diag__titlebar-label {
          margin-left: auto;
          margin-right: auto;
          font-size: 12px;
          font-weight: 500;
          color: #636363;
          font-family: "Fragment Mono", monospace;
          transform: translateX(-18px);
        }
        .s10-diag__content { background: #ffffff; padding: 24px; }
        .s10-diag__file-row {
          display: flex;
          align-items: center;
          gap: 12px;
          padding-bottom: 16px;
          border-bottom: 1px solid #ececec;
          margin-bottom: 24px;
        }
        .s10-diag__file-icon {
          width: 36px;
          height: 36px;
          background: #f7f7f7;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          color: #0e824c;
        }
        .s10-diag__file-name { font-size: 14px; font-weight: 600; color: #0f0f0f; }
        .s10-diag__file-meta { font-size: 12px; color: #9c9c9c; margin-top: 2px; font-family: "Fragment Mono", monospace; }
        .s10-diag__body {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
        }
        .s10-diag__col { display: flex; flex-direction: column; }
        .s10-diag__readiness-header {
          display: flex;
          align-items: baseline;
          gap: 10px;
          margin-bottom: 16px;
          justify-content: space-between;
        }
        .s10-diag__readiness-label { font-size: 14px; font-weight: 500; color: #636363; }
        .s10-diag__readiness-score-wrap { display: flex; align-items: baseline; gap: 8px; }
        .s10-diag__readiness-score { font-size: 36px; font-weight: 700; color: #0f0f0f; line-height: 1; }
        .s10-diag__readiness-badge {
          font-size: 10px;
          font-weight: 700;
          color: #0e824c;
          background: #f7f7f7;
          border: 1px solid #0e824c;
          border-radius: 9999px;
          padding: 2px 8px;
          letter-spacing: 0.08em;
          align-self: center;
        }
        .s10-diag__dim-list { display: flex; flex-direction: column; gap: 8px; }
        .s10-diag__dim-row {
          display: grid;
          grid-template-columns: 130px 1fr 36px;
          align-items: center;
          gap: 8px;
        }
        .s10-diag__dim-name { font-size: 12px; color: #636363; white-space: nowrap; }
        .s10-diag__dim-track {
          height: 6px;
          background: #ececec;
          border-radius: 9999px;
          overflow: hidden;
        }
        .s10-diag__dim-fill {
          height: 100%;
          border-radius: 9999px;
          background: #0e824c;
        }
        .s10-diag__dim-fill--warn { background: #f59e0b; }
        .s10-diag__dim-pct {
          font-size: 12px;
          font-weight: 600;
          color: #0f0f0f;
          text-align: right;
          font-family: "Fragment Mono", monospace;
        }
        .s10-diag__radar-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          flex: 1;
        }
        .s10-diag__radar-svg { width: 100%; max-width: 220px; height: auto; display: block; margin: 0 auto; }
        .s10-diag__radar-footnote {
          font-size: 12px;
          color: #9c9c9c;
          text-align: center;
          line-height: 1.4;
          margin-top: 8px;
        }

        /* --- Six Dim Grid --- */
        .s10-sixdim {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 8px;
          margin-top: 16px;
        }
        .s10-sixdim__item {
          padding: 12px 16px;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background: #ffffff;
        }
        .s10-sixdim__name { font-size: 14px; font-weight: 600; color: #0f0f0f; margin-bottom: 2px; }
        .s10-sixdim__desc { font-size: 12px; color: #9c9c9c; line-height: 1.5; }

        /* Six Dim score diagram */
        .s10-sdgrid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
          margin-top: 24px;
        }
        .s10-sd-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          padding: 16px;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s10-sd-header { display: flex; align-items: center; justify-content: space-between; }
        .s10-sd-name { font-size: 14px; font-weight: 700; color: #0f0f0f; }
        .s10-sd-score-pass { font-size: 14px; font-weight: 700; color: #0e824c; }
        .s10-sd-score-warn { font-size: 14px; font-weight: 700; color: #f59e0b; }
        .s10-sd-bar-track { width: 100%; height: 4px; background: #e5e7eb; border-radius: 9999px; overflow: hidden; }
        .s10-sd-bar-pass { height: 100%; border-radius: 9999px; background: #0e824c; }
        .s10-sd-bar-warn { height: 100%; border-radius: 9999px; background: #f59e0b; }
        .s10-sd-desc { font-size: 12px; color: #636363; line-height: 1.5; }

        /* --- Immutable Versioning Diagram --- */
        .s10-iv {
          display: flex;
          gap: 24px;
          width: 100%;
          background: #ffffff;
          align-items: flex-start;
          margin-top: 24px;
        }
        .s10-iv__table-wrap {
          flex: 1 1 0;
          min-width: 0;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          overflow: hidden;
        }
        .s10-iv__table-title {
          font-size: 14px;
          font-weight: 600;
          color: #0f0f0f;
          padding: 12px 16px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s10-iv__table { width: 100%; border-collapse: collapse; }
        .s10-iv__table thead tr { background: #f2f2f2; }
        .s10-iv__table thead th {
          font-size: 12px;
          font-weight: 600;
          color: #9c9c9c;
          text-transform: uppercase;
          letter-spacing: 0.04em;
          padding: 8px 12px;
          text-align: left;
          border-bottom: 1px solid #e6e7e9;
          white-space: nowrap;
        }
        .s10-iv__table tbody tr { border-bottom: 1px solid #e6e7e9; }
        .s10-iv__table tbody tr:last-child { border-bottom: none; }
        .s10-iv__table tbody td {
          font-size: 12px;
          color: #0f0f0f;
          padding: 12px;
          vertical-align: top;
          line-height: 1.7;
        }
        .s10-iv__td--version { font-family: "Fragment Mono", monospace; font-weight: 600; white-space: nowrap; }
        .s10-iv__td--log { color: #636363; }
        .s10-iv__td--readiness { white-space: nowrap; text-align: center; }
        .s10-iv__badge {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          font-size: 12px;
          font-weight: 600;
        }
        .s10-iv__dot { width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0; }
        .s10-iv__dot--green { background: #0e824c; }
        .s10-iv__dot--orange { background: #f59e0b; }
        .s10-iv__snapshot-wrap { flex: 0 0 200px; min-width: 0; }
        .s10-iv__snapshot-title { font-size: 14px; font-weight: 600; color: #0f0f0f; margin-bottom: 12px; }
        .s10-iv__snapshot-chain { display: flex; flex-direction: column; align-items: stretch; }
        .s10-iv__hash-block {
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          background: #f2f2f2;
          padding: 8px 12px;
          font-family: "Fragment Mono", monospace;
          font-size: 11px;
          color: #636363;
          word-break: break-all;
          line-height: 1.5;
        }
        .s10-iv__connector {
          display: block;
          width: 1px;
          height: 12px;
          background: #bababa;
          margin: 0 auto;
        }

        @container (min-width: 768px) {
          .s10-container { padding: 0 32px; }
          .s10-header__title { font-size: 28px; }
          .s10-header__desc { max-width: 100%; }
          .s10-sdgrid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s10-container { padding: 0 32px; }
          .s10-header__title { font-size: 32px; }
          .s10-header__desc { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s10-container { padding: 0 120px; max-width: 1440px; }
          .s10-header__title { font-size: 36px; }
          .s10-header__desc { max-width: 860px; }
          .s10-card { padding: 32px; }
        }
        @container (max-width: 640px) {
          .s10-diag__body { grid-template-columns: 1fr; }
          .s10-diag__readiness-score { font-size: 28px; }
          .s10-diag__dim-row { grid-template-columns: 110px 1fr 32px; }
          .s10-sixdim { grid-template-columns: 1fr; }
          .s10-sdgrid { grid-template-columns: 1fr; }
          .s10-iv { flex-direction: column; }
          .s10-iv__snapshot-wrap { flex: none; width: 100%; }
        }
      `}</style>

      <section className="s10-section">
        <div className="s10-inner">
          <div className="s10-container">
            <div className="s10-header">
              <h2 className="s10-header__title">
                How{" "}
                <span className="s10-header__title-product">{sectionTitleProduct}</span>
                {sectionTitleMid}
                <span className="s10-header__title-brand">{sectionTitleBrand}</span>
              </h2>
              <p className="s10-header__desc">{sectionDesc}</p>
            </div>

            <div className="s10-grid">

              {/* Card 1: Data Profiling */}
              <article className="s10-card">
                <span className="s10-card__badge">{c1Badge}</span>
                <h3 className="s10-card__title">{c1Title}</h3>
                <p className="s10-card__body">{c1Body1}</p>
                <p className="s10-card__body">{c1Body2}</p>
                <ul className="s10-bullet">
                  {[c1Dot1, c1Dot2, c1Dot3].map((d, i) => (
                    <li key={i} className="s10-bullet__item">
                      <span className="s10-bullet__icon"></span>{d}
                    </li>
                  ))}
                </ul>

                {/* Data Profiling Diagram */}
                <div className="s10-diag">
                  <div className="s10-diag__window">
                    <div className="s10-diag__titlebar">
                      <span className="s10-diag__dot s10-diag__dot--close"></span>
                      <span className="s10-diag__dot s10-diag__dot--min"></span>
                      <span className="s10-diag__dot s10-diag__dot--max"></span>
                      <span className="s10-diag__titlebar-label">{diagWindowLabel}</span>
                    </div>
                    <div className="s10-diag__content">
                      <div className="s10-diag__file-row">
                        <div className="s10-diag__file-icon">
                          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                            <ellipse cx="12" cy="5" rx="9" ry="3"/>
                            <path d="M3 5v4c0 1.657 4.029 3 9 3s9-1.343 9-3V5"/>
                            <path d="M3 9v4c0 1.657 4.029 3 9 3s9-1.343 9-3V9"/>
                            <path d="M3 13v4c0 1.657 4.029 3 9 3s9-1.343 9-3v-4"/>
                          </svg>
                        </div>
                        <div>
                          <div className="s10-diag__file-name">{diagFileName}</div>
                          <div className="s10-diag__file-meta">{diagFileMeta}</div>
                        </div>
                      </div>
                      <div className="s10-diag__body">
                        <div className="s10-diag__col">
                          <div className="s10-diag__readiness-header">
                            <span className="s10-diag__readiness-label">{diagReadinessLabel}</span>
                            <div className="s10-diag__readiness-score-wrap">
                              <span className="s10-diag__readiness-score">{diagReadinessScore}</span>
                              <span className="s10-diag__readiness-badge">{diagReadinessBadge}</span>
                            </div>
                          </div>
                          <div className="s10-diag__dim-list">
                            {dimRows.map((row, i) => (
                              <div key={i} className="s10-diag__dim-row">
                                <span className="s10-diag__dim-name">{row.name}</span>
                                <div className="s10-diag__dim-track">
                                  <div
                                    className={`s10-diag__dim-fill${row.warn ? " s10-diag__dim-fill--warn" : ""}`}
                                    style={{ width: `${row.pct}%` }}
                                  ></div>
                                </div>
                                <span className="s10-diag__dim-pct">{row.pct}%</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        <div className="s10-diag__col">
                          <div className="s10-diag__radar-wrap">
                            <svg className="s10-diag__radar-svg" viewBox="-50 0 300 200" xmlns="http://www.w3.org/2000/svg" aria-label="6-axis radar chart">
                              <defs>
                                <style>{`.s10rdr-grid{fill:none;stroke:#e0e0e0;stroke-width:0.8}.s10rdr-axis{stroke:#c4c4c4;stroke-width:0.8}.s10rdr-area{fill:rgba(14,130,76,0.15);stroke:rgba(14,130,76,0.7);stroke-width:1.5;stroke-linejoin:round}.s10rdr-dot{fill:#0e824c}.s10rdr-label{font-size:9px;fill:#636363}`}</style>
                              </defs>
                              <polygon className="s10rdr-grid" points="100,28 162.4,64 162.4,136 100,172 37.6,136 37.6,64"/>
                              <polygon className="s10rdr-grid" points="100,52 141.8,75 141.8,125 100,148 58.2,125 58.2,75"/>
                              <polygon className="s10rdr-grid" points="100,76 121.3,88 121.3,112 100,124 78.7,112 78.7,88"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="100" y2="28"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="162.4" y2="64"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="162.4" y2="136"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="100" y2="172"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="37.6" y2="136"/>
                              <line className="s10rdr-axis" x1="100" y1="100" x2="37.6" y2="64"/>
                              <polygon className="s10rdr-area" points="100,94.24 162.4,64 162.4,136 100,172 68.82,118 93.76,96.4"/>
                              <circle className="s10rdr-dot" cx="100" cy="94.24" r="3"/>
                              <circle className="s10rdr-dot" cx="162.4" cy="64" r="3"/>
                              <circle className="s10rdr-dot" cx="162.4" cy="136" r="3"/>
                              <circle className="s10rdr-dot" cx="100" cy="172" r="3"/>
                              <circle className="s10rdr-dot" cx="68.82" cy="118" r="3"/>
                              <circle className="s10rdr-dot" cx="93.76" cy="96.4" r="3"/>
                              <text className="s10rdr-label" x="100" y="20" textAnchor="middle">Privacy</text>
                              <text className="s10rdr-label" x="170" y="60" textAnchor="start">Traceability</text>
                              <text className="s10rdr-label" x="170" y="142" textAnchor="start">Operational</text>
                              <text className="s10rdr-label" x="170" y="153" textAnchor="start">Reliability</text>
                              <text className="s10rdr-label" x="100" y="185" textAnchor="middle">Conciseness</text>
                              <text className="s10rdr-label" x="30" y="142" textAnchor="end">Contextuality</text>
                              <text className="s10rdr-label" x="30" y="60" textAnchor="end">Integrity</text>
                            </svg>
                            <div className="s10-diag__radar-footnote">{diagRadarFootnote}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 2: Six-Dimensional AI Readiness Score */}
              <article className="s10-card">
                <span className="s10-card__badge">{c2Badge}</span>
                <h3 className="s10-card__title">{c2Title}</h3>
                <p className="s10-card__body">{c2Body}</p>
                <div className="s10-sixdim">
                  {sixDims.map((d, i) => (
                    <div key={i} className="s10-sixdim__item">
                      <div className="s10-sixdim__name">{d.name}</div>
                      <div className="s10-sixdim__desc">{d.desc}</div>
                    </div>
                  ))}
                </div>
                {/* Six Dim Score Cards */}
                <div className="s10-sdgrid">
                  {sixDims.map((d, i) => (
                    <div key={i} className="s10-sd-card">
                      <div className="s10-sd-header">
                        <span className="s10-sd-name">{d.name}</span>
                        <span className={d.variant === "pass" ? "s10-sd-score-pass" : "s10-sd-score-warn"}>{d.score}</span>
                      </div>
                      <div className="s10-sd-bar-track">
                        <div
                          className={d.variant === "pass" ? "s10-sd-bar-pass" : "s10-sd-bar-warn"}
                          style={{ width: d.score }}
                        ></div>
                      </div>
                      <p className="s10-sd-desc">{d.desc}</p>
                    </div>
                  ))}
                </div>
              </article>

              {/* Card 3: Immutable Dataset Versioning */}
              <article className="s10-card">
                <span className="s10-card__badge">{c3Badge}</span>
                <h3 className="s10-card__title">{c3Title}</h3>
                <p className="s10-card__body">{c3Body1}</p>
                <p className="s10-card__body">{c3Body2}</p>

                {/* Immutable Versioning Diagram */}
                <div className="s10-iv">
                  <div className="s10-iv__table-wrap">
                    <div className="s10-iv__table-title">Dataset Versioning</div>
                    <table className="s10-iv__table">
                      <thead>
                        <tr>
                          <th>Version</th>
                          <th>Change Log</th>
                          <th>AI Readiness</th>
                        </tr>
                      </thead>
                      <tbody>
                        {versionRows.map((row, i) => (
                          <tr key={i}>
                            <td className="s10-iv__td--version">{row.ver}</td>
                            <td className="s10-iv__td--log">{row.log}</td>
                            <td className="s10-iv__td--readiness">
                              <span className="s10-iv__badge">
                                <span className={`s10-iv__dot s10-iv__dot--${row.variant}`}></span>
                                {row.score}
                              </span>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  <div className="s10-iv__snapshot-wrap">
                    <div className="s10-iv__snapshot-title">Snapshot Log</div>
                    <div className="s10-iv__snapshot-chain">
                      {snapshotHashes.map((hash, i) => (
                        <div key={i}>
                          {i > 0 && <div className="s10-iv__connector"></div>}
                          <div className="s10-iv__hash-block">{hash}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </article>

              {/* Card 4: Execution Metadata */}
              <article className="s10-card">
                <span className="s10-card__badge">{c4Badge}</span>
                <h3 className="s10-card__title">{c4Title}</h3>
                <p className="s10-card__body">{c4Body1}</p>
                <p className="s10-card__body">{c4Body2}</p>
                <ul className="s10-bullet">
                  {[c4Dot1, c4Dot2, c4Dot3, c4Dot4].map((d, i) => (
                    <li key={i} className="s10-bullet__item">
                      <span className="s10-bullet__icon"></span>{d}
                    </li>
                  ))}
                </ul>
              </article>

            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section10_SynTitanImplementation, {
  sectionTitleProduct: { type: ControlType.String, title: "Title Product", defaultValue: "SynTitan" },
  sectionTitleMid: { type: ControlType.String, title: "Title Mid", defaultValue: " implements the " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Execution State Layer" },
  sectionDesc: { type: ControlType.String, title: "Section Desc", displayTextArea: true, defaultValue: "SynTitan operationalizes the Execution State Layer through four integrated capabilities: AI Readiness profiling, multi-dimensional data quality scoring, full dataset versioning, and immutable execution metadata — ensuring every AI run is traceable to its exact data state." },
  c1Badge: { type: ControlType.String, title: "Card1 Badge", defaultValue: "Feature" },
  c1Title: { type: ControlType.String, title: "Card1 Title", defaultValue: "Data Profiling & AI Readiness Analysis" },
  c1Body1: { type: ControlType.String, title: "Card1 Body1", displayTextArea: true, defaultValue: "Before any AI execution begins, SynTitan runs automated profiling across all input datasets. Each file is evaluated against the AI-Ready standard, and the platform surfaces pass/warn/fail status per file in real time." },
  c1Body2: { type: ControlType.String, title: "Card1 Body2", displayTextArea: true, defaultValue: "This ensures that only datasets meeting a verified readiness threshold enter the execution pipeline — preventing silent data quality failures from propagating into model outputs." },
  c1Dot1: { type: ControlType.String, title: "Card1 Dot1", defaultValue: "Per-file profiling with pass / warn / fail status" },
  c1Dot2: { type: ControlType.String, title: "Card1 Dot2", defaultValue: "AI readiness score (0–100%) per dataset" },
  c1Dot3: { type: ControlType.String, title: "Card1 Dot3", defaultValue: "Profiling results stored as part of the execution state record" },
  diagWindowLabel: { type: ControlType.String, title: "Diag Window Label", defaultValue: "SynTitan — Data Profiling" },
  diagFileName: { type: ControlType.String, title: "Diag File Name", defaultValue: "[SAPLE] CUBIG Data" },
  diagFileMeta: { type: ControlType.String, title: "Diag File Meta", defaultValue: "4.83 GB · 247 columns · 47 rows" },
  diagReadinessLabel: { type: ControlType.String, title: "Diag Readiness Label", defaultValue: "AI readiness" },
  diagReadinessScore: { type: ControlType.String, title: "Diag Readiness Score", defaultValue: "99%" },
  diagReadinessBadge: { type: ControlType.String, title: "Diag Readiness Badge", defaultValue: "AI Ready" },
  diagRadarFootnote: { type: ControlType.String, title: "Diag Radar Footnote", defaultValue: "*Detailed information is available in the AI Readiness tab." },
  c2Badge: { type: ControlType.String, title: "Card2 Badge", defaultValue: "Feature" },
  c2Title: { type: ControlType.String, title: "Card2 Title", defaultValue: "Six-Dimensional AI Readiness Score" },
  c2Body: { type: ControlType.String, title: "Card2 Body", displayTextArea: true, defaultValue: "AI readiness is broken down into six independently scored dimensions. Each dimension maps directly to a property the Execution State Layer must guarantee." },
  c3Badge: { type: ControlType.String, title: "Card3 Badge", defaultValue: "Feature" },
  c3Title: { type: ControlType.String, title: "Card3 Title", defaultValue: "Immutable Dataset Versioning" },
  c3Body1: { type: ControlType.String, title: "Card3 Body1", displayTextArea: true, defaultValue: "Every change to a dataset is recorded as an immutable version entry with a commit hash, timestamp, author, and change summary." },
  c3Body2: { type: ControlType.String, title: "Card3 Body2", displayTextArea: true, defaultValue: "Any AI execution can be re-run against a past version to reproduce the exact result, without guesswork." },
  c4Badge: { type: ControlType.String, title: "Card4 Badge", defaultValue: "Feature" },
  c4Title: { type: ControlType.String, title: "Card4 Title", defaultValue: "Execution Metadata & Column Lineage" },
  c4Body1: { type: ControlType.String, title: "Card4 Body1", displayTextArea: true, defaultValue: "Each dataset version captures full structural metadata — storage size, column count, row count, column types, owner, and format — alongside per-column distribution statistics." },
  c4Body2: { type: ControlType.String, title: "Card4 Body2", displayTextArea: true, defaultValue: "This metadata is frozen at the time of execution, forming the verifiable state record that auditors and engineers can inspect after the fact." },
  c4Dot1: { type: ControlType.String, title: "Card4 Dot1", defaultValue: "Column schema: String, Numeric, ID, DateTime, Others" },
  c4Dot2: { type: ControlType.String, title: "Card4 Dot2", defaultValue: "Row-level distribution histograms per column" },
  c4Dot3: { type: ControlType.String, title: "Card4 Dot3", defaultValue: "Owner & version tag (e.g., v1, v2)" },
  c4Dot4: { type: ControlType.String, title: "Card4 Dot4", defaultValue: "Immutable at release — prevents post-hoc modification" },
})
