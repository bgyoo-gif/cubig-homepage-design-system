// Section13_CTA.tsx — DTS CTA Band (Full-width dark gradient)
// Framer Code Component
import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  marginTop?: number
  title?: string
  titleHighlight?: string
  description?: string
  btn1Text?: string
  btn1Href?: string
  btn2Text?: string
  btn2Href?: string
  btn3Text?: string
  btn3Href?: string
  footnote?: string
}

export default function Section13_CTA({
  marginTop = 0,
  title = "Restricted Data.",
  titleHighlight = "Usable AI.",
  description = "DTS turns restricted, unusable, and inaccessible enterprise data into privacy-safe synthetic datasets -- without ever moving the original data. GS Certified. KISA approved. Available on AWS Marketplace.",
  btn1Text = "Run technical demo",
  btn1Href = "/contact",
  btn2Text = "See production cases",
  btn2Href = "/proof",
  btn3Text = "Explore SynTitan",
  btn3Href = "/syntitan",
  footnote = "30-min review / no sales pitch",
}: Props) {
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

        .s13-section {
          width: 100%;
        }
        .s13-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s13-cta-band {
          width: 100%;
          background-image: url('${IMAGE_BASE}/bg-wave-teal-blue.png');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          padding: 80px 16px;
          text-align: center;
          font-family: "DM Sans", sans-serif;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        /* Dark overlay for readability */
        .s13-cta-band::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(10, 10, 20, 0.62);
          z-index: 0;
        }
        .s13-cta-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 24px;
        }
        .s13-title {
          font-family: "DM Sans", sans-serif;
          font-size: 40px;
          font-weight: 700;
          color: #ffffff;
          line-height: 1.2;
          letter-spacing: -0.5px;
          text-wrap: balance;
          margin: 0;
        }
        .s13-title-highlight {
          /* brand-purple-lt */
          color: #c6c5fa;
        }
        .s13-description {
          font-size: 18px;
          color: #ffffff;
          line-height: 1.7;
          opacity: 0.9;
          margin: 0;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s13-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          justify-content: center;
        }
        .s13-btn {
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
          background-color: #ffffff;
          color: #0f0f0f;
          padding: 12px 32px;
          text-decoration: none;
          transition: opacity 0.2s;
          white-space: nowrap;
        }
        .s13-btn:hover { opacity: 0.9; }
        .s13-footnote {
          font-size: 12px;
          color: rgba(255, 255, 255, 0.55);
          margin: 0;
        }

        @container (min-width: 768px) {
          .s13-cta-band { padding: 100px 32px; }
          .s13-title    { font-size: 50px; }
        }
        @container (min-width: 1024px) {
          .s13-title { font-size: 56px; }
        }
        @container (min-width: 1440px) {
          .s13-cta-band  { padding: 120px 120px; }
          .s13-title     { font-size: 64px; }
          .s13-cta-inner { max-width: 1440px; }
        }
        @container (max-width: 767px) {
          .s13-actions { flex-direction: column; align-items: center; max-width: 320px; margin: 0 auto; }
          .s13-btn     { width: 100%; }
          .s13-title   { font-size: 40px; }
        }
      `}</style>

      <section className="s13-section" id="section-13" aria-label="Call to action" style={{ marginTop: `${marginTop}px` }}>
        <div className="s13-inner">
        <div className="s13-cta-band">
        <div className="s13-cta-inner">
          <h2 className="s13-title">
            {title}{" "}
            <span className="s13-title-highlight">{titleHighlight}</span>
          </h2>
          <p className="s13-description">{description}</p>
          <div className="s13-actions">
            {btn1Text && (
              <a href={btn1Href} className="s13-btn">
                {btn1Text}
              </a>
            )}
            {btn2Text && (
              <a href={btn2Href} className="s13-btn">
                {btn2Text}
              </a>
            )}
            {btn3Text && (
              <a href={btn3Href} className="s13-btn">
                {btn3Text}
              </a>
            )}
          </div>
          {footnote && <p className="s13-footnote">{footnote}</p>}
        </div>
        </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section13_CTA, {
  marginTop: {
    type: ControlType.Number,
    title: "Top Margin",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Restricted Data.",
  },
  titleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Usable AI.",
  },
  description: {
    type: ControlType.String,
    title: "Description",
    displayTextArea: true,
    defaultValue:
      "DTS turns restricted, unusable, and inaccessible enterprise data into privacy-safe synthetic datasets -- without ever moving the original data. GS Certified. KISA approved. Available on AWS Marketplace.",
  },
  btn1Text: {
    type: ControlType.String,
    title: "Button 1 Text",
    defaultValue: "Run technical demo",
  },
  btn1Href: {
    type: ControlType.String,
    title: "Button 1 Link",
    defaultValue: "/contact",
  },
  btn2Text: {
    type: ControlType.String,
    title: "Button 2 Text",
    defaultValue: "See production cases",
  },
  btn2Href: {
    type: ControlType.String,
    title: "Button 2 Link",
    defaultValue: "/proof",
  },
  btn3Text: {
    type: ControlType.String,
    title: "Button 3 Text",
    defaultValue: "Explore SynTitan",
  },
  btn3Href: {
    type: ControlType.String,
    title: "Button 3 Link",
    defaultValue: "/syntitan",
  },
  footnote: {
    type: ControlType.String,
    title: "Footnote",
    defaultValue: "30-min review / no sales pitch",
  },
})
