import { addPropertyControls, ControlType } from "framer"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPurple:  "#725bea",
  colorWhite:        "#ffffff",
  colorTextPrimary:  "#0f0f0f",
  gradientBrand:     "linear-gradient(130deg, #673AFF 0%, #D932FF 50%, #FF266A 100%)",
  fontBase:          '"DM Sans", sans-serif',
  fontCode:          '"Fragment Mono", monospace',
}

// ─── Image Base ───────────────────────────────────────────────────────────────
const IMAGE_BASE =
  "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop: number
  title: string
  description: string
  btn1Label: string
  btn1Href: string
  btn2Label: string
  btn2Href: string
  btn3Label: string
  btn3Href: string
  footnote: string
  backgroundImage: string
  overlayOpacity: number
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function Section09_CTA(props: Props) {
  const {
    marginTop,
    title,
    description,
    btn1Label,
    btn1Href,
    btn2Label,
    btn2Href,
    btn3Label,
    btn3Href,
    footnote,
    backgroundImage,
    overlayOpacity,
  } = props

  const bgUrl =
    backgroundImage ||
    `${IMAGE_BASE}/bg-gradient-blue-violet.png`

  return (
    <>
      <style>{`
        .s9-cta-band {
          width: 100%;
          position: relative;
          overflow: hidden;
          text-align: center;
          background-size: cover;
          background-position: center;
          box-sizing: border-box;
          font-family: "DM Sans", sans-serif;
          word-break: keep-all;
          overflow-wrap: break-word;
        }

        .s9-wrap {
          width: 100%;
          container-type: inline-size;
          padding: 80px 16px;
          box-sizing: border-box;
        }

        .s9-inner {
          max-width: 100%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
          position: relative;
          z-index: 1;
        }

        .s9-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -2px;
          margin: 0;
          text-wrap: balance;
        }

        .s9-description {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.85);
          line-height: 1.7;
          margin: 0;
          text-wrap: pretty;
        }

        .s9-actions {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 16px;
        }

        .s9-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 12px 32px;
          font-size: 16px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          border-radius: 9999px;
          background: rgba(255, 255, 255, 0.92);
          color: #0f0f0f;
          border: 1px solid rgba(255, 255, 255, 0.6);
          backdrop-filter: blur(8px);
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
          white-space: nowrap;
        }

        .s9-btn:hover {
          background: #ffffff;
        }

        .s9-footnote {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.6);
          font-family: "Fragment Mono", monospace;
          letter-spacing: 0.08em;
          margin: 0;
        }

        @container (min-width: 768px) {
          .s9-wrap {
            padding: 100px 32px;
          }
        }

        @container (min-width: 1024px) {
          .s9-inner {
            max-width: 720px;
          }
        }

        @container (min-width: 1440px) {
          .s9-wrap {
            padding: 120px 120px;
            max-width: 1440px;
            margin: 0 auto;
          }
          .s9-inner {
            max-width: 860px;
          }
        }

        @container (max-width: 767px) {
          .s9-title {
            font-size: 40px;
            letter-spacing: -1px;
          }
          .s9-actions {
            flex-direction: column;
            align-items: center;
          }
          .s9-btn {
            width: 100%;
            max-width: 320px;
          }
        }
      `}</style>

      <section
        className="s9-cta-band"
        id="section-9"
        style={{
          marginTop,
          backgroundImage: `url('${bgUrl}')`,
        }}
      >
        {/* Overlay — rendered as a positioned div to accept dynamic opacity */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `rgba(0,0,0,${overlayOpacity})`,
            zIndex: 0,
          }}
        />

        <div className="s9-wrap" style={{ position: "relative", zIndex: 1 }}>
        <div className="s9-inner">
          <h2 className="s9-title">{title}</h2>
          <p className="s9-description">{description}</p>
          <div className="s9-actions">
            <a href={btn1Href} className="s9-btn" target="_blank" rel="noopener">
              {btn1Label}
            </a>
            <a href={btn2Href} className="s9-btn">
              {btn2Label}
            </a>
            <a href={btn3Href} className="s9-btn">
              {btn3Label}
            </a>
          </div>
          <p className="s9-footnote">{footnote}</p>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section09_CTA, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 4,
    displayStepper: true,
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Make Your AI Runs Reproducible.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "Every production AI failure has a root cause. These cases show how to find it fast, fix it correctly, and prevent recurrence. The same infrastructure is available now.",
  },
  btn1Label: {
    type: ControlType.String,
    title: "Button 1 Label",
    defaultValue: "Start Evaluation",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 Href",
    defaultValue: "https://syntitan.ai",
  },
  btn2Label: {
    type: ControlType.String,
    title: "Button 2 Label",
    defaultValue: "Run a Technical Demo",
  },
  btn2Href: {
    type: ControlType.String,
    title: "Button 2 Href",
    defaultValue: "mailto:contact@cubig.ai",
  },
  btn3Label: {
    type: ControlType.String,
    title: "Button 3 Label",
    defaultValue: "Explore: Why AI Fails",
  },
  btn3Href: {
    type: ControlType.String,
    title: "Button 3 Href",
    defaultValue: "/learn/why-ai-fails-after-deployment",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "30-min architecture review. Engineers-first. No sales pitch.",
  },
  backgroundImage: {
    type: ControlType.String,
    title: "Background Image URL",
    defaultValue: "",
    placeholder: "Leave blank to use default CDN image",
  },
  overlayOpacity: {
    type: ControlType.Number,
    title: "Overlay Opacity",
    defaultValue: 0.15,
    min: 0,
    max: 0.9,
    step: 0.05,
    displayStepper: true,
  },
})
