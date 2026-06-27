"use client";

import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./ExamPrepSection.css";

export default function ExamPrepSection() {
  return (
    <section className="mo-examprep">
      {/* Floating Sparkle Background */}
      <img src="/images/nori-icon-07.png" alt="Sparkle" className="mo-examprep-float spin-anim" />

      <div className="container">
        {/* Header */}
        <div className="mo-examprep-header">
          <span className="mo-examprep-badge">[ Exam Preparation ]</span>
          <h2 className="mo-examprep-title">Annual Exam Preparation</h2>
        </div>

        {/* 2 Card Layout */}
        <div className="mo-examprep-grid">
          {/* Card 1: Medical Exam */}
          <div className="mo-examprep-card">
            <div className="mo-examprep-image">
              <img src="/images/nori-img-17.jpg" alt="Medical Exam Preparation" />
            </div>
            <div className="mo-examprep-content">
              <span className="mo-examprep-tag">Our expertise</span>
              <h3 className="mo-examprep-card-title">Medical Exam</h3>
              <p className="mo-examprep-desc">
                Prepare for your medical registration, theory tests, and practical entry examinations with our dedicated interactive curriculum.
              </p>
              <a href="#" className="mo-examprep-link">
                Read More <ArrowRightOutlined style={{ fontSize: "12px" }} />
              </a>
            </div>
          </div>

          {/* Card 2: IELTS Exam */}
          <div className="mo-examprep-card">
            <div className="mo-examprep-image">
              <img src="/images/nori-portfolio-07.jpg" alt="IELTS Exam Preparation" />
            </div>
            <div className="mo-examprep-content">
              <span className="mo-examprep-tag">Our expertise</span>
              <h3 className="mo-examprep-card-title">IELTS Exam</h3>
              <p className="mo-examprep-desc">
                Achieve your desired band scores with mock tests and complete preparation modules for Academic and General IELTS exam tracks.
              </p>
              <a href="#" className="mo-examprep-link">
                Read More <ArrowRightOutlined style={{ fontSize: "12px" }} />
              </a>
            </div>
          </div>
        </div>

        {/* Callout Banner */}
        <div className="mo-examprep-callout">
          <span className="mo-examprep-callout-text">
            Our nearly 8,000 committed staff members are ready to help.
          </span>
          <a href="#" className="mo-examprep-callout-link">
            Get Started Now <ArrowRightOutlined />
          </a>
        </div>
      </div>
    </section>
  );
}
