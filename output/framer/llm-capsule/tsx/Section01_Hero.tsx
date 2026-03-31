// Section01_Hero.tsx — LLM Capsule Hero Screenshot
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
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
  title = "LLM Capsule",
  description = "Your team wants to use AI on enterprise data. Legal and compliance say the data is off-limits. LLM Capsule removes that blocker — detecting and anonymizing PII in LLM prompts, preventing prompt data leakage, and making enterprise LLM usage safe without leaving your perimeter.",
  primaryBtnText = "See it remove a PII blocker live",
  primaryBtnHref = "/contact",
  secondaryBtn1Text = "llmcapsule.ai",
  secondaryBtn1Href = "https://llmcapsule.ai",
  secondaryBtn2Text = "See SynTitan Platform",
  secondaryBtn2Href = "/syntitan",
  screenshotSrc = `${IMAGE_BASE}/screenshot-llmcapsule.webp`,
  screenshotAlt = "LLM Capsule — Enterprise AI Enablement",
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
          padding: 100px 0 0;
          overflow: visible;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
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
          padding: 0;
        }
        .s1-title {
          font-family: "DM Sans", sans-serif;
          font-size: 64px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -2px;
          margin: 0 0 12px;
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
          margin: 0 auto 32px;
        }

        /* Screenshot Frame */
        .s1-screenshot-frame {
          margin-top: 20px;
          border-radius: 40px;
          padding: 64px 64px 0;
          background-image: url('${IMAGE_BASE}/bg-paint-blue-iridescent.png');
          background-size: cover;
          background-position: center;
          overflow: hidden;
        }
        .s1-screenshot {
          border-radius: 24px 24px 0 0;
          overflow: hidden;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
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
        }
        .s1-btn--primary {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
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
        @media (min-width: 768px) {
          .s1-container { padding: 0 32px; }
        }
        @media (min-width: 1024px) {
          .s1-container { padding: 0 32px; }
        }
        @media (min-width: 1440px) {
          .s1-container { padding: 0 120px; max-width: 1440px; }
        }

        @media (max-width: 767px) {
          .s1-title { font-size: 40px; letter-spacing: -1px; }
          .s1-actions { flex-direction: column; align-items: center; }
          .s1-btn { width: 100%; max-width: 320px; }
          .s1-screenshot-frame { padding: 32px 32px 0; border-radius: 24px; }
          .s1-screenshot { min-height: 180px; border-radius: 18px 18px 0 0; }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .s1-title { font-size: 48px; }
        }
        @media (min-width: 1024px) and (max-width: 1439px) {
          .s1-title { font-size: 56px; }
        }
      `}</style>

      <section className="s1-section">
        <div className="s1-container">
          <div className="s1-hero">
            <h1 className="s1-title">
              <span className="s1-title-product">{title}</span>
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
      </section>
    </>
  )
}

addPropertyControls(Section01_Hero, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "LLM Capsule",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Your team wants to use AI on enterprise data. Legal and compliance say the data is off-limits. LLM Capsule removes that blocker — detecting and anonymizing PII in LLM prompts, preventing prompt data leakage, and making enterprise LLM usage safe without leaving your perimeter.",
  },
  primaryBtnText: {
    type: ControlType.String,
    title: "Primary Button",
    defaultValue: "See it remove a PII blocker live",
  },
  primaryBtnHref: {
    type: ControlType.String,
    title: "Primary Link",
    defaultValue: "/contact",
  },
  secondaryBtn1Text: {
    type: ControlType.String,
    title: "Secondary 1 Text",
    defaultValue: "llmcapsule.ai",
  },
  secondaryBtn1Href: {
    type: ControlType.String,
    title: "Secondary 1 Link",
    defaultValue: "https://llmcapsule.ai",
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
    defaultValue: "LLM Capsule — Enterprise AI Enablement",
  },
})
