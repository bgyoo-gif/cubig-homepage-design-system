// Section09_CubigFits.tsx — Where CUBIG fits (banner-full, paint-lavender)
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Props {
  bannerText?: string
  bannerTextHighlight?: string
  ctaLabel?: string
  ctaHref?: string
}

export default function Section09_CubigFits({
  bannerText = "Databricks and Snowflake store your data. MLflow tracks your models.",
  bannerTextHighlight = "CUBIG is the layer between them and your AI",
  ctaLabel = "See how →",
  ctaHref = "/",
}: Props) {
  return (
    <div>
      <style>{`
        .s9esd-section {
          width: 100%;
          padding: 80px 0;
          background-color: #ffffff;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          box-sizing: border-box;
        }
        .s9esd-inner {
          width: 100%;
          container-type: inline-size;
        }
        .s9esd-container {
          width: 100%;
          padding: 0 16px;
          box-sizing: border-box;
          margin: 0 auto;
        }
        .s9esd-banner-full {
          width: 100%;
          text-align: center;
          padding: 32px 48px;
          border-radius: 40px;
          background-image: url('${IMAGE_BASE}/bg-paint-lavender-gold.webp');
          background-size: cover;
          background-position: center;
          position: relative;
          overflow: hidden;
          isolation: isolate;
          font-size: 18px;
          font-weight: 500;
          line-height: 1.7;
          border: none;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9esd-banner-full::before {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255, 255, 255, 0.82);
          z-index: 0;
        }
        .s9esd-banner-full > * {
          position: relative;
          z-index: 1;
        }
        .s9esd-banner-body {
          font-size: 16px;
          color: #0f0f0f;
          line-height: 1.7;
          max-width: 100%;
          margin: 0 auto;
          text-wrap: pretty;
          word-break: keep-all;
          overflow-wrap: break-word;
        }
        .s9esd-banner-body strong {
          font-weight: 600;
          color: #0f0f0f;
        }
        .s9esd-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 9999px;
          font-family: "DM Sans", sans-serif;
          font-weight: 500;
          font-size: 14px;
          cursor: pointer;
          border: 1px solid #e6e7e9;
          transition: opacity 0.2s, background-color 0.2s;
          white-space: nowrap;
          text-decoration: none;
          padding: 8px 16px;
          background-color: transparent;
          color: #0f0f0f;
          margin-top: 12px;
          display: block;
        }
        .s9esd-cta-btn:hover {
          background-color: #f7f7f7;
        }

        @container (min-width: 768px) {
          .s9esd-container { padding: 0 32px; }
        }
        @container (min-width: 1024px) {
          .s9esd-container { padding: 0 32px; }
          .s9esd-banner-body { max-width: 720px; }
        }
        @container (min-width: 1440px) {
          .s9esd-container { padding: 0 120px; max-width: 1440px; }
          .s9esd-banner-body { max-width: 860px; }
        }
      `}</style>

      <section className="s9esd-section">
        <div className="s9esd-inner">
          <div className="s9esd-container">
            <div
              className="s9esd-banner-full"
              role="complementary"
              aria-label="Where CUBIG fits"
            >
              <p className="s9esd-banner-body">
                {bannerText} <strong>{bannerTextHighlight}</strong> — making data usable, reproducible, and blocker-free in production.
                <a href={ctaHref} className="s9esd-cta-btn">
                  {ctaLabel}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

addPropertyControls(Section09_CubigFits, {
  bannerText: {
    type: ControlType.String,
    title: "Banner Text",
    displayTextArea: true,
    defaultValue: "Databricks and Snowflake store your data. MLflow tracks your models.",
  },
  bannerTextHighlight: {
    type: ControlType.String,
    title: "Banner Highlight",
    defaultValue: "CUBIG is the layer between them and your AI",
  },
  ctaLabel: {
    type: ControlType.String,
    title: "CTA Label",
    defaultValue: "See how →",
  },
  ctaHref: {
    type: ControlType.String,
    title: "CTA Href",
    defaultValue: "/",
  },
})
