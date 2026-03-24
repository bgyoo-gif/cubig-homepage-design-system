import * as React from "react"
import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const GRAPHICS_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics"
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  titleHighlight?: string
  partnerLabel?: string

  cert1Group?: string
  cert1Text?: string
  cert1Org?: string
  cert1Year?: string
  cert2Group?: string
  cert2Text?: string
  cert2Org?: string
  cert2Year?: string
  cert3Group?: string
  cert3Text?: string
  cert3Org?: string
  cert3Year?: string
  cert4Group?: string
  cert4Text?: string
  cert4Org?: string
  cert4Year?: string
  cert5Group?: string
  cert5Text?: string
  cert5Org?: string
  cert5Year?: string
  cert6Group?: string
  cert6Text?: string
  cert6Org?: string
  cert6Year?: string
  cert7Group?: string
  cert7Text?: string
  cert7Org?: string
  cert7Year?: string
  cert8Group?: string
  cert8Text?: string
  cert8Org?: string
  cert8Year?: string
  cert9Group?: string
  cert9Text?: string
  cert9Org?: string
  cert9Year?: string
  cert10Group?: string
  cert10Text?: string
  cert10Org?: string
  cert10Year?: string
  cert11Group?: string
  cert11Text?: string
  cert11Org?: string
  cert11Year?: string

  partner1Name?: string
  partner2Name?: string
  partner3Name?: string
  partner4Name?: string
  partner5Name?: string
  partner6Name?: string
  partner7Name?: string
  partner8Name?: string
  partner9Name?: string
  partner10Name?: string
  partner11Name?: string
}

export default function Section10_CertsTrust({
  title = "Certified and",
  titleHighlight = "Trusted",
  partnerLabel = "Trusted by enterprise & government",

  cert1Group = "Certifications",
  cert1Text = "Information Security Fast Track",
  cert1Org = "KISA",
  cert1Year = "2024",
  cert2Group = "Certifications",
  cert2Text = "GS Certification",
  cert2Org = "TTA",
  cert2Year = "2025",
  cert3Group = "Certifications",
  cert3Text = "ISO/IEC 27001 (ISMS)",
  cert3Org = "ISO",
  cert3Year = "2026",
  cert4Group = "Certifications",
  cert4Text = "ISO/IEC 42001 (AIMS)",
  cert4Org = "ISO",
  cert4Year = "2026",
  cert5Group = "Awards",
  cert5Text = "Information Security Innovation Award",
  cert5Org = "Ministry of Science & ICT",
  cert5Year = "2024",
  cert6Group = "Awards",
  cert6Text = "Startup World Cup — Finalist",
  cert6Org = "Startup World Cup",
  cert6Year = "2025",
  cert7Group = "Awards",
  cert7Text = "Next Rise — Global Innovator",
  cert7Org = "Next Rise",
  cert7Year = "2025",
  cert8Group = "Awards",
  cert8Text = "T Challenge 2026 — Finalist",
  cert8Org = "Deutsche Telekom",
  cert8Year = "2026",
  cert9Group = "Awards",
  cert9Text = "AI EXPO KOREA — AI Medical Innovation Award",
  cert9Org = "AI EXPO KOREA",
  cert9Year = "2025",
  cert10Group = "Recognition",
  cert10Text = "Emerging AI+X Top 100",
  cert10Org = "—",
  cert10Year = "2026",
  cert11Group = "Recognition",
  cert11Text = "Representative Vendor, Hyper-Synthetic Data",
  cert11Org = "Gartner",
  cert11Year = "2025",

  partner1Name = "Gartner",
  partner2Name = "Naver Cloud",
  partner3Name = "SK Telecom",
  partner4Name = "Kyobo",
  partner5Name = "ROK Army",
  partner6Name = "ROK Air Force",
  partner7Name = "EUMC",
  partner8Name = "Deutsche Telekom",
  partner9Name = "Claroty",
  partner10Name = "Korea Heritage Service",
  partner11Name = "Ministry of Data and Statistics",
}: Props) {
  const certTrackRef = useRef<HTMLDivElement>(null)
  const partnerTrackRef = useRef<HTMLDivElement>(null)
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

  useEffect(() => {
    if (certTrackRef.current) {
      const track = certTrackRef.current
      const children = Array.from(track.children)
      children.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement
        clone.setAttribute("aria-hidden", "true")
        track.appendChild(clone)
      })
    }
    if (partnerTrackRef.current) {
      const track = partnerTrackRef.current
      const children = Array.from(track.children)
      children.forEach((item) => {
        const clone = item.cloneNode(true) as HTMLElement
        clone.setAttribute("aria-hidden", "true")
        track.appendChild(clone)
      })
    }
  }, [])

  const certs = [
    { group: cert1Group, text: cert1Text, org: cert1Org, year: cert1Year, logo: `${GRAPHICS_BASE}/cert-kisa.png`, logoAlt: "KISA" },
    { group: cert2Group, text: cert2Text, org: cert2Org, year: cert2Year, logo: `${GRAPHICS_BASE}/cert-gs.png`, logoAlt: "GS Certification" },
    { group: cert3Group, text: cert3Text, org: cert3Org, year: cert3Year, logo: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 27001" },
    { group: cert4Group, text: cert4Text, org: cert4Org, year: cert4Year, logo: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 42001" },
    { group: cert5Group, text: cert5Text, org: cert5Org, year: cert5Year, logo: `${GRAPHICS_BASE}/awards-ministry-of-science-and-ict.jpg`, logoAlt: "Ministry of Science & ICT" },
    { group: cert6Group, text: cert6Text, org: cert6Org, year: cert6Year, logo: `${GRAPHICS_BASE}/cert-startupworldcup.png`, logoAlt: "Startup World Cup" },
    { group: cert7Group, text: cert7Text, org: cert7Org, year: cert7Year, logo: `${GRAPHICS_BASE}/awards-NextRise.png`, logoAlt: "Next Rise" },
    { group: cert8Group, text: cert8Text, org: cert8Org, year: cert8Year, logo: `${IMAGE_BASE}/partner-deutsche-telekom.avif`, logoAlt: "Deutsche Telekom" },
    { group: cert9Group, text: cert9Text, org: cert9Org, year: cert9Year, logo: `${GRAPHICS_BASE}/awards-koreaia.png`, logoAlt: "AI EXPO KOREA" },
    { group: cert10Group, text: cert10Text, org: cert10Org, year: cert10Year, logo: null, logoAlt: "" },
    { group: cert11Group, text: cert11Text, org: cert11Org, year: cert11Year, logo: `${GRAPHICS_BASE}/cert-gartner.svg.png`, logoAlt: "Gartner" },
  ]

  const partners = [
    { name: partner1Name, logo: `${IMAGE_BASE}/partner-gartner.png` },
    { name: partner2Name, logo: `${IMAGE_BASE}/partner-navercloud.avif` },
    { name: partner3Name, logo: `${IMAGE_BASE}/partner-sktelecom.avif` },
    { name: partner4Name, logo: `${IMAGE_BASE}/partner-kyobo.avif` },
    { name: partner5Name, logo: `${IMAGE_BASE}/partner-korea army.avif` },
    { name: partner6Name, logo: `${IMAGE_BASE}/partner-korea-airforce.avif` },
    { name: partner7Name, logo: `${IMAGE_BASE}/partner-eumc.avif` },
    { name: partner8Name, logo: `${IMAGE_BASE}/partner-deutsche-telekom.avif` },
    { name: partner9Name, logo: `${IMAGE_BASE}/partner-claroty.png` },
    { name: partner10Name, logo: `${IMAGE_BASE}/partner-korea-heritage-service.jpg` },
    { name: partner11Name, logo: `${IMAGE_BASE}/partner-ministry-of-data-and-statistics.png` },
  ]

  // Inject keyframes once
  useEffect(() => {
    const styleId = "s10-marquee-keyframes"
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style")
      style.id = styleId
      style.textContent = `
        @keyframes s10-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `
      document.head.appendChild(style)
    }
  }, [])

  // Slower animation on mobile
  const certAnimDuration = isMobile ? "60s" : "40s"
  const partnerAnimDuration = isMobile ? "45s" : "30s"

  return (
    <div ref={containerRef} style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: isMobile ? "48px 0" : "80px 0",
        backgroundColor: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
        overflow: "hidden",
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
        </div>

        {/* Cert Marquee — full width */}
        <div aria-label="Certifications and awards" style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
          padding: isMobile ? "20px 0" : "32px 0",
        }}>
          <div
            ref={certTrackRef}
            style={{
              display: "flex",
              gap: isMobile ? 16 : 24,
              alignItems: "stretch",
              width: "max-content",
              animation: `s10-marquee ${certAnimDuration} linear infinite`,
            }}
          >
            {certs.map((cert, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e7e9",
                borderRadius: isMobile ? 16 : 24,
                padding: isMobile ? "16px 20px" : "24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 8,
                flexShrink: 0,
                width: isMobile ? 160 : 200,
              }}>
                <span style={{
                  fontFamily: '"Fragment Mono", monospace',
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#725bea",
                  marginBottom: 4,
                }}>{cert.group}</span>
                <div style={{
                  position: "relative",
                  width: isMobile ? 120 : 160,
                  height: isMobile ? 90 : 120,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                  <img
                    src={`${GRAPHICS_BASE}/cert-left.png`}
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      left: -6,
                      height: "100%",
                      width: "34%",
                      objectFit: "contain",
                      objectPosition: "right",
                    }}
                  />
                  <span style={{
                    position: "relative",
                    zIndex: 1,
                    fontSize: isMobile ? 12 : 14,
                    fontWeight: 700,
                    color: "#0f0f0f",
                    textAlign: "center",
                    lineHeight: 1.2,
                    maxWidth: 90,
                  margin: "0 auto",
                  }}>{cert.text}</span>
                  <img
                    src={`${GRAPHICS_BASE}/cert-right.png`}
                    alt=""
                    style={{
                      position: "absolute",
                      top: 0,
                      right: -6,
                      height: "100%",
                      width: "34%",
                      objectFit: "contain",
                      objectPosition: "left",
                    }}
                  />
                </div>
                <span style={{ fontSize: 12, color: "#636363" }}>{cert.org}</span>
                <span style={{ fontSize: 12, color: "#9c9c9c", fontFamily: '"Fragment Mono", monospace' }}>{cert.year}</span>
                {cert.logo && (
                  <img
                    src={cert.logo}
                    alt={cert.logoAlt}
                    style={{
                      width: isMobile ? 48 : 60,
                      height: isMobile ? 48 : 60,
                      objectFit: "contain",
                      marginTop: "auto",
                      marginBottom: -10,
                    }}
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Partner label */}
        <div style={{
          width: "100%",
          maxWidth: 1440,
         margin: "0 auto",
          padding: containerPadding,
          boxSizing: "border-box",
        }}>
          <p style={{
            fontFamily: '"Fragment Mono", monospace',
            fontSize: 10,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "#9c9c9c",
            textAlign: "center",
            marginBottom: 24,
            marginTop: isMobile ? 32 : 48,
          }}>{partnerLabel}</p>
        </div>

        {/* Partner Marquee — full width */}
        <div aria-label="Partner logos" style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
          padding: isMobile ? "20px 0" : "32px 0",
        }}>
          <div
            ref={partnerTrackRef}
            style={{
              display: "flex",
              gap: isMobile ? 32 : 64,
              alignItems: "center",
              width: "max-content",
              animation: `s10-marquee ${partnerAnimDuration} linear infinite`,
            }}
          >
            {partners.map((p, i) => (
              <div key={i} style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 8,
                flexShrink: 0,
              }}>
                <img
                  src={p.logo}
                  alt={p.name}
                  style={{ width: isMobile ? 80 : 120, height: isMobile ? 64 : 100, objectFit: "contain" }}
                />
                <span style={{ fontSize: 12, color: "#9c9c9c", textAlign: "center", whiteSpace: "nowrap" }}>{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section10_CertsTrust, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Certified and" },
  titleHighlight: { type: ControlType.String, title: "Title Highlight", defaultValue: "Trusted" },
  partnerLabel: { type: ControlType.String, title: "Partner Label", defaultValue: "Trusted by enterprise & government" },

  cert1Group: { type: ControlType.String, title: "Cert1 Group", defaultValue: "Certifications" },
  cert1Text: { type: ControlType.String, title: "Cert1 Text", defaultValue: "Information Security Fast Track" },
  cert1Org: { type: ControlType.String, title: "Cert1 Org", defaultValue: "KISA" },
  cert1Year: { type: ControlType.String, title: "Cert1 Year", defaultValue: "2024" },
  cert2Group: { type: ControlType.String, title: "Cert2 Group", defaultValue: "Certifications" },
  cert2Text: { type: ControlType.String, title: "Cert2 Text", defaultValue: "GS Certification" },
  cert2Org: { type: ControlType.String, title: "Cert2 Org", defaultValue: "TTA" },
  cert2Year: { type: ControlType.String, title: "Cert2 Year", defaultValue: "2025" },
  cert3Group: { type: ControlType.String, title: "Cert3 Group", defaultValue: "Certifications" },
  cert3Text: { type: ControlType.String, title: "Cert3 Text", defaultValue: "ISO/IEC 27001 (ISMS)" },
  cert3Org: { type: ControlType.String, title: "Cert3 Org", defaultValue: "ISO" },
  cert3Year: { type: ControlType.String, title: "Cert3 Year", defaultValue: "2026" },
  cert4Group: { type: ControlType.String, title: "Cert4 Group", defaultValue: "Certifications" },
  cert4Text: { type: ControlType.String, title: "Cert4 Text", defaultValue: "ISO/IEC 42001 (AIMS)" },
  cert4Org: { type: ControlType.String, title: "Cert4 Org", defaultValue: "ISO" },
  cert4Year: { type: ControlType.String, title: "Cert4 Year", defaultValue: "2026" },
  cert5Group: { type: ControlType.String, title: "Cert5 Group", defaultValue: "Awards" },
  cert5Text: { type: ControlType.String, title: "Cert5 Text", defaultValue: "Information Security Innovation Award" },
  cert5Org: { type: ControlType.String, title: "Cert5 Org", defaultValue: "Ministry of Science & ICT" },
  cert5Year: { type: ControlType.String, title: "Cert5 Year", defaultValue: "2024" },
  cert6Group: { type: ControlType.String, title: "Cert6 Group", defaultValue: "Awards" },
  cert6Text: { type: ControlType.String, title: "Cert6 Text", defaultValue: "Startup World Cup — Finalist" },
  cert6Org: { type: ControlType.String, title: "Cert6 Org", defaultValue: "Startup World Cup" },
  cert6Year: { type: ControlType.String, title: "Cert6 Year", defaultValue: "2025" },
  cert7Group: { type: ControlType.String, title: "Cert7 Group", defaultValue: "Awards" },
  cert7Text: { type: ControlType.String, title: "Cert7 Text", defaultValue: "Next Rise — Global Innovator" },
  cert7Org: { type: ControlType.String, title: "Cert7 Org", defaultValue: "Next Rise" },
  cert7Year: { type: ControlType.String, title: "Cert7 Year", defaultValue: "2025" },
  cert8Group: { type: ControlType.String, title: "Cert8 Group", defaultValue: "Awards" },
  cert8Text: { type: ControlType.String, title: "Cert8 Text", defaultValue: "T Challenge 2026 — Finalist" },
  cert8Org: { type: ControlType.String, title: "Cert8 Org", defaultValue: "Deutsche Telekom" },
  cert8Year: { type: ControlType.String, title: "Cert8 Year", defaultValue: "2026" },
  cert9Group: { type: ControlType.String, title: "Cert9 Group", defaultValue: "Awards" },
  cert9Text: { type: ControlType.String, title: "Cert9 Text", defaultValue: "AI EXPO KOREA — AI Medical Innovation Award" },
  cert9Org: { type: ControlType.String, title: "Cert9 Org", defaultValue: "AI EXPO KOREA" },
  cert9Year: { type: ControlType.String, title: "Cert9 Year", defaultValue: "2025" },
  cert10Group: { type: ControlType.String, title: "Cert10 Group", defaultValue: "Recognition" },
  cert10Text: { type: ControlType.String, title: "Cert10 Text", defaultValue: "Emerging AI+X Top 100" },
  cert10Org: { type: ControlType.String, title: "Cert10 Org", defaultValue: "—" },
  cert10Year: { type: ControlType.String, title: "Cert10 Year", defaultValue: "2026" },
  cert11Group: { type: ControlType.String, title: "Cert11 Group", defaultValue: "Recognition" },
  cert11Text: { type: ControlType.String, title: "Cert11 Text", defaultValue: "Representative Vendor, Hyper-Synthetic Data" },
  cert11Org: { type: ControlType.String, title: "Cert11 Org", defaultValue: "Gartner" },
  cert11Year: { type: ControlType.String, title: "Cert11 Year", defaultValue: "2025" },

  partner1Name: { type: ControlType.String, title: "Partner1 Name", defaultValue: "Gartner" },
  partner2Name: { type: ControlType.String, title: "Partner2 Name", defaultValue: "Naver Cloud" },
  partner3Name: { type: ControlType.String, title: "Partner3 Name", defaultValue: "SK Telecom" },
  partner4Name: { type: ControlType.String, title: "Partner4 Name", defaultValue: "Kyobo" },
  partner5Name: { type: ControlType.String, title: "Partner5 Name", defaultValue: "ROK Army" },
  partner6Name: { type: ControlType.String, title: "Partner6 Name", defaultValue: "ROK Air Force" },
  partner7Name: { type: ControlType.String, title: "Partner7 Name", defaultValue: "EUMC" },
  partner8Name: { type: ControlType.String, title: "Partner8 Name", defaultValue: "Deutsche Telekom" },
  partner9Name: { type: ControlType.String, title: "Partner9 Name", defaultValue: "Claroty" },
  partner10Name: { type: ControlType.String, title: "Partner10 Name", defaultValue: "Korea Heritage Service" },
  partner11Name: { type: ControlType.String, title: "Partner11 Name", defaultValue: "Ministry of Data and Statistics" },
})
