// Section03_WhyNow.tsx — LLM Capsule Why Now / Definition Banner
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  bannerLabel?: string
  bannerText?: string
  bannerLinkText?: string
  bannerLinkHref?: string
  bodyText1?: string
  bodyText2?: string
  bodyLinkText?: string
  bodyLinkHref?: string
}

export default function Section03_WhyNow({
  bannerLabel = "DEFINITION",
  bannerText = "Prompt data leakage occurs when enterprise data containing PII, regulated fields, or confidential information is included in LLM prompts — exposing sensitive records to external AI systems.",
  bannerLinkText = "Read: Prompt Data Leakage",
  bannerLinkHref = "/learn/prompt-data-leakage",
  bodyText1 = "This is the primary blocker preventing enterprise LLM adoption. Employees want to use AI tools on internal data — customer records, financial reports, HR documents, internal communications — but compliance teams prohibit it because there is no reliable layer to intercept and remove sensitive fields before they reach the LLM. LLM Capsule is designed to solve this: real-time PII detection and anonymization at the prompt layer, so enterprise LLM usage becomes safe without infrastructure changes.",
  bodyText2 = "LLM Capsule is a capability within Cubig's AI-Ready Data Infrastructure — the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. LLM Capsule specifically addresses the Restricted Data blocker at the LLM interaction layer.",
  bodyLinkText = "Explore LLM Capsule",
  bodyLinkHref = "https://llmcapsule.ai",
}: Props) {
  return (
    <>
      <style>{`
        .s3-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s3-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Banner */
        .s3-banner {
          border-radius: 16px;
          padding: 48px;
          background-image: url('${IMAGE_BASE}/bg-wave-teal.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          margin-bottom: 48px;
        }
        .s3-banner::before {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.55);
          border-radius: inherit;
        }
        .s3-banner > * {
          position: relative;
          z-index: 1;
        }
        .s3-banner-label {
          display: inline-block;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.7);
          margin-bottom: 16px;
        }
        .s3-banner-text {
          font-size: 20px;
          font-weight: 500;
          color: #ffffff;
          line-height: 1.65;
          margin: 0 0 24px;
        }
        .s3-banner-link {
          display: block;
          color: rgba(255,255,255,0.85);
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          border-bottom: 1px solid rgba(255,255,255,0.35);
          padding-bottom: 2px;
          width: fit-content;
        }
        .s3-banner-link:hover {
          color: #ffffff;
          border-bottom-color: #ffffff;
        }

        /* Body */
        .s3-body {
          display: grid;
          gap: 20px;
        }
        .s3-body-text {
          font-size: 16px;
          color: #636363;
          line-height: 1.75;
          margin: 0;
        }
        .s3-body-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          color: #3061f2;
          font-size: 15px;
          font-weight: 500;
          text-decoration: none;
          margin-top: 8px;
        }
        .s3-body-link:hover { text-decoration: underline; }

        /* Responsive */
        @media (min-width: 768px) {
          .s3-container { padding: 0 32px; }
          .s3-banner-text { font-size: 22px; }
        }
        @media (min-width: 1024px) {
          .s3-container { padding: 0 32px; }
          .s3-banner { padding: 64px; }
        }
        @media (min-width: 1440px) {
          .s3-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s3-section">
        <div className="s3-container">
          {/* Definition Banner */}
          <div className="s3-banner">
            <span className="s3-banner-label">{bannerLabel}</span>
            <p className="s3-banner-text">{bannerText}</p>
            <a href={bannerLinkHref} className="s3-banner-link">{bannerLinkText}</a>
          </div>

          {/* Body Text */}
          <div className="s3-body">
            <p className="s3-body-text">{bodyText1}</p>
            <p className="s3-body-text">{bodyText2}</p>
            <a
              href={bodyLinkHref}
              target={bodyLinkHref?.startsWith("http") ? "_blank" : undefined}
              rel={bodyLinkHref?.startsWith("http") ? "noopener noreferrer" : undefined}
              className="s3-body-link"
            >
              {bodyLinkText}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section03_WhyNow, {
  bannerLabel: {
    type: ControlType.String,
    title: "Banner Label",
    defaultValue: "DEFINITION",
  },
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue:
      "Prompt data leakage occurs when enterprise data containing PII, regulated fields, or confidential information is included in LLM prompts — exposing sensitive records to external AI systems.",
  },
  bannerLinkText: {
    type: ControlType.String,
    title: "Banner Link Text",
    defaultValue: "Read: Prompt Data Leakage",
  },
  bannerLinkHref: {
    type: ControlType.String,
    title: "Banner Link Href",
    defaultValue: "/learn/prompt-data-leakage",
  },
  bodyText1: {
    type: ControlType.String,
    title: "Body Text 1",
    displayTextArea: true,
    defaultValue:
      "This is the primary blocker preventing enterprise LLM adoption. Employees want to use AI tools on internal data — customer records, financial reports, HR documents, internal communications — but compliance teams prohibit it because there is no reliable layer to intercept and remove sensitive fields before they reach the LLM. LLM Capsule is designed to solve this: real-time PII detection and anonymization at the prompt layer, so enterprise LLM usage becomes safe without infrastructure changes.",
  },
  bodyText2: {
    type: ControlType.String,
    title: "Body Text 2",
    displayTextArea: true,
    defaultValue:
      "LLM Capsule is a capability within Cubig's AI-Ready Data Infrastructure — the infrastructure layer that makes enterprise data usable, privacy-safe, and stable for production AI execution. LLM Capsule specifically addresses the Restricted Data blocker at the LLM interaction layer.",
  },
  bodyLinkText: {
    type: ControlType.String,
    title: "Body Link Text",
    defaultValue: "Explore LLM Capsule",
  },
  bodyLinkHref: {
    type: ControlType.String,
    title: "Body Link Href",
    defaultValue: "https://llmcapsule.ai",
  },
})
