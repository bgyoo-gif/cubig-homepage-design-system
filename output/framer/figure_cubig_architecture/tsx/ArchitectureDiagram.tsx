import { useEffect } from "react"
import { addPropertyControls, ControlType } from "framer"

const FONT_URL = "https://fonts.googleapis.com/css2?family=DM+Sans:wght@300;400;500;600;700&family=Oxanium:wght@700&family=Fragment+Mono&display=swap"
import { useState } from "react"

// ─── Palette ────────────────────────────────────────────────────────────────
const PALETTE = {
  brandPrimary: "#3061f2",
  brandPurple: "#725bea",
  neutral900: "#0f0f0f",
  neutral700: "#303135",
  neutral500: "#636363",
  neutral400: "#9c9c9c",
  neutral300: "#bababa",
  neutral200: "#e0e0e0",
  neutral150: "#e6e7e9",
  neutral050: "#f2f2f2",
  neutral025: "#f7f7f7",
  white: "#ffffff",
  success: "#0e824c",
  error: "#ff3030",
  borderDefault: "#e6e7e9",
  surfaceLight: "#f7f7f7",
  surfaceWhite: "#ffffff",
}

// ─── Types ───────────────────────────────────────────────────────────────────
interface Props {
  title?: string
  subtitle?: string
  footerText?: string
  backgroundColor?: string
}

// ─── SVG helpers ─────────────────────────────────────────────────────────────
const ArrowSVG = () => (
  <svg viewBox="0 0 48 24" fill="none" style={{ width: 48, height: 24 }}>
    <path d="M4 12 L38 12" stroke={PALETTE.borderDefault} strokeWidth="2" strokeLinecap="round" />
    <path d="M34 7 L42 12 L34 17" fill="none" stroke={PALETTE.neutral400} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const ConnectorSVG = () => (
  <svg viewBox="0 0 2 12" style={{ width: 2, height: 12 }}>
    <line x1="1" y1="0" x2="1" y2="12" stroke={PALETTE.borderDefault} strokeWidth="1" strokeDasharray="2 2" />
  </svg>
)

// ─── Data ────────────────────────────────────────────────────────────────────
const DATA_SOURCES = [
  {
    name: "Databases",
    sub: "SQL · NoSQL",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    ),
  },
  {
    name: "Documents",
    sub: "Contracts · Internal",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
  },
  {
    name: "CRM & ERP",
    sub: "Salesforce · SAP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    name: "Object Storage",
    sub: "S3 · Data Lake",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M22 12H2" />
        <path d="M5.45 5.11L2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z" />
      </svg>
    ),
  },
  {
    name: "Logs & IoT",
    sub: "Sensors · Streams",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    name: "APIs & Legacy",
    sub: "REST · SOAP",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
]

const AI_APPS = [
  {
    name: "Fraud Detection & Monitoring",
    sub: "Stable production models · rare-event coverage",
    tags: [{ label: "DTS", cls: "dts" }, { label: "SynTitan", cls: "syntitan" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 10l3 3 7-7" stroke={PALETTE.success} strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    name: "Customer Analytics",
    sub: "Privacy-safe insights · churn prediction",
    tags: [{ label: "DTS", cls: "dts" }, { label: "LLM Capsule", cls: "capsule" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    name: "AI Agents",
    sub: "Survey · price strategy · instant research",
    tags: [{ label: "SynTitan", cls: "syntitan" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    name: "Policy & Risk Simulation",
    sub: "What-if scenarios · regulatory impact",
    tags: [{ label: "DTS", cls: "dts" }, { label: "SynTitan", cls: "syntitan" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    name: "Enterprise Copilots",
    sub: "LLM on internal data · RAG · PII-safe",
    tags: [{ label: "LLM Capsule", cls: "capsule" }, { label: "SynTitan", cls: "syntitan" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
  },
  {
    name: "Sensitive Document Access",
    sub: "Enterprise RAG · secure knowledge base",
    tags: [{ label: "LLM Capsule", cls: "capsule" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <rect x="3" y="11" width="18" height="11" rx="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
  {
    name: "Reproducible AI Execution",
    sub: "Schema fingerprinting · version-locked runs",
    tags: [{ label: "SynTitan", cls: "syntitan" }],
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke={PALETTE.neutral500} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: 16, height: 16 }}>
        <polyline points="17 1 21 5 17 9" />
        <path d="M3 11V9a4 4 0 0 1 4-4h14" />
        <polyline points="7 23 3 19 7 15" />
        <path d="M21 13v2a4 4 0 0 1-4 4H3" />
      </svg>
    ),
  },
]

const TAG_STYLES: Record<string, { bg: string; color: string }> = {
  dts: { bg: "rgba(14,130,76,0.08)", color: PALETTE.success },
  syntitan: { bg: "rgba(48,97,242,0.08)", color: PALETTE.brandPrimary },
  capsule: { bg: "rgba(166,23,255,0.08)", color: PALETTE.brandPurple },
}

// ─── Component ───────────────────────────────────────────────────────────────
export default function ArchitectureDiagram({
  title = "AI-Ready Data Infrastructure",
  subtitle = "CUBIG",
  footerText = "ISO 27001 · ISO 42001 · GS Certified · AWS Marketplace · 10+ Patents",
  backgroundColor = PALETTE.surfaceLight,
}: Props) {
  const [isNarrow, setIsNarrow] = useState(false)

  const styles = {
    wrapper: {
      width: "100%",
      minHeight: "100%",
      background: backgroundColor,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "40px 20px",
      fontFamily: '"DM Sans", sans-serif',
      boxSizing: "border-box" as const,
    },
    archWrap: {
      width: "100%",
      maxWidth: 1440,
      background: PALETTE.surfaceWhite,
      borderRadius: 24,
      border: `1px solid ${PALETTE.borderDefault}`,
      padding: 48,
      boxShadow: "0px 24px 40px rgba(0,0,0,0.04)",
      boxSizing: "border-box" as const,
    },
    archTitle: {
      textAlign: "center" as const,
      marginBottom: 40,
    },
    archTitleH1: {
      fontFamily: '"DM Sans", sans-serif',
      fontSize: 28,
      fontWeight: 700,
      color: PALETTE.neutral900,
      lineHeight: 1.2,
      letterSpacing: "-0.5px",
      marginBottom: 4,
      margin: "0 0 4px 0",
    },
    archSubtitle: {
      fontFamily: '"Oxanium", sans-serif',
      fontSize: 12,
      fontWeight: 700,
      color: PALETTE.neutral400,
      letterSpacing: "3px",
      textTransform: "uppercase" as const,
    },
    // Grid: 5 columns on desktop, 1 column on narrow
    archColumns: {
      display: "grid",
      gridTemplateColumns: isNarrow ? "1fr" : "180px 48px 1fr 48px 300px",
      gap: isNarrow ? 32 : 0,
      alignItems: "center",
    },
    archColLabel: {
      fontSize: 10,
      fontWeight: 600,
      letterSpacing: "2.5px",
      textTransform: "uppercase" as const,
      color: PALETTE.neutral400,
      marginBottom: 16,
      textAlign: "center" as const,
    },
    // Sources col
    colSources: {
      alignSelf: "start" as const,
    },
    sourceList: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 8,
    },
    sourceCard: {
      display: "flex",
      alignItems: "center",
      gap: 12,
      padding: "10px 14px",
      background: PALETTE.surfaceWhite,
      border: `1px solid ${PALETTE.borderDefault}`,
      borderRadius: 8,
    },
    sourceIcon: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: PALETTE.surfaceLight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    sourceName: {
      fontSize: 13,
      fontWeight: 500,
      color: PALETTE.neutral900,
      lineHeight: 1.3,
    },
    sourceSub: {
      fontSize: 10,
      color: PALETTE.neutral400,
      marginTop: 1,
    },
    sourceFootnote: {
      textAlign: "center" as const,
      fontSize: 10,
      color: PALETTE.neutral300,
      fontStyle: "italic",
      marginTop: 8,
    },
    // Arrow
    archArrow: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center" as const,
      transform: isNarrow ? "rotate(90deg)" : "none",
    },
    // Platform col
    colPlatform: {
      alignSelf: "start" as const,
    },
    platformCol: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 12,
    },
    platformBox: {
      border: `1.5px solid ${PALETTE.borderDefault}`,
      borderRadius: 18,
      padding: 24,
      background: PALETTE.surfaceWhite,
      position: "relative" as const,
    },
    platformBoxLabel: {
      position: "absolute" as const,
      top: -10,
      left: "50%",
      transform: "translateX(-50%)",
      background: PALETTE.surfaceWhite,
      padding: "0 12px",
      fontSize: 9,
      fontWeight: 600,
      letterSpacing: "2.5px",
      color: PALETTE.neutral300,
      textTransform: "uppercase" as const,
      whiteSpace: "nowrap" as const,
    },
    // Product cards
    productCardBase: {
      borderRadius: 12,
      padding: 20,
      marginBottom: 12,
    },
    productCardDts: {
      background: "rgba(14,130,76,0.04)",
      border: "1px solid rgba(14,130,76,0.15)",
    },
    productCardSyntitan: {
      background: "rgba(48,97,242,0.04)",
      border: "1px solid rgba(48,97,242,0.15)",
    },
    productCardCapsule: {
      background: "rgba(166,23,255,0.04)",
      border: "1px solid rgba(166,23,255,0.15)",
    },
    productHeader: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginBottom: 10,
    },
    productName: {
      fontFamily: '"Oxanium", sans-serif',
      fontSize: 16,
      fontWeight: 700,
    },
    productRole: {
      fontSize: 11,
      color: PALETTE.neutral500,
      marginLeft: "auto",
    },
    productPills: {
      display: "flex",
      flexWrap: "wrap" as const,
      gap: 6,
      marginBottom: 8,
    },
    productPillBase: {
      fontSize: 10,
      fontWeight: 500,
      padding: "3px 10px",
      borderRadius: 9999,
    },
    productFix: {
      fontSize: 10,
      color: PALETTE.neutral400,
      marginBottom: 8,
    },
    productFixSpan: {
      color: PALETTE.error,
    },
    productFlow: {
      display: "flex",
      alignItems: "center",
      gap: 6,
      flexWrap: "wrap" as const,
    },
    productStepBase: {
      fontSize: 10,
      fontWeight: 500,
      padding: "3px 10px",
      borderRadius: 5,
    },
    productArrow: {
      fontSize: 10,
      color: PALETTE.neutral300,
    },
    productOutputBase: {
      fontSize: 10,
      fontWeight: 600,
      padding: "4px 12px",
      borderRadius: 5,
    },
    productConnector: {
      display: "flex",
      justifyContent: "center",
      margin: "-6px 0",
      position: "relative" as const,
      zIndex: 1,
    },
    productMapper: {
      display: "flex",
      justifyContent: "center",
      marginTop: 4,
    },
    productMapperSpan: {
      fontSize: 10,
      color: PALETTE.brandPurple,
      background: "rgba(166,23,255,0.06)",
      border: "1px solid rgba(166,23,255,0.15)",
      padding: "2px 10px",
      borderRadius: 5,
    },
    // Apps col
    colApps: {
      alignSelf: "start" as const,
    },
    appList: {
      display: "flex",
      flexDirection: "column" as const,
      gap: 8,
    },
    appCard: {
      display: "flex",
      alignItems: "flex-start",
      gap: 12,
      padding: "12px 14px",
      background: PALETTE.surfaceWhite,
      border: `1px solid ${PALETTE.borderDefault}`,
      borderRadius: 8,
    },
    appIcon: {
      width: 32,
      height: 32,
      borderRadius: 6,
      background: PALETTE.surfaceLight,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
    },
    appContent: {
      flex: 1,
      minWidth: 0,
    },
    appName: {
      fontSize: 13,
      fontWeight: 600,
      color: PALETTE.neutral900,
      lineHeight: 1.3,
    },
    appSub: {
      fontSize: 10,
      color: PALETTE.neutral400,
      marginTop: 2,
    },
    appTags: {
      display: "flex",
      gap: 4,
      marginTop: 6,
      flexWrap: "wrap" as const,
    },
    appTagBase: {
      fontSize: 9,
      fontWeight: 600,
      padding: "2px 8px",
      borderRadius: 4,
      fontFamily: '"Oxanium", sans-serif',
    },
    // Footer
    archFooter: {
      textAlign: "center" as const,
      marginTop: 32,
      paddingTop: 20,
      borderTop: `1px solid ${PALETTE.borderDefault}`,
    },
    archFooterSpan: {
      fontSize: 10,
      fontWeight: 500,
      letterSpacing: "2px",
      color: PALETTE.neutral300,
      textTransform: "uppercase" as const,
    },
  }

  // Per-product color maps
  const productColors: Record<string, { name: string; pill: { bg: string; color: string }; step: { bg: string; color: string; border: string }; output: { bg: string; border: string; color: string }; cardStyle: React.CSSProperties }> = {
    dts: {
      name: PALETTE.success,
      pill: { bg: "rgba(14,130,76,0.08)", color: PALETTE.success },
      step: { bg: "rgba(14,130,76,0.06)", color: PALETTE.success, border: "1px solid rgba(14,130,76,0.12)" },
      output: { bg: "rgba(14,130,76,0.08)", border: "1px solid rgba(14,130,76,0.2)", color: PALETTE.success },
      cardStyle: styles.productCardDts,
    },
    syntitan: {
      name: PALETTE.brandPrimary,
      pill: { bg: "rgba(48,97,242,0.08)", color: PALETTE.brandPrimary },
      step: { bg: "rgba(48,97,242,0.06)", color: PALETTE.brandPrimary, border: "1px solid rgba(48,97,242,0.12)" },
      output: { bg: "rgba(48,97,242,0.08)", border: "1px solid rgba(48,97,242,0.2)", color: PALETTE.brandPrimary },
      cardStyle: styles.productCardSyntitan,
    },
    capsule: {
      name: PALETTE.brandPurple,
      pill: { bg: "rgba(166,23,255,0.08)", color: PALETTE.brandPurple },
      step: { bg: "rgba(166,23,255,0.06)", color: PALETTE.brandPurple, border: "1px solid rgba(166,23,255,0.12)" },
      output: { bg: "rgba(166,23,255,0.08)", border: "1px solid rgba(166,23,255,0.2)", color: PALETTE.brandPurple },
      cardStyle: styles.productCardCapsule,
    },
  }

  const products = [
    {
      key: "dts",
      name: "DTS",
      role: "Data Usability & Privacy",
      pills: ["synthetic augmentation", "differential privacy", "class balancing"],
      fix: "fixes unusable data · data-level privacy",
      steps: ["Diagnose", "Transform", "Synthetic Data"],
      output: "Usable Data",
      showMapper: false,
    },
    {
      key: "syntitan",
      name: "SynTitan",
      role: "Execution Stability",
      pills: ["state versioning", "drift detection", "Data Quality Refinement"],
      fix: "fixes unstable execution",
      steps: ["Execution", "Run Binding", "Release State"],
      output: "Stable",
      showMapper: false,
    },
    {
      key: "capsule",
      name: "LLM Capsule",
      role: "Secure LLM Access",
      pills: ["PII detection", "prompt anonymization", "output remapping"],
      fix: "fixes inference-level privacy",
      steps: ["Encapsulate", "LLM Access", "Restoration"],
      output: "Privacy-safe",
      showMapper: true,
    },
  ]

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
        * { box-sizing: border-box; margin: 0; padding: 0; }
      `}</style>
      <div style={styles.wrapper}>
        <div style={styles.archWrap}>
          {/* Title */}
          <div style={styles.archTitle}>
            <h1 style={styles.archTitleH1}>{title}</h1>
            <span style={styles.archSubtitle}>{subtitle}</span>
          </div>

          {/* 5-column grid */}
          <div style={styles.archColumns}>

            {/* COL 1: Data Sources */}
            <div style={styles.colSources}>
              <div style={styles.archColLabel}>Data Sources</div>
              <div style={styles.sourceList}>
                {DATA_SOURCES.map((src) => (
                  <div key={src.name} style={styles.sourceCard}>
                    <div style={styles.sourceIcon}>{src.icon}</div>
                    <div>
                      <div style={styles.sourceName}>{src.name}</div>
                      <div style={styles.sourceSub}>{src.sub}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={styles.sourceFootnote}>structured &amp; unstructured</div>
            </div>

            {/* Arrow 1 */}
            <div style={styles.archArrow}>
              <ArrowSVG />
            </div>

            {/* COL 2: Platform */}
            <div style={styles.colPlatform}>
              <div style={styles.platformCol}>
                <div style={styles.platformBox}>
                  <span style={styles.platformBoxLabel}>AI-Ready Platform</span>

                  {products.map((p, idx) => {
                    const c = productColors[p.key]
                    return (
                      <div key={p.key}>
                        {/* Product card */}
                        <div style={{ ...styles.productCardBase, ...c.cardStyle, marginBottom: p.showMapper ? 0 : 12 }}>
                          <div style={styles.productHeader}>
                            <span style={{ ...styles.productName, color: c.name }}>{p.name}</span>
                            <span style={styles.productRole}>{p.role}</span>
                          </div>
                          <div style={styles.productPills}>
                            {p.pills.map((pill) => (
                              <span key={pill} style={{ ...styles.productPillBase, background: c.pill.bg, color: c.pill.color }}>{pill}</span>
                            ))}
                          </div>
                          <div style={styles.productFix}>
                            <span style={styles.productFixSpan}>→</span> {p.fix}
                          </div>
                          <div style={styles.productFlow}>
                            {p.steps.map((step, si) => (
                              <span key={step}>
                                <span style={{ ...styles.productStepBase, background: c.step.bg, color: c.step.color, border: c.step.border }}>{step}</span>
                                <span style={styles.productArrow}> → </span>
                              </span>
                            ))}
                            <span style={{ ...styles.productOutputBase, background: c.output.bg, border: c.output.border, color: c.output.color }}>{p.output}</span>
                          </div>
                          {p.showMapper && (
                            <div style={styles.productMapper}>
                              <span style={styles.productMapperSpan}>Mapper</span>
                            </div>
                          )}
                        </div>
                        {/* Connector between products (not after last) */}
                        {idx < products.length - 1 && (
                          <div style={styles.productConnector}>
                            <ConnectorSVG />
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            {/* Arrow 2 */}
            <div style={styles.archArrow}>
              <ArrowSVG />
            </div>

            {/* COL 3: AI Applications */}
            <div style={styles.colApps}>
              <div style={styles.archColLabel}>AI Applications</div>
              <div style={styles.appList}>
                {AI_APPS.map((app) => (
                  <div key={app.name} style={styles.appCard}>
                    <div style={styles.appIcon}>{app.icon}</div>
                    <div style={styles.appContent}>
                      <div style={styles.appName}>{app.name}</div>
                      <div style={styles.appSub}>{app.sub}</div>
                      <div style={styles.appTags}>
                        {app.tags.map((tag) => (
                          <span
                            key={tag.label}
                            style={{
                              ...styles.appTagBase,
                              background: TAG_STYLES[tag.cls].bg,
                              color: TAG_STYLES[tag.cls].color,
                            }}
                          >
                            {tag.label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div style={styles.archFooter}>
            <span style={styles.archFooterSpan}>{footerText}</span>
          </div>
        </div>
      </div>
    </>
  )
}

// ─── Property Controls ────────────────────────────────────────────────────────
addPropertyControls(ArchitectureDiagram, {
  title: {
    type: ControlType.String,
    title: "Title",
    defaultValue: "AI-Ready Data Infrastructure",
  },
  subtitle: {
    type: ControlType.String,
    title: "Subtitle",
    defaultValue: "CUBIG",
  },
  footerText: {
    type: ControlType.String,
    title: "Footer",
    defaultValue: "ISO 27001 · ISO 42001 · GS Certified · AWS Marketplace · 10+ Patents",
    displayTextArea: true,
  },
  backgroundColor: {
    type: ControlType.Color,
    title: "Background",
    defaultValue: "#f7f7f7",
  },
})
