"use client";

import React from "react";
import "./PartnersSection.css";

const logos = [
  "/images/nori-logo-04.png",
  "/images/nori-logo-01.png",
  "/images/nori-logo-02.png",
  "/images/nori-logo-06.png",
  "/images/nori-logo-03.png"
];

export default function PartnersSection() {
  return (
    <section className="mo-partners">
      <div className="container mo-partners-grid">
        {/* Left Column: Heading */}
        <div className="mo-partners-content">
          <h5>Global Partners</h5>
          <h3>5m+ Trusted Partners 🤝</h3>
        </div>

        {/* Right Column: Logos flex */}
        <div className="mo-partners-list">
          {logos.map((logo, idx) => (
            <div key={idx} className="mo-partner-item">
              <img src={logo} alt={`Partner Logo ${idx + 1}`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
