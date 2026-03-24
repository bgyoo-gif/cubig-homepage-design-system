import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  titleHighlight?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string

  signal1Icon?: string
  signal1Title?: string
  signal1Desc?: string
  signal2Icon?: string
  signal2Title?: string
  signal2Desc?: string
  signal3Icon?: string
  signal3Title?: string
  signal3Desc?: string
  signal4Icon?: string
  signal4Title?: string
  signal4Desc?: string
  signal5Icon?: string
  signal5Title?: string
  signal5Desc?: string
  signal6Icon?: string
  signal6Title?: string
  signal6Desc?: string

  concept1Title?: string
  concept1Desc?: string
  concept1LinkLabel?: string
  concept1LinkHref?: string
  concept2Title?: string
  concept2Desc?: string
  concept2LinkLabel?: string
  concept2LinkHref?: string
  concept3Title?: string
  concept3Desc?: string
  concept3LinkLabel?: string
  concept3LinkHref?: string
}

export default function Section09_FiveSignals({
  title = "Five Signals Your Data Is",
  titleHighlight = "Blocking AI",
  description = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  cta1Label = "Start evaluation",
  cta1Href = "/contact",
  cta2Label = "See production case records",
  cta2Href = "/proof",
  cta3Label = "Learn: AI-Ready Data Infrastructure",
  cta3Href = "/learn/ai-ready-data-infrastructure",

  signal1Icon = "🛡️",
  signal1Title = "Data exists but compliance blocks AI access",
  signal1Desc = "GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed.",
  signal2Icon = "📉",
  signal2Title = "Imbalanced datasets or coverage gaps distort model behavior",
  signal2Desc = "Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage.",
  signal3Icon = "⏱️",
  signal3Title = "Data retention policies delete what AI needs",
  signal3Desc = "Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present.",
  signal4Icon = "🔒",
  signal4Title = "Sensitive records can't leave the security perimeter",
  signal4Desc = "Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary.",
  signal5Icon = "🗄️",
  signal5Title = "Training data volume is too low for reliable AI",
  signal5Desc = "The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires.",
  signal6Icon = "✨",
  signal6Title = "DTS turns restricted or unusable data into AI-ready datasets",
  signal6Desc = "In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records.",

  concept1Title = "Differential Privacy",
  concept1Desc = "A mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  concept1LinkLabel = "Learn more",
  concept1LinkHref = "/learn/glossary#differential-privacy",
  concept2Title = "Zero-Access Architecture",
  concept2Desc = "Original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  concept2LinkLabel = "Learn more",
  concept2LinkHref = "/learn/glossary#zero-access",
  concept3Title = "Enterprise Synthetic Data",
  concept3Desc = "DTS is Cubig's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  concept3LinkLabel = "Read: AI-Ready Data",
  concept3LinkHref = "/learn/ai-ready-data-infrastructure",
}: Props) {
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

  const signals = [
    { icon: signal1Icon, title: signal1Title, desc: signal1Desc },
    { icon: signal2Icon, title: signal2Title, desc: signal2Desc },
    { icon: signal3Icon, title: signal3Title, desc: signal3Desc },
    { icon: signal4Icon, title: signal4Title, desc: signal4Desc },
    { icon: signal5Icon, title: signal5Title, desc: signal5Desc },
    { icon: signal6Icon, title: signal6Title, desc: signal6Desc },
  ]

  const keyConcepts = [
    { title: concept1Title, desc: concept1Desc, linkLabel: concept1LinkLabel, linkHref: concept1LinkHref },
    { title: concept2Title, desc: concept2Desc, linkLabel: concept2LinkLabel, linkHref: concept2LinkHref },
    { title: concept3Title, desc: concept3Desc, linkLabel: concept3LinkLabel, linkHref: concept3LinkHref },
  ]

  const btnPrimaryStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 9999,
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? 14 : 16,
    cursor: "pointer",
    border: "none",
    whiteSpace: "nowrap",
    textDecoration: "none",
    padding: "12px 32px",
    background: "linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)",
    color: "#ffffff",
    width: isMobile ? "100%" : "auto",
  }

  const btnSecondaryStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 9999,
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,
    fontSize: isMobile ? 14 : 16,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    padding: "12px 32px",
    backgroundColor: "transparent",
    color: "#0f0f0f",
    border: "1px solid #e6e7e9",
    width: isMobile ? "100%" : "auto",
  }

  const btnSmSecondaryStyle: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    borderRadius: 9999,
    fontFamily: '"DM Sans", sans-serif',
    fontWeight: 500,
    fontSize: 14,
    cursor: "pointer",
    whiteSpace: "nowrap",
    textDecoration: "none",
    padding: "8px 16px",
    backgroundColor: "transparent",
    color: "#0f0f0f",
    border: "1px solid #e6e7e9",
  }

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
              marginBottom: 16,
              textAlign: "center",
            }}>
              {title} <span style={{ color: "#725bea" }}>{titleHighlight}</span>
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
            margin: "0 auto",
            }}>{description}</p>
          </div>

          {/* Feature Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "repeat(2, 1fr)" : "repeat(3, 1fr)",
            gap: isMobile ? 16 : 32,
          }}>
            {signals.map((s, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
                padding: isMobile ? 16 : 24,
                border: "1px solid #e6e7e9",
                borderRadius: 18,
                backgroundColor: "#ffffff",
              }}>
                <div aria-hidden="true" style={{
                  width: 40,
                  height: 40,
                  borderRadius: 8,
                  backgroundColor: "#f7f7f7",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 20,
                  flexShrink: 0,
                }}>{s.icon}</div>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 14 : 16,
                  fontWeight: 600,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                }}>{s.title}</h3>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "#636363", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginTop: isMobile ? 32 : 48,
          }}>
            <a href={cta1Href} style={btnPrimaryStyle}>{cta1Label}</a>
            <a href={cta2Href} style={btnSecondaryStyle}>{cta2Label}</a>
            <a href={cta3Href} style={btnSecondaryStyle}>{cta3Label}</a>
          </div>

          {/* Concepts Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : isTablet ? "1fr" : "repeat(3, 1fr)",
            gap: 24,
            marginTop: isMobile ? 32 : 48,
          }}>
            {keyConcepts.map((c, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                borderRadius: 18,
                border: "1px solid #e6e7e9",
                padding: isMobile ? 16 : 24,
                boxShadow: "0px 24px 40px rgba(0, 0, 0, 0.04)",
                boxSizing: "border-box",
                display: "flex",
                flexDirection: "column",
              }}>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>{c.title}</h3>
                <p style={{ fontSize: isMobile ? 13 : 14, color: "#636363", lineHeight: 1.7, flex: 1 }}>{c.desc}</p>
                <div style={{ marginTop: "auto", paddingTop: 24 }}>
                  <a href={c.linkHref} style={btnSmSecondaryStyle}>{c.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section09_FiveSignals, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Five Signals Your Data Is" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Blocking AI" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
    displayTextArea: true,
  },
  cta1Label: { type: ControlType.String, title: "CTA1 Label", defaultValue: "Start evaluation" },
  cta1Href: { type: ControlType.String, title: "CTA1 Href", defaultValue: "/contact" },
  cta2Label: { type: ControlType.String, title: "CTA2 Label", defaultValue: "See production case records" },
  cta2Href: { type: ControlType.String, title: "CTA2 Href", defaultValue: "/proof" },
  cta3Label: { type: ControlType.String, title: "CTA3 Label", defaultValue: "Learn: AI-Ready Data Infrastructure" },
  cta3Href: { type: ControlType.String, title: "CTA3 Href", defaultValue: "/learn/ai-ready-data-infrastructure" },

  signal1Icon: { type: ControlType.String, title: "Signal1 Icon", defaultValue: "🛡️" },
  signal1Title: { type: ControlType.String, title: "Signal1 Title", defaultValue: "Data exists but compliance blocks AI access" },
  signal1Desc: { type: ControlType.String, title: "Signal1 Desc", defaultValue: "GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed.", displayTextArea: true },
  signal2Icon: { type: ControlType.String, title: "Signal2 Icon", defaultValue: "📉" },
  signal2Title: { type: ControlType.String, title: "Signal2 Title", defaultValue: "Imbalanced datasets or coverage gaps distort model behavior" },
  signal2Desc: { type: ControlType.String, title: "Signal2 Desc", defaultValue: "Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage.", displayTextArea: true },
  signal3Icon: { type: ControlType.String, title: "Signal3 Icon", defaultValue: "⏱️" },
  signal3Title: { type: ControlType.String, title: "Signal3 Title", defaultValue: "Data retention policies delete what AI needs" },
  signal3Desc: { type: ControlType.String, title: "Signal3 Desc", defaultValue: "Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present.", displayTextArea: true },
  signal4Icon: { type: ControlType.String, title: "Signal4 Icon", defaultValue: "🔒" },
  signal4Title: { type: ControlType.String, title: "Signal4 Title", defaultValue: "Sensitive records can't leave the security perimeter" },
  signal4Desc: { type: ControlType.String, title: "Signal4 Desc", defaultValue: "Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary.", displayTextArea: true },
  signal5Icon: { type: ControlType.String, title: "Signal5 Icon", defaultValue: "🗄️" },
  signal5Title: { type: ControlType.String, title: "Signal5 Title", defaultValue: "Training data volume is too low for reliable AI" },
  signal5Desc: { type: ControlType.String, title: "Signal5 Desc", defaultValue: "The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires.", displayTextArea: true },
  signal6Icon: { type: ControlType.String, title: "Signal6 Icon", defaultValue: "✨" },
  signal6Title: { type: ControlType.String, title: "Signal6 Title", defaultValue: "DTS turns restricted or unusable data into AI-ready datasets" },
  signal6Desc: { type: ControlType.String, title: "Signal6 Desc", defaultValue: "In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records.", displayTextArea: true },

  concept1Title: { type: ControlType.String, title: "Concept1 Title", defaultValue: "Differential Privacy" },
  concept1Desc: { type: ControlType.String, title: "Concept1 Desc", defaultValue: "A mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.", displayTextArea: true },
  concept1LinkLabel: { type: ControlType.String, title: "Concept1 Link Label", defaultValue: "Learn more" },
  concept1LinkHref: { type: ControlType.String, title: "Concept1 Link Href", defaultValue: "/learn/glossary#differential-privacy" },
  concept2Title: { type: ControlType.String, title: "Concept2 Title", defaultValue: "Zero-Access Architecture" },
  concept2Desc: { type: ControlType.String, title: "Concept2 Desc", defaultValue: "Original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.", displayTextArea: true },
  concept2LinkLabel: { type: ControlType.String, title: "Concept2 Link Label", defaultValue: "Learn more" },
  concept2LinkHref: { type: ControlType.String, title: "Concept2 Link Href", defaultValue: "/learn/glossary#zero-access" },
  concept3Title: { type: ControlType.String, title: "Concept3 Title", defaultValue: "Enterprise Synthetic Data" },
  concept3Desc: { type: ControlType.String, title: "Concept3 Desc", defaultValue: "DTS is Cubig's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.", displayTextArea: true },
  concept3LinkLabel: { type: ControlType.String, title: "Concept3 Link Label", defaultValue: "Read: AI-Ready Data" },
  concept3LinkHref: { type: ControlType.String, title: "Concept3 Link Href", defaultValue: "/learn/ai-ready-data-infrastructure" },
})
