"use client";

import React from "react";
import "./StepsSection.css";

const stepsData = [
  {
    num: "01",
    title: "Learn the latest skills",
    desc: "Acquire the most in-demand technical, business, and creative skills through our verified learning curricula."
  },
  {
    num: "02",
    title: "Get ready for a career",
    desc: "Practice with mock tasks, practical portfolios, and curriculum modules that prepare you directly for the industry."
  },
  {
    num: "03",
    title: "Quality Skills Certificate",
    desc: "Receive shareable certificates validating your knowledge to global institutions, recruiters, and clients."
  },
  {
    num: "04",
    title: "Upskill your organization",
    desc: "Empower your corporate teams to master advanced capabilities, boosting overall business productivity."
  }
];

export default function StepsSection() {
  return (
    <section className="mo-steps" id="how-it-works">
      {/* Background Star elements */}
      <img src="/images/nori-icon-08.png" alt="Star Deco" className="mo-steps-star-1 spin-anim" />
      <img src="/images/nori-icon-08.png" alt="Star Deco" className="mo-steps-star-2 spin-anim" />

      <div className="container mo-steps-grid-split">
        {/* Left Column: Heading Info */}
        <div className="mo-steps-left">
          <span className="mo-steps-badge">[ HOW IT WORKS ]</span>
          <h2 className="mo-steps-title">Build better skills, faster</h2>
          <p className="mo-steps-desc-para">
            Our structured 4-step path takes you from learning core concepts to configuration, live practice, and getting certified. Upskill with magranit today to unlock your professional potential.
          </p>
          <a href="#courses" className="mo-steps-cta-btn">
            Explore All Courses
          </a>
        </div>

        {/* Right Column: Unique Interactive Vertical Timeline */}
        <div className="mo-steps-right">
          <div className="mo-steps-timeline">
            {/* The vertical timeline connector bar */}
            <div className="mo-steps-line-connector"></div>

            {stepsData.map((step, idx) => (
              <div key={idx} className="mo-timeline-step-item">
                <div className="mo-timeline-step-num-wrap">
                  <div className="mo-timeline-step-num">{step.num}</div>
                </div>
                <div className="mo-timeline-step-content">
                  <h4>{step.title}</h4>
                  <p>{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
