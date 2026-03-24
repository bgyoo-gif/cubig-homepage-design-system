import * as React from "react"
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  kpi1Number?: string
  kpi1Label?: string
  kpi1Sub?: string
  kpi2Number?: string
  kpi2Label?: string
  kpi2Sub?: string
  kpi3Number?: string
  kpi3Label?: string
  kpi3Sub?: string
  kpi4Number?: string
  kpi4Label?: string
  kpi4Sub?: string
  bannerPart1?: string
  bannerEmphasis1?: string
  bannerPart2?: string
  bannerEmphasis2?: string
  bannerPart3?: string
  bannerEmphasis3?: string
  bannerPart4?: string
}

export default function Section02_KPIBand({
  kpi1Number = "+30pp",
  kpi1Label = "F1-Score Lift",
  kpi1Sub = "58.55% → 88.55%",
  kpi2Number = "-90%",
  kpi2Label = "Time to Deploy",
  kpi2Sub = "4 weeks → 1 day",
  kpi3Number = "97.6%",
  kpi3Label = "AI Detection Rate",
  kpi3Sub = "IBK Industrial Bank",
  kpi4Number = "277K+",
  kpi4Label = "Synthetic Records",
  kpi4Sub = "Kyobo Life Insurance",
  bannerPart1 = "True AI-ready data means it is ",
  bannerEmphasis1 = "usable",
  bannerPart2 = ", ",
  bannerEmphasis2 = "privacy-safe",
  bannerPart3 = ", and ",
  bannerEmphasis3 = "stable for production execution",
  bannerPart4 = ".",
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

  const kpis = [
    { number: kpi1Number, label: kpi1Label, sub: kpi1Sub },
    { number: kpi2Number, label: kpi2Label, sub: kpi2Sub },
    { number: kpi3Number, label: kpi3Label, sub: kpi3Sub },
    { number: kpi4Number, label: kpi4Label, sub: kpi4Sub },
  ]

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
          {/* KPI Band */}
          <div style={{
            borderRadius: isMobile ? 24 : 40,
            padding: isMobile ? "32px 16px" : isTablet ? "40px 24px" : "48px 32px",
            display: "grid",
            gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
            gap: isMobile ? 20 : 32,
            justifyItems: "center",
            backgroundImage: `url('${IMAGE_BASE}/bg-lavender.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            position: "relative",
            overflow: "hidden",
          }}>
            {/* Overlay */}
            <div style={{
              position: "absolute",
              inset: 0,
              background: "rgba(0,0,0,0.35)",
              zIndex: 0,
            }} />
            {kpis.map((kpi, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                gap: isMobile ? 8 : 12,
                textAlign: "center",
                position: "relative",
                zIndex: 1,
              }}>
                <span style={{
                  fontFamily: '"DM Sans", sans-serif',
                  fontSize: isMobile ? 32 : isTablet ? 40 : 50,
                  fontWeight: 700,
                  lineHeight: 1,
                  color: "#ffffff",
                }}>{kpi.number}</span>
                <p style={{
                  fontSize: isMobile ? 12 : 14,
                  color: "rgba(255,255,255,0.85)",
                  lineHeight: 1.5,
                }}>{kpi.label}</p>
                <span style={{
                  fontSize: isMobile ? 11 : 12,
                  color: "rgba(255,255,255,0.65)",
                  fontFamily: '"Fragment Mono", monospace',
                  marginTop: 2,
                }}>{kpi.sub}</span>
              </div>
            ))}
          </div>

          {/* Banner */}
          <div style={{ marginTop: 24 }}>
            <div style={{
              width: "100%",
              textAlign: "center",
              padding: isMobile ? "24px 20px" : "32px 48px",
              borderRadius: isMobile ? 24 : 40,
              backgroundImage: `url('${IMAGE_BASE}/bg-green-wave.png')`,
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
              <p style={{ color: "#0f0f0f", position: "relative", zIndex: 1 }}>
                {bannerPart1}<em>{bannerEmphasis1}</em>{bannerPart2}<em>{bannerEmphasis2}</em>{bannerPart3}<em>{bannerEmphasis3}</em>{bannerPart4}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section02_KPIBand, {
  kpi1Number: { type: ControlType.String, title: "KPI1 Number", defaultValue: "+30pp" },
  kpi1Label: { type: ControlType.String, title: "KPI1 Label", defaultValue: "F1-Score Lift" },
  kpi1Sub: { type: ControlType.String, title: "KPI1 Sub", defaultValue: "58.55% → 88.55%" },
  kpi2Number: { type: ControlType.String, title: "KPI2 Number", defaultValue: "-90%" },
  kpi2Label: { type: ControlType.String, title: "KPI2 Label", defaultValue: "Time to Deploy" },
  kpi2Sub: { type: ControlType.String, title: "KPI2 Sub", defaultValue: "4 weeks → 1 day" },
  kpi3Number: { type: ControlType.String, title: "KPI3 Number", defaultValue: "97.6%" },
  kpi3Label: { type: ControlType.String, title: "KPI3 Label", defaultValue: "AI Detection Rate" },
  kpi3Sub: { type: ControlType.String, title: "KPI3 Sub", defaultValue: "IBK Industrial Bank" },
  kpi4Number: { type: ControlType.String, title: "KPI4 Number", defaultValue: "277K+" },
  kpi4Label: { type: ControlType.String, title: "KPI4 Label", defaultValue: "Synthetic Records" },
  kpi4Sub: { type: ControlType.String, title: "KPI4 Sub", defaultValue: "Kyobo Life Insurance" },
  bannerPart1: { type: ControlType.String, title: "Banner Part 1", defaultValue: "True AI-ready data means it is " },
  bannerEmphasis1: { type: ControlType.String, title: "Banner Emphasis 1", defaultValue: "usable" },
  bannerPart2: { type: ControlType.String, title: "Banner Part 2", defaultValue: ", " },
  bannerEmphasis2: { type: ControlType.String, title: "Banner Emphasis 2", defaultValue: "privacy-safe" },
  bannerPart3: { type: ControlType.String, title: "Banner Part 3", defaultValue: ", and " },
  bannerEmphasis3: { type: ControlType.String, title: "Banner Emphasis 3", defaultValue: "stable for production execution" },
  bannerPart4: { type: ControlType.String, title: "Banner Part 4", defaultValue: "." },
})
