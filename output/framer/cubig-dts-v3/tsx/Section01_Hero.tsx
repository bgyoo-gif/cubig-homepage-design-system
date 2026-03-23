import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
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
  description = "Your AI is only as good as the data it trains on — and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use.",
  ctaLabel = "Run technical demo",
  ctaHref = "/contact",
  cta2Label = "AWS Marketplace",
  cta2Href = "https://aws.amazon.com/marketplace",
  cta3Label = "See SynTitan Platform",
  cta3Href = "/syntitan",
  screenshotAlt = "DTS — Enterprise Synthetic Data Engine",
}: Props) {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap');

        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s1-section {
          width: 100%;
          padding: 50px 0 0;
          overflow: visible;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-hero {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }
        .s1-hero--screenshot {
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -2px;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s1-title-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }
        .s1-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto 16px;
        }
        .s1-screenshot-frame {
          margin-top: 32px;
          border-radius: 40px;
          padding: 48px 48px 0;
          background-image: url('${IMAGE_BASE}/bg-gradient-cream-jade.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .s1-screenshot {
          border-radius: 24px 24px 0 0;
          overflow: hidden;
          box-shadow: 0 -8px 40px rgba(0,0,0,0.12);
          background: #ffffff;
          min-height: 320px;
        }
        .s1-screenshot img {
          width: 100%;
          display: block;
        }
        .s1-actions-below {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 24px;
          padding-bottom: 64px;
        }
        .s1-btn {
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
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
        }
        .s1-btn--primary {
          background: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%);
          color: #ffffff;
        }
        .s1-btn--primary:hover { opacity: 0.88; }
        .s1-btn--secondary {
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s1-btn--secondary:hover { background-color: #f7f7f7; }

        @media (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 50px; }
          .s1-description { max-width: 720px; }
        }
        @media (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 64px; }
          .s1-description { max-width: 720px; }
        }
        @media (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 64px; }
          .s1-description { max-width: 860px; }
        }
        @media (max-width: 767px) {
          .s1-title { font-size: 24px; letter-spacing: -1px; }
          .s1-screenshot-frame { padding: 32px 32px 0; border-radius: 24px; }
          .s1-screenshot { min-height: 180px; border-radius: 18px 18px 0 0; }
          .s1-actions-below { flex-direction: column; align-items: center; }
        }
      `}</style>
      <section className="s1-section">
        <div className="s1-container">
          <div className="s1-hero s1-hero--screenshot">
            <h1 className="s1-title"><span className="s1-title-product">DTS</span></h1>
            <p className="s1-description">{description}</p>
          </div>
          <div className="s1-screenshot-frame">
            <div className="s1-screenshot">
              <img
                src={`${IMAGE_BASE}/screenshot-dts.avif`}
                alt={screenshotAlt}
                loading="lazy"
              />
            </div>
          </div>
          <div className="s1-actions-below">
            <a href={ctaHref} className="s1-btn s1-btn--primary">{ctaLabel}</a>
            <a href={cta2Href} className="s1-btn s1-btn--secondary" target="_blank" rel="noopener noreferrer">{cta2Label}</a>
            <a href={cta3Href} className="s1-btn s1-btn--secondary">{cta3Label}</a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
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
