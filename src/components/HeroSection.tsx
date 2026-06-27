"use client";

import React from "react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <section className="mo-hero">
      {/* Faint Giant Background Watermark */}
      <div className="mo-hero-watermark-wrap">
        <div className="mo-hero-watermark-scroll">
          MAGRANIT MAGRANIT MAGRANIT MAGRANIT MAGRANIT MAGRANIT MAGRANIT
        </div>
      </div>

      {/* Cloud icons decoration */}
      <svg className="mo-hero-cloud mo-cloud-1" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.95"/>
      </svg>
      <svg className="mo-hero-cloud mo-cloud-2" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.95"/>
      </svg>
      <svg className="mo-hero-cloud mo-cloud-3" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.95"/>
      </svg>

      <div className="container mo-hero-grid">
        {/* Left Column: Text Content */}
        <div className="mo-hero-content">
          
          <h1 className="mo-hero-title">
            Shape Your Career<br />with Expert SAP<br />& AI Training
          </h1>
          
          <p className="mo-hero-desc">
            Online training for freshers and working professionals across SAP modules, AI Engineering, and Data Engineering — led by industry practitioners.
          </p>
          
          <div className="mo-hero-btns">
            <a href="#courses" className="mo-hero-btn-primary">
              <span>Find Best</span>
              <span>Courses</span>
            </a>
            <a href="#why-us" className="mo-hero-btn-secondary">Get Started &gt;</a>
          </div>
          
        </div>

        {/* Right Column: Overlapping Students */}
        <div className="mo-hero-visual">
          <div className="mo-student-img-container">
            <img 
              src="/images/nori-student-02.png" 
              alt="Student background" 
              className="mo-student-2 float-anim" 
            />
            <img 
              src="/images/nori-student-01.png" 
              alt="Student foreground" 
              className="mo-student-1" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
