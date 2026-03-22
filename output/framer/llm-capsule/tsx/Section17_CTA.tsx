// Section17_CTA.tsx — CTA Band (full-width, outside container)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  eyebrow?: string
  title?: string
  titleHighlight?: string
  description?: string
  btn1Text?: string
  btn1Href?: string
  btn2Text?: string
  btn2Href?: string
  btn3Text?: string
  btn3Href?: string
}

export default function Section17_CTA({
  eyebrow = "Secure Your LLM Workflows",
  title = "Your LLMs are ready. Is your data",
  titleHighlight = "protected?",
  description = "Stop letting sensitive data block AI adoption. LLM Capsule intercepts PII in prompts before it reaches any LLM — 98.1% detection accuracy, full audit trail, on-premise or AWS Marketplace.",
  btn1Text = "Run technical demo",
  btn1Href = "/contact",
  btn2Text = "Explore LLM Capsule",
  btn2Href = "https://llmcapsule.ai",
  btn3Text = "See production cases",
  btn3Href = "/proof",
}: Props) {
  return (
    <>
      <style>{`
        .s17-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #ffffff;
          background: linear-gradient(135deg, #0f0f1a 0%, #1a0f2e 40%, #0a1a10 100%);
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          position: relative;
          overflow: hidden;
        }
        .s17-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            radial-gradient(ellipse 60% 80% at 20% 50%, rgba(108,84,160,0.25) 0%, transparent 60%),
            radial-gradient(ellipse 50% 70% at 80% 50%, rgba(255,38,106,0.15) 0%, transparent 60%);
          pointer-events: none;
        }

        .s17-inner {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          gap: 20px;
        }

        .s17-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
        }
        .s17-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -1.5px;
          margin: 0;
          max-width: 680px;
        }
        .s17-title-highlight {
          background: linear-gradient(130deg, #a78bfa, #f472b6);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .s17-description {
          font-size: 16px;
          color: rgba(255,255,255,0.7);
          line-height: 1.7;
          max-width: 600px;
          margin: 0;
        }

        /* Actions */
        .s17-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 8px;
        }
        .s17-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 15px;
          cursor: pointer;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 28px;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.25);
          color: #ffffff;
        }
        .s17-btn:hover {
          background: rgba(255,255,255,0.18);
          border-color: rgba(255,255,255,0.4);
        }
        .s17-btn--primary {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          border-color: transparent;
          color: #ffffff;
        }
        .s17-btn--primary:hover { opacity: 0.88; background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a); }

        /* Responsive */
        @media (min-width: 768px) {
          .s17-inner { padding: 0 32px; }
          .s17-title { font-size: 52px; }
          .s17-description { font-size: 17px; }
        }
        @media (min-width: 1024px) {
          .s17-inner { padding: 0 32px; }
          .s17-title { font-size: 60px; }
        }
        @media (min-width: 1440px) {
          .s17-inner { padding: 0 120px; max-width: 1440px; }
        }

        @media (max-width: 767px) {
          .s17-title { font-size: 32px; letter-spacing: -1px; }
          .s17-actions { flex-direction: column; align-items: center; }
          .s17-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <section className="s17-section">
        <div className="s17-inner">
          <span className="s17-eyebrow">{eyebrow}</span>
          <h2 className="s17-title">
            {title}{" "}
            <span className="s17-title-highlight">{titleHighlight}</span>
          </h2>
          <p className="s17-description">{description}</p>
          <div className="s17-actions">
            <a href={btn1Href} className="s17-btn s17-btn--primary">
              {btn1Text}
            </a>
            {btn2Text && (
              <a
                href={btn2Href}
                target={btn2Href?.startsWith("http") ? "_blank" : undefined}
                rel={btn2Href?.startsWith("http") ? "noopener noreferrer" : undefined}
                className="s17-btn"
              >
                {btn2Text}
              </a>
            )}
            {btn3Text && (
              <a href={btn3Href} className="s17-btn">
                {btn3Text}
              </a>
            )}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section17_CTA, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Secure Your LLM Workflows",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Your LLMs are ready. Is your data",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "protected?",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "Stop letting sensitive data block AI adoption. LLM Capsule intercepts PII in prompts before it reaches any LLM — 98.1% detection accuracy, full audit trail, on-premise or AWS Marketplace.",
  },
  btn1Text: {
    type: ControlType.String,
    title: "Button 1 Text",
    defaultValue: "Run technical demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 Link",
    defaultValue: "/contact",
  },
  btn2Text: {
    type: ControlType.String,
    title: "Button 2 Text",
    defaultValue: "Explore LLM Capsule",
  },
  btn2Href: {
    type: ControlType.String,
    title: "Button 2 Link",
    defaultValue: "https://llmcapsule.ai",
  },
  btn3Text: {
    type: ControlType.String,
    title: "Button 3 Text",
    defaultValue: "See production cases",
  },
  btn3Href: {
    type: ControlType.String,
    title: "Button 3 Link",
    defaultValue: "/proof",
  },
})
