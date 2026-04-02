// Section05_WhyItMatters.tsx — Why it matters
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitlePrefix?: string
  sectionTitleBrand?: string

  card1Title?: string
  card1Desc?: string

  card2Title?: string
  card2Desc?: string

  card3Title?: string
  card3Desc?: string
}

export default function Section05_WhyItMatters({
  sectionTitlePrefix = "Why it ",
  sectionTitleBrand = "matters",
  card1Title = "Eliminates \"why did the result change?\"",
  card1Desc = "Without an Execution State Layer, teams often debug models when the real issue is hidden in the data or pipeline. With ESL, execution conditions are explicit and comparable.",
  card2Title = "Enables production-ready AI",
  card2Desc = "AI systems often fail in production not because the model is wrong, but because data shifts, pipeline inconsistencies, and hidden dependencies change the execution conditions. ESL makes deployments more stable and predictable.",
  card3Title = "Supports audit and compliance",
  card3Desc = "In regulated environments, organizations need to answer what data was used and under what conditions AI was executed. ESL provides reproducible audit trails and verifiable execution records.",
}: Props) {
  return (
    <div>
      <style>{`
        .s5-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
          overflow: hidden;
        }
        .s5-inner { width: 100%; container-type: inline-size; }
        .s5-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s5-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s5-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s5-header__title-brand { color: #725bea; }

        .s5-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s5-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s5-card__icon {
          font-size: 28px;
          margin-bottom: 12px;
          display: block;
          color: #0f0f0f;
        }
        .s5-card__icon svg {
          width: 32px;
          height: 32px;
          stroke: currentColor;
          fill: none;
          stroke-width: 1.5;
          stroke-linecap: round;
          stroke-linejoin: round;
        }
        .s5-card__title {
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s5-card__desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s5-container { padding: 0 32px; }
          .s5-header__title { font-size: 28px; }
          .s5-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s5-container { padding: 0 32px; }
          .s5-header__title { font-size: 32px; }
          .s5-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @container (min-width: 1440px) {
          .s5-container { padding: 0 120px; max-width: 1440px; }
          .s5-header__title { font-size: 36px; }
          .s5-card { padding: 32px; }
        }
      `}</style>

      <section className="s5-section">
        <div className="s5-inner">
          <div className="s5-container">
            <div className="s5-header">
              <h2 className="s5-header__title">
                {sectionTitlePrefix}
                <span className="s5-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>
            <div className="s5-grid">
              <article className="s5-card">
                <span className="s5-card__icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <circle cx="11" cy="11" r="8"/>
                    <path d="m21 21-4.35-4.35"/>
                  </svg>
                </span>
                <h3 className="s5-card__title">{card1Title}</h3>
                <p className="s5-card__desc">{card1Desc}</p>
              </article>
              <article className="s5-card">
                <span className="s5-card__icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/>
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/>
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/>
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/>
                  </svg>
                </span>
                <h3 className="s5-card__title">{card2Title}</h3>
                <p className="s5-card__desc">{card2Desc}</p>
              </article>
              <article className="s5-card">
                <span className="s5-card__icon" aria-hidden="true">
                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </span>
                <h3 className="s5-card__title">{card3Title}</h3>
                <p className="s5-card__desc">{card3Desc}</p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section05_WhyItMatters, {
  sectionTitlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Why it " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "matters" },
  card1Title: { type: ControlType.String, title: "Card1 Title", defaultValue: "Eliminates \"why did the result change?\"" },
  card1Desc: { type: ControlType.String, title: "Card1 Desc", displayTextArea: true, defaultValue: "Without an Execution State Layer, teams often debug models when the real issue is hidden in the data or pipeline. With ESL, execution conditions are explicit and comparable." },
  card2Title: { type: ControlType.String, title: "Card2 Title", defaultValue: "Enables production-ready AI" },
  card2Desc: { type: ControlType.String, title: "Card2 Desc", displayTextArea: true, defaultValue: "AI systems often fail in production not because the model is wrong, but because data shifts, pipeline inconsistencies, and hidden dependencies change the execution conditions. ESL makes deployments more stable and predictable." },
  card3Title: { type: ControlType.String, title: "Card3 Title", defaultValue: "Supports audit and compliance" },
  card3Desc: { type: ControlType.String, title: "Card3 Desc", displayTextArea: true, defaultValue: "In regulated environments, organizations need to answer what data was used and under what conditions AI was executed. ESL provides reproducible audit trails and verifiable execution records." },
})
