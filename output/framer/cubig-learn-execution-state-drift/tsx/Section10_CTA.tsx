// Section10_CTA.tsx — CTA Band (full-width, gradient-dark background)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  titlePart1?: string
  titleBrand?: string
  titlePart2?: string
  description?: string
  btn1Label?: string
  btn1Href?: string
  btn2Label?: string
  btn2Href?: string
  btn3Label?: string
  btn3Href?: string
}

export default function Section10_CTA({
  titlePart1 = "Enterprise AI doesn't have to ",
  titleBrand = "break",
  titlePart2 = " here.",
  description = "CUBIG builds the infrastructure layer that removes these exact problems — restricted data, unusable data, unstable execution — from production AI.",
  btn1Label = "Explore SynTitan →",
  btn1Href = "/syntitan",
  btn2Label = "Explore concept: Execution State →",
  btn2Href = "/learn/what-is-execution-state",
  btn3Label = "See production cases →",
  btn3Href = "/proof",
}: Props) {
  return (
    <div>
      <style>{`
        .s10esd-section {
          width: 100%;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          background-image: url('${IMAGE_BASE}/bg-gradient-deep-teal.webp');
          background-size: cover;
          background-position: center;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s10esd-section::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.35);
          z-index: 0;
        }
        .s10esd-section > * {
          position: relative;
          z-index: 1;
        }
        .s10esd-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s10esd-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin: 0;
          text-wrap: balance;
        }
        .s10esd-title-brand {
          color: #c6c5fa;
        }
        .s10esd-description {
          font-size: 18px;
          color: #ffffff;
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s10esd-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }
        .s10esd-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 16px;
          cursor: pointer;
          border: none;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 12px 32px;
          background: #ffffff;
          color: #0f0f0f;
          border: 1px solid #ffffff;
          backdrop-filter: blur(8px);
        }
        .s10esd-btn:hover {
          opacity: 0.88;
        }
        .s10esd-btn-product {
          font-family: "Oxanium", sans-serif;
          font-weight: 700;
        }

        .s10esd-outer {
          width: 100%;
          container-type: inline-size;
        }
        @container (max-width: 767px) {
          .s10esd-title { font-size: 28px; letter-spacing: -0.5px; }
          .s10esd-actions { flex-direction: column; align-items: center; }
          .s10esd-btn { width: 100%; max-width: 320px; }
        }
        @container (min-width: 768px) {
          .s10esd-section { padding: 100px 32px; }
        }
        @container (min-width: 1024px) {
          .s10esd-inner { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s10esd-section { padding: 120px 120px; max-width: 1440px; margin: 0 auto; }
          .s10esd-inner { max-width: 860px; }
          .s10esd-title { font-size: 50px; }
        }
      `}</style>

      <div className="s10esd-outer">
      <section className="s10esd-section" aria-label="Call to action">
        <div className="s10esd-inner">
          <h2 className="s10esd-title">
            {titlePart1}
            <span className="s10esd-title-brand">{titleBrand}</span>
            {titlePart2}
          </h2>
          <p className="s10esd-description">{description}</p>
          <div className="s10esd-actions">
            <a href={btn1Href} className="s10esd-btn">
              Explore <span className="s10esd-btn-product">SynTitan</span> →
            </a>
            <a href={btn2Href} className="s10esd-btn">
              {btn2Label}
            </a>
            <a href={btn3Href} className="s10esd-btn">
              {btn3Label}
            </a>
          </div>
        </div>
      </section>
      </div>
    </div>
  )
}

addPropertyControls(Section10_CTA, {
  titlePart1: { type: ControlType.String, title: "Title Part 1", defaultValue: "Enterprise AI doesn't have to " },
  titleBrand: { type: ControlType.String, title: "Title Brand", defaultValue: "break" },
  titlePart2: { type: ControlType.String, title: "Title Part 2", defaultValue: " here." },
  description: {
    type: ControlType.String, title: "Description", displayTextArea: true,
    defaultValue: "CUBIG builds the infrastructure layer that removes these exact problems — restricted data, unusable data, unstable execution — from production AI.",
  },
  btn1Label: { type: ControlType.String, title: "Button 1 Label", defaultValue: "Explore SynTitan →" },
  btn1Href: { type: ControlType.String, title: "Button 1 Href", defaultValue: "/syntitan" },
  btn2Label: { type: ControlType.String, title: "Button 2 Label", defaultValue: "Explore concept: Execution State →" },
  btn2Href: { type: ControlType.String, title: "Button 2 Href", defaultValue: "/learn/what-is-execution-state" },
  btn3Label: { type: ControlType.String, title: "Button 3 Label", defaultValue: "See production cases →" },
  btn3Href: { type: ControlType.String, title: "Button 3 Href", defaultValue: "/proof" },
})
