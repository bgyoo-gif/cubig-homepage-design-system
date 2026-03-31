// Section08_CaseRecords.tsx — DTS Production Case Records (Accordion)
// Framer Code Component
import { useState } from "react"
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Metric {
  val: string
  label: string
  isSuccess?: boolean
}

interface AccordionItem {
  industry: string
  industryColor: string
  title: string
  badges: { text: string; type: "success" | "purple" | "error" | "neutral" }[]
  metrics: Metric[]
  body: string
}

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionDescription?: string
  defaultOpenIndex?: number
  body1?: string
  body2?: string
  body3?: string
  body4?: string
}

// body 값은 Props에서 주입됨 — 아래 getItems() 참조

function getBadgeStyle(type: string) {
  switch (type) {
    case "success":
      return {
        backgroundColor: "rgba(14, 130, 76, 0.12)",
        color: "#0e824c",
      }
    case "purple":
      return {
        backgroundColor: "#c6c5fa",
        color: "#725bea",
      }
    case "error":
      return {
        backgroundColor: "rgba(255, 48, 48, 0.12)",
        color: "#ff3030",
      }
    default:
      return {
        backgroundColor: "#e6e7e9",
        color: "#636363",
      }
  }
}

export default function Section08_CaseRecords({
  marginTop = 0,
  sectionTitle = "Production Case Records",
  sectionDescription = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  defaultOpenIndex = 0,
  body1 = "IBK expanded 79 fraud/transaction patterns into 1,000+ DP-safe synthetic records using DTS. AI detection rate reached 97.6%. Full PIPA compliance -- zero real customer data accessed or exported. Passed internal audit with no data sovereignty issues.",
  body2 = "Kyobo's churn AI was blocked by a 6-month data retention policy. DTS generated 277,249 DP-safe synthetic records from historical data -- legally usable after deletion. Churn F1 reached 0.92. Separately, a top-3 life insurer's VoC AI improved from F1 58.55% to 88.55% (+30pp); deploy time cut from 4 weeks to 1 day.",
  body3 = "Annual consumer trend surveys replaced with AI persona agents trained on synthetic behavioral data. Key insights delivered in 1-2 days (vs. 1+ month), with 70% cost savings by eliminating field collection, incentives, and anonymization steps.",
  body4 = "DTS deployed on-premise in an air-gapped classified environment. Zero-Access Architecture: no original imagery left the secure perimeter. Classified defense data converted to AI-ready synthetic datasets for model training within security clearance requirements.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpenIndex)

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? -1 : i)
  }

  const items: AccordionItem[] = [
    {
      industry: "Finance",
      industryColor: "#725bea",
      title: "97.6% AI detection rate -- 79 patterns expanded to 1,000 records",
      badges: [
        { text: "Privacy-Safe", type: "success" },
        { text: "DTS Standalone", type: "purple" },
      ],
      metrics: [
        { val: "97.6%", label: "AI Detection Rate" },
        { val: "79 → 1,000", label: "Records Expanded" },
      ],
      body: body1,
    },
    {
      industry: "Finance",
      industryColor: "#725bea",
      title: "F1 0.92 churn model -- 277,249 synthetic records, 6-month deletion policy bypassed",
      badges: [
        { text: "Privacy-Safe", type: "success" },
        { text: "Compliance", type: "purple" },
      ],
      metrics: [
        { val: "F1 0.92", label: "Churn Prediction" },
        { val: "277,249", label: "Synthetic Records" },
        { val: "+30pp", label: "F1 Improvement" },
      ],
      body: body2,
    },
    {
      industry: "Marketing",
      industryColor: "#0e824c",
      title: "90% time reduction -- 70% cost saving on trend research",
      badges: [{ text: "Cost Reduction", type: "success" }],
      metrics: [
        { val: "90%", label: "Time Reduction" },
        { val: "70%", label: "Cost Saving" },
      ],
      body: body3,
    },
    {
      industry: "Defense",
      industryColor: "#ff3030",
      title: "Zero data exports -- Classified imagery converted to AI-ready synthetic datasets",
      badges: [
        { text: "Classified", type: "error" },
        { text: "Zero-Access", type: "purple" },
      ],
      metrics: [{ val: "0", label: "Data Exports" }],
      body: body4,
    },
  ]

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

        .s8-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s8-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s8-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s8-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s8-header__title-brand { color: #725bea; }
        .s8-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        /* Accordion List */
        .s8-ac-list {
          display: flex;
          flex-direction: column;
          gap: 2px;
        }

        /* Accordion Card */
        .s8-ac-card {
          border: 1px solid #e6e7e9;
          border-radius: 8px;
          background-color: #ffffff;
          overflow: hidden;
          transition: background-color 0.2s;
        }
        .s8-ac-card:hover { background-color: #f7f7f7; }

        /* Accordion Header */
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

        /* Meta Badges */
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

        /* Toggle Button */
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
        .s8-ac-toggle::before,
        .s8-ac-toggle::after {
          content: '';
          position: absolute;
          background: #cacccf;
          border-radius: 1px;
          transition: opacity 0.2s;
        }
        .s8-ac-toggle::before {
          width: 10px;
          height: 1.5px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s8-ac-toggle::after {
          width: 1.5px;
          height: 10px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
        .s8-ac-toggle--open::after { opacity: 0; }
        .s8-ac-toggle--open::before { background: #636363; }

        /* Accordion Body */
        .s8-ac-body {
          padding: 24px;
          border-top: 1px solid #e6e7e9;
          background: #f7f7f7;
        }

        /* Metrics Row */
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
        .s8-ac-metric__val {
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 700;
          line-height: 1;
          color: #0f0f0f;
        }
        .s8-ac-metric__label {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #9c9c9c;
          margin-top: 4px;
        }

        /* Body Text */
        .s8-ac-body-text {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
        }

        /* Responsive */
        @container (max-width: 767px) {
          .s8-header { text-align: left; }
          .s8-header__title { font-size: 28px; }
          .s8-ac-header {
            grid-template-columns: 1fr auto;
            align-items: start;
          }
          .s8-ac-meta { display: none; }
        }
        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-header__description { max-width: 720px; }
          .s8-header__title { font-size: 40px; }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-header__description { max-width: 720px; }
          .s8-ac-header { grid-template-columns: 1fr auto auto; }
          .s8-ac-meta { display: flex; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
          .s8-header__description { max-width: 860px; }
        }
      `}</style>

      <section className="s8-section" id="section-8" style={{ marginTop: `${marginTop}px` }}>
        <div className="s8-inner">
        <div className="s8-container">
          <div className="s8-header">
            <h2 className="s8-header__title">
              {sectionTitle.replace("Case Records", "")}{" "}
              <span className="s8-header__title-brand">Case Records</span>
            </h2>
            <p className="s8-header__description">{sectionDescription}</p>
          </div>

          <div className="s8-ac-list" role="list">
            {items.map((item, i) => {
              const isOpen = openIndex === i
              return (
                <article
                  key={i}
                  className="s8-ac-card"
                  role="listitem"
                >
                  <div
                    className="s8-ac-header"
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                  >
                    <div className="s8-ac-title-wrap">
                      <div className="s8-ac-industry">
                        <span
                          className="s8-ac-industry-dot"
                          style={{ backgroundColor: item.industryColor }}
                        ></span>
                        {item.industry}
                      </div>
                      <div className="s8-ac-title">{item.title}</div>
                    </div>
                    <div className="s8-ac-meta">
                      {item.badges.map((badge, bi) => (
                        <span
                          key={bi}
                          className="s8-badge"
                          style={getBadgeStyle(badge.type)}
                        >
                          {badge.text}
                        </span>
                      ))}
                    </div>
                    <div
                      className={`s8-ac-toggle${isOpen ? " s8-ac-toggle--open" : ""}`}
                      role="button"
                      aria-label="Toggle accordion"
                    ></div>
                  </div>
                  {isOpen && (
                    <div className="s8-ac-body">
                      <div className="s8-ac-metrics">
                        {item.metrics.map((m, mi) => (
                          <div key={mi} className="s8-ac-metric">
                            <span className="s8-ac-metric__val">{m.val}</span>
                            <span className="s8-ac-metric__label">
                              {m.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p className="s8-ac-body-text">{item.body}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section08_CaseRecords, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Production Case Records",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    displayTextArea: true,
    defaultValue:
      "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  },
  defaultOpenIndex: {
    type: ControlType.Number,
    title: "Default Open (0-3)",
    defaultValue: 0,
    min: -1,
    max: 3,
    step: 1,
  },
  body1: {
    type: ControlType.String,
    title: "Body 1",
    displayTextArea: true,
    defaultValue: "IBK expanded 79 fraud/transaction patterns into 1,000+ DP-safe synthetic records using DTS. AI detection rate reached 97.6%. Full PIPA compliance -- zero real customer data accessed or exported. Passed internal audit with no data sovereignty issues.",
  },
  body2: {
    type: ControlType.String,
    title: "Body 2",
    displayTextArea: true,
    defaultValue: "Kyobo's churn AI was blocked by a 6-month data retention policy. DTS generated 277,249 DP-safe synthetic records from historical data -- legally usable after deletion. Churn F1 reached 0.92. Separately, a top-3 life insurer's VoC AI improved from F1 58.55% to 88.55% (+30pp); deploy time cut from 4 weeks to 1 day.",
  },
  body3: {
    type: ControlType.String,
    title: "Body 3",
    displayTextArea: true,
    defaultValue: "Annual consumer trend surveys replaced with AI persona agents trained on synthetic behavioral data. Key insights delivered in 1-2 days (vs. 1+ month), with 70% cost savings by eliminating field collection, incentives, and anonymization steps.",
  },
  body4: {
    type: ControlType.String,
    title: "Body 4",
    displayTextArea: true,
    defaultValue: "DTS deployed on-premise in an air-gapped classified environment. Zero-Access Architecture: no original imagery left the secure perimeter. Classified defense data converted to AI-ready synthetic datasets for model training within security clearance requirements.",
  },
})
