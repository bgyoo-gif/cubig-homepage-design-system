import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  titlePart1?: string
  titleBrand?: string
  bannerText?: string
  cardABadge?: string
  cardATitle?: string
  cardADescription?: string
  cardACheck1?: string
  cardACheck2?: string
  cardACheck3?: string
  cardACheck4?: string
  cardACheck5?: string
  cardABtnLabel?: string
  cardABtnHref?: string
  cardBBadge?: string
  cardBTitle?: string
  cardBDescription?: string
  cardBCheck1?: string
  cardBCheck2?: string
  cardBCheck3?: string
  cardBBtnLabel?: string
  cardBBtnHref?: string
}

export default function Section07_Deployment({
  titlePart1 = "Standalone or Integrated with ",
  titleBrand = "SynTitan",
  bannerText = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  cardABadge = "MODE A - INDEPENDENT",
  cardATitle = "DTS Standalone",
  cardADescription = "Use DTS without SynTitan -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.",
  cardACheck1 = "Fix class imbalance -- oversample minority classes with distribution fidelity",
  cardACheck2 = "Augment sparse datasets to production-grade volume",
  cardACheck3 = "Generate edge cases and rare event samples",
  cardACheck4 = "Replace missing values with statistically valid equivalents",
  cardACheck5 = "Expand narrow training sets without data collection overhead",
  cardABtnLabel = "AWS Marketplace",
  cardABtnHref = "https://aws.amazon.com/marketplace",
  cardBBadge = "MODE B - INTEGRATED",
  cardBTitle = "DTS + SynTitan",
  cardBDescription = "When privacy or compliance is the blocker -- regulated data that can't reach models -- DTS runs inside SynTitan to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.",
  cardBCheck1 = "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter",
  cardBCheck2 = "Synthetic datasets versioned and bound to execution states",
  cardBCheck3 = "Change log tracks every data generation event",
  cardBBtnLabel = "See SynTitan Platform",
  cardBBtnHref = "/syntitan",
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

  const productStyle: React.CSSProperties = {
    fontFamily: '"Oxanium", sans-serif',
    fontWeight: 700,
  }

  const btnStyle: React.CSSProperties = {
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
    padding: isMobile ? "10px 24px" : "12px 32px",
    backgroundColor: "transparent",
    color: "#0f0f0f",
    border: "1px solid #e6e7e9",
    width: isMobile ? "100%" : "auto",
  }

  const checkIconStyle: React.CSSProperties = {
    width: 20,
    height: 20,
    flexShrink: 0,
    marginTop: 2,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#0e824c",
    fontWeight: 700,
    fontSize: 16,
  }

  const cardAItems = [cardACheck1, cardACheck2, cardACheck3, cardACheck4, cardACheck5]
  const cardBItems = [cardBCheck1, cardBCheck2, cardBCheck3]

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#f7f7f7",
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
              {titlePart1}<span style={productStyle}>{titleBrand}</span>
            </h2>
          </div>

          {/* Card Grid */}
          <div style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: 24,
          }}>
            {/* Card A */}
            <div style={{
              padding: 2,
              borderRadius: 18,
              boxShadow: "rgba(113, 141, 176, 0.25) 0px 1px 20px 0px",
              background: "linear-gradient(109deg, #01CA51 0%, #FFEFF5 17%, #9AE6AD 43%, #C9FFE1 65%, #01CA51 84%, #01CA51 100%)",
            }}>
              <div style={{
                borderRadius: 16,
                padding: isMobile ? 20 : 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(99deg, #F0FDF5 0%, #FCFCFE 58%, #fff 100%)",
                boxSizing: "border-box",
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: '"Fragment Mono", monospace',
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  border: "1px solid #725bea",
                  color: "#725bea",
                  marginBottom: 16,
                }}>{cardABadge}</span>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>{cardATitle}</h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: "#636363",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  {cardADescription}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, padding: 0 }}>
                  {cardAItems.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: isMobile ? 14 : 16, lineHeight: 1.5, color: "#0f0f0f" }}>
                      <span style={checkIconStyle}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", paddingTop: 24 }}>
                  <a href={cardABtnHref} target="_blank" rel="noopener noreferrer" style={btnStyle}>{cardABtnLabel}</a>
                </div>
              </div>
            </div>

            {/* Card B */}
            <div style={{
              padding: 2,
              borderRadius: 18,
              boxShadow: "rgba(113, 141, 176, 0.25) 0px 1px 20px 0px",
              background: "linear-gradient(109deg, #FCD6FF 0%, #fff 17%, #FFEDFA 38%, #D48AFF 51%, #fff 73%, #FCD6FF 100%)",
            }}>
              <div style={{
                borderRadius: 16,
                padding: isMobile ? 20 : 32,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                background: "linear-gradient(99deg, #F8EDFF 0%, #FCFCFE 58%, #fff 100%)",
                boxSizing: "border-box",
              }}>
                <span style={{
                  display: "inline-flex",
                  alignItems: "center",
                  width: "fit-content",
                  padding: "4px 12px",
                  borderRadius: 9999,
                  fontSize: 12,
                  fontWeight: 500,
                  fontFamily: '"Fragment Mono", monospace',
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  border: "1px solid #725bea",
                  color: "#725bea",
                  marginBottom: 16,
                }}>{cardBBadge}</span>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>
                  {cardBTitle}
                </h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: "#636363",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  {cardBDescription}
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24, padding: 0 }}>
                  {cardBItems.map((item, i) => (
                    <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 8, fontSize: isMobile ? 14 : 16, lineHeight: 1.5, color: "#0f0f0f" }}>
                      <span style={checkIconStyle}>✓</span>{item}
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: "auto", paddingTop: 24 }}>
                  <a href={cardBBtnHref} style={btnStyle}>
                    {cardBBtnLabel}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Note Banner */}
          <div style={{ marginTop: 32 }}>
            <div role="note" style={{
              padding: isMobile ? "14px 16px" : "16px 24px",
              borderTop: "1px solid #e6e7e9",
              borderBottom: "1px solid #e6e7e9",
              backgroundColor: "rgba(21, 94, 160, 0.06)",
              fontSize: isMobile ? 13 : 14,
              lineHeight: 1.7,
              textAlign: "center",
              color: "#0f0f0f",
            }}>
              {bannerText}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section07_Deployment, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "Standalone or Integrated with " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "SynTitan" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
    displayTextArea: true,
  },
  cardABadge: { type: ControlType.String, title: "CardA: Badge", defaultValue: "MODE A - INDEPENDENT" },
  cardATitle: { type: ControlType.String, title: "CardA: Title", defaultValue: "DTS Standalone" },
  cardADescription: {
    type: ControlType.String,
    title: "CardA: Description",
    defaultValue: "Use DTS without SynTitan -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.",
    displayTextArea: true,
  },
  cardACheck1: { type: ControlType.String, title: "CardA: Check 1", defaultValue: "Fix class imbalance -- oversample minority classes with distribution fidelity" },
  cardACheck2: { type: ControlType.String, title: "CardA: Check 2", defaultValue: "Augment sparse datasets to production-grade volume" },
  cardACheck3: { type: ControlType.String, title: "CardA: Check 3", defaultValue: "Generate edge cases and rare event samples" },
  cardACheck4: { type: ControlType.String, title: "CardA: Check 4", defaultValue: "Replace missing values with statistically valid equivalents" },
  cardACheck5: { type: ControlType.String, title: "CardA: Check 5", defaultValue: "Expand narrow training sets without data collection overhead" },
  cardABtnLabel: { type: ControlType.String, title: "CardA: Btn Label", defaultValue: "AWS Marketplace" },
  cardABtnHref: { type: ControlType.String, title: "CardA: Btn Href", defaultValue: "https://aws.amazon.com/marketplace" },
  cardBBadge: { type: ControlType.String, title: "CardB: Badge", defaultValue: "MODE B - INTEGRATED" },
  cardBTitle: { type: ControlType.String, title: "CardB: Title", defaultValue: "DTS + SynTitan" },
  cardBDescription: {
    type: ControlType.String,
    title: "CardB: Description",
    defaultValue: "When privacy or compliance is the blocker -- regulated data that can't reach models -- DTS runs inside SynTitan to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.",
    displayTextArea: true,
  },
  cardBCheck1: { type: ControlType.String, title: "CardB: Check 1", defaultValue: "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter" },
  cardBCheck2: { type: ControlType.String, title: "CardB: Check 2", defaultValue: "Synthetic datasets versioned and bound to execution states" },
  cardBCheck3: { type: ControlType.String, title: "CardB: Check 3", defaultValue: "Change log tracks every data generation event" },
  cardBBtnLabel: { type: ControlType.String, title: "CardB: Btn Label", defaultValue: "See SynTitan Platform" },
  cardBBtnHref: { type: ControlType.String, title: "CardB: Btn Href", defaultValue: "/syntitan" },
})
