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

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        @keyframes s10-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .s10-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
        }
        .s10-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s10-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s10-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s10-title-brand { color: #a617ff; }
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
        .s10-cert-group {
          font-family: "Fragment Mono", monospace;
          font-size: 10px;
          font-weight: 500;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          color: #a617ff;
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
        .s10-cert-wreath-left,
        .s10-cert-wreath-right {
          position: absolute;
          top: 0;
          height: 100%;
          width: 34%;
          object-fit: contain;
        }
        .s10-cert-wreath-left { left: -6px; object-position: right; }
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
        .s10-cert-org {
          font-size: 12px;
          color: #636363;
        }
        .s10-cert-year {
          font-size: 12px;
          color: #9c9c9c;
          font-family: "Fragment Mono", monospace;
        }
        .s10-cert-logo {
          width: 60px;
          height: 60px;
          object-fit: contain;
          margin-top: auto;
          margin-bottom: -10px;
        }
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
        .s10-partner-name {
          font-size: 12px;
          color: #9c9c9c;
          text-align: center;
          white-space: nowrap;
        }

        @media (min-width: 768px) {
          .s10-container { padding: 0 32px; }
          .s10-title { font-size: 22px; }
          .s10-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s10-container { padding: 0 32px; }
          .s10-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s10-container { padding: 0 120px; max-width: 1440px; }
          .s10-title { font-size: 28px; }
        }
        @media (max-width: 767px) {
          .s10-section-header { text-align: left; }
          .s10-title { font-size: 20px; }
          .s10-cert-card { width: 170px; padding: 16px; }
          .s10-cert-wreath { width: 130px; height: 96px; }
          .s10-cert-wreath-text { font-size: 12px; max-width: 72px; }
          .s10-cert-logo { width: 48px; height: 48px; }
          .s10-cert-track { gap: 16px; animation-duration: 25s; }
          .s10-partner-logo { width: 100px; height: 75px; }
          .s10-partner-track { gap: 48px; animation-duration: 20s; }
        }
      `}</style>
      <section className="s10-section">
        <div className="s10-container">
          <div className="s10-section-header">
            <h2 className="s10-title">
              Certified and <span className="s10-title-brand">Trusted</span>
            </h2>
          </div>
        </div>
        <div className="s10-cert-grid" aria-label="Certifications and awards">
          <div className="s10-cert-track" ref={certTrackRef}>
            {certs.map((cert, i) => (
              <article className="s10-cert-card" key={i}>
                <span className="s10-cert-group">{cert.group}</span>
                <div className="s10-cert-wreath">
                  <img className="s10-cert-wreath-left" src={`${GRAPHICS_BASE}/cert-left.png`} alt="" />
                  <span className="s10-cert-wreath-text">{cert.text}</span>
                  <img className="s10-cert-wreath-right" src={`${GRAPHICS_BASE}/cert-right.png`} alt="" />
                </div>
                <span className="s10-cert-org">{cert.org}</span>
                <span className="s10-cert-year">{cert.year}</span>
                {cert.logo && <img className="s10-cert-logo" src={cert.logo} alt={cert.logoAlt} />}
              </article>
            ))}
          </div>
        </div>
        <div className="s10-container">
          <p className="s10-partner-label">Trusted by enterprise &amp; government</p>
        </div>
        <div className="s10-partner-grid" aria-label="Partner logos">
          <div className="s10-partner-track" ref={partnerTrackRef}>
            {partners.map((p, i) => (
              <div className="s10-partner-item" key={i}>
                <img className="s10-partner-logo" src={p.logo} alt={p.name} />
                <span className="s10-partner-name">{p.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section10_CertsTrust, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Certified and Trusted" },
})
