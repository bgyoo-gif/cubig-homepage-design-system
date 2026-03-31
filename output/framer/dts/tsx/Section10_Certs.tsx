// Section10_Certs.tsx — DTS Certified and Trusted (Cert Grid + Partner Grid)
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"
const GRAPHICS_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/graphics"

interface CertItem {
  group: string
  wreathText: string
  org: string
  year: string
  logoSrc?: string
  logoAlt?: string
}

interface PartnerItem {
  logoSrc: string
  name: string
}

const CERT_ITEMS: CertItem[] = [
  { group: "Certifications", wreathText: "Information Security Fast Track", org: "KISA", year: "2024", logoSrc: `${GRAPHICS_BASE}/cert-kisa.png`, logoAlt: "KISA" },
  { group: "Certifications", wreathText: "GS Certification", org: "TTA", year: "2025", logoSrc: `${GRAPHICS_BASE}/cert-gs.png`, logoAlt: "GS Certification" },
  { group: "Certifications", wreathText: "ISO/IEC 27001 (ISMS)", org: "ISO", year: "2026", logoSrc: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 27001" },
  { group: "Certifications", wreathText: "ISO/IEC 42001 (AIMS)", org: "ISO", year: "2026", logoSrc: `${GRAPHICS_BASE}/cert-iso.png`, logoAlt: "ISO/IEC 42001" },
  { group: "Awards", wreathText: "Information Security Innovation Award", org: "Ministry of Science & ICT", year: "2024", logoSrc: `${GRAPHICS_BASE}/awards-ministry-of-science-and-ict.jpg`, logoAlt: "Ministry of Science & ICT" },
  { group: "Awards", wreathText: "Startup World Cup — Finalist", org: "Startup World Cup", year: "2025", logoSrc: `${GRAPHICS_BASE}/cert-startupworldcup.png`, logoAlt: "Startup World Cup" },
  { group: "Awards", wreathText: "Next Rise — Global Innovator", org: "Next Rise", year: "2025" },
  { group: "Awards", wreathText: "T Challenge 2026 — Finalist", org: "Deutsche Telekom", year: "2026", logoSrc: `${IMAGE_BASE}/partner-deutsche-telekom.avif`, logoAlt: "Deutsche Telekom" },
  { group: "Awards", wreathText: "AI EXPO KOREA — AI Medical Innovation Award", org: "AI EXPO KOREA", year: "2025", logoSrc: `${GRAPHICS_BASE}/awards-koreaia.png`, logoAlt: "AI EXPO KOREA" },
  { group: "Recognition", wreathText: "Emerging AI+X Top 100", org: "—", year: "2026" },
  { group: "Recognition", wreathText: "Representative Vendor, Hyper-Synthetic Data", org: "Gartner", year: "2025", logoSrc: `${GRAPHICS_BASE}/cert-gartner.svg.png`, logoAlt: "Gartner" },
]

const PARTNER_ITEMS: PartnerItem[] = [
  { logoSrc: `${IMAGE_BASE}/partner-gartner.png`, name: "Gartner" },
  { logoSrc: `${IMAGE_BASE}/partner-navercloud.avif`, name: "Naver Cloud" },
  { logoSrc: `${IMAGE_BASE}/partner-sktelecom.avif`, name: "SK Telecom" },
  { logoSrc: `${IMAGE_BASE}/partner-kyobo.avif`, name: "Kyobo" },
  { logoSrc: `${IMAGE_BASE}/partner-korea army.avif`, name: "ROK Army" },
  { logoSrc: `${IMAGE_BASE}/partner-korea-airforce.avif`, name: "ROK Air Force" },
  { logoSrc: `${IMAGE_BASE}/partner-eumc.avif`, name: "EUMC" },
  { logoSrc: `${IMAGE_BASE}/partner-deutsche-telekom.avif`, name: "Deutsche Telekom" },
  { logoSrc: `${IMAGE_BASE}/partner-claroty.png`, name: "Claroty" },
  { logoSrc: `${IMAGE_BASE}/partner-korea-heritage-service.jpg`, name: "Korea Heritage Service" },
  { logoSrc: `${IMAGE_BASE}/partner-ministry-of-data-and-statistics.png`, name: "Ministry of Data and Statistics" },
]

interface Props {
  marginTop?: number
  sectionTitle?: string
  partnerLabel?: string
}

export default function Section10_Certs({
  marginTop = 0,
  sectionTitle = "Certified and Trusted",
  partnerLabel = "Trusted by enterprise & government",
}: Props) {
  // Duplicate arrays for seamless marquee loop
  const certDouble = [...CERT_ITEMS, ...CERT_ITEMS]
  const partnerDouble = [...PARTNER_ITEMS, ...PARTNER_ITEMS]

  useEffect(() => {
    const id = "font-dm-sans"
    if (document.getElementById(id)) return
    const link = document.createElement("link")
    link.id = id
    link.rel = "stylesheet"
    link.href = FONT_URL
    document.head.appendChild(link)
  }, [])

  return (
    <>
      <style>{`

        .s10-section {
          width: 100%;
          padding: 80px 0;
          overflow: hidden;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s10-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s10-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s10-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s10-container { padding: 0 120px; max-width: 1440px; } }

        /* Section Header */
        .s10-section-header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
          margin-bottom: 32px;
        }
        .s10-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s10-brand { color: #725bea; }
        @container (max-width: 767px) {
          .s10-section-header { text-align: left; }
          .s10-section-title { font-size: 28px; }
        }
        @container (min-width: 768px)  { .s10-section-title { font-size: 36px; } }
        @container (min-width: 1024px) { .s10-section-title { font-size: 40px; } }

        /* ─── Cert Grid Marquee ─── */
        @keyframes s10-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .s10-cert-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }
        .s10-cert-track {
          display: flex;
          gap: 24px;
          align-items: stretch;
          width: max-content;
          animation: s10-marquee 40s linear infinite;
        }
        .s10-cert-track:hover { animation-play-state: paused; }
        @container (max-width: 767px) {
          .s10-cert-track { gap: 16px; animation-duration: 25s; }
        }

        /* Cert Card */
        .s10-cert-card {
          background: #ffffff;
          border: 1px solid #e6e7e9;
          border-radius: 24px;
          padding: 24px 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 8px;
          flex-shrink: 0;
          width: 200px;
        }
        @container (max-width: 767px) {
          .s10-cert-card { width: 170px; padding: 16px; }
        }
        .s10-cert-group {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #725bea;
          margin-bottom: 4px;
        }
        .s10-cert-wreath {
          position: relative;
          width: 160px;
          height: 120px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @container (max-width: 767px) {
          .s10-cert-wreath { width: 130px; height: 96px; }
        }
        .s10-cert-wreath-left,
        .s10-cert-wreath-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 34%;
          object-fit: contain;
        }
        .s10-cert-wreath-left  { left: -6px;  object-position: right; }
        .s10-cert-wreath-right { right: -6px; object-position: left; }
        .s10-cert-wreath-text {
          position: relative;
          z-index: 1;
          font-size: 14px;
          font-weight: 700;
          color: #0f0f0f;
          text-align: center;
          line-height: 1.2;
          max-width: 90px;
        }
        @container (max-width: 767px) {
          .s10-cert-wreath-text { font-size: 12px; max-width: 72px; }
        }
        .s10-cert-org  { font-size: 12px; color: #636363; }
        .s10-cert-year { font-size: 12px; color: #9c9c9c; font-family: "Fragment Mono", monospace; }
        .s10-cert-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-top: auto;
          margin-bottom: -10px;
        }
        @container (max-width: 767px) {
          .s10-cert-logo { width: 48px; height: 48px; }
        }

        /* ─── Partner Grid Marquee ─── */
        .s10-partner-label {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9c9c9c;
          text-align: center;
          margin-bottom: 24px;
          margin-top: 48px;
        }
        .s10-partner-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }
        .s10-partner-track {
          display: flex;
          gap: 64px;
          align-items: center;
          width: max-content;
          animation: s10-marquee 30s linear infinite;
        }
        .s10-partner-track:hover { animation-play-state: paused; }
        @container (max-width: 767px) {
          .s10-partner-track { gap: 48px; animation-duration: 20s; }
        }
        .s10-partner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }
        .s10-partner-logo {
          width: 120px;
          height: 100px;
          object-fit: contain;
        }
        @container (max-width: 767px) {
          .s10-partner-logo { width: 100px; height: 75px; }
        }
        .s10-partner-name {
          font-size: 12px;
          color: #9c9c9c;
          text-align: center;
          white-space: nowrap;
        }
      `}</style>

      <section className="s10-section" id="section-10" style={{ marginTop: `${marginTop}px` }}>
        <div className="s10-inner">
        {/* Section Header */}
        <div className="s10-container">
          <div className="s10-section-header">
            <h2 className="s10-section-title">
              {sectionTitle.replace("Trusted", "")}
              <span className="s10-brand">Trusted</span>
            </h2>
          </div>
        </div>

        {/* Cert Grid — CSS marquee with manual 2x duplication */}
        <div className="s10-cert-grid" aria-label="Certifications and awards">
          <div className="s10-cert-track">
            {certDouble.map((item, i) => (
              <article
                className="s10-cert-card"
                key={i}
                aria-hidden={i >= CERT_ITEMS.length ? "true" : undefined}
              >
                <span className="s10-cert-group">{item.group}</span>
                <div className="s10-cert-wreath">
                  <img
                    className="s10-cert-wreath-left"
                    src={`${GRAPHICS_BASE}/cert-left.png`}
                    alt=""
                    loading="lazy"
                  />
                  <span className="s10-cert-wreath-text">{item.wreathText}</span>
                  <img
                    className="s10-cert-wreath-right"
                    src={`${GRAPHICS_BASE}/cert-right.png`}
                    alt=""
                    loading="lazy"
                  />
                </div>
                <span className="s10-cert-org">{item.org}</span>
                <span className="s10-cert-year">{item.year}</span>
                {item.logoSrc && (
                  <img
                    className="s10-cert-logo"
                    src={item.logoSrc}
                    alt={item.logoAlt || ""}
                    loading="lazy"
                  />
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Partner Grid — CSS marquee with manual 2x duplication */}
        <div className="s10-container">
          <p className="s10-partner-label">{partnerLabel}</p>
        </div>
        <div className="s10-partner-grid" aria-label="Partner logos">
          <div className="s10-partner-track">
            {partnerDouble.map((item, i) => (
              <div
                className="s10-partner-item"
                key={i}
                aria-hidden={i >= PARTNER_ITEMS.length ? "true" : undefined}
              >
                <img
                  className="s10-partner-logo"
                  src={item.logoSrc}
                  alt={item.name}
                  loading="lazy"
                />
                <span className="s10-partner-name">{item.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_Certs, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Certified and Trusted",
  },
  partnerLabel: {
    type: ControlType.String,
    title: "Partner Label",
    defaultValue: "Trusted by enterprise & government",
  },
})
