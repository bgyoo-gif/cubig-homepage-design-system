import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  heroTitle?: string
  description?: string
  ctaLabel?: string
  ctaHref?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string
  screenshotAlt?: string
}

export default function Section01_Hero({
  heroTitle = "DTS",
  description = "Your AI is only as good as the data it trains on — and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use.",
  ctaLabel = "Run technical demo",
  ctaHref = "/contact",
  cta2Label = "AWS Marketplace",
  cta2Href = "https://aws.amazon.com/marketplace",
  cta3Label = "See SynTitan Platform",
  cta3Href = "/syntitan",
  screenshotAlt = "DTS — Enterprise Synthetic Data Engine",
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
        paddingTop: isMobile ? 40 : 50,
        paddingBottom: 0,
        overflow: "visible",
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
          <div style={{
            display: "flex",
            flexDirection: "column",
            gap: isMobile ? 16 : 24,
            alignItems: "center",
            textAlign: "center",
            maxWidth: 860,
           margin: "0 auto",
          }}>
            <h1 style={{
              fontFamily: '"Oxanium", sans-serif',
              fontSize: isMobile ? 24 : isTablet ? 50 : 64,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: isMobile ? "-1px" : "-2px",
              marginBottom: isMobile ? 8 : 12,
            }}>{heroTitle}</h1>
            <p style={{
              fontSize: isMobile ? 14 : isTablet ? 16 : 18,
              color: "#636363",
              lineHeight: 1.7,
              maxWidth: 860,
             margin: "0 auto",
              margin: "0 auto 16px",
            }}>{description}</p>
          </div>
          <div style={{
            marginTop: isMobile ? 20 : 32,
            borderRadius: isMobile ? 24 : 40,
            padding: isMobile ? "24px 20px 0" : isTablet ? "32px 32px 0" : "48px 48px 0",
            backgroundImage: `url('${IMAGE_BASE}/bg-gradient-cream-jade.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflow: "hidden",
          }}>
            <div style={{
              borderRadius: "24px 24px 0 0",
              overflow: "hidden",
              boxShadow: "0 -8px 40px rgba(0,0,0,0.12)",
              backgroundColor: "#ffffff",
              minHeight: isMobile ? 160 : 320,
            }}>
              <img
                src={`${IMAGE_BASE}/screenshot-dts.webp`}
                alt={screenshotAlt}
                loading="lazy"
                style={{ width: "100%", display: "block" }}
              />
            </div>
          </div>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            marginTop: 24,
            paddingBottom: isMobile ? 40 : 64,
          }}>
            <a href={ctaHref} style={{
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
            }}>{ctaLabel}</a>
            <a href={cta2Href} target="_blank" rel="noopener noreferrer" style={{
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
            }}>{cta2Label}</a>
            <a href={cta3Href} style={{
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
            }}>{cta3Label}</a>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section01_Hero, {
  heroTitle: { type: ControlType.String, title: "Hero Title", defaultValue: "DTS" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Your AI is only as good as the data it trains on — and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use.",
    displayTextArea: true,
  },
  ctaLabel: { type: ControlType.String, title: "CTA Label", defaultValue: "Run technical demo" },
  ctaHref: { type: ControlType.String, title: "CTA Href", defaultValue: "/contact" },
  cta2Label: { type: ControlType.String, title: "CTA2 Label", defaultValue: "AWS Marketplace" },
  cta2Href: { type: ControlType.String, title: "CTA2 Href", defaultValue: "https://aws.amazon.com/marketplace" },
  cta3Label: { type: ControlType.String, title: "CTA3 Label", defaultValue: "See SynTitan Platform" },
  cta3Href: { type: ControlType.String, title: "CTA3 Href", defaultValue: "/syntitan" },
  screenshotAlt: { type: ControlType.String, title: "Screenshot Alt", defaultValue: "DTS — Enterprise Synthetic Data Engine" },
})
