import React, { useState } from "react";
import "./BirthdayWish.css";

// Edit these two lines to personalize the page.
const HER_NAME = "Akshi";
const YOUR_NAME = "Aravind";

const CONFETTI_COLORS = ["#14b8a6", "#0f766e", "#d4af37", "#f5d78e", "#fdfcf7"];
const PARTICLES = [
  { symbol: "♥", left: "8%", size: "1.1rem", duration: "12s", delay: "0s" },
  { symbol: "✦", left: "20%", size: "0.9rem", duration: "16s", delay: "2s" },
  { symbol: "♥", left: "35%", size: "1.4rem", duration: "13s", delay: "4s" },
  { symbol: "✦", left: "52%", size: "1rem", duration: "18s", delay: "1s" },
  { symbol: "♥", left: "68%", size: "1.2rem", duration: "15s", delay: "3.5s" },
  { symbol: "✦", left: "80%", size: "0.85rem", duration: "17s", delay: "5s" },
  { symbol: "♥", left: "92%", size: "1rem", duration: "14s", delay: "2.5s" },
];

const SPARKLES = Array.from({ length: 10 }, (_, i) => {
  const angle = (i / 10) * Math.PI * 2;
  return {
    id: i,
    tx: `${Math.cos(angle) * (40 + (i % 3) * 10)}px`,
    ty: `${Math.sin(angle) * (40 + (i % 3) * 10)}px`,
    delay: `${(i % 5) * 0.05}s`,
  };
});

function BirthdayWish() {
  // stage progresses idle -> kneel -> open -> revealed
  const [stage, setStage] = useState("idle");
  const [confetti, setConfetti] = useState([]);

  function launchConfetti() {
    const pieces = Array.from({ length: 60 }, (_, i) => ({
      id: `${Date.now()}-${i}`,
      left: `${Math.random() * 100}%`,
      background: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      width: `${6 + Math.random() * 6}px`,
      height: `${8 + Math.random() * 10}px`,
      duration: `${2.5 + Math.random() * 2}s`,
      delay: `${Math.random() * 0.6}s`,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4800);
  }

  function presentSurprise() {
    if (stage !== "idle") return;
    setStage("kneel");
    setTimeout(() => setStage("open"), 1200);
    setTimeout(() => {
      setStage("revealed");
      launchConfetti();
    }, 1200 + 900);
  }

  return (
    <div className="bw">
      <div className="bw-particles" aria-hidden="true">
        {PARTICLES.map((p, i) => (
          <span
            key={i}
            className="bw-particle"
            style={{
              left: p.left,
              "--size": p.size,
              "--left": p.left,
              "--duration": p.duration,
              "--delay": p.delay,
            }}
          >
            {p.symbol}
          </span>
        ))}
      </div>

      <div className="bw-hero">
        <svg className="bw-heartbeat" viewBox="0 0 600 60" aria-hidden="true">
          <path d="M0 30 H180 L210 10 L240 50 L270 20 L300 40 L330 30 H600" />
        </svg>
        <p className="bw-eyebrow">A small celebration for a remarkable woman</p>
        <h1 className="bw-title">
          Happy Birthday, <span className="bw-name">{HER_NAME}</span>
        </h1>
        <p className="bw-subtitle">
          Every day you dedicate yourself to healing others &mdash; today, the world gets to celebrate you.
        </p>
      </div>

      <div className="bw-photo-wrap">
        <div className="bw-photo-ring" aria-hidden="true" />
        <div className="bw-photo-ring delay" aria-hidden="true" />
        <div className="bw-photo">
          {/* Placeholder icon. See the comment above .bw-photo-img in
              BirthdayWish.css for how to swap this for a real photo. */}
          <svg className="bw-photo-icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 21s-7.5-4.6-10-9.1C.5 8.4 2.4 5 6 5c2 0 3.4 1 4 2 0 0 .6-2 4-2 3.6 0 5.5 3.4 4 6.9C19.5 16.4 12 21 12 21z"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
            <path
              d="M4 12h3l1.5-3 2 5 1.5-3h3.5"
              stroke="currentColor"
              strokeWidth="1.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>

      <div className="bw-card">
        <div className="bw-divider" aria-hidden="true" />
        <p>
          Between long shifts, difficult days, and the quiet moments where you hold someone else together,
          you still find the heart to be endlessly kind, endlessly brilliant, and endlessly you.
        </p>
        <p>
          Today isn&apos;t about anyone you&apos;ve cared for &mdash; it&apos;s about you. So here&apos;s to
          the doctor who heals the world, and the woman who has completely stolen my heart.
        </p>
        <p>Happy Birthday. I hope this year brings you as much joy as you bring everyone around you.</p>
      </div>

      <div className="bw-surprise-wrap">
        {stage === "idle" && (
          <button className="bw-surprise-btn" onClick={presentSurprise}>
            Present Your Surprise
          </button>
        )}

        {stage !== "idle" && (
          <div className={`bw-kneel-scene bw-stage-${stage}`}>
            <svg className="bw-kneel-figure" viewBox="0 0 160 140" aria-hidden="true">
              <g
                fill="none"
                stroke="var(--teal-deep)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="58" cy="24" r="11" />
                <path d="M58 35 C57 50 55 65 52 79" />
                <path d="M52 79 L46 118 L30 108" />
                <path d="M52 79 L78 90 L98 119" />
                <path d="M55 42 L86 60" />
              </g>
              <g transform="translate(84,54)">
                <rect
                  className="bw-box-base"
                  x="0"
                  y="10"
                  width="26"
                  height="18"
                  rx="2"
                  fill="var(--gold)"
                  stroke="var(--teal-deep)"
                  strokeWidth="2"
                />
                <rect
                  className="bw-box-lid"
                  x="-2"
                  y="4"
                  width="30"
                  height="10"
                  rx="2"
                  fill="var(--gold-soft)"
                  stroke="var(--teal-deep)"
                  strokeWidth="2"
                />
              </g>
            </svg>

            {stage === "open" && (
              <div className="bw-sparkle-burst" aria-hidden="true">
                {SPARKLES.map((s) => (
                  <span
                    key={s.id}
                    className="bw-sparkle"
                    style={{ "--tx": s.tx, "--ty": s.ty, animationDelay: s.delay }}
                  >
                    ✦
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {stage === "revealed" && (
          <p className="bw-surprise-note">
            &ldquo;Happy Birthday to the person who makes everyone else&apos;s life better for a living
            &mdash; and mine best of all. I love you.&rdquo;
          </p>
        )}
      </div>

      <div className="bw-footer">
        <p className="bw-footer-label">With love</p>
        <p className="bw-footer-name">{YOUR_NAME}</p>
      </div>

      {confetti.map((c) => (
        <span
          key={c.id}
          className="bw-confetti-piece"
          style={{
            left: c.left,
            background: c.background,
            width: c.width,
            height: c.height,
            animationDuration: c.duration,
            animationDelay: c.delay,
          }}
        />
      ))}
    </div>
  );
}

export default BirthdayWish;
