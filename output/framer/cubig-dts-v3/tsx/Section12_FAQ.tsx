import * as React from "react"
import { useState } from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleHighlight?: string

  faq1Question?: string
  faq1Answer?: string
  faq2Question?: string
  faq2Answer?: string
  faq3Question?: string
  faq3Answer?: string
  faq4Question?: string
  faq4Answer?: string
  faq5Question?: string
  faq5Answer?: string
  faq6Question?: string
  faq6Answer?: string
}

export default function Section12_FAQ({
  title = "Common",
  titleHighlight = "Questions",

  faq1Question = "What is DTS?",
  faq1Answer = "DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  faq2Question = "What is differential privacy in DTS?",
  faq2Answer = "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  faq3Question = "Can DTS run without SynTitan?",
  faq3Answer = "Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.",
  faq4Question = "What data problems does DTS solve?",
  faq4Answer = "DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.",
  faq5Question = "What is Zero-Access Architecture?",
  faq5Answer = "Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  faq6Question = "How is DTS different from SynTitan?",
  faq6Answer = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
}: Props) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)

  React.useEffect(() => {
    const el = containerRef.current
    if (!el) return
    let prevMobile = false
    let prevTablet = false
    const ro = new ResizeObserver(([entry]) => {
      const w = entry.contentRect.width
      const m = w < 768
      const t = w >= 768 && w < 1024
      if (m !== prevMobile) { prevMobile = m; setIsMobile(m) }
      if (t !== prevTablet) { prevTablet = t; setIsTablet(t) }
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  const containerPadding = isMobile ? "0 16px" : isTablet ? "0 32px" : "0 120px"

  const faqs = [
    { question: faq1Question, answer: faq1Answer },
    { question: faq2Question, answer: faq2Answer },
    { question: faq3Question, answer: faq3Answer },
    { question: faq4Question, answer: faq4Answer },
    { question: faq5Question, answer: faq5Answer },
    { question: faq6Question, answer: faq6Answer },
  ]

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i)

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 1440,
         margin: "0 auto",
          padding: containerPadding,
          boxSizing: "border-box",
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 32,
            textAlign: "center",
            paddingBottom: 24,
            borderBottom: "1px solid #e6e7e9",
          }}>
            <h2 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: isMobile ? 20 : isTablet ? 22 : 40,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}>
              {title} <span style={{ color: "#725bea" }}>{titleHighlight}</span>
            </h2>
          </div>

          {/* Accordion List */}
          <div role="list" style={{ display: "flex", flexDirection: "column", gap: 2 }}>
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <article key={i} role="listitem" style={{
                  border: "1px solid #e6e7e9",
                  borderRadius: 8,
                  backgroundColor: "#ffffff",
                  overflow: "hidden",
                }}>
                  <div
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    style={{
                      display: "grid",
                      gridTemplateColumns: "1fr auto",
                      alignItems: "center",
                      gap: 16,
                      padding: isMobile ? 16 : 24,
                      cursor: "pointer",
                      userSelect: "none",
                    }}
                  >
                    <div style={{
                      fontFamily: '"DM Sans", sans-serif',
                      fontSize: isMobile ? 14 : 18,
                      fontWeight: 500,
                      lineHeight: 1.2,
                      color: "#0f0f0f",
                      wordBreak: "keep-all",
                      overflowWrap: "break-word",
                    }}>{faq.question}</div>
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
                        fontSize: 16,
                        color: isOpen ? "#636363" : "#cacccf",
                        fontWeight: 700,
                        lineHeight: 1,
                        textAlign: "center",
                      }}>{isOpen ? "−" : "+"}</span>
                    </div>
                  </div>
                  {isOpen && (
                    <div style={{
                      padding: isMobile ? 16 : 24,
                      borderTop: "1px solid #e6e7e9",
                      backgroundColor: "#f7f7f7",
                    }}>
                      <p style={{ fontSize: isMobile ? 13 : 14, color: "#636363", lineHeight: 1.7 }}>{faq.answer}</p>
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

addPropertyControls(Section12_FAQ, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Common" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Questions" },

  faq1Question: { type: ControlType.String, title: "FAQ1 Question", defaultValue: "What is DTS?" },
  faq1Answer: { type: ControlType.String, title: "FAQ1 Answer", defaultValue: "DTS is CUBIG's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.", displayTextArea: true },
  faq2Question: { type: ControlType.String, title: "FAQ2 Question", defaultValue: "What is differential privacy in DTS?" },
  faq2Answer: { type: ControlType.String, title: "FAQ2 Answer", defaultValue: "Differential privacy (DP) is a mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.", displayTextArea: true },
  faq3Question: { type: ControlType.String, title: "FAQ3 Question", defaultValue: "Can DTS run without SynTitan?" },
  faq3Answer: { type: ControlType.String, title: "FAQ3 Answer", defaultValue: "Yes. DTS is a full standalone enterprise synthetic data engine. It can be deployed and used independently of SynTitan. When used alongside SynTitan, DTS-generated datasets are versioned and bound to Release States for full execution traceability.", displayTextArea: true },
  faq4Question: { type: ControlType.String, title: "FAQ4 Question", defaultValue: "What data problems does DTS solve?" },
  faq4Answer: { type: ControlType.String, title: "FAQ4 Answer", defaultValue: "DTS addresses three categories: restricted data that cannot be shared due to privacy or compliance rules; data with coverage gaps or class imbalance that make models unreliable; and non-accessible data that exists but cannot reach training pipelines.", displayTextArea: true },
  faq5Question: { type: ControlType.String, title: "FAQ5 Question", defaultValue: "What is Zero-Access Architecture?" },
  faq5Answer: { type: ControlType.String, title: "FAQ5 Answer", defaultValue: "Zero-Access Architecture means original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.", displayTextArea: true },
  faq6Question: { type: ControlType.String, title: "FAQ6 Question", defaultValue: "How is DTS different from SynTitan?" },
  faq6Answer: { type: ControlType.String, title: "FAQ6 Answer", defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.", displayTextArea: true },
})
