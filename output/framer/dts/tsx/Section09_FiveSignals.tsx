// Section09_FiveSignals.tsx — DTS Five Signals + Key Concepts
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

interface Props {
  marginTop?: number
  sectionTitle?: string
  sectionDescription?: string
  signal1Icon?: string
  signal1Title?: string
  signal1Description?: string
  signal2Icon?: string
  signal2Title?: string
  signal2Description?: string
  signal3Icon?: string
  signal3Title?: string
  signal3Description?: string
  signal4Icon?: string
  signal4Title?: string
  signal4Description?: string
  signal5Icon?: string
  signal5Title?: string
  signal5Description?: string
  signal6Icon?: string
  signal6Title?: string
  signal6Description?: string
  ctaBtn1Text?: string
  ctaBtn1Href?: string
  ctaBtn2Text?: string
  ctaBtn2Href?: string
  ctaBtn3Text?: string
  ctaBtn3Href?: string
  concept1Title?: string
  concept1Description?: string
  concept1BtnText?: string
  concept1BtnHref?: string
  concept2Title?: string
  concept2Description?: string
  concept2BtnText?: string
  concept2BtnHref?: string
  concept3Title?: string
  concept3Description?: string
  concept3BtnText?: string
  concept3BtnHref?: string
}

export default function Section09_FiveSignals({
  marginTop = 0,
  sectionTitle = "Five Signals Your Data Is Blocking AI",
  sectionDescription = "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  signal1Icon = "🛡️",
  signal1Title = "Data exists but compliance blocks AI access",
  signal1Description = "GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed.",
  signal2Icon = "📉",
  signal2Title = "Imbalanced datasets or coverage gaps distort model behavior",
  signal2Description = "Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage.",
  signal3Icon = "⏱️",
  signal3Title = "Data retention policies delete what AI needs",
  signal3Description = "Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present.",
  signal4Icon = "🔒",
  signal4Title = "Sensitive records can't leave the security perimeter",
  signal4Description = "Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary.",
  signal5Icon = "🗄️",
  signal5Title = "Training data volume is too low for reliable AI",
  signal5Description = "The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires.",
  signal6Icon = "✨",
  signal6Title = "DTS turns restricted or unusable data into AI-ready datasets",
  signal6Description = "In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records.",
  ctaBtn1Text = "Start evaluation",
  ctaBtn1Href = "/contact",
  ctaBtn2Text = "See production case records",
  ctaBtn2Href = "/proof",
  ctaBtn3Text = "Learn: AI-Ready Data Infrastructure",
  ctaBtn3Href = "/learn/ai-ready-data-infrastructure",
  concept1Title = "Differential Privacy",
  concept1Description = "A mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  concept1BtnText = "Learn more",
  concept1BtnHref = "/learn/glossary#differential-privacy",
  concept2Title = "Zero-Access Architecture",
  concept2Description = "Original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  concept2BtnText = "Learn more",
  concept2BtnHref = "/learn/glossary#zero-access",
  concept3Title = "Enterprise Synthetic Data",
  concept3Description = "DTS is Cubig's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  concept3BtnText = "Read: AI-Ready Data",
  concept3BtnHref = "/learn/ai-ready-data-infrastructure",
}: Props) {
  const signals = [
    { icon: signal1Icon, title: signal1Title, description: signal1Description },
    { icon: signal2Icon, title: signal2Title, description: signal2Description },
    { icon: signal3Icon, title: signal3Title, description: signal3Description },
    { icon: signal4Icon, title: signal4Title, description: signal4Description },
    { icon: signal5Icon, title: signal5Title, description: signal5Description },
    { icon: signal6Icon, title: signal6Title, description: signal6Description },
  ]

  const concepts = [
    { title: concept1Title, description: concept1Description, btnText: concept1BtnText, btnHref: concept1BtnHref },
    { title: concept2Title, description: concept2Description, btnText: concept2BtnText, btnHref: concept2BtnHref },
    { title: concept3Title, description: concept3Description, btnText: concept3BtnText, btnHref: concept3BtnHref },
  ]

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

        .s9-section {
          width: 100%; overflow: hidden; box-sizing: border-box;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s9-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s9-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s9-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        .s9-header__title-brand { color: #725bea; }
        .s9-header__description {
          font-size: 18px;
          color: #636363;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
        }

        /* Feature Grid */
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
        .s9-feature-description {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
        }

        /* CTA Row */
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
          border: none;
        }
        .s9-btn--primary:hover { opacity: 0.88; }
        .s9-btn--secondary {
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s9-btn--secondary:hover { background-color: #f7f7f7; }

        /* Divider */
        .s9-divider {
          height: 1px;
          background-color: #e6e7e9;
          margin: 48px 0;
        }

        /* Key Concepts Card Grid */
        .s9-concepts-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s9-concept-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0, 0, 0, 0.04);
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
        .s9-concept-description {
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
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          transition: background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: #0f0f0f;
          border: 1px solid #e6e7e9;
        }
        .s9-btn--sm:hover { background-color: #f7f7f7; }

        /* Responsive */
        @container (max-width: 767px) {
          .s9-header { text-align: left; }
          .s9-header__title { font-size: 28px; }
          .s9-cta-row { flex-direction: column; align-items: flex-start; }
        }
        @container (min-width: 768px) {
          .s9-container { padding: 0 32px; }
          .s9-feature-grid { grid-template-columns: repeat(2, 1fr); }
          .s9-header__description { max-width: 720px; }
          .s9-header__title { font-size: 40px; }
          .s9-concepts-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s9-container { padding: 0 32px; }
          .s9-header__description { max-width: 720px; }
          .s9-concepts-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @container (min-width: 1440px) {
          .s9-container { padding: 0 120px; max-width: 1440px; }
          .s9-header__description { max-width: 860px; }
        }
      `}</style>

      <section className="s9-section" id="section-9" style={{ marginTop: `${marginTop}px` }}>
        <div className="s9-inner">
        <div className="s9-container">
          <div className="s9-header">
            <h2 className="s9-header__title">
              Five Signals Your Data Is{" "}
              <span className="s9-header__title-brand">Blocking AI</span>
            </h2>
            <p className="s9-header__description">{sectionDescription}</p>
          </div>

          {/* Feature Grid: 5 signals + 1 outcome */}
          <div className="s9-feature-grid">
            {signals.map((signal, i) => (
              <div key={i} className="s9-feature-item">
                <div className="s9-feature-icon" aria-hidden="true">
                  {signal.icon}
                </div>
                <h3 className="s9-feature-title">{signal.title}</h3>
                <p className="s9-feature-description">{signal.description}</p>
              </div>
            ))}
          </div>

          {/* CTA Row */}
          <div className="s9-cta-row">
            <a href={ctaBtn1Href} className="s9-btn s9-btn--primary">
              {ctaBtn1Text}
            </a>
            <a href={ctaBtn2Href} className="s9-btn s9-btn--secondary">
              {ctaBtn2Text}
            </a>
            <a href={ctaBtn3Href} className="s9-btn s9-btn--secondary">
              {ctaBtn3Text}
            </a>
          </div>

          <div className="s9-divider"></div>

          {/* Key Concepts */}
          <div className="s9-concepts-grid">
            {concepts.map((concept, i) => (
              <article key={i} className="s9-concept-card">
                <h3 className="s9-concept-title">{concept.title}</h3>
                <p className="s9-concept-description">{concept.description}</p>
                <div className="s9-concept-btn-wrap">
                  <a href={concept.btnHref} className="s9-btn--sm">
                    {concept.btnText}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_FiveSignals, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Section Title",
    defaultValue: "Five Signals Your Data Is Blocking AI",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Section Description",
    displayTextArea: true,
    defaultValue:
      "Enterprise AI projects stall when data conditions prevent training, validation, or safe deployment. DTS was built for exactly these situations.",
  },
  signal1Icon: {
    type: ControlType.String,
    title: "Signal 1 Icon",
    defaultValue: "🛡️",
  },
  signal1Title: {
    type: ControlType.String,
    title: "Signal 1 Title",
    defaultValue: "Data exists but compliance blocks AI access",
  },
  signal1Description: {
    type: ControlType.String,
    title: "Signal 1 Description",
    displayTextArea: true,
    defaultValue:
      "GDPR, PIPA, HIPAA, or internal retention policies prevent the data from reaching models. DTS generates privacy-safe synthetic replacements -- statistically accurate, legally usable, zero real records exposed.",
  },
  signal2Icon: {
    type: ControlType.String,
    title: "Signal 2 Icon",
    defaultValue: "📉",
  },
  signal2Title: {
    type: ControlType.String,
    title: "Signal 2 Title",
    defaultValue: "Imbalanced datasets or coverage gaps distort model behavior",
  },
  signal2Description: {
    type: ControlType.String,
    title: "Signal 2 Description",
    displayTextArea: true,
    defaultValue:
      "Rare classes are underrepresented. Fraud patterns are too sparse to learn from. Edge cases never appear in training data. DTS fixes class distribution and generates targeted rare-class coverage.",
  },
  signal3Icon: {
    type: ControlType.String,
    title: "Signal 3 Icon",
    defaultValue: "⏱️",
  },
  signal3Title: {
    type: ControlType.String,
    title: "Signal 3 Title",
    defaultValue: "Data retention policies delete what AI needs",
  },
  signal3Description: {
    type: ControlType.String,
    title: "Signal 3 Description",
    displayTextArea: true,
    defaultValue:
      "Historical data was deleted per retention policy. DTS generates synthetic equivalents from surviving statistical patterns -- without requiring the original data to still be present.",
  },
  signal4Icon: {
    type: ControlType.String,
    title: "Signal 4 Icon",
    defaultValue: "🔒",
  },
  signal4Title: {
    type: ControlType.String,
    title: "Signal 4 Title",
    defaultValue: "Sensitive records can't leave the security perimeter",
  },
  signal4Description: {
    type: ControlType.String,
    title: "Signal 4 Description",
    displayTextArea: true,
    defaultValue:
      "Classified, patient, or customer data cannot be exported for AI training. DTS's Zero-Access Architecture learns statistical properties in-situ. Only the DP-protected synthetic output crosses the boundary.",
  },
  signal5Icon: {
    type: ControlType.String,
    title: "Signal 5 Icon",
    defaultValue: "🗄️",
  },
  signal5Title: {
    type: ControlType.String,
    title: "Signal 5 Title",
    defaultValue: "Training data volume is too low for reliable AI",
  },
  signal5Description: {
    type: ControlType.String,
    title: "Signal 5 Description",
    displayTextArea: true,
    defaultValue:
      "The original dataset is too small to train a robust model. DTS augments existing datasets to production-grade volume -- preserving statistical fidelity while adding the volume AI training requires.",
  },
  signal6Icon: {
    type: ControlType.String,
    title: "Signal 6 Icon",
    defaultValue: "✨",
  },
  signal6Title: {
    type: ControlType.String,
    title: "Signal 6 Title",
    defaultValue: "DTS turns restricted or unusable data into AI-ready datasets",
  },
  signal6Description: {
    type: ControlType.String,
    title: "Signal 6 Description",
    displayTextArea: true,
    defaultValue:
      "In each case, DTS turns data that is restricted or unusable into an AI-ready dataset -- without exposing real records.",
  },
  ctaBtn1Text: {
    type: ControlType.String,
    title: "CTA Button 1",
    defaultValue: "Start evaluation",
  },
  ctaBtn1Href: {
    type: ControlType.String,
    title: "CTA Link 1",
    defaultValue: "/contact",
  },
  ctaBtn2Text: {
    type: ControlType.String,
    title: "CTA Button 2",
    defaultValue: "See production case records",
  },
  ctaBtn2Href: {
    type: ControlType.String,
    title: "CTA Link 2",
    defaultValue: "/proof",
  },
  ctaBtn3Text: {
    type: ControlType.String,
    title: "CTA Button 3",
    defaultValue: "Learn: AI-Ready Data Infrastructure",
  },
  ctaBtn3Href: {
    type: ControlType.String,
    title: "CTA Link 3",
    defaultValue: "/learn/ai-ready-data-infrastructure",
  },
  concept1Title: {
    type: ControlType.String,
    title: "Concept 1 Title",
    defaultValue: "Differential Privacy",
  },
  concept1Description: {
    type: ControlType.String,
    title: "Concept 1 Description",
    displayTextArea: true,
    defaultValue:
      "A mathematical framework that guarantees any single individual's data cannot be identified from the synthetic output -- regardless of what an attacker already knows. DTS applies DP during generation to produce datasets that are statistically representative but contain no real personal information.",
  },
  concept1BtnText: {
    type: ControlType.String,
    title: "Concept 1 Button",
    defaultValue: "Learn more",
  },
  concept1BtnHref: {
    type: ControlType.String,
    title: "Concept 1 Link",
    defaultValue: "/learn/glossary#differential-privacy",
  },
  concept2Title: {
    type: ControlType.String,
    title: "Concept 2 Title",
    defaultValue: "Zero-Access Architecture",
  },
  concept2Description: {
    type: ControlType.String,
    title: "Concept 2 Description",
    displayTextArea: true,
    defaultValue:
      "Original data never leaves the client environment. DTS analyzes statistical properties in-situ, generates a DP-protected synthetic model, and only the synthetic output is used downstream. Raw data is never transferred or accessed externally -- suitable for classified, regulated, and air-gapped environments.",
  },
  concept2BtnText: {
    type: ControlType.String,
    title: "Concept 2 Button",
    defaultValue: "Learn more",
  },
  concept2BtnHref: {
    type: ControlType.String,
    title: "Concept 2 Link",
    defaultValue: "/learn/glossary#zero-access",
  },
  concept3Title: {
    type: ControlType.String,
    title: "Concept 3 Title",
    defaultValue: "Enterprise Synthetic Data",
  },
  concept3Description: {
    type: ControlType.String,
    title: "Concept 3 Description",
    displayTextArea: true,
    defaultValue:
      "DTS is Cubig's enterprise synthetic data engine. It generates privacy-safe datasets using differential privacy to fix class imbalance, fill coverage gaps, expand training data, and replace restricted or non-accessible data. DTS runs as a standalone engine or integrates with the SynTitan platform.",
  },
  concept3BtnText: {
    type: ControlType.String,
    title: "Concept 3 Button",
    defaultValue: "Read: AI-Ready Data",
  },
  concept3BtnHref: {
    type: ControlType.String,
    title: "Concept 3 Link",
    defaultValue: "/learn/ai-ready-data-infrastructure",
  },
})
