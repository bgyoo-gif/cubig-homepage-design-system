// Section15_OperationalBanner.tsx — Operational Example Banner (bg-image)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  label?: string
  bodyParagraph1?: string
  bodyParagraph2?: string
  mutedNote?: string
  ctaText?: string
  ctaHref?: string
}

export default function Section15_OperationalBanner({
  label = "OPERATIONAL EXAMPLE",
  bodyParagraph1 = "An enterprise team building an internal LLM search system over contracts, policy documents, and HR records found that every document contained PII, internal identifiers, and regulated fields that could not leave the enterprise boundary.",
  bodyParagraph2 = "LLM Capsule anonymized all sensitive fields at the prompt layer before each LLM interaction and remapped outputs back to the original context. The RAG system went live using frontier LLM capabilities — without any sensitive data crossing the enterprise perimeter.",
  mutedNote = "Blocker removed: restricted data (PII and regulated fields blocking enterprise LLM adoption)",
  ctaText = "See enterprise use cases",
  ctaHref = "/#enterprise-use-cases",
}: Props) {
  return (
    <>
      <style>{`
        .s15-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #ffffff;
          background-color: #0a1a0a;
          background-image: url('${IMAGE_BASE}/bg-lime.png');
          background-size: cover;
          background-position: center;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          position: relative;
        }
        .s15-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(5, 25, 5, 0.78);
          pointer-events: none;
        }
        .s15-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
          position: relative;
          z-index: 1;
        }

        /* Banner */
        .s15-banner {
          max-width: 800px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 20px;
          text-align: center;
          align-items: center;
        }
        .s15-banner__label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.55);
          padding: 5px 14px;
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 9999px;
        }
        .s15-banner__body {
          font-size: 16px;
          color: rgba(255,255,255,0.85);
          line-height: 1.75;
          margin: 0;
        }
        .s15-banner__body-highlight {
          font-size: 17px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.7;
          margin: 0;
        }
        .s15-banner__muted {
          font-size: 13px;
          color: rgba(255,255,255,0.45);
          line-height: 1.6;
          margin: 0;
        }
        .s15-btn-ghost {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-family: "DM Sans", sans-serif;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.85);
          text-decoration: none;
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.25);
          border-radius: 9999px;
          padding: 10px 24px;
          transition: background-color 0.2s, border-color 0.2s;
          margin-top: 4px;
        }
        .s15-btn-ghost:hover {
          background: rgba(255,255,255,0.15);
          border-color: rgba(255,255,255,0.4);
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s15-container { padding: 0 32px; }
          .s15-banner__body { font-size: 17px; }
          .s15-banner__body-highlight { font-size: 18px; }
        }
        @media (min-width: 1024px) {
          .s15-container { padding: 0 32px; }
        }
        @media (min-width: 1440px) {
          .s15-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s15-section">
        <div className="s15-container">
          <div className="s15-banner">
            <span className="s15-banner__label">{label}</span>
            <p className="s15-banner__body">{bodyParagraph1}</p>
            <p className="s15-banner__body-highlight">{bodyParagraph2}</p>
            <p className="s15-banner__muted">{mutedNote}</p>
            <a href={ctaHref} className="s15-btn-ghost">{ctaText}</a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section15_OperationalBanner, {
  label: {
    type: ControlType.String,
    title: "Label",
    defaultValue: "OPERATIONAL EXAMPLE",
  },
  bodyParagraph1: {
    type: ControlType.String,
    title: "Body Paragraph 1",
    displayTextArea: true,
    defaultValue:
      "An enterprise team building an internal LLM search system over contracts, policy documents, and HR records found that every document contained PII, internal identifiers, and regulated fields that could not leave the enterprise boundary.",
  },
  bodyParagraph2: {
    type: ControlType.String,
    title: "Body Paragraph 2",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule anonymized all sensitive fields at the prompt layer before each LLM interaction and remapped outputs back to the original context. The RAG system went live using frontier LLM capabilities — without any sensitive data crossing the enterprise perimeter.",
  },
  mutedNote: {
    type: ControlType.String,
    title: "Muted Note",
    displayTextArea: true,
    defaultValue:
      "Blocker removed: restricted data (PII and regulated fields blocking enterprise LLM adoption)",
  },
  ctaText: {
    type: ControlType.String,
    title: "CTA Text",
    defaultValue: "See enterprise use cases",
  },
  ctaHref: {
    type: ControlType.String,
    title: "CTA Link",
    defaultValue: "/#enterprise-use-cases",
  },
})
