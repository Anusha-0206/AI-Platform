import { useState, useRef, useCallback } from "react";
import "./WatermarkRemover.css";

// ── SVG Icons ──
const IconChevronLeft = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wmr-back-icon"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const IconUpload = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wmr-dz-icon"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="17 8 12 3 7 8" />
    <line x1="12" y1="3" x2="12" y2="15" />
  </svg>
);

const IconLink = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wmr-link-icon"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const IconDownload = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

const IconGrid = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="wmr-hint-icon"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
    <path d="M3 9l4-4 4 4 4-4 4 4" />
    <path d="M3 15l4-4 4 4 4-4 4 4" />
  </svg>
);

// ── Particles (generated once at module level) ──
const PARTICLES = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  left: `${Math.random() * 100}%`,
  top: `${Math.random() * 100}%`,
  dur: `${3 + Math.random() * 5}s`,
  delay: `${Math.random() * 6}s`,
}));

// ── Main Component ──
export default function WatermarkRemover() {
  const [dragOver, setDragOver] = useState(false);
  const [previewSrc, setPreviewSrc] = useState(null);
  const [resultSrc, setResultSrc] = useState(null);
  const [status, setStatus] = useState("idle"); // idle | loading | done
  const [linkVal, setLinkVal] = useState("");
  const [shaking, setShaking] = useState(false);

  const fileInputRef = useRef(null);

  // Read file → data URL and set preview
  const processFile = useCallback((file) => {
    if (!file || !file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      setPreviewSrc(e.target.result);
      setResultSrc(null);
      setStatus("idle");
    };
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e) => {
      e.preventDefault();
      setDragOver(false);
      processFile(e.dataTransfer.files[0]);
    },
    [processFile],
  );

  const handleFileChange = (e) => {
    processFile(e.target.files[0]);
    e.target.value = "";
  };

  // Trigger the removal flow
  const startProcessing = useCallback(() => {
    if (!previewSrc && !linkVal.trim()) {
      setShaking(true);
      setTimeout(() => setShaking(false), 400);
      return;
    }
    setStatus("loading");
    setResultSrc(null);
    setTimeout(() => {
      setResultSrc(previewSrc);
      setStatus("done");
    }, 2400);
  }, [previewSrc, linkVal]);

  const handleRegenerate = () => {
    if (!previewSrc) return;
    setStatus("loading");
    setResultSrc(null);
    setTimeout(() => {
      setResultSrc(previewSrc);
      setStatus("done");
    }, 2000);
  };

  const handleDownload = () => {
    if (!resultSrc) return;
    const a = document.createElement("a");
    a.href = resultSrc;
    a.download = "watermark-removed.png";
    a.click();
  };

  return (
    <div className="wmr-root">
      {/* Background glows */}
      <div className="wmr-glow-a" />
      <div className="wmr-glow-b" />

      {/* Flowing SVG lines overlay */}
      <svg
        className="wmr-lines"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lg1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4f8fff" stopOpacity="0" />
            <stop offset="50%" stopColor="#00d4ff" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#4f8fff" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lg2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#c850c0" stopOpacity="0" />
            <stop offset="50%" stopColor="#4158d0" stopOpacity="0.45" />
            <stop offset="100%" stopColor="#c850c0" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path
          d="M-80 420 Q 280 100 650 320 T 1350 200 T 1550 450"
          stroke="url(#lg1)"
          strokeWidth="1.5"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;35,-22;0,0"
            dur="13s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M-80 620 Q 350 240 720 480 T 1440 300"
          stroke="url(#lg1)"
          strokeWidth="1"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-22,35;0,0"
            dur="17s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M120 -30 Q 480 300 840 180 T 1440 420"
          stroke="url(#lg2)"
          strokeWidth="1"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;22,18;0,0"
            dur="15s"
            repeatCount="indefinite"
          />
        </path>
        <path
          d="M-120 720 Q 240 360 840 600 T 1560 360"
          stroke="url(#lg2)"
          strokeWidth="0.8"
          fill="none"
        >
          <animateTransform
            attributeName="transform"
            type="translate"
            values="0,0;-18,-28;0,0"
            dur="21s"
            repeatCount="indefinite"
          />
        </path>
      </svg>

      {/* Particles */}
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="wmr-particle"
          style={{
            left: p.left,
            top: p.top,
            "--dur": p.dur,
            "--delay": p.delay,
          }}
        />
      ))}

      {/* App shell */}
      <div className="wmr-app">
        {/* Header */}
        <header className="wmr-header">
          <IconChevronLeft />
          <span className="wmr-title">Watermark Remover</span>
        </header>

        {/* Main two-column layout */}
        <main className="wmr-main">
          {/* ── LEFT: Upload card + Preview ── */}
          <div className="wmr-left">
            <div className="wmr-card">
              <div className="wmr-section-title">Upload your content</div>

              {/* Dropzone */}
              <div
                className={`wmr-dropzone${dragOver ? " drag-over" : ""}`}
                onClick={() => fileInputRef.current?.click()}
                onDragOver={(e) => {
                  e.preventDefault();
                  setDragOver(true);
                }}
                onDragLeave={() => setDragOver(false)}
                onDrop={handleDrop}
              >
                <div className="wmr-dz-icon-wrap">
                  <IconUpload />
                </div>
                <div className="wmr-dz-text">Drag &amp; drop file here</div>
                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  style={{ display: "none" }}
                  onChange={handleFileChange}
                />
              </div>

              {/* Divider */}
              <div className="wmr-divider">
                <span>or</span>
              </div>

              {/* Link input */}
              <div className="wmr-link-wrap">
                <IconLink />
                <input
                  className="wmr-link-input"
                  type="text"
                  placeholder="Paste link here..."
                  value={linkVal}
                  onChange={(e) => setLinkVal(e.target.value)}
                />
              </div>

              {/* Remove button */}
              <button
                className={`wmr-btn-remove${shaking ? " shake" : ""}`}
                disabled={status === "loading"}
                onClick={startProcessing}
              >
                Remove
              </button>
            </div>

            {/* Preview — shown after image is selected */}
            {previewSrc && (
              <div className="wmr-preview-box">
                <img src={previewSrc} alt="Preview" />
                <div className="wmr-preview-label">Preview</div>
              </div>
            )}
          </div>

          {/* ── RIGHT: Result panel ── */}
          <div className="wmr-right">
            {/* Idle hint */}
            {status === "idle" && !resultSrc && (
              <div className="wmr-hint">
                <IconGrid />
                <p>
                  Upload an image or paste a link
                  <br />
                  to remove its watermark instantly
                </p>
              </div>
            )}

            {/* Loading state */}
            {status === "loading" && (
              <div className="wmr-loading-wrap">
                <div className="wmr-bar-track">
                  <div className="wmr-bar-fill" />
                </div>
                <div className="wmr-loading-text">Loading.</div>
              </div>
            )}

            {/* Done — result image + actions + features */}
            {status === "done" && resultSrc && (
              <>
                <div className="wmr-result-label">Watermark Removed</div>

                <div className="wmr-result-img-wrap">
                  <img src={resultSrc} alt="Watermark Removed" />
                </div>

                <div className="wmr-actions">
                  <button className="wmr-btn-dl" onClick={handleDownload}>
                    <IconDownload />
                    Download
                  </button>
                  <button className="wmr-btn-regen" onClick={handleRegenerate}>
                    Regenerate
                  </button>
                </div>

                <div className="wmr-features">
                  <div className="wmr-feature">
                    <span className="wmr-dot" />
                    AI watermark remover
                  </div>
                  <div className="wmr-feature">
                    <span className="wmr-dot" />
                    Fast copyright processing
                  </div>
                  <div className="wmr-feature">
                    <span className="wmr-dot" />
                    Creation safe tools
                  </div>
                </div>
              </>
            )}
          </div>
        </main>
      </div>
    </div>
  );
}
