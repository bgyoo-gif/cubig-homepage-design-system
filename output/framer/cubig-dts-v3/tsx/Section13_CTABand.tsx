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
  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s13-section {
          width: 100%;
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s13-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 20, 0.62);
          z-index: 0;
        }
        .s13-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s13-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s13-title-brand-light { color: #c6c5fa; }
        .s13-description {
          font-size: 18px;
          color: #ffffff;
          line-height: 1.7;
          opacity: 0.9;
        }
        .s13-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .s13-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background-color: #ffffff;
          color: #0f0f0f;
        }
        .s13-btn:hover { opacity: 0.9; }
        .s13-footnote {
          font-size: 12px;
          color: rgba(255,255,255,0.55);
        }

        @media (min-width: 768px) {
          .s13-section { padding: 100px 32px; }
          .s13-title { font-size: 50px; }
        }
        @media (min-width: 1024px) {
          .s13-title { font-size: 56px; }
        }
        @media (min-width: 1440px) {
          .s13-section { padding: 120px 120px; }
          .s13-title { font-size: 64px; }
          .s13-inner { max-width: 1440px; }
        }
        @media (max-width: 767px) {
          .s13-title { font-size: 40px; }
          .s13-actions { flex-direction: column; align-items: center; max-width: 320px; margin: 0 auto; }
        }
      `}</style>
      <section className="s13-section" aria-label="Call to action">
        <div className="s13-inner">
          <h2 className="s13-title">
            {title} <span className="s13-title-brand-light">{titleBrandLight}</span>
          </h2>
          <p className="s13-description">{description}</p>
          <div className="s13-actions">
            <a href={cta1Href} className="s13-btn">{cta1Label}</a>
            <a href={cta2Href} className="s13-btn">{cta2Label}</a>
            <a href={cta3Href} className="s13-btn">{cta3Label}</a>
          </div>
          <p className="s13-footnote">{footnote}</p>
        </div>
      </section>
    </>
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
