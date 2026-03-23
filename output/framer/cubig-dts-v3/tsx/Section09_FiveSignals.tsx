import { addPropertyControls, ControlType } from "framer"

interface Props {
  title?: string
  description?: string
  cta1Label?: string
  cta1Href?: string
  cta2Label?: string
  cta2Href?: string
  cta3Label?: string
  cta3Href?: string
}

export default function Section09_FiveSignals({
  title = "Five Signals Your Data Is Blocking AI",
  description = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  cta1Label = "Start evaluation",
  cta1Href = "/contact",
  cta2Label = "See production case records",
  cta2Href = "/proof",
  cta3Label = "Learn: AI-Ready Data Infrastructure",
  cta3Href = "/learn/ai-ready-data-infrastructure",
}: Props) {
  const signals = [
    {
      icon: "🛡️",
      title: "Data exists but compliance blocks AI access",
      desc: "GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed.",
    },
    {
      icon: "📉",
      title: "Imbalanced datasets or coverage gaps distort model behavior",
      desc: "Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage.",
    },
    {
      icon: "⏱️",
      title: "Data retention policies delete what AI needs",
      desc: "Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present.",
    },
    {
      icon: "🔒",
      title: "Sensitive records can't leave the security perimeter",
      desc: "Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary.",
    },
    {
      icon: "🗄️",
      title: "Training data volume is too low for reliable AI",
      desc: "The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires.",
    },
    {
      icon: "✨",
      title: "DTS turns restricted or unusable data into AI-ready datasets",
      desc: "In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records.",
    },
  ]

  const keyConcepts = [
    {
      title: "Differential Privacy",
      desc: "A mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
      linkLabel: "Learn more",
      linkHref: "/learn/glossary#differential-privacy",
    },
    {
      title: "Zero-Access Architecture",
      desc: "Original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
      linkLabel: "Learn more",
      linkHref: "/learn/glossary#zero-access",
    },
    {
      title: "Enterprise Synthetic Data",
      desc: "DTS is Cubig's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
      linkLabel: "Read: AI-Ready Data",
      linkHref: "/learn/ai-ready-data-infrastructure",
    },
  ]

  return (
    <>
      <style>{`
        *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

        .s9-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
        }
        .s9-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s9-section-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s9-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s9-title-brand { color: #a617ff; }
        .s9-description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
        }
        .s9-feature-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 32px;
        }
        .s9-feature-item {
          display: flex;
          flex-direction: column;
          gap: 12px;
          padding: 24px;
          border: 1px solid #e6e7e9;
          border-radius: 18px;
          background-color: #ffffff;
        }
        .s9-feature-icon {
          width: 40px;
          height: 40px;
          border-radius: 8px;
          background-color: #f7f7f7;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 20px;
          flex-shrink: 0;
        }
        .s9-feature-title {
          font-family: "DM Sans", sans-serif;
          font-size: 16px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
        }
        .s9-feature-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
        }
        .s9-cta-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
          margin-top: 48px;
        }
        .s9-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
        }
        .s9-btn--primary {
          background: linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%);
          color: #ffffff;
        }
        .s9-btn--primary:hover { opacity: 0.88; }
        .s9-btn--secondary {
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s9-btn--secondary:hover { background-color: #f7f7f7; }
        .s9-concepts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
          margin-top: 48px;
        }
        .s9-concept-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s9-concept-title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s9-concept-desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
        }
        .s9-concept-btn-wrap {
          margin-top: auto;
          padding-top: 24px;
        }
        .s9-btn--sm {
          padding: 8px 16px;
          font-size: 14px;
        }

        @media (min-width: 768px) {
          .s9-container { padding: 0 32px; }
          .s9-feature-grid { grid-template-columns: repeat(2, 1fr); }
          .s9-title { font-size: 22px; }
          .s9-description { max-width: 720px; }
          .s9-section-header { text-align: left; }
          .s9-concepts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
          .s9-title { font-size: 24px; }
          .s9-concepts-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @media (min-width: 1440px) {
          .s9-container { padding: 0 120px; max-width: 1440px; }
          .s9-title { font-size: 28px; }
          .s9-description { max-width: 860px; }
        }
        @media (max-width: 767px) {
          .s9-section-header { text-align: left; }
          .s9-title { font-size: 20px; }
          .s9-cta-row { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
      <section className="s9-section">
        <div className="s9-container">
          <div className="s9-section-header">
            <h2 className="s9-title">
              Five Signals Your Data Is <span className="s9-title-brand">Blocking AI</span>
            </h2>
            <p className="s9-description">{description}</p>
          </div>
          <div className="s9-feature-grid">
            {signals.map((s, i) => (
              <div className="s9-feature-item" key={i}>
                <div className="s9-feature-icon" aria-hidden="true">{s.icon}</div>
                <h3 className="s9-feature-title">{s.title}</h3>
                <p className="s9-feature-desc">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="s9-cta-row">
            <a href={cta1Href} className="s9-btn s9-btn--primary">{cta1Label}</a>
            <a href={cta2Href} className="s9-btn s9-btn--secondary">{cta2Label}</a>
            <a href={cta3Href} className="s9-btn s9-btn--secondary">{cta3Label}</a>
          </div>
          <div className="s9-concepts-grid">
            {keyConcepts.map((c, i) => (
              <article className="s9-concept-card" key={i}>
                <h3 className="s9-concept-title">{c.title}</h3>
                <p className="s9-concept-desc">{c.desc}</p>
                <div className="s9-concept-btn-wrap">
                  <a href={c.linkHref} className="s9-btn s9-btn--secondary s9-btn--sm">{c.linkLabel}</a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_FiveSignals, {
  title: { type: ControlType.String, title: "Title", defaultValue: "Five Signals Your Data Is Blocking AI" },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue: "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
    displayTextArea: true,
  },
  cta1Label: { type: ControlType.String, title: "CTA1 Label", defaultValue: "Start evaluation" },
  cta1Href: { type: ControlType.String, title: "CTA1 Href", defaultValue: "/contact" },
  cta2Label: { type: ControlType.String, title: "CTA2 Label", defaultValue: "See production case records" },
  cta2Href: { type: ControlType.String, title: "CTA2 Href", defaultValue: "/proof" },
  cta3Label: { type: ControlType.String, title: "CTA3 Label", defaultValue: "Learn: AI-Ready Data Infrastructure" },
  cta3Href: { type: ControlType.String, title: "CTA3 Href", defaultValue: "/learn/ai-ready-data-infrastructure" },
})
