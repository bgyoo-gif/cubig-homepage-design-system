// Figure_Architecture.tsx — CUBIG AI-Ready Data Infrastructure Architecture Diagram
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  title?: string
  subtitle?: string
}

export default function Figure_Architecture({
  title = "AI-Ready Data Infrastructure",
  subtitle = "CUBIG",
}: Props) {
  useEffect(() => {
    const id = "font-dm-sans"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <style>{`

        .fig-wrap * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        .fig-outer {
          width: 100%;
          background: #f7f7f7;
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100%;
          font-family: 'DM Sans', sans-serif;
          padding: 40px 20px;
        }

        .fig-wrap {
          width: 100%;
          max-width: 1440px;
          background: #ffffff;
          border-radius: 24px;
          border: 1px solid #e6e7e9;
          padding: 48px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
        }

        /* Title area */
        .fig-title {
          text-align: center;
          margin-bottom: 40px;
        }
        .fig-title h1 {
          font-family: 'DM Sans', sans-serif;
          font-size: 28px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 4px;
        }
        .fig-subtitle {
          font-family: 'Oxanium', sans-serif;
          font-size: 12px;
          font-weight: 700;
          color: #9c9c9c;
          letter-spacing: 3px;
          text-transform: uppercase;
        }

        /* Five-column layout: sources | arrow | platform | arrow | apps */
        .fig-columns {
          display: grid;
          grid-template-columns: 180px 48px 1fr 48px 300px;
          gap: 0;
          align-items: center;
        }

        /* Column labels */
        .fig-col-label {
          font-size: 10px;
          font-weight: 600;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #9c9c9c;
          margin-bottom: 16px;
          text-align: center;
        }

        /* Column alignment */
        .fig-col--sources,
        .fig-col--platform,
        .fig-col--apps {
          align-self: start;
        }

        /* === COL 1: Data Sources === */
        .fig-source-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fig-source-card {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 10px 14px;
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          transition: border-color 0.2s;
        }
        .fig-source-card:hover { border-color: #bababa; }
        .fig-source-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fig-source-icon svg {
          width: 16px;
          height: 16px;
        }
        .fig-source-name {
          font-size: 13px;
          font-weight: 500;
          color: #0f0f0f;
          line-height: 1.3;
        }
        .fig-source-sub {
          font-size: 10px;
          color: #9c9c9c;
          margin-top: 1px;
        }
        .fig-source-footnote {
          text-align: center;
          font-size: 10px;
          color: #bababa;
          font-style: italic;
          margin-top: 8px;
        }

        /* === Arrow columns === */
        .fig-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          align-self: center;
        }
        .fig-arrow svg {
          width: 48px;
          height: 24px;
        }

        /* === COL 2: Platform === */
        .fig-platform-col {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .fig-platform-box {
          border: 1.5px solid #e6e7e9;
          border-radius: 18px;
          padding: 24px;
          background: #ffffff;
          position: relative;
        }
        .fig-platform-box-label {
          position: absolute;
          top: -10px;
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 0 12px;
          font-size: 9px;
          font-weight: 600;
          letter-spacing: 2.5px;
          color: #bababa;
          text-transform: uppercase;
          white-space: nowrap;
        }

        /* Product cards inside platform */
        .fig-product-card {
          border-radius: 12px;
          padding: 20px;
          margin-bottom: 12px;
        }
        .fig-product-card:last-child { margin-bottom: 0; }

        /* DTS */
        .fig-product-card--dts {
          background: rgba(14, 130, 76, 0.04);
          border: 1px solid rgba(14, 130, 76, 0.15);
        }
        .fig-product-card--dts .fig-product-name { color: #0e824c; }
        .fig-product-card--dts .fig-product-pill {
          background: rgba(14, 130, 76, 0.08);
          color: #0e824c;
        }
        .fig-product-card--dts .fig-product-step {
          background: rgba(14, 130, 76, 0.06);
          color: #0e824c;
          border: 1px solid rgba(14, 130, 76, 0.12);
        }
        .fig-product-card--dts .fig-product-output {
          background: rgba(14, 130, 76, 0.08);
          border: 1px solid rgba(14, 130, 76, 0.2);
          color: #0e824c;
        }

        /* SynTitan */
        .fig-product-card--syntitan {
          background: rgba(48, 97, 242, 0.04);
          border: 1px solid rgba(48, 97, 242, 0.15);
        }
        .fig-product-card--syntitan .fig-product-name { color: #3061f2; }
        .fig-product-card--syntitan .fig-product-pill {
          background: rgba(48, 97, 242, 0.08);
          color: #3061f2;
        }
        .fig-product-card--syntitan .fig-product-step {
          background: rgba(48, 97, 242, 0.06);
          color: #3061f2;
          border: 1px solid rgba(48, 97, 242, 0.12);
        }
        .fig-product-card--syntitan .fig-product-output {
          background: rgba(48, 97, 242, 0.08);
          border: 1px solid rgba(48, 97, 242, 0.2);
          color: #3061f2;
        }

        /* LLM Capsule */
        .fig-product-card--capsule {
          background: rgba(166, 23, 255, 0.04);
          border: 1px solid rgba(166, 23, 255, 0.15);
        }
        .fig-product-card--capsule .fig-product-name { color: #725bea; }
        .fig-product-card--capsule .fig-product-pill {
          background: rgba(166, 23, 255, 0.08);
          color: #725bea;
        }
        .fig-product-card--capsule .fig-product-step {
          background: rgba(166, 23, 255, 0.06);
          color: #725bea;
          border: 1px solid rgba(166, 23, 255, 0.12);
        }
        .fig-product-card--capsule .fig-product-output {
          background: rgba(166, 23, 255, 0.08);
          border: 1px solid rgba(166, 23, 255, 0.2);
          color: #725bea;
        }

        /* Product card inner */
        .fig-product-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 10px;
        }
        .fig-product-name {
          font-family: 'Oxanium', sans-serif;
          font-size: 16px;
          font-weight: 700;
        }
        .fig-product-role {
          font-size: 11px;
          color: #636363;
          margin-left: auto;
        }
        .fig-product-pills {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          margin-bottom: 8px;
        }
        .fig-product-pill {
          font-size: 10px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 9999px;
        }
        .fig-product-fix {
          font-size: 10px;
          color: #9c9c9c;
          margin-bottom: 8px;
        }
        .fig-product-fix span { color: #ff3030; }
        .fig-product-flow {
          display: flex;
          align-items: center;
          gap: 6px;
          flex-wrap: wrap;
        }
        .fig-product-step {
          font-size: 10px;
          font-weight: 500;
          padding: 3px 10px;
          border-radius: 5px;
        }
        .fig-product-arrow {
          font-size: 10px;
          color: #bababa;
        }
        .fig-product-output {
          font-size: 10px;
          font-weight: 600;
          padding: 4px 12px;
          border-radius: 5px;
        }

        /* Connector lines between products */
        .fig-product-connector {
          display: flex;
          justify-content: center;
          margin: -6px 0;
          position: relative;
          z-index: 1;
        }
        .fig-product-connector svg {
          width: 2px;
          height: 12px;
        }

        /* Mapper label */
        .fig-product-mapper {
          display: flex;
          justify-content: center;
          margin-top: 4px;
        }
        .fig-product-mapper span {
          font-size: 10px;
          color: #725bea;
          background: rgba(166, 23, 255, 0.06);
          border: 1px solid rgba(166, 23, 255, 0.15);
          padding: 2px 10px;
          border-radius: 5px;
        }

        /* === COL 3: Applications === */
        .fig-app-list {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .fig-app-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          transition: border-color 0.2s;
        }
        .fig-app-card:hover { border-color: #bababa; }
        .fig-app-icon {
          width: 32px;
          height: 32px;
          border-radius: 6px;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        .fig-app-icon svg {
          width: 16px;
          height: 16px;
        }
        .fig-app-content {
          flex: 1;
          min-width: 0;
        }
        .fig-app-name {
          font-size: 13px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.3;
        }
        .fig-app-sub {
          font-size: 10px;
          color: #9c9c9c;
          margin-top: 2px;
        }
        .fig-app-tags {
          display: flex;
          gap: 4px;
          margin-top: 6px;
          flex-wrap: wrap;
        }
        .fig-app-tag {
          font-size: 9px;
          font-weight: 600;
          padding: 2px 8px;
          border-radius: 4px;
          font-family: 'Oxanium', sans-serif;
        }
        .fig-app-tag--dts { background: rgba(14, 130, 76, 0.08); color: #0e824c; }
        .fig-app-tag--syntitan { background: rgba(48, 97, 242, 0.08); color: #3061f2; }
        .fig-app-tag--capsule { background: rgba(166, 23, 255, 0.08); color: #725bea; }

        /* Footer */
        .fig-footer {
          text-align: center;
          margin-top: 32px;
          padding-top: 20px;
          border-top: 1px solid #e6e7e9;
        }
        .fig-footer span {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 2px;
          color: #bababa;
          text-transform: uppercase;
        }

        /* Responsive */
        @media (max-width: 1023px) {
          .fig-columns {
            grid-template-columns: 1fr;
            gap: 32px;
          }
          .fig-arrow {
            transform: rotate(90deg);
          }
          .fig-wrap {
            padding: 32px 24px;
          }
        }
        @media (max-width: 767px) {
          .fig-wrap {
            padding: 24px 16px;
          }
          .fig-outer {
            padding: 24px 12px;
          }
        }
        @media (min-width: 1440px) {
          .fig-outer {
            padding: 40px 120px;
          }
        }
      `}</style>

      <div className="fig-outer">
        <div className="fig-wrap">
          {/* Title */}
          <div className="fig-title">
            <h1>{title}</h1>
            <span className="fig-subtitle">{subtitle}</span>
          </div>

          <div className="fig-columns">
            {/* ====== COL 1: Data Sources ====== */}
            <div className="fig-col--sources">
              <div className="fig-col-label">Data Sources</div>
              <div className="fig-source-list">
                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <ellipse cx="12" cy="5" rx="9" ry="3"/>
                      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
                      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">Databases</div>
                    <div className="fig-source-sub">SQL · NoSQL</div>
                  </div>
                </div>

                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                      <polyline points="14 2 14 8 20 8"/>
                      <line x1="16" y1="13" x2="8" y2="13"/>
                      <line x1="16" y1="17" x2="8" y2="17"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">Documents</div>
                    <div className="fig-source-sub">Contracts · Internal</div>
                  </div>
                </div>

                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <line x1="8" y1="21" x2="16" y2="21"/>
                      <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">CRM &amp; ERP</div>
                    <div className="fig-source-sub">Salesforce · SAP</div>
                  </div>
                </div>

                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 12H2"/>
                      <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">Object Storage</div>
                    <div className="fig-source-sub">S3 · Data Lake</div>
                  </div>
                </div>

                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">Logs &amp; IoT</div>
                    <div className="fig-source-sub">Sensors · Streams</div>
                  </div>
                </div>

                <div className="fig-source-card">
                  <div className="fig-source-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/>
                      <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>
                    </svg>
                  </div>
                  <div>
                    <div className="fig-source-name">APIs &amp; Legacy</div>
                    <div className="fig-source-sub">REST · SOAP</div>
                  </div>
                </div>
              </div>
              <div className="fig-source-footnote">structured &amp; unstructured</div>
            </div>

            {/* Arrow 1 */}
            <div className="fig-arrow">
              <svg viewBox="0 0 48 24" fill="none">
                <path d="M4 12 L38 12" stroke="#e6e7e9" strokeWidth="2" strokeLinecap="round"/>
                <path d="M34 7 L42 12 L34 17" fill="none" stroke="#9c9c9c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* ====== COL 2: Platform ====== */}
            <div className="fig-platform-col fig-col--platform">
              <div className="fig-platform-box">
                <span className="fig-platform-box-label">AI-Ready Platform</span>

                {/* DTS */}
                <div className="fig-product-card fig-product-card--dts">
                  <div className="fig-product-header">
                    <span className="fig-product-name">DTS</span>
                    <span className="fig-product-role">Data Usability &amp; Privacy</span>
                  </div>
                  <div className="fig-product-pills">
                    <span className="fig-product-pill">synthetic augmentation</span>
                    <span className="fig-product-pill">differential privacy</span>
                    <span className="fig-product-pill">class balancing</span>
                  </div>
                  <div className="fig-product-fix"><span>→</span> fixes unusable data · data-level privacy</div>
                  <div className="fig-product-flow">
                    <span className="fig-product-step">Diagnose</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">Transform</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">Synthetic Data</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-output">Usable Data</span>
                  </div>
                </div>

                {/* Connector */}
                <div className="fig-product-connector">
                  <svg viewBox="0 0 2 12">
                    <line x1="1" y1="0" x2="1" y2="12" stroke="#e6e7e9" strokeWidth="1" strokeDasharray="2 2"/>
                  </svg>
                </div>

                {/* SynTitan */}
                <div className="fig-product-card fig-product-card--syntitan">
                  <div className="fig-product-header">
                    <span className="fig-product-name">SynTitan</span>
                    <span className="fig-product-role">Execution Stability</span>
                  </div>
                  <div className="fig-product-pills">
                    <span className="fig-product-pill">state versioning</span>
                    <span className="fig-product-pill">drift detection</span>
                    <span className="fig-product-pill">Data Quality Refinement</span>
                  </div>
                  <div className="fig-product-fix"><span>→</span> fixes unstable execution</div>
                  <div className="fig-product-flow">
                    <span className="fig-product-step">Execution</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">Run Binding</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">Release State</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-output">Stable</span>
                  </div>
                </div>

                {/* Connector */}
                <div className="fig-product-connector">
                  <svg viewBox="0 0 2 12">
                    <line x1="1" y1="0" x2="1" y2="12" stroke="#e6e7e9" strokeWidth="1" strokeDasharray="2 2"/>
                  </svg>
                </div>

                {/* LLM Capsule */}
                <div className="fig-product-card fig-product-card--capsule">
                  <div className="fig-product-header">
                    <span className="fig-product-name">LLM Capsule</span>
                    <span className="fig-product-role">Secure LLM Access</span>
                  </div>
                  <div className="fig-product-pills">
                    <span className="fig-product-pill">PII detection</span>
                    <span className="fig-product-pill">prompt anonymization</span>
                    <span className="fig-product-pill">output remapping</span>
                  </div>
                  <div className="fig-product-fix"><span>→</span> fixes inference-level privacy</div>
                  <div className="fig-product-flow">
                    <span className="fig-product-step">Encapsulate</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">LLM Access</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-step">Restoration</span>
                    <span className="fig-product-arrow">→</span>
                    <span className="fig-product-output">Privacy-safe</span>
                  </div>
                  <div className="fig-product-mapper"><span>🔗 Mapper</span></div>
                </div>

              </div>
            </div>

            {/* Arrow 2 */}
            <div className="fig-arrow">
              <svg viewBox="0 0 48 24" fill="none">
                <path d="M4 12 L38 12" stroke="#e6e7e9" strokeWidth="2" strokeLinecap="round"/>
                <path d="M34 7 L42 12 L34 17" fill="none" stroke="#9c9c9c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {/* ====== COL 3: AI Applications ====== */}
            <div className="fig-col--apps">
              <div className="fig-col-label">AI Applications</div>
              <div className="fig-app-list">

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="3" width="20" height="14" rx="2"/>
                      <path d="M8 21h8"/>
                      <path d="M12 17v4"/>
                      <path d="M7 10l3 3 7-7" stroke="#0e824c" strokeWidth="1.5"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Fraud Detection &amp; Monitoring</div>
                    <div className="fig-app-sub">Stable production models · rare-event coverage</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--dts">DTS</span>
                      <span className="fig-app-tag fig-app-tag--syntitan">SynTitan</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                      <circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Customer Analytics</div>
                    <div className="fig-app-sub">Privacy-safe insights · churn prediction</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--dts">DTS</span>
                      <span className="fig-app-tag fig-app-tag--capsule">LLM Capsule</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"/>
                      <path d="M12 6v6l4 2"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">AI Agents</div>
                    <div className="fig-app-sub">Survey · price strategy · instant research</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--syntitan">SynTitan</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Policy &amp; Risk Simulation</div>
                    <div className="fig-app-sub">What-if scenarios · regulatory impact</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--dts">DTS</span>
                      <span className="fig-app-tag fig-app-tag--syntitan">SynTitan</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Enterprise Copilots</div>
                    <div className="fig-app-sub">LLM on internal data · RAG · PII-safe</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--capsule">LLM Capsule</span>
                      <span className="fig-app-tag fig-app-tag--syntitan">SynTitan</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="3" y="11" width="18" height="11" rx="2"/>
                      <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Sensitive Document Access</div>
                    <div className="fig-app-sub">Enterprise RAG · secure knowledge base</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--capsule">LLM Capsule</span>
                    </div>
                  </div>
                </div>

                <div className="fig-app-card">
                  <div className="fig-app-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="#636363" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="17 1 21 5 17 9"/>
                      <path d="M3 11V9a4 4 0 0 1 4-4h14"/>
                      <polyline points="7 23 3 19 7 15"/>
                      <path d="M21 13v2a4 4 0 0 1-4 4H3"/>
                    </svg>
                  </div>
                  <div className="fig-app-content">
                    <div className="fig-app-name">Reproducible AI Execution</div>
                    <div className="fig-app-sub">Schema fingerprinting · version-locked runs</div>
                    <div className="fig-app-tags">
                      <span className="fig-app-tag fig-app-tag--syntitan">SynTitan</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="fig-footer">
            <span>ISO 27001 · ISO 42001 · GS Certified · AWS Marketplace · 10+ Patents</span>
          </div>
        </div>
      </div>
    </>
  )
}

addPropertyControls(Figure_Architecture, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "AI-Ready Data Infrastructure",
  },
  subtitle: {
    type: ControlType.String,
    title: "Subtitle (Brand)",
    defaultValue: "CUBIG",
  },
})
