import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
}

export default function Section08_CaseRecords({
  title = "Production Case Records",
  description = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const cases = [
    {
      industry: "Finance",
      industryColor: "#a617ff",
      titleText: "97.6% AI detection rate -- 79 patterns expanded to 1,000 records",
      badges: [
        { label: "Privacy-Safe", color: "success" },
        { label: "DTS Standalone", color: "purple" },
      ],
      metrics: [
        { val: "97.6%", label: "AI Detection Rate" },
        { val: "79 → 1,000", label: "Records Expanded" },
      ],
      body: "IBK expanded 79 fraud/transaction patterns into 1,000+ DP-safe synthetic records using DTS. AI detection rate reached 97.6%. Full PIPA compliance -- zero real customer data accessed or exported. Passed internal audit with no data sovereignty issues.",
    },
    {
      industry: "Finance",
      industryColor: "#a617ff",
      titleText: "F1 0.92 churn model -- 277,249 synthetic records, 6-month deletion policy bypassed",
      badges: [
        { label: "Privacy-Safe", color: "success" },
        { label: "Compliance", color: "purple" },
      ],
      metrics: [
        { val: "F1 0.92", label: "Churn Prediction" },
        { val: "277,249", label: "Synthetic Records" },
        { val: "+30pp", label: "F1 Improvement" },
      ],
      body: "Kyobo's churn AI was blocked by a 6-month data retention policy. DTS generated 277,249 DP-safe synthetic records from historical data -- legally usable after deletion. Churn F1 reached 0.92. Separately, a top-3 life insurer's VoC AI improved from F1 58.55% to 88.55% (+30pp); deploy time cut from 4 weeks to 1 day.",
    },
    {
      industry: "Marketing",
      industryColor: "#0e824c",
      titleText: "90% time reduction -- 70% cost saving on trend research",
      badges: [
        { label: "Cost Reduction", color: "success" },
      ],
      metrics: [
        { val: "90%", label: "Time Reduction" },
        { val: "70%", label: "Cost Saving" },
      ],
      body: "Annual consumer trend surveys replaced with AI persona agents trained on synthetic behavioral data. Key insights delivered in 1-2 days (vs. 1+ month), with 70% cost savings by eliminating field collection, incentives, and anonymization steps.",
    },
    {
      industry: "Defense",
      industryColor: "#ff3030",
      titleText: "Zero data exports -- Classified imagery converted to AI-ready synthetic datasets",
      badges: [
        { label: "Classified", color: "error" },
        { label: "Zero-Access", color: "purple" },
      ],
      metrics: [
        { val: "0", label: "Data Exports" },
      ],
      body: "DTS deployed on-premise in an air-gapped classified environment. Zero-Access Architecture: no original imagery left the secure perimeter. Classified defense data converted to AI-ready synthetic datasets for model training within security clearance requirements.",
    },
  ]

  const badgeStyles: Record<string, { bg: string; color: string }> = {
    success: { bg: "rgba(14, 130, 76, 0.12)", color: "#0e824c" },
    purple: { bg: "#c6c5fa", color: "#a617ff" },
    error: { bg: "rgba(255, 48, 48, 0.12)", color: "#ff3030" },
  }

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s8-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s8-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s8-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s8-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s8-title-brand { color: #a617ff; }
        .s8-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        .s8-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        .s8-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s8-ac-card:hover { background-color: #f7f7f7; }
        .s8-ac-header {
          display: grid;
          grid-template-columns: 1fr auto auto;
          align-items: center;
          gap: 16px;
          padding: 24px;
          cursor: pointer;
          user-select: none;
        }
        .s8-ac-title-wrap {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
        }
        .s8-ac-industry {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9c9c9c;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        .s8-ac-industry-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .s8-ac-title {
          font-family: "DM Sans", sans-serif;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.2;
          color: #0f0f0f;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s8-ac-meta {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          flex-shrink: 0;
        }
        .s8-badge {
          display: inline-flex;
          align-items: center;
          gap: 4px;
          padding: 4px 8px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          line-height: 1;
          white-space: nowrap;
        }
        .s8-ac-toggle {
          width: 28px;
          height: 28px;
          border-radius: 6px;
          border: 0.5px solid #e6e7e9;
          background: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          cursor: pointer;
          transition: border-color 0.15s, background 0.15s;
          position: relative;
        }
        .s8-ac-toggle:hover {
          border-color: #171719;
          background: #f2f2f2;
        }
        .s8-toggle-icon {
          width: 12px;
          height: 12px;
          position: relative;
          flex-shrink: 0;
        }
        .s8-toggle-icon::before,
        .s8-toggle-icon::after {
          content: '';
          position: absolute;
          background: #cacccf;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s8-toggle-icon::before {
          width: 10px; height: 1.5px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s8-toggle-icon::after {
          width: 1.5px; height: 10px;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
        }
        .s8-toggle-icon--open::after { opacity: 0; }
        .s8-toggle-icon--open::before { background: #636363; }
        .s8-ac-body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }
        .s8-ac-metrics {
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 24px;
        }
        .s8-ac-metric {
          display: flex;
          flex-direction: column;
          padding: 12px 16px;
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          min-width: 100px;
          flex: 1;
        }
        .s8-ac-metric-val {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          color: #0f0f0f;
        }
        .s8-ac-metric-label {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9c9c9c;
          margin-top: 4px;
        }
        .s8-ac-body-text {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
        }

        @media (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-title { font-size: 22px; }
          .s8-description { max-width: 720px; }
          .s8-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-title { font-size: 24px; }
          .s8-ac-header { grid-template-columns: 1fr auto auto; }
        }
        @media (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
          .s8-title { font-size: 28px; }
          .s8-description { max-width: 860px; }
        }
        @media (max-width: 767px) {
          .s8-section-header { text-align: left; }
          .s8-title { font-size: 20px; }
          .s8-ac-header { grid-template-columns: 1fr auto; align-items: start; }
          .s8-ac-meta { display: none; }
        }
      `}</style>
      <section className="s8-section">
        <div className="s8-container">
          <div className="s8-section-header">
            <h2 className="s8-title">
              Production <span className="s8-title-brand">Case Records</span>
            </h2>
            <p className="s8-description">{description}</p>
          </div>
          <div className="s8-ac-list" role="list">
            {cases.map((c, i) => {
              const isOpen = openIndex === i
              return (
                <article className="s8-ac-card" key={i} role="listitem">
                  <div
                    className="s8-ac-header"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <div className="s8-ac-title-wrap">
                      <div className="s8-ac-industry">
                        <span className="s8-ac-industry-dot" style={{ backgroundColor: c.industryColor }} />
                        {c.industry}
                      </div>
                      <div className="s8-ac-title">{c.titleText}</div>
                    </div>
                    <div className="s8-ac-meta">
                      {c.badges.map((b, j) => (
                        <span
                          key={j}
                          className="s8-badge"
                          style={{ backgroundColor: badgeStyles[b.color].bg, color: badgeStyles[b.color].color }}
                        >
                          {b.label}
                        </span>
                      ))}
                    </div>
                    <div className="s8-ac-toggle" role="button" aria-label="Toggle accordion">
                      <span className={`s8-toggle-icon${isOpen ? " s8-toggle-icon--open" : ""}`} />
                    </div>
                  </div>
                  {isOpen && (
                    <div className="s8-ac-body">
                      <div className="s8-ac-metrics">
                        {c.metrics.map((m, j) => (
                          <div className="s8-ac-metric" key={j}>
                            <span className="s8-ac-metric-val">{m.val}</span>
                            <span className="s8-ac-metric-label">{m.label}</span>
                          </div>
                        ))}
                      </div>
                      <p className="s8-ac-body-text">{c.body}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_CaseRecords, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Production Case Records" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
    displayTextArea: true,
  },
})
