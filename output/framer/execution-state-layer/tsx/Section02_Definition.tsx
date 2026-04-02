// Section02_Definition.tsx — Execution State Layer Definition
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

interface Props {
  sectionTitle?: string
  titleBrand?: string
  bannerBold?: string
  bannerText?: string
}

export default function Section02_Definition({
  sectionTitle = "",
  titleBrand = "Definition",
  bannerBold = "Execution State Layer (ESL)",
  bannerText = " is a data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state, enabling reproducibility, traceability, and consistent outcomes across production environments.",
}: Props) {
  return (
    <div>
      <style>{`
        .s2-section {
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
        .s2-inner { width: 100%; container-type: inline-size; }
        .s2-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        .s2-header {
          margin-bottom: 32px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s2-header__title {
          font-family: "DM Sans", sans-serif;
          font-size: 24px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 0;
          text-wrap: balance;
        }
        .s2-header__title-brand { color: #725bea; }
        .s2-banner {
          padding: 24px 32px;
          border-radius: 0;
          border: none;
          border-top: 1px solid #e6e7e9;
          border-bottom: 1px solid #e6e7e9;
          background-color: #f7f7f7;
          font-size: 16px;
          line-height: 1.7;
          text-align: center;
          color: #0f0f0f;
          text-wrap: pretty;
        }
        .s2-banner strong {
          font-weight: 600;
          color: #0f0f0f;
        }

        @container (min-width: 768px) {
          .s2-container { padding: 0 32px; }
          .s2-header__title { font-size: 28px; }
        }
        @container (min-width: 1024px) {
          .s2-container { padding: 0 32px; }
          .s2-header__title { font-size: 32px; }
        }
        @container (min-width: 1440px) {
          .s2-container { padding: 0 120px; max-width: 1440px; }
          .s2-header__title { font-size: 36px; }
        }
      `}</style>

      <section className="s2-section">
        <div className="s2-inner">
          <div className="s2-container">
            <div className="s2-header">
              <h2 className="s2-header__title">
                {sectionTitle && <span>{sectionTitle}</span>}
                <span className="s2-header__title-brand">{titleBrand}</span>
              </h2>
            </div>
            <div className="s2-banner">
              <strong>{bannerBold}</strong>{bannerText}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section02_Definition, {
  sectionTitle: { type: ControlType.String, title: "Title Prefix", defaultValue: "" },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "Definition" },
  bannerBold: { type: ControlType.String, title: "Banner Bold", defaultValue: "Execution State Layer (ESL)" },
  bannerText: { type: ControlType.String, title: "Banner Text", displayTextArea: true, defaultValue: " is a data infrastructure layer that binds every AI execution to a versioned, frozen, and verifiable data state, enabling reproducibility, traceability, and consistent outcomes across production environments." },
})
