// Section08_ConceptualModel.tsx — Conceptual Model Banner
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  sectionTitlePrefix?: string
  sectionTitleBrand?: string
  formula?: string
  subText?: string
  bgImage?: string
}

export default function Section08_ConceptualModel({
  sectionTitlePrefix = "Conceptual ",
  sectionTitleBrand = "model",
  formula = "AI Execution = Model + Code + Execution State Layer",
  subText = "Where the Execution State Layer provides versioned data state, verified integrity, and full traceability.",
  bgImage = `${IMAGE_BASE}/bg-gradient-sage-rose.webp`,
}: Props) {
  return (
    <div>
      <style>{`
        .s8-section {
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
        .s8-inner { width: 100%; container-type: inline-size; }
        .s8-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s8-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s8-header__title {
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
        }
        .s8-header__title-brand { color: #725bea; }

        .s8-banner {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          color: #0f0f0f;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          isolation: isolate;
        }
        .s8-banner::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0.45);
          z-index: 0;
        }
        .s8-banner > * { position: relative; z-index: 1; }
        .s8-banner__formula {
          font-size: 20px;
          font-weight: 700;
          color: #0f0f0f;
          margin-bottom: 12px;
          display: block;
          text-wrap: balance;
        }
        .s8-banner__sub {
          font-size: 16px;
          color: #0f0f0f;
          font-weight: 400;
          text-wrap: pretty;
        }

        @container (min-width: 768px) {
          .s8-container { padding: 0 32px; }
          .s8-header__title { font-size: 28px; }
          .s8-banner { padding: 32px 48px; }
          .s8-banner__formula { font-size: 24px; }
        }
        @container (min-width: 1024px) {
          .s8-container { padding: 0 32px; }
          .s8-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s8-container { padding: 0 120px; max-width: 1440px; }
          .s8-header__title { font-size: 36px; }
        }
        @container (max-width: 640px) {
          .s8-banner { padding: 32px 24px; border-radius: 24px; }
        }
      `}</style>

      <section className="s8-section">
        <div className="s8-inner">
          <div className="s8-container">
            <div className="s8-header">
              <h2 className="s8-header__title">
                {sectionTitlePrefix}
                <span className="s8-header__title-brand">{sectionTitleBrand}</span>
              </h2>
            </div>
            <div
              className="s8-banner"
              style={{ backgroundImage: `url('${bgImage}')` }}
            >
              <span className="s8-banner__formula">{formula}</span>
              <p className="s8-banner__sub">{subText}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section08_ConceptualModel, {
  sectionTitlePrefix: { type: ControlType.String, title: "Title Prefix", defaultValue: "Conceptual " },
  sectionTitleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "model" },
  formula: { type: ControlType.String, title: "Formula", defaultValue: "AI Execution = Model + Code + Execution State Layer" },
  subText: { type: ControlType.String, title: "Sub Text", displayTextArea: true, defaultValue: "Where the Execution State Layer provides versioned data state, verified integrity, and full traceability." },
  bgImage: { type: ControlType.Image, title: "Background Image" },
})
