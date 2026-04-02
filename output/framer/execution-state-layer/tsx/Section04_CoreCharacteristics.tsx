// Section04_CoreCharacteristics.tsx — Core Characteristics
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitlePrefix?: string
  sectionTitleBrand?: string

  card1Badge?: string
  card1Title?: string
  card1Desc?: string
  card1Check1?: string
  card1Check2?: string
  card1Check3?: string

  card2Badge?: string
  card2Title?: string
  card2Desc?: string
  card2Check1?: string
  card2Check2?: string
  card2Check3?: string

  card3Badge?: string
  card3Title?: string
  card3Desc?: string
  card3Check1?: string
  card3Check2?: string
  card3Check3?: string

  card4Badge?: string
  card4Title?: string
  card4Desc?: string
  card4Check1?: string
  card4Check2?: string
  card4Check3?: string

  card5Badge?: string
  card5Title?: string
  card5Desc?: string
  card5Check1?: string
  card5Check2?: string
  card5Check3?: string
}

export default function Section04_CoreCharacteristics({
  sectionTitlePrefix = "Core ",
  sectionTitleBrand = "characteristics",
  card1Badge = "01",
  card1Title = "Versioned Data States",
  card1Desc = "Every dataset used in AI execution is versioned and explicitly identified.",
  card1Check1 = "Explicit version identifiers",
  card1Check2 = "Comparable across runs",
  card1Check3 = "Rollback possible",
  card2Badge = "02",
  card2Title = "Frozen Execution Conditions",
  card2Desc = "Each run is bound to a frozen snapshot of data.",
  card2Check1 = "No drift during execution",
  card2Check2 = "Consistent input across environments",
  card2Check3 = "Stable production behavior",
  card3Badge = "03",
  card3Title = "Verifiable State Integrity",
  card3Desc = "Data states can be validated before and after execution.",
  card3Check1 = "Checksum or validation logic",
  card3Check2 = "Schema consistency checks",
  card3Check3 = "Integrity guarantees",
  card4Badge = "04",
  card4Title = "Full Execution Traceability",
  card4Desc = "Every AI output can be traced back to the exact state and context used.",
  card4Check1 = "Exact data state",
  card4Check2 = "Transformation steps",
  card4Check3 = "Execution context",
  card5Badge = "05",
  card5Title = "Reproducibility by Design",
  card5Desc = "Past executions can be re-run under identical conditions.",
  card5Check1 = "Debugging without guesswork",
  card5Check2 = "Reliable comparisons",
  card5Check3 = "Audit-ready AI systems",
}: Props) {

  const cards = [
    { badge: card1Badge, title: card1Title, desc: card1Desc, checks: [card1Check1, card1Check2, card1Check3] },
    { badge: card2Badge, title: card2Title, desc: card2Desc, checks: [card2Check1, card2Check2, card2Check3] },
    { badge: card3Badge, title: card3Title, desc: card3Desc, checks: [card3Check1, card3Check2, card3Check3] },
    { badge: card4Badge, title: card4Title, desc: card4Desc, checks: [card4Check1, card4Check2, card4Check3] },
    { badge: card5Badge, title: card5Title, desc: card5Desc, checks: [card5Check1, card5Check2, card5Check3] },
  ]

  return (
    <div>
      <style>{`
        .s4-section {
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
        .s4-inner { width: 100%; container-type: inline-size; }
        .s4-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s4-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s4-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s4-header__title-brand { color: #725bea; }

        .s4-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 24px;
        }
        .s4-card {
          background-color: #ffffff;
          border-radius: 18px;
          border: 1px solid #e6e7e9;
          padding: 24px;
          box-shadow: 0px 24px 40px rgba(0,0,0,0.04);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
        }
        .s4-card__badge {
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
          border: 1px solid #e6e7e9;
          color: #9c9c9c;
          margin-bottom: 16px;
        }
        .s4-card__title {
          font-size: 18px;
          font-weight: 600;
          color: #0f0f0f;
          line-height: 1.2;
          margin-bottom: 12px;
          text-wrap: balance;
        }
        .s4-card__desc {
          font-size: 14px;
          color: #636363;
          line-height: 1.7;
          flex: 1;
          margin-bottom: 16px;
          text-wrap: pretty;
        }
        .s4-bullet {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .s4-bullet__item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 16px;
          line-height: 1.5;
          color: #0f0f0f;
        }
        .s4-bullet__icon {
          width: 20px;
          height: 20px;
          flex-shrink: 0;
          margin-top: 2px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .s4-bullet__icon::before {
          content: "✓";
          color: #0e824c;
          font-weight: 700;
          font-size: 16px;
          line-height: 1;
        }

        @container (min-width: 768px) {
          .s4-container { padding: 0 32px; }
          .s4-header__title { font-size: 28px; }
          .s4-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @container (min-width: 1024px) {
          .s4-container { padding: 0 32px; }
          .s4-header__title { font-size: 32px; }
          .s4-grid { grid-template-columns: repeat(3, 1fr); }
        }
        @container (min-width: 1440px) {
          .s4-container { padding: 0 120px; max-width: 1440px; }
          .s4-header__title { font-size: 36px; }
          .s4-card { padding: 32px; }
        }
      `}</style>

      <section className="s4-section">
        <div className="s4-inner">
          <div className="s4-container">
            <div className="s4-header">
              <h2 className="s4-header__title">
                {sectionTitlePrefix}
                <span className="s4-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>
            <div className="s4-grid">
              {cards.map((card, i) => (
                <article key={i} className="s4-card">
                  <span className="s4-card__badge">{card.badge}</span>
                  <h3 className="s4-card__title">{card.title}</h3>
                  <p className="s4-card__desc">{card.desc}</p>
                  <ul className="s4-bullet">
                    {card.checks.map((c, j) => (
                      <li key={j} className="s4-bullet__item">
                        <span className="s4-bullet__icon"></span>
                        {c}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section04_CoreCharacteristics, {
  sectionTitlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Core " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "characteristics" },
  card1Badge: { type: ControlType.String, title: "Card1 Badge", defaultValue: "01" },
  card1Title: { type: ControlType.String, title: "Card1 Title", defaultValue: "Versioned Data States" },
  card1Desc: { type: ControlType.String, title: "Card1 Desc", displayTextArea: true, defaultValue: "Every dataset used in AI execution is versioned and explicitly identified." },
  card1Check1: { type: ControlType.String, title: "Card1 Check1", defaultValue: "Explicit version identifiers" },
  card1Check2: { type: ControlType.String, title: "Card1 Check2", defaultValue: "Comparable across runs" },
  card1Check3: { type: ControlType.String, title: "Card1 Check3", defaultValue: "Rollback possible" },
  card2Badge: { type: ControlType.String, title: "Card2 Badge", defaultValue: "02" },
  card2Title: { type: ControlType.String, title: "Card2 Title", defaultValue: "Frozen Execution Conditions" },
  card2Desc: { type: ControlType.String, title: "Card2 Desc", displayTextArea: true, defaultValue: "Each run is bound to a frozen snapshot of data." },
  card2Check1: { type: ControlType.String, title: "Card2 Check1", defaultValue: "No drift during execution" },
  card2Check2: { type: ControlType.String, title: "Card2 Check2", defaultValue: "Consistent input across environments" },
  card2Check3: { type: ControlType.String, title: "Card2 Check3", defaultValue: "Stable production behavior" },
  card3Badge: { type: ControlType.String, title: "Card3 Badge", defaultValue: "03" },
  card3Title: { type: ControlType.String, title: "Card3 Title", defaultValue: "Verifiable State Integrity" },
  card3Desc: { type: ControlType.String, title: "Card3 Desc", displayTextArea: true, defaultValue: "Data states can be validated before and after execution." },
  card3Check1: { type: ControlType.String, title: "Card3 Check1", defaultValue: "Checksum or validation logic" },
  card3Check2: { type: ControlType.String, title: "Card3 Check2", defaultValue: "Schema consistency checks" },
  card3Check3: { type: ControlType.String, title: "Card3 Check3", defaultValue: "Integrity guarantees" },
  card4Badge: { type: ControlType.String, title: "Card4 Badge", defaultValue: "04" },
  card4Title: { type: ControlType.String, title: "Card4 Title", defaultValue: "Full Execution Traceability" },
  card4Desc: { type: ControlType.String, title: "Card4 Desc", displayTextArea: true, defaultValue: "Every AI output can be traced back to the exact state and context used." },
  card4Check1: { type: ControlType.String, title: "Card4 Check1", defaultValue: "Exact data state" },
  card4Check2: { type: ControlType.String, title: "Card4 Check2", defaultValue: "Transformation steps" },
  card4Check3: { type: ControlType.String, title: "Card4 Check3", defaultValue: "Execution context" },
  card5Badge: { type: ControlType.String, title: "Card5 Badge", defaultValue: "05" },
  card5Title: { type: ControlType.String, title: "Card5 Title", defaultValue: "Reproducibility by Design" },
  card5Desc: { type: ControlType.String, title: "Card5 Desc", displayTextArea: true, defaultValue: "Past executions can be re-run under identical conditions." },
  card5Check1: { type: ControlType.String, title: "Card5 Check1", defaultValue: "Debugging without guesswork" },
  card5Check2: { type: ControlType.String, title: "Card5 Check2", defaultValue: "Reliable comparisons" },
  card5Check3: { type: ControlType.String, title: "Card5 Check3", defaultValue: "Audit-ready AI systems" },
})
