import { useEffect, useRef } from "react"
import { addPropertyControls, ControlType } from "framer"

const GRAPHICS_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics"
const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
}

export default function Section10_CertsTrust({
  title = "Certified and Trusted",
}: Props) {
  const certTrackRef = useRef<HTMLDivElement>(null)
  const partnerTrackRef = useRef<HTMLDivElement>(null)

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
    { group: "Certifications", text: "Information Security Fast Track", org: "KISA", year: "2024", logo: `${GRAPHICS_BASE}/cert-kisa.png`, logoAlt: "KISA" },
    { group: "Certifications", text: "GS Certification", org: "TTA", year: "2025", logo: `${GRAPHICS_BASE}/cert-gs.png`, logoAlt: "GS Certification" },
    { group: "Certifications", text: "ISO/IEC 27001 (ISMS)", org: "ISO", year: "2026", logo: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 27001" },
    { group: "Certifications", text: "ISO/IEC 42001 (AIMS)", org: "ISO", year: "2026", logo: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 42001" },
    { group: "Awards", text: "Information Security Innovation Award", org: "Ministry of Science & ICT", year: "2024", logo: `${GRAPHICS_BASE}/awards-ministry-of-science-and-ict.jpg`, logoAlt: "Ministry of Science & ICT" },
    { group: "Awards", text: "Startup World Cup — Finalist", org: "Startup World Cup", year: "2025", logo: `${GRAPHICS_BASE}/cert-startupworldcup.png`, logoAlt: "Startup World Cup" },
    { group: "Awards", text: "Next Rise — Global Innovator", org: "Next Rise", year: "2025", logo: `${GRAPHICS_BASE}/awards-NextRise.png`, logoAlt: "Next Rise" },
    { group: "Awards", text: "T Challenge 2026 — Finalist", org: "Deutsche Telekom", year: "2026", logo: `${IMAGE_BASE}/partner-deutsche-telekom.avif`, logoAlt: "Deutsche Telekom" },
    { group: "Awards", text: "AI EXPO KOREA — AI Medical Innovation Award", org: "AI EXPO KOREA", year: "2025", logo: `${GRAPHICS_BASE}/awards-koreaia.png`, logoAlt: "AI EXPO KOREA" },
    { group: "Recognition", text: "Emerging AI+X Top 100", org: "—", year: "2026", logo: null, logoAlt: "" },
    { group: "Recognition", text: "Representative Vendor, Hyper-Synthetic Data", org: "Gartner", year: "2025", logo: `${GRAPHICS_BASE}/cert-gartner.svg.png`, logoAlt: "Gartner" },
  ]

  const partners = [
    { name: "Gartner", logo: `${IMAGE_BASE}/partner-gartner.png` },
    { name: "Naver Cloud", logo: `${IMAGE_BASE}/partner-navercloud.avif` },
    { name: "SK Telecom", logo: `${IMAGE_BASE}/partner-sktelecom.avif` },
    { name: "Kyobo", logo: `${IMAGE_BASE}/partner-kyobo.avif` },
    { name: "ROK Army", logo: `${IMAGE_BASE}/partner-korea army.avif` },
    { name: "ROK Air Force", logo: `${IMAGE_BASE}/partner-korea-airforce.avif` },
    { name: "EUMC", logo: `${IMAGE_BASE}/partner-eumc.avif` },
    { name: "Deutsche Telekom", logo: `${IMAGE_BASE}/partner-deutsche-telekom.avif` },
    { name: "Claroty", logo: `${IMAGE_BASE}/partner-claroty.png` },
    { name: "Korea Heritage Service", logo: `${IMAGE_BASE}/partner-korea-heritage-service.jpg` },
    { name: "Ministry of Data and Statistics", logo: `${IMAGE_BASE}/partner-ministry-of-data-and-statistics.png` },
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

  return (
    <div style={{ width: "100%", fontFamily: '"DM Sans", sans-serif', WebkitFontSmoothing: "antialiased" }}>
      <section style={{
        width: "100%",
        padding: "80px 0",
        backgroundColor: "#ffffff",
        fontFamily: '"DM Sans", sans-serif',
        WebkitFontSmoothing: "antialiased",
        overflow: "hidden",
      }}>
        <div style={{
          width: "100%",
          maxWidth: 1440,
          margin: "0 auto",
          padding: "0 120px",
          boxSizing: "border-box",
        }}>
          {/* Section Header */}
          <div style={{
            marginBottom: 32,
            textAlign: "left",
            paddingBottom: 24,
            borderBottom: "1px solid #e6e7e9",
          }}>
            <h2 style={{
              fontFamily: '"DM Sans", sans-serif',
              fontSize: 28,
              fontWeight: 700,
              color: "#0f0f0f",
              lineHeight: 1.2,
              letterSpacing: "-0.5px",
            }}>
              Certified and <span style={{ color: "#a617ff" }}>Trusted</span>
            </h2>
          </div>
        </div>

        {/* Cert Marquee — full width */}
        <div aria-label="Certifications and awards" style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
          padding: "32px 0",
        }}>
          <div
            ref={certTrackRef}
            style={{
              display: "flex",
              gap: 24,
              alignItems: "stretch",
              width: "max-content",
              animation: "s10-marquee 40s linear infinite",
            }}
          >
            {certs.map((cert, i) => (
              <article key={i} style={{
                backgroundColor: "#ffffff",
                border: "1px solid #e6e7e9",
                borderRadius: 24,
                padding: "24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                textAlign: "center",
                gap: 8,
                flexShrink: 0,
                width: 200,
              }}>
                <span style={{
                  fontFamily: '"Fragment Mono", monospace',
                  fontSize: 10,
                  fontWeight: 500,
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  color: "#a617ff",
                  marginBottom: 4,
                }}>{cert.group}</span>
                <div style={{
                  position: "relative",
                  width: 160,
                  height: 120,
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
                    fontSize: 14,
                    fontWeight: 700,
                    color: "#0f0f0f",
                    textAlign: "center",
                    lineHeight: 1.2,
                    maxWidth: 90,
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
                      width: 60,
                      height: 60,
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
          padding: "0 120px",
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
            marginTop: 48,
          }}>Trusted by enterprise &amp; government</p>
        </div>

        {/* Partner Marquee — full width */}
        <div aria-label="Partner logos" style={{
          width: "100vw",
          marginLeft: "calc(-50vw + 50%)",
          overflow: "hidden",
          padding: "32px 0",
        }}>
          <div
            ref={partnerTrackRef}
            style={{
              display: "flex",
              gap: 64,
              alignItems: "center",
              width: "max-content",
              animation: "s10-marquee 30s linear infinite",
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
                  style={{ width: 120, height: 100, objectFit: "contain" }}
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
  title: { type: ControlType.String, title: "Title", defaultValue: "Certified and Trusted" },
})
