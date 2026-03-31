// Section08_WhereNext.tsx — Where to go next (dark link cards)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  link1Text?: string
  link1Href?: string
  link2Text?: string
  link2Href?: string
  link3Text?: string
  link3Href?: string
  link4Text?: string
  link4Href?: string
}

export default function Section08_WhereNext({
  sectionTitle = "Where to go next",
  link1Text = "See a production incident: 21 days → 4 hours root cause identification",
  link1Href = "/proof",
  link2Text = "Explore SynTitan — Release State and Run Binding",
  link2Href = "/syntitan",
  link3Text = "Read: Why AI Fails After Deployment",
  link3Href = "/learn/why-ai-fails-after-deployment",
  link4Text = "Read: What is Release State?",
  link4Href = "/learn/release-state",
}: Props) {
  return (
    <div>
      <style>{`
        .s8esd-section {
          width: 100%;
          padding: 80px 0;
          background-color: #171719;
          color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s8esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s8esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s8esd-body {
          max-width: 860px;
          margin: 0 auto;
        }
        .s8esd-section-title {
          color: #ffffff;
          margin-bottom: 32px;
          font-family: "DM Sans", sans-serif;
          font-size: 20px;
          font-weight: 600;
          line-height: 1.2;
          text-wrap: balance;
        }
        .s8esd-dark-links {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s8esd-dark-link {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 24px 32px;
          background-color: #141414;
          border: 1px solid #303135;
          border-radius: 8px;
          color: #ffffff;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.5;
          transition: border-color 0.2s, background-color 0.2s;
          text-decoration: none;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s8esd-dark-link:hover {
          border-color: #636363;
          background-color: #171719;
        }
        .s8esd-dark-link-arrow {
          font-family: "Fragment Mono", monospace;
          font-size: 18px;
          color: #c6c5fa;
          flex-shrink: 0;
        }
        .s8esd-link-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        @container (min-width: 768px) {
          .s8esd-container { padding: 0 32px; }
          .s8esd-section-title { font-size: 22px; }
        }
        @container (min-width: 1024px) {
          .s8esd-container { padding: 0 32px; }
          .s8esd-section-title { font-size: 24px; }
        }
        @container (min-width: 1440px) {
          .s8esd-container { padding: 0 120px; max-width: 1440px; }
          .s8esd-section-title { font-size: 28px; }
        }
      `}</style>

      <section className="s8esd-section">
        <div className="s8esd-inner">
          <div className="s8esd-container">
            <div className="s8esd-body">
              <h3 className="s8esd-section-title">{sectionTitle}</h3>
              <div className="s8esd-dark-links" role="list">
                <a href={link1Href} className="s8esd-dark-link" role="listitem">
                  <span className="s8esd-dark-link-arrow" aria-hidden="true">→</span>
                  {link1Text}
                </a>
                <a href={link2Href} className="s8esd-dark-link" role="listitem">
                  <span className="s8esd-dark-link-arrow" aria-hidden="true">→</span>
                  Explore <span className="s8esd-link-product">SynTitan</span> — Release State and Run Binding
                </a>
                <a href={link3Href} className="s8esd-dark-link" role="listitem">
                  <span className="s8esd-dark-link-arrow" aria-hidden="true">→</span>
                  {link3Text}
                </a>
                <a href={link4Href} className="s8esd-dark-link" role="listitem">
                  <span className="s8esd-dark-link-arrow" aria-hidden="true">→</span>
                  {link4Text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section08_WhereNext, {
  sectionTitle: { type: ControlType.String, title: "Section Title", defaultValue: "Where to go next" },
  link1Text: {
    type: ControlType.String, title: "Link 1 Text",
    defaultValue: "See a production incident: 21 days → 4 hours root cause identification",
  },
  link1Href: { type: ControlType.String, title: "Link 1 Href", defaultValue: "/proof" },
  link2Text: {
    type: ControlType.String, title: "Link 2 Text",
    defaultValue: "Explore SynTitan — Release State and Run Binding",
  },
  link2Href: { type: ControlType.String, title: "Link 2 Href", defaultValue: "/syntitan" },
  link3Text: {
    type: ControlType.String, title: "Link 3 Text",
    defaultValue: "Read: Why AI Fails After Deployment",
  },
  link3Href: { type: ControlType.String, title: "Link 3 Href", defaultValue: "/learn/why-ai-fails-after-deployment" },
  link4Text: {
    type: ControlType.String, title: "Link 4 Text",
    defaultValue: "Read: What is Release State?",
  },
  link4Href: { type: ControlType.String, title: "Link 4 Href", defaultValue: "/learn/release-state" },
})
