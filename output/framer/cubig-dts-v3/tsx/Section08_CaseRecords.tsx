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
      industryColor: "#725bea",
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
      industryColor: "#725bea",
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
    purple: { bg: "#c6c5fa", color: "#725bea" },
    error: { bg: "rgba(255, 48, 48, 0.12)", color: "#ff3030" },
  }

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 120px",
          boxSizing: "border-box",
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 32,
            textAlign: "left",
            paddingBottom: 24,
            borderBottom: "1px solid #e6e7e9",
          }}>
            <h2 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
              marginBottom: 16,
            }}>
              Production <span style={{ color: "#725bea" }}>Case Records</span>
            </h2>
            <p style={{
              fontSize: 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            }}>{description}</p>
          </div>

          {/* Accordion List */}
          <div role="list" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {cases.map((c, i) => {
              const isOpen = openIndex === i
              return (
                <article key={i} role="listitem" style={{
                  border: "1px solid #e6e7e9",
                  borderRadius: 8,
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                }}>
                  {/* Accordion Header */}
                  <div
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto auto",
                      alignItems: "center",
                      gap: 16,
                      padding: 24,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <div style={{ display: "flex", flexDirection: "column", gap: 4, minWidth: 0 }}>
                      <div style={{
                        fontFamily: '"Fragment Mono", monospace',
                        fontSize: 10,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#9c9c9c",
                        display: "flex",
                        alignItems: "center",
                        gap: 4,
                      }}>
                        <span style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          flexShrink: 0,
                          backgroundColor: c.industryColor,
                          display: "inline-block",
                        }} />
                        {c.industry}
                      </div>
                      <div style={{
                        fontFamily: '"DM Sans", sans-serif',
                        fontSize: 18,
                        fontWeight: 500,
                        lineHeight: 1.2,
                        color: "#0f0f0f",
                        wordBreak: "keep-all",
                        overflowWrap: "break-word",
                      }}>{c.titleText}</div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap", flexShrink: 0 }}>
                      {c.badges.map((b, j) => (
                        <span key={j} style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 4,
                          padding: "4px 8px",
                          borderRadius: 9999,
                          fontSize: 12,
                          fontWeight: 500,
                          lineHeight: 1,
                          whiteSpace: "nowrap",
                          backgroundColor: badgeStyles[b.color].bg,
                          color: badgeStyles[b.color].color,
                        }}>{b.label}</span>
                      ))}
                    </div>
                    <div role="button" aria-label="Toggle accordion" style={{
                      width: 28,
                      height: 28,
                      borderRadius: 6,
                      border: "0.5px solid #e6e7e9",
                      backgroundColor: "#f7f7f7",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      cursor: "pointer",
                    }}>
                      <span style={{
                        display: "block",
                        width: 12,
                        height: 12,
                        position: "relative",
                        fontSize: 16,
                        color: "#636363",
                        fontWeight: 700,
                        lineHeight: "12px",
                        textAlign: "center",
                      }}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  {isOpen && (
                    <div style={{
                      padding: 24,
                      borderTop: "1px solid #e6e7e9",
                      backgroundColor: "#f7f7f7",
                    }}>
                      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 24 }}>
                        {c.metrics.map((m, j) => (
                          <div key={j} style={{
                            display: "flex",
                            flexDirection: "column",
                            padding: "12px 16px",
                            border: "1px solid #e6e7e9",
                            borderRadius: 8,
                            backgroundColor: "#ffffff",
                            minWidth: 100,
                            flex: 1,
                          }}>
                            <span style={{
                              fontFamily: '"DM Sans", sans-serif',
                              fontSize: 20,
                              fontWeight: 700,
                              lineHeight: 1,
                              color: "#0f0f0f",
                            }}>{m.val}</span>
                            <span style={{
                              fontFamily: '"Fragment Mono", monospace',
                              fontSize: 10,
                              letterSpacing: "0.08em",
                              textTransform: "uppercase",
                              color: "#9c9c9c",
                              marginTop: 4,
                            }}>{m.label}</span>
                          </div>
                        ))}
                      </div>
                      <p style={{ fontSize: 14, color: "#636363", lineHeight: 1.7 }}>{c.body}</p>
                    </div>
                  )}
                </article>
              )
            })}
          </div>
        </div>
      </section>
    </div>
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
