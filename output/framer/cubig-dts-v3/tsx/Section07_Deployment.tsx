import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  bannerText?: string
  cardABtnLabel?: string
  cardABtnHref?: string
  cardBBtnLabel?: string
  cardBBtnHref?: string
}

export default function Section07_Deployment({
  title = "Standalone or Integrated with SynTitan",
  bannerText = "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
  cardABtnLabel = "AWS Marketplace",
  cardABtnHref = "https://aws.amazon.com/marketplace",
  cardBBtnLabel = "See SynTitan Platform",
  cardBBtnHref = "/syntitan",
}: Props) {
  const [isMobile, setIsMobile] = React.useState(false)
  const [isTablet, setIsTablet] = React.useState(false)

  React.useEffect(() => {
    const check = () => {
      setIsMobile(window.innerWidth < 768)
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024)
    }
    check()
    window.addEventListener("resize", check)
    return () => window.removeEventListener("resize", check)
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

  const cardAItems = [
    "Fix class imbalance -- oversample minority classes with distribution fidelity",
    "Augment sparse datasets to production-grade volume",
    "Generate edge cases and rare event samples",
    "Replace missing values with statistically valid equivalents",
    "Expand narrow training sets without data collection overhead",
  ]

  const cardBItems = [
    "Replace GDPR, PIPA, HIPAA-restricted data -- no original data leaves the perimeter",
    "Synthetic datasets versioned and bound to execution states",
    "Change log tracks every data generation event",
  ]

  return (
    <div style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
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
              Standalone or Integrated with <span style={productStyle}>SynTitan</span>
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
                }}>MODE A - INDEPENDENT</span>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>DTS Standalone</h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: "#636363",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  Use <span style={productStyle}>DTS</span> without <span style={productStyle}>SynTitan</span> -- directly against your data sources. Available on AWS Marketplace for enterprise procurement.
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
                }}>MODE B - INTEGRATED</span>
                <h3 style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 18 : 24,
                  fontWeight: 700,
                  color: "#0f0f0f",
                  lineHeight: 1.2,
                  marginBottom: 12,
                }}>
                  <span style={productStyle}>DTS</span> + <span style={productStyle}>SynTitan</span>
                </h3>
                <p style={{
                  fontSize: isMobile ? 13 : 14,
                  color: "#636363",
              wordBreak: "keep-all" as const,
              overflowWrap: "break-word" as const,
                  lineHeight: 1.7,
                  marginBottom: 24,
                }}>
                  When privacy or compliance is the blocker -- regulated data that can't reach models -- <span style={productStyle}>DTS</span> runs inside <span style={productStyle}>SynTitan</span> to generate privacy-safe replacements. The synthetic dataset is automatically versioned, bound to a Release State, and tracked in the Change Log.
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
                    {cardBBtnLabel} <span style={productStyle}>SynTitan</span>
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
              <span style={productStyle}>SynTitan</span> performs data quality refinement as part of execution stability. <span style={productStyle}>SynTitan</span> can use a subset of <span style={productStyle}>DTS</span> capabilities when privacy-safe synthetic data is needed, while <span style={productStyle}>DTS</span> is a full standalone enterprise synthetic data engine.
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section07_Deployment, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Standalone or Integrated with SynTitan" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "SynTitan performs data quality refinement as part of execution stability. SynTitan can use a subset of DTS capabilities when privacy-safe synthetic data is needed, while DTS is a full standalone enterprise synthetic data engine.",
    displayTextArea: true,
  },
  cardABtnLabel: { type: ControlType.String, title: "Card A Btn", defaultValue: "AWS Marketplace" },
  cardABtnHref: { type: ControlType.String, title: "Card A Href", defaultValue: "https://aws.amazon.com/marketplace" },
  cardBBtnLabel: { type: ControlType.String, title: "Card B Btn", defaultValue: "See" },
  cardBBtnHref: { type: ControlType.String, title: "Card B Href", defaultValue: "/syntitan" },
})
