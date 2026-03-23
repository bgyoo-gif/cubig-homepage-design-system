import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference"

interface Props {
  title?: string
  description?: string
}

export default function Section08_CaseRecords({
  title = "Production Case Records",
  description = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
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

  const cases = [
    {
      illustration: `${IMAGE_BASE}/graphics/illustration-defense.png`,
      category: "Defense",
      caseTitle: "Drone Attack Data Augmentation",
      bullets: [
        "Drone attack incidents are rare, leaving insufficient training data for defense AI systems",
        "Augmented drone attack data to improve military training and response system performance",
      ],
      images: [
        { src: `${IMAGE_BASE}/images/casestudy-defense-dron-1.png`, alt: "Drone attack — Original vs Synthetic" },
      ],
    },
    {
      illustration: `${IMAGE_BASE}/graphics/illustration-finance.png`,
      category: "Finance",
      caseTitle: "Anomaly Transaction Detection",
      bullets: [
        "High demand for AI-based anomaly transaction detection in financial institutions",
        "Actual anomaly transaction data accounts for only 0.2% of total data — extremely sparse",
        "Generated augmented anomaly data using synthetic data to improve model accuracy and reliability",
      ],
      images: [
        { src: `${IMAGE_BASE}/images/casestudy-financial-abnormal-transaction.png`, alt: "Financial anomaly detection — Original vs Synthetic" },
      ],
    },
    {
      illustration: `${IMAGE_BASE}/graphics/illustration-healthcare.png`,
      category: "Healthcare",
      caseTitle: "Rare Disease Data Augmentation",
      bullets: [
        "Medical data sharing is restricted due to complex IRB approval procedures",
        "CUBIG's zero-access technology enables patient privacy protection and rare disease data combination and analysis",
        "Augmented scarce rare disease datasets for improved AI training coverage",
      ],
      images: [
        { src: `${IMAGE_BASE}/images/casestudy-healthcare-lung.png`, alt: "Pneumonia X-ray — Original vs Synthetic", label: "Pneumonia X-ray — Original vs Synthetic" },
        { src: `${IMAGE_BASE}/images/casestudy-healthcare-brain.png`, alt: "Brain Tumor & Aneurysm CT — Original vs Synthetic", label: "Brain Tumor & Aneurysm CT — Original vs Synthetic" },
        { src: `${IMAGE_BASE}/images/casestudy-healthcare-diabetes.png`, alt: "Diabetic Retinopathy — Original vs Synthetic", label: "Diabetic Retinopathy — Original vs Synthetic" },
      ],
    },
  ]

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#ffffff",
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
              Production <span style={{ color: "#725bea" }}>Case Records</span>
            </h2>
            <p style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
              margin: "0 auto",
              textAlign: "center",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
            }}>{description}</p>
          </div>

          {/* Case Study Cards — 1col */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            {cases.map((c, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                borderRadius: 18,
                border: "1px solid #e6e7e9",
                boxShadow: "0px 24px 40px rgba(0,0,0,0.04)",
                display: "grid",
                gridTemplateColumns: isMobile ? "1fr" : "240px 1fr",
                gap: 0,
                padding: 0,
                overflow: "hidden",
              }}>
                {/* Left — Illustration + Category + Title */}
                <div style={{
                  borderRight: isMobile ? "none" : "1px solid #e6e7e9",
                  borderBottom: isMobile ? "1px solid #e6e7e9" : "none",
                  padding: isMobile ? "24px 16px" : "32px 16px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  textAlign: "center",
                  gap: 12,
                }}>
                  <img src={c.illustration} alt={c.category} style={{
                    width: 160,
                    height: 140,
                    objectFit: "contain",
                    borderRadius: 18,
                  }} />
                  <span style={{
                    fontSize: 12,
                    color: "#636363",
                    letterSpacing: "0.08em",
                    textTransform: "uppercase",
                  }}>{c.category}</span>
                  <span style={{
                    fontSize: 18,
                    fontWeight: 700,
                    color: "#0f0f0f",
                    lineHeight: 1.2,
                  }}>{c.caseTitle}</span>
                </div>

                {/* Right — Bullets + Images */}
                <div style={{
                  padding: isMobile ? 16 : 24,
                  display: "flex",
                  flexDirection: "column",
                  gap: 16,
                }}>
                  {/* Bullets */}
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 4 }}>
                    {c.bullets.map((b, j) => (
                      <li key={j} style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 8,
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "#0f0f0f",
                        wordBreak: "keep-all" as const,
                        overflowWrap: "break-word" as const,
                      }}>
                        <span style={{ color: "#725bea", fontSize: 20, lineHeight: "1", flexShrink: 0, marginTop: 2 }}>•</span>
                        {b}
                      </li>
                    ))}
                  </ul>

                  {/* Case Images */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 8 }}>
                    {c.images.map((img, j) => (
                      <div key={j} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                        <img src={img.src} alt={img.alt} loading="lazy" style={{
                          width: "100%",
                          borderRadius: 8,
                          border: "1px solid #e6e7e9",
                        }} />
                        {"label" in img && img.label && (
                          <span style={{
                            fontSize: 12,
                            color: "#9c9c9c",
                            textAlign: "center",
                            display: "block",
                            marginBottom: 8,
                          }}>{img.label}</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
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
