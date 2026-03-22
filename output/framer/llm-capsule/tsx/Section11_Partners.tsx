// Section11_Partners.tsx — Partner Logo Marquee
// Framer Code Component
import { addPropertyControls, ControlType } from "framer"

const IMAGE_BASE = "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

interface Partner {
  name: string
  logoSrc: string
  logoExt: string
}

interface Props {
  eyebrow?: string
  title?: string
  titleBrand?: string
  animationDuration?: number
}

const defaultPartners: Partner[] = [
  { name: "Gartner", logoSrc: "partner-gartner", logoExt: "png" },
  { name: "Naver Cloud", logoSrc: "partner-navercloud", logoExt: "avif" },
  { name: "SK Telecom", logoSrc: "partner-sktelecom", logoExt: "avif" },
  { name: "Kyobo", logoSrc: "partner-kyobo", logoExt: "avif" },
  { name: "ROK Army", logoSrc: "partner-korea army", logoExt: "avif" },
  { name: "ROK Air Force", logoSrc: "partner-korea-airforce", logoExt: "avif" },
  { name: "EUMC", logoSrc: "partner-eumc", logoExt: "avif" },
  { name: "Deutsche Telekom", logoSrc: "partner-deutsche-telekom", logoExt: "avif" },
  { name: "Claroty", logoSrc: "partner-claroty", logoExt: "png" },
  { name: "Korea Heritage Service", logoSrc: "partner-korea-heritage-service", logoExt: "jpg" },
  { name: "Ministry of Data", logoSrc: "partner-ministry-of-data-and-statistics", logoExt: "png" },
]

export default function Section11_Partners({
  eyebrow = "Partners",
  title = "Trusted by",
  titleBrand = "Industry Leaders",
  animationDuration = 30,
}: Props) {
  // Duplicate list for seamless marquee
  const allPartners = [...defaultPartners, ...defaultPartners]

  return (
    <>
      <style>{`
        .s11-section {
          width: 100%;
          padding: 80px 0;
          font-family: "DM Sans", sans-serif;
          color: #0f0f0f;
          background-color: #ffffff;
          -webkit-font-smoothing: antialiased;
          word-break: keep-all;
          overflow-wrap: break-word;
          overflow: hidden;
        }
        .s11-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }

        /* Section Header */
        .s11-section-header {
          margin-bottom: 48px;
          padding-bottom: 24px;
          border-bottom: 1px solid #e6e7e9;
        }
        .s11-eyebrow {
          display: block;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #636363;
          margin-bottom: 12px;
        }
        .s11-section-title {
          font-family: "DM Sans", sans-serif;
          font-size: 36px;
          font-weight: 700;
          color: #0f0f0f;
          line-height: 1.2;
          letter-spacing: -1px;
          margin: 0;
        }
        .s11-title-brand {
          background: linear-gradient(130deg, #6C54A0, #b44fcc 50%, #ff266a);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Marquee */
        .s11-marquee-wrap {
          width: 100%;
          overflow: hidden;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }
        @keyframes s11-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .s11-marquee-track {
          display: flex;
          align-items: center;
          gap: 0;
          width: max-content;
          animation: s11-marquee ${animationDuration}s linear infinite;
        }
        .s11-marquee-track:hover {
          animation-play-state: paused;
        }
        .s11-partner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 16px 28px;
          flex-shrink: 0;
        }
        .s11-partner-logo {
          height: 32px;
          width: auto;
          max-width: 100px;
          object-fit: contain;
          filter: grayscale(1) opacity(0.55);
          transition: filter 0.2s;
        }
        .s11-partner-item:hover .s11-partner-logo {
          filter: grayscale(0) opacity(1);
        }
        .s11-partner-name {
          font-size: 11px;
          font-weight: 500;
          color: #9c9c9c;
          text-align: center;
          white-space: nowrap;
        }

        /* Responsive */
        @media (min-width: 768px) {
          .s11-container { padding: 0 32px; }
          .s11-section-title { font-size: 42px; }
          .s11-partner-logo { height: 36px; max-width: 120px; }
        }
        @media (min-width: 1024px) {
          .s11-container { padding: 0 32px; }
          .s11-section-title { font-size: 48px; }
        }
        @media (min-width: 1440px) {
          .s11-container { padding: 0 120px; max-width: 1440px; }
        }
      `}</style>

      <section className="s11-section">
        <div className="s11-container">
          <div className="s11-section-header">
            <span className="s11-eyebrow">{eyebrow}</span>
            <h2 className="s11-section-title">
              {title}{" "}
              <span className="s11-title-brand">{titleBrand}</span>
            </h2>
          </div>
        </div>

        {/* Marquee — full width, outside container */}
        <div className="s11-marquee-wrap">
          <div className="s11-marquee-track">
            {allPartners.map((partner, i) => (
              <div className="s11-partner-item" key={i}>
                <img
                  className="s11-partner-logo"
                  src={`${IMAGE_BASE}/${partner.logoSrc}.${partner.logoExt}`}
                  alt={partner.name}
                  loading="lazy"
                />
                <span className="s11-partner-name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

addPropertyControls(Section11_Partners, {
  eyebrow: {
    type: ControlType.String,
    title: "Eyebrow",
    defaultValue: "Partners",
  },
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Trusted by",
  },
  titleBrand: {
    type: ControlType.String,
    title: "Title (Brand)",
    defaultValue: "Industry Leaders",
  },
  animationDuration: {
    type: ControlType.Number,
    title: "Scroll Speed (s)",
    defaultValue: 30,
    min: 10,
    max: 120,
    step: 5,
  },
})
