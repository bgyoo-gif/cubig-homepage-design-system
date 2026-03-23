import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
}

export default function Section05_ThreeProblems({
  title = "Three Data Problems. One Engine.",
  description = "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
}: Props) {
  const cards = [
    {
      badge: "RESTRICTED DATA",
      badgeColor: "#ff3030",
      number: "01 / 03",
      title: "Privacy-Safe Replacement",
      description: "Sensitive or regulated data blocked by compliance rules. DTS generates a statistically equivalent synthetic dataset -- with no real personal information.",
      checks: [
        "Replace GDPR, PIPA, HIPAA, or CCPA-restricted data with DP-safe synthetic equivalents",
        "Differential privacy guarantee on all synthetic output",
        "Safe for cross-team, cross-border, and external use",
        "Full distribution fidelity preserved",
      ],
    },
    {
      badge: "UNUSABLE DATA",
      badgeColor: "#0e824c",
      number: "02 / 03",
      title: "Coverage & Balance Expansion",
      description: "Data exists but is unfit for AI -- missing rare classes, biased distributions, or insufficient volume for reliable training.",
      checks: [
        "Augment underrepresented classes at scale",
        "Fix class imbalance without overfitting",
        "Generate edge case and rare event samples",
        "Expand small datasets to production-grade volumes",
      ],
    },
    {
      badge: "NON-ACCESSIBLE DATA",
      badgeColor: "#ff3030",
      number: "03 / 03",
      title: "Safe Dataset Generation",
      description: "Data exists in a silo -- restricted by access controls, third-party agreements, or geographic regulations -- and can't reach training pipelines.",
      checks: [
        "Generate safe replacement datasets from inaccessible sources",
        "Unblock stalled validation and testing workflows",
        "Remove data access bottlenecks in regulated environments",
        "Maintain statistical characteristics without data transfer",
      ],
    },
  ]

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s5-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s5-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s5-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s5-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s5-title-brand { color: #a617ff; }
        .s5-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        .s5-card-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s5-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s5-card-badge {
          display: inline-flex;
          align-items: center;
          width: fit-content;
          padding: 4px 12px;
          border-radius: 9999px;
          font-size: 12px;
          font-weight: 500;
          font-family: "Fragment Mono", monospace;
          text-transform: uppercase;
          letter-spacing: 0.08em;
          border: 1px solid currentColor;
          margin-bottom: 16px;
        }
        .s5-card-number {
          font-size: 12px;
          font-weight: 500;
          color: #9c9c9c;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        .s5-card-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s5-card-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 16px;
        }
        .s5-checklist {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
          margin-top: 16px;
        }
        .s5-check-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s5-check-icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
        }

        @media (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(2, 1fr); }
          .s5-title { font-size: 22px; }
          .s5-description { max-width: 720px; }
          .s5-section-header { text-align: left; }
        }
        @media (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-card-grid { grid-template-columns: repeat(3, 1fr); }
          .s5-title { font-size: 24px; }
        }
        @media (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-title { font-size: 28px; }
          .s5-description { max-width: 860px; }
        }
        @media (max-width: 767px) {
          .s5-section-header { text-align: left; }
          .s5-title { font-size: 20px; }
        }
      `}</style>
      <section className="s5-section">
        <div className="s5-container">
          <div className="s5-section-header">
            <h2 className="s5-title">
              Three Data Problems. <span className="s5-title-brand">One Engine.</span>
            </h2>
            <p className="s5-description">{description}</p>
          </div>
          <div className="s5-card-grid">
            {cards.map((card, i) => (
              <article className="s5-card" key={i}>
                <span className="s5-card-badge" style={{ color: card.badgeColor, borderColor: card.badgeColor }}>
                  {card.badge}
                </span>
                <p className="s5-card-number">{card.number}</p>
                <h3 className="s5-card-title">{card.title}</h3>
                <p className="s5-card-desc">{card.description}</p>
                <ul className="s5-checklist">
                  {card.checks.map((check, j) => (
                    <li className="s5-check-item" key={j}>
                      <span className="s5-check-icon">✓</span>
                      {check}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section05_ThreeProblems, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Three Data Problems. One Engine." },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Data that can't be used, can't be shared, or doesn't exist in sufficient volume -- DTS resolves all three.",
    displayTextArea: true,
  },
})
