import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  titleBrandLight?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string
  footnote?: string
}

export default function Section13_CTABand({
  title = "Restricted Data.",
  titleBrandLight = "Usable AI.",
  description = "DTS turns restricted, unusable, and inaccessible enterprise data into privacy-safe synthetic datasets -- without ever moving the original data. GS Certified. KISA approved. Available on AWS Marketplace.",
  cta1Label = "Run technical demo",
  cta1Href = "/contact",
  cta2Label = "See production cases",
  cta2Href = "/proof",
  cta3Label = "Explore SynTitan",
  cta3Href = "/syntitan",
  footnote = "30-min review / no sales pitch",
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
    border: "none",
    whiteSpace: "nowrap",
    textDecoration: "none",
    padding: isMobile ? "12px 24px" : "12px 32px",
    backgroundColor: "#ffffff",
    color: "#0f0f0f",
    width: isMobile ? "100%" : "auto",
  }

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section
        aria-label="Call to action"
        style={{
          width: "100%",
          backgroundImage: `url('${IMAGE_BASE}/bg-wave-teal-blue.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
          overflow: "hidden",
          padding: isMobile ? "64px 16px" : isTablet ? "80px 32px" : "120px 120px",
          textAlign: "center",
          fontFamily: '"DM Sans", sans-serif',
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* Overlay */}
        <div style={{
          position: "absolute",
          inset: 0,
          background: "rgba(10, 10, 20, 0.62)",
          zIndex: 0,
        }} />

        {/* Inner */}
        <div style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 860,
         margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: isMobile ? 16 : 24,
        }}>
          <h2 style={{
            fontFamily: '"DM Sans", sans-serif',
            fontSize: isMobile ? 40 : isTablet ? 50 : 64,
            fontWeight: 700,
            color: "#ffffff",
            lineHeight: 1.2,
            letterSpacing: "-0.5px",
          }}>
            {title} <span style={{ color: "#c6c5fa" }}>{titleBrandLight}</span>
          </h2>
          <p style={{
            fontSize: isMobile ? 14 : 18,
            color: "#ffffff",
            lineHeight: 1.7,
            opacity: 0.9,
          }}>{description}</p>
          <div style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            flexWrap: "wrap",
            gap: 12,
            justifyContent: "center",
            width: isMobile ? "100%" : "auto",
          }}>
            <a href={cta1Href} style={btnStyle}>{cta1Label}</a>
            <a href={cta2Href} style={btnStyle}>{cta2Label}</a>
            <a href={cta3Href} style={btnStyle}>{cta3Label}</a>
          </div>
          <p style={{
            fontSize: 12,
            color: "rgba(255,255,255,0.55)",
          }}>{footnote}</p>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section13_CTABand, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Restricted Data." },
  titleBrandLight: { type: ControlType.String, title: "Title Brand Light", defaultValue: "Usable AI." },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "DTS turns restricted, unusable, and inaccessible enterprise data into privacy-safe synthetic datasets -- without ever moving the original data. GS Certified. KISA approved. Available on AWS Marketplace.",
    displayTextArea: true,
  },
  cta1Label: { type: ControlType.String, title: "CTA1 Label", defaultValue: "Run technical demo" },
  cta1Href: { type: ControlType.String, title: "CTA1 Href", defaultValue: "/contact" },
  cta2Label: { type: ControlType.String, title: "CTA2 Label", defaultValue: "See production cases" },
  cta2Href: { type: ControlType.String, title: "CTA2 Href", defaultValue: "/proof" },
  cta3Label: { type: ControlType.String, title: "CTA3 Label", defaultValue: "Explore SynTitan" },
  cta3Href: { type: ControlType.String, title: "CTA3 Href", defaultValue: "/syntitan" },
  footnote: { type: ControlType.String, title: "Footnote", defaultValue: "30-min review / no sales pitch" },
})
