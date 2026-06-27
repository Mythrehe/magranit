"use client";

import React from "react";
import "./StatsSection.css";

export default function StatsSection() {
  return (
    <section className="mo-stats">
      <div className="container mo-stats-grid">
        {/* Left Column: Heading and Counters */}
        <div className="mo-stats-content">
          <span className="mo-stats-badge">[ Guaranteed & certified ]</span>
          <h2 className="mo-stats-title">The Best Free Online Courses of all Time</h2>
          
          <div className="mo-stats-counters">
            <div className="mo-stat-box">
              <span className="mo-stat-num">25K+</span>
              <h6>Total active students taking gifted courses.</h6>
            </div>
            <div className="mo-stat-box">
              <span className="mo-stat-num">94%</span>
              <h6>Successful career transitions and job placements.</h6>
            </div>
          </div>
        </div>

        {/* Right Column: Visual Composition */}
        <div className="mo-stats-visual">
          <img src="/images/nori-img-13.jpg" alt="Student Main" className="mo-stats-img-main" />
          <img src="/images/nori-img-11.jpg" alt="Student Sub 1" className="mo-stats-img-sub1" />
          <img src="/images/nori-img-12.jpg" alt="Student Sub 2" className="mo-stats-img-sub2" />
          
          {/* Circular Spinning Text */}
          <div className="mo-stats-readmore-circle spin-anim">
            <div className="mo-stats-circle-text">
              read more . read more . read more
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
