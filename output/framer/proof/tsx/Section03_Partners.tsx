import { addPropertyControls, ControlType } from "framer"

// ─── Design Tokens ───────────────────────────────────────────────────────────
const tokens = {
  colorBrandPurple: "#725bea",
  colorTextPrimary: "#0f0f0f",
  colorTextSecondary: "#636363",
  colorTextTertiary: "#9c9c9c",
  colorBorderDefault: "#e6e7e9",
  colorSurfaceWhite: "#ffffff",
  fontBase: '"DM Sans", sans-serif',
  fontCode: '"Fragment Mono", monospace',
}

const IMAGE_BASE =
  "https://bgyoo-gif.github.io/cubig-homepage-design-system/reference/images"

// ─── Partner Data ─────────────────────────────────────────────────────────────
const PARTNERS = [
  { src: `${IMAGE_BASE}/partner-gartner.png`,                      alt: "Gartner",                    name: "Gartner" },
  { src: `${IMAGE_BASE}/partner-navercloud.avif`,                  alt: "Naver Cloud",                name: "Naver Cloud" },
  { src: `${IMAGE_BASE}/partner-sktelecom.avif`,                   alt: "SK Telecom",                 name: "SK Telecom" },
  { src: `${IMAGE_BASE}/partner-kyobo.avif`,                       alt: "Kyobo",                      name: "Kyobo" },
  { src: `${IMAGE_BASE}/partner-korea army.avif`,                  alt: "ROK Army",                   name: "ROK Army" },
  { src: `${IMAGE_BASE}/partner-korea-airforce.avif`,              alt: "ROK Air Force",              name: "ROK Air Force" },
  { src: `${IMAGE_BASE}/partner-eumc.avif`,                        alt: "EUMC",                       name: "EUMC" },
  { src: `${IMAGE_BASE}/partner-deutsche-telekom.avif`,            alt: "Deutsche Telekom",           name: "Deutsche Telekom" },
  { src: `${IMAGE_BASE}/partner-claroty.png`,                      alt: "Claroty",                    name: "Claroty" },
  { src: `${IMAGE_BASE}/partner-korea-heritage-service.jpg`,       alt: "Korea Heritage Service",     name: "Korea Heritage Service" },
  { src: `${IMAGE_BASE}/partner-ministry-of-data-and-statistics.png`, alt: "Ministry of Data and Statistics", name: "Ministry of Data and Statistics" },
]

// ─── Props ────────────────────────────────────────────────────────────────────
interface Props {
  marginTop: number
  sectionTitle: string
  sectionTitleHighlight: string
  sectionDescription: string
  marqueeSpeed: number
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function Section03_Partners({
  marginTop = 0,
  sectionTitle = "Deployed Across",
  sectionTitleHighlight = "Regulated Industries",
  sectionDescription = "15+ enterprise clients across finance, telecom, healthcare, defense, and global sectors.",
  marqueeSpeed = 30,
}: Partial<Props>) {
  // 2벌 수동 복제 (Framer에서 cloneNode 불가)
  const allPartners = [...PARTNERS, ...PARTNERS]

  return (
    <>
      <style>{`
        .s3-section {
          width: 100%;
          padding: 80px 0;
          background-color: ${tokens.colorSurfaceWhite};
          font-family: ${tokens.fontBase};
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
        }

        .s3-inner {
          width: 100%;
          container-type: inline-size;
        }

        .s3-container {
          width: 100%;
          margin: 0 auto;
          padding: 0 16px;
          box-sizing: border-box;
        }
        @container (min-width: 768px)  { .s3-container { padding: 0 32px; } }
        @container (min-width: 1024px) { .s3-container { padding: 0 32px; } }
        @container (min-width: 1440px) { .s3-container { padding: 0 120px; max-width: 1440px; } }

        .s3-section-header {
          margin-bottom: 48px;
          text-align: center;
          padding-bottom: 24px;
          border-bottom: 1px solid ${tokens.colorBorderDefault};
        }
        @container (max-width: 767px) { .s3-section-header { text-align: left; } }

        .s3-section-header__title {
          font-family: ${tokens.fontBase};
          font-size: 20px;
          font-weight: 700;
          color: ${tokens.colorTextPrimary};
          line-height: 1.2;
          letter-spacing: -0.5px;
          margin-bottom: 16px;
          text-wrap: balance;
        }
        @container (min-width: 768px)  { .s3-section-header__title { font-size: 28px; } }
        @container (min-width: 1024px) { .s3-section-header__title { font-size: 32px; } }
        @container (min-width: 1440px) { .s3-section-header__title { font-size: 40px; } }

        .s3-section-header__brand {
          color: ${tokens.colorBrandPurple};
        }

        .s3-section-header__description {
          font-size: 18px;
          color: ${tokens.colorTextSecondary};
          line-height: 1.7;
          max-width: 720px;
          margin: 0 auto;
          word-break: keep-all;
          overflow-wrap: break-word;
          text-wrap: pretty;
        }
        @container (min-width: 1440px) {
          .s3-section-header__description { max-width: 860px; }
        }
        @container (max-width: 767px) {
          .s3-section-header__description { margin: 0; }
        }

        /* ── Marquee ── */
        .s3-partner-grid {
          width: 100vw;
          margin-left: calc(-50vw + 50%);
          overflow: hidden;
          padding: 32px 0;
        }

        .s3-partner-grid__track {
          display: flex;
          gap: 64px;
          align-items: center;
          width: max-content;
          animation: s3-marquee ${marqueeSpeed}s linear infinite;
        }
        .s3-partner-grid__track:hover {
          animation-play-state: paused;
        }

        @keyframes s3-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @container (max-width: 767px) {
          .s3-partner-grid__track { gap: 48px; animation-duration: ${Math.round(marqueeSpeed * 0.67)}s; }
        }

        .s3-partner-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
          flex-shrink: 0;
        }

        .s3-partner-item__logo {
          width: 120px;
          height: 100px;
          object-fit: contain;
          display: block;
        }
        @container (max-width: 767px) {
          .s3-partner-item__logo { width: 100px; height: 75px; }
        }

        .s3-partner-item__name {
          font-size: 12px;
          color: ${tokens.colorTextTertiary};
          text-align: center;
          white-space: nowrap;
          font-family: ${tokens.fontBase};
        }
      `}</style>

      <section
        className="s3-section"
        id="section-3"
        style={{ marginTop }}
      >
        <div className="s3-inner">
        <div className="s3-container">
          <div className="s3-section-header">
            <h2 className="s3-section-header__title">
              {sectionTitle}{" "}
              <span className="s3-section-header__brand">
                {sectionTitleHighlight}
              </span>
            </h2>
            <p className="s3-section-header__description">
              {sectionDescription}
            </p>
          </div>
        </div>

        <div className="s3-partner-grid" aria-label="Partner logos">
          <div className="s3-partner-grid__track">
            {allPartners.map((partner, i) => (
              <div className="s3-partner-item" key={i}>
                <img
                  className="s3-partner-item__logo"
                  src={partner.src}
                  alt={partner.alt}
                  loading="lazy"
                />
                <span className="s3-partner-item__name">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
        </div>
      </section>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(Section03_Partners, {
  marginTop: {
    type: ControlType.Number,
    title: "Margin Top",
    defaultValue: 0,
    min: 0,
    max: 200,
    step: 10,
    displayStepper: true,
  },
  sectionTitle: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "Deployed Across",
  },
  sectionTitleHighlight: {
    type: ControlType.String,
    title: "Title Highlight",
    defaultValue: "Regulated Industries",
  },
  sectionDescription: {
    type: ControlType.String,
    title: "Description",
    defaultValue:
      "15+ enterprise clients across finance, telecom, healthcare, defense, and global sectors.",
    displayTextArea: true,
  },
  marqueeSpeed: {
    type: ControlType.Number,
    title: "Marquee Speed (s)",
    defaultValue: 30,
    min: 10,
    max: 120,
    step: 5,
    displayStepper: true,
  },
})
