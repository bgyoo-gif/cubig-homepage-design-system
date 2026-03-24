import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  titlePrefix?: string
  titleHighlight?: string
  titleSuffix?: string
  bannerText?: string
  body?: string
  tagline?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Section11_OperationalExample({
  titlePrefix = "Operational Example:",
  titleHighlight = "Fraud Detection",
  titleSuffix = "with Rare Events",
  bannerText = "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
  body = "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
  tagline = "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  ctaLabel = "See enterprise use cases",
  ctaHref = "/#enterprise-use-cases",
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
              {titlePrefix} <span style={{ color: "#725bea" }}>{titleHighlight}</span> {titleSuffix}
            </h2>
          </div>

          {/* Banner */}
          <div style={{
            width: "100%",
            textAlign: "center",
            padding: isMobile ? "24px 20px" : "32px 48px",
            borderRadius: isMobile ? 24 : 40,
            backgroundImage: `url('${IMAGE_BASE}/bg-peach.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
            fontSize: isMobile ? 14 : 18,
            fontWeight: 500,
            lineHeight: 1.7,
            isolation: "isolate",
          }}>
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(255,255,255,0.45)",
              zIndex: 0,
            }} />
            <p style={{ color: "#0f0f0f", position: "relative", zIndex: 1 }}>{bannerText}</p>
          </div>

          {/* Body */}
          <div style={{ maxWidth: 860, margin: "32px auto 0" }}>
            <p style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: isMobile ? 14 : 16,
              fontWeight: 500,
              lineHeight: 1.5,
              color: "#0f0f0f",
              wordBreak: "keep-all",
              overflowWrap: "break-word",
            }}>{body}</p>
            <p style={{
              marginTop: 16,
              color: "#9c9c9c",
              textAlign: "center",
              fontSize: 12,
              fontWeight: 500,
              lineHeight: 1.5,
            }}>{tagline}</p>
            <div style={{ marginTop: 24, textAlign: "center" }}>
              <a href={ctaHref} style={{
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
              }}>{ctaLabel}</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section11_OperationalExample, {
  titlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Operational Example:" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Fraud Detection" },
  titleSuffix: { type: ControlType.String, title: "Title Suffix", defaultValue: "with Rare Events" },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    defaultValue: "A financial services team building a fraud detection model found that rare anomaly events were severely underrepresented in training data -- real fraud cases were too few to train a reliable classifier.",
    displayTextArea: true,
  },
  body: {
    type: ControlType.String,
    title: "Body",
    defaultValue: "DTS generated synthetic fraud scenarios using differential privacy, expanding the rare-event class to statistically meaningful coverage. The resulting dataset could not be reverse-engineered to individual records -- satisfying both compliance requirements and model training needs.",
    displayTextArea: true,
  },
  tagline: {
    type: ControlType.String,
    title: "Tagline",
    defaultValue: "Blocker removed: unusable data (imbalanced dataset / rare class underrepresentation)",
  },
  ctaLabel: { type: ControlType.String, title: "CTA Label", defaultValue: "See enterprise use cases" },
  ctaHref: { type: ControlType.String, title: "CTA Href", defaultValue: "/#enterprise-use-cases" },
})
