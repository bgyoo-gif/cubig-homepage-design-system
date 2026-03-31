// Section01_Hero.tsx — DTS Hero Screenshot
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  marginTop?: number
  productName?: string
  description?: string
  primaryBtnText?: string
  primaryBtnHref?: string
  secondaryBtn1Text?: string
  secondaryBtn1Href?: string
  secondaryBtn2Text?: string
  secondaryBtn2Href?: string
  screenshotSrc?: string
  screenshotAlt?: string
}

export default function Section01_Hero({
  marginTop = 100,
  productName = "DTS",
  description = "Your AI is only as good as the data it trains on — and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use.",
  primaryBtnText = "Run technical demo",
  primaryBtnHref = "/contact",
  secondaryBtn1Text = "AWS Marketplace",
  secondaryBtn1Href = "https://aws.amazon.com/marketplace",
  secondaryBtn2Text = "See SynTitan Platform",
  secondaryBtn2Href = "/syntitan",
  screenshotSrc = `${IMAGE_BASE}/screenshot-dts.webp`,
  screenshotAlt = "DTS — Enterprise Synthetic Data Engine",
}: Props) {
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

        .s1-section {
          width: 100%;
          padding: ${marginTop}px 0 0;
          overflow: visible;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s1-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s1-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s1-hero {
          text-align: center;
          max-width: 860px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          align-items: center;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -2px;
          margin: 0 0 12px;
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
          max-width: 860px;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }

        /* Screenshot Frame */
        .s1-screenshot-frame {
          margin-top: 32px;
          border-radius: 40px;
          padding: 48px 48px 0;
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .s1-screenshot {
          border-radius: 24px 24px 0 0;
          overflow: hidden;
          box-shadow: 0 -8px 40px rgba(0, 0, 0, 0.12);
          background: #ffffff;
          min-height: 320px;
        }
        .s1-screenshot img {
          width: 100%;
          display: block;
        }

        /* CTA Buttons */
        .s1-actions {
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
          box-sizing: border-box;
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

        /* Responsive */
        @container (min-width: 768px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 50px; }
        }
        @container (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
          .s1-title { font-size: 64px; }
        }
        @container (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
          .s1-title { font-size: 64px; }
        }

        @container (max-width: 767px) {
          .s1-title { font-size: 36px; letter-spacing: -1px; }
          .s1-actions { flex-direction: column; align-items: center; }
          .s1-btn { width: 100%; max-width: 320px; }
          .s1-screenshot-frame { padding: 32px 24px 0; border-radius: 24px; }
          .s1-screenshot { min-height: 180px; border-radius: 18px 18px 0 0; }
        }
      `}</style>

      <section className="s1-section" id="section-1">
        <div className="s1-inner">
        <div className="s1-container">
          <div className="s1-hero">
            <h1 className="s1-title">
              <span className="s1-title-product">{productName}</span>
            </h1>
            <p className="s1-description">{description}</p>
          </div>
          <div className="s1-screenshot-frame">
            <div className="s1-screenshot">
              <img src={screenshotSrc} alt={screenshotAlt} loading="lazy" />
            </div>
          </div>
          <div className="s1-actions">
            <a href={primaryBtnHref} className="s1-btn s1-btn--primary">
              {primaryBtnText}
            </a>
            {secondaryBtn1Text && (
              <a
                href={secondaryBtn1Href}
                target={secondaryBtn1Href?.startsWith("http") ? "_blank" : undefined}
                rel={secondaryBtn1Href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="s1-btn s1-btn--secondary"
              >
                {secondaryBtn1Text}
              </a>
            )}
            {secondaryBtn2Text && (
              <a href={secondaryBtn2Href} className="s1-btn s1-btn--secondary">
                {secondaryBtn2Text}
              </a>
            )}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 100,
    min: 0,
    max: 200,
    step: 10,
  },
  productName: {
    type: ControlType.String,
    title: "Product Name",
    defaultValue: "DTS",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Your AI is only as good as the data it trains on — and most enterprise data is not AI-ready. DTS solves unusable data for AI: whether it's restricted by privacy rules, imbalanced, or missing the coverage your model needs. The result is an AI-ready dataset you can actually use.",
  },
  primaryBtnText: {
    type: ControlType.String,
    title: "Primary Button",
    defaultValue: "Run technical demo",
  },
  primaryBtnHref: {
    type: ControlType.String,
    title: "Primary Link",
    defaultValue: "/contact",
  },
  secondaryBtn1Text: {
    type: ControlType.String,
    title: "Secondary 1 Text",
    defaultValue: "AWS Marketplace",
  },
  secondaryBtn1Href: {
    type: ControlType.String,
    title: "Secondary 1 Link",
    defaultValue: "https://aws.amazon.com/marketplace",
  },
  secondaryBtn2Text: {
    type: ControlType.String,
    title: "Secondary 2 Text",
    defaultValue: "See SynTitan Platform",
  },
  secondaryBtn2Href: {
    type: ControlType.String,
    title: "Secondary 2 Link",
    defaultValue: "/syntitan",
  },
  screenshotSrc: {
    type: ControlType.Image,
    title: "Screenshot",
  },
  screenshotAlt: {
    type: ControlType.String,
    title: "Screenshot Alt",
    defaultValue: "DTS — Enterprise Synthetic Data Engine",
  },
})
