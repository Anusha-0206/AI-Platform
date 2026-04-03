import { useState, useRef } from "react";
import "./Copyright.css";

/* ─── Icons ─── */
const BackIcon = () => (
  <svg
    width="19"
    height="19"
    viewBox="0 0 24 24"
    fill="none"
    stroke="white"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const UploadIcon = () => (
  <svg
    width="46"
    height="42"
    viewBox="0 0 54 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14 37C8.5 37 4 32.5 4 27C4 22.5 7 18.8 11.2 17.6C11.1 17.1 11 16.6 11 16C11 10.5 15.5 6 21 6C23.8 6 26.3 7.1 28.1 9C29.7 6.6 32.4 5 35.5 5C40.7 5 45 9.3 45 14.5C45 14.7 45 14.9 44.9 15.1C48.5 16.2 51 19.6 51 23.5C51 28.5 47 32.5 42 32.5H37"
      stroke="white"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="27"
      y1="19"
      x2="27"
      y2="44"
      stroke="white"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
    <polyline
      points="19,36 27,44 35,36"
      fill="none"
      stroke="white"
      strokeWidth="2.1"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const LinkIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="rgba(255,255,255,0.45)"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    width="15"
    height="15"
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

const ShieldIcon = () => (
  <div className="cc-shield-container">
    <svg
      className="cc-shield-svg"
      viewBox="0 0 72 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M36 4L6 16v22c0 15.9 12.4 30.8 30 34 17.6-3.2 30-18.1 30-34V16L36 4z"
        fill="url(#shG)"
        stroke="#22c55e"
        strokeWidth="1.5"
      />
      <polyline
        points="22,38 31,47 50,28"
        stroke="#fff"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <defs>
        <linearGradient
          id="shG"
          x1="6"
          y1="4"
          x2="66"
          y2="76"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#16a34a" />
          <stop offset="1" stopColor="#14532d" />
        </linearGradient>
      </defs>
    </svg>
    <div className="cc-shield-glow" />
  </div>
);

/* ─── Images ─── */
const PREVIEW_IMG =
  "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=80";
const RESULT_IMG =
  "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80";

/* ─── Component ─── */
export default function Copyright() {
  // "idle" | "loading" | "safe" | "changed"
  const [imagePreview, setImagePreview] = useState(null);
  const [status, setStatus] = useState("idle");
  const [progress, setProgress] = useState(0);
  const [link, setLink] = useState("");
  const [dragOver, setDragOver] = useState(false);
  const [fileName, setFileName] = useState("");
  const fileRef = useRef(null);

  const startLoading = (name = "") => {
    setFileName(name);
    setStatus("loading");
    setProgress(0);
    let p = 0;
    const iv = setInterval(() => {
      p += Math.random() * 8 + 4;
      if (p >= 100) {
        p = 100;
        clearInterval(iv);
        setTimeout(() => setStatus("safe"), 500);
      }
      setProgress(Math.min(p, 100));
    }, 120);
  };

  const handleFileChange = (e) => {
    const f = e.target.files?.[0];
    if (f) {
      setImagePreview(URL.createObjectURL(f)); // ✅ store image
      startLoading(f.name);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const f = e.dataTransfer.files?.[0];
    if (f) {
      setImagePreview(URL.createObjectURL(f)); // ✅ store image
      startLoading(f.name);
    }
  };

  const handleBack = () => {
    setStatus("idle");
    setProgress(0);
    setLink("");
    setFileName("");
    setImagePreview(null); // ✅ reset image
    if (fileRef.current) fileRef.current.value = "";
  };
  const handleDownload = async () => {
    try {
      const imgSrc = imagePreview || RESULT_IMG;
      if (!imgSrc) return;

      const response = await fetch(imgSrc);
      const blob = await response.blob();

      const url = window.URL.createObjectURL(blob);

      const a = document.createElement("a");
      a.href = url;
      a.download = "copyright-checked.png";
      document.body.appendChild(a);
      a.click();

      a.remove();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed:", error);
    }
  };
  return (
    <div className="cc-root">
      {/* Background layers */}
      <div className="cc-bg-base" />
      <div className="cc-wave-lines" />
      <div className="cc-dot-grid" />
      <div className="cc-glow-left" />
      <div className="cc-glow-center" />

      <div className="cc-page">
        {/* ── NAVBAR ── */}
        <div className="cc-navbar">
          <button className="cc-back-btn" onClick={handleBack}>
            <BackIcon />
          </button>
          <h1 className="cc-title">Copyright Checker</h1>
        </div>

        {/* ── COLUMNS ── */}
        <div className="cc-columns">
          {/* ════ LEFT CARD ════ */}
          <div className="cc-card">
            <p className="cc-card-heading">Upload your content</p>

            {/* Drop Zone */}
            <div
              className={`cc-dropzone${dragOver ? " cc-dz-over" : ""}${status === "loading" ? " cc-dz-loading" : ""}`}
              onClick={() => status !== "loading" && fileRef.current?.click()}
              onDragOver={(e) => {
                e.preventDefault();
                setDragOver(true);
              }}
              onDragLeave={() => setDragOver(false)}
              onDrop={handleDrop}
              tabIndex={0}
              role="button"
            >
              <input
                ref={fileRef}
                type="file"
                hidden
                onChange={handleFileChange}
              />
              <span className="cc-upload-icon">
                <UploadIcon />
              </span>
              <span className="cc-dz-label">
                {fileName ? fileName : "Drag & drop file here"}
              </span>
            </div>

            {/* OR */}
            <div className="cc-or-row">
              <span className="cc-or-line" />
              <span className="cc-or-word">or</span>
              <span className="cc-or-line" />
            </div>

            {/* Link input */}
            <div className="cc-link-box">
              <span className="cc-link-icon">
                <LinkIcon />
              </span>
              <input
                className="cc-link-field"
                placeholder="Paste link here..."
                value={link}
                onChange={(e) => setLink(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" && link.trim() && startLoading()
                }
              />
            </div>

            {/* CTA Button */}
            <div className="cc-btn-wrap">
              <button
                className="cc-change-btn"
                onClick={() => {
                  if (status === "idle") startLoading();
                  else if (status === "safe") setStatus("changed");
                  else if (status === "changed") handleBack();
                }}
                disabled={status === "loading"}
              >
                {status === "changed" ? "Check Again" : "Change Copyright"}
              </button>
            </div>

            {/* Preview */}
            <div className="cc-preview">
              <img
                src={imagePreview || PREVIEW_IMG}
                alt="preview"
                className="cc-preview-img"
              />
              <div className="cc-preview-badge">Preview</div>
            </div>
          </div>

          {/* ════ RIGHT PANEL ════ */}
          <div className="cc-right-panel">
            {/* IDLE */}
            {status === "idle" && (
              <div className="cc-state cc-idle-state">
                <svg
                  width="52"
                  height="58"
                  viewBox="0 0 72 80"
                  fill="none"
                  className="cc-idle-shield"
                >
                  <path
                    d="M36 4L6 16v22c0 15.9 12.4 30.8 30 34 17.6-3.2 30-18.1 30-34V16L36 4z"
                    fill="rgba(80,100,200,0.1)"
                    stroke="rgba(120,140,255,0.25)"
                    strokeWidth="1.5"
                  />
                </svg>
                <p className="cc-idle-hint">
                  Upload a file or paste a link
                  <br />
                  to check for copyright issues
                </p>
              </div>
            )}

            {/* LOADING */}
            {status === "loading" && (
              <div className="cc-state cc-loading-state">
                <div className="cc-loader-group">
                  <div className="cc-loader-track">
                    <div
                      className="cc-loader-bar"
                      style={{ width: `${progress}%` }}
                    />
                  </div>
                  <span className="cc-loading-txt">Loading.</span>
                </div>
              </div>
            )}

            {/* SAFE — No copyright issues */}
            {status === "safe" && (
              <div className="cc-state cc-safe-state">
                <ShieldIcon />
                <h2 className="cc-result-title">No copyright issues found</h2>
                <p className="cc-result-sub">
                  Your content appears to be original
                </p>

                {/* Green progress bar */}
                <div className="cc-progress-row">
                  <div className="cc-progress-track">
                    <div className="cc-progress-fill cc-fill-green" />
                  </div>
                  <span className="cc-progress-pct">100%</span>
                </div>

                {/* Buttons */}
                <div className="cc-action-row">
                  <button className="cc-btn-download" onClick={handleDownload}>
                    <DownloadIcon /> Download
                  </button>
                  <button
                    className="cc-btn-regenerate"
                    onClick={() => setStatus("changed")}
                  >
                    Regenerate
                  </button>
                </div>

                {/* Features */}
                <ul className="cc-features">
                  <li>Fast Copyright scan</li>
                  <li>AI similarity detection</li>
                  <li>Safe for creation</li>
                </ul>
              </div>
            )}

            {/* CHANGED — Copyright Removed */}
            {status === "changed" && (
              <div className="cc-state cc-changed-state">
                <p className="cc-changed-label">Copyright Removed</p>

                <div className="cc-result-img-wrap">
                  <img
                    src={imagePreview || RESULT_IMG}
                    alt="result"
                    className="cc-result-img"
                  />
                </div>

                <div className="cc-action-row">
                  <button className="cc-btn-download">
                    <DownloadIcon /> Download
                  </button>
                  <button
                    className="cc-btn-regenerate"
                    onClick={() => setStatus("safe")}
                  >
                    Regenerate
                  </button>
                </div>

                <ul className="cc-features">
                  <li>AI copyright changer</li>
                  <li>Fast copyright processing</li>
                  <li>Safe for creation</li>
                </ul>
              </div>
            )}
          </div>
          {/* /cc-right-panel */}
        </div>
        {/* /cc-columns */}
      </div>
      {/* /cc-page */}
    </div>
  );
}
