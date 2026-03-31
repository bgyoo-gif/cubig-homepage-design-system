// Section12_CTA.tsx — Execution State Layer CTA Band
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  title?: string
  description?: string
  quote?: string
  quoteAttr?: string
  btn1Text?: string
  btn1Href?: string
  btn2Text?: string
  btn2Href?: string
  bgImage?: string
}

export default function Section12_CTA({
  title = "Execution State Layer",
  description = "Execution State Layer transforms AI systems from unstable and opaque into reproducible, traceable, and production-grade systems by binding every execution to a controlled data state.",
  quote = "Execution State Layer is a data infrastructure layer that binds AI executions to versioned, frozen, and verifiable data states, enabling reproducibility and traceability in production AI.",
  quoteAttr = "— CUBIG",
  btn1Text = "Learn more about SynTitan →",
  btn1Href = "/products/syntitan",
  btn2Text = "Contact us →",
  btn2Href = "/contact",
  bgImage = `${IMAGE_BASE}/bg-gradient-navy-teal.webp`,
}: Props) {
  return (
    <div>
      <style>{`
        .s12-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-size: cover;
          background-position: center;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s12-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 0;
        }
        .s12-section > * { position: relative; z-index: 1; }

        .s12-inner {
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s12-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s12-description {
          font-size: 18px;
          color: #ffffff;
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
        }
        .s12-quote {
          font-size: 16px;
          color: #ffffff;
          line-height: 1.7;
          font-style: italic;
          max-width: 680px;
          text-align: center;
          margin: 0;
        }
        .s12-quote-attr {
          font-size: 14px;
          color: #ffffff;
          font-style: normal;
          margin-top: 8px;
          display: block;
        }
        .s12-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s12-btn {
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
          background: #ffffff;
          color: #0f0f0f;
          border: 1px solid #ffffff;
          backdrop-filter: blur(8px);
        }
        .s12-btn:hover { background: #ffffff; opacity: 0.9; }

        @container (max-width: 640px) {
          .s12-title { font-size: 36px; }
          .s12-actions { flex-direction: column; align-items: center; }
          .s12-btn { width: 100%; max-width: 320px; }
        }
      `}</style>

      <section
        className="s12-section"
        style={{ backgroundImage: `url('${bgImage}')` }}
        aria-label="Summary and CTA"
      >
        <div className="s12-inner">
          <h2 className="s12-title">{title}</h2>
          <p className="s12-description">{description}</p>
          <blockquote className="s12-quote">
            "{quote}"
            <span className="s12-quote-attr">{quoteAttr}</span>
          </blockquote>
          <div className="s12-actions">
            <a href={btn1Href} className="s12-btn">{btn1Text}</a>
            <a href={btn2Href} className="s12-btn">{btn2Text}</a>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section12_CTA, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Execution State Layer" },
  description: { type: ControlType.String, title: "Description", displayTextArea: true, defaultValue: "Execution State Layer transforms AI systems from unstable and opaque into reproducible, traceable, and production-grade systems by binding every execution to a controlled data state." },
  quote: { type: ControlType.String, title: "Quote", displayTextArea: true, defaultValue: "Execution State Layer is a data infrastructure layer that binds AI executions to versioned, frozen, and verifiable data states, enabling reproducibility and traceability in production AI." },
  quoteAttr: { type: ControlType.String, title: "Quote Attr", defaultValue: "— CUBIG" },
  btn1Text: { type: ControlType.String, title: "Button 1 Text", defaultValue: "Learn more about SynTitan →" },
  btn1Href: { type: ControlType.String, title: "Button 1 Link", defaultValue: "/products/syntitan" },
  btn2Text: { type: ControlType.String, title: "Button 2 Text", defaultValue: "Contact us →" },
  btn2Href: { type: ControlType.String, title: "Button 2 Link", defaultValue: "/contact" },
  bgImage: { type: ControlType.Image, title: "Background Image" },
})
