"use client";

import React from "react";
import { Collapse } from "antd";
import "./DashboardFAQSection.css";

const faqItems = [
  {
    key: "1",
    label: "What courses do you offer?",
    children: (
      <p>
        We offer professional certification tracks and training in SAP Modules (including Material Management, ABAP, Ariba, PM, Basis, and S/4HANA Cloud), AI Engineering (from beginner fundamentals to advanced LLM/RAG pipelines), and Data Engineering (SQL, ETL, Spark, and real-time streaming pipelines).
      </p>
    )
  },
  {
    key: "2",
    label: "How do I get server access for SAP modules?",
    children: (
      <p>
        All enrolled students get free, 24/7 sandbox server access for SAP practice. You will receive your dedicated login credentials within 24 hours of enrollment to begin hands-on labs and configuration exercises immediately.
      </p>
    )
  },
  {
    key: "3",
    label: "Do you offer placement assistance?",
    children: (
      <p>
        Yes, magranit offers comprehensive placement support, including resume reviews, mock interview sessions, and direct job referrals to our network of partner companies hiring for SAP consultants and engineering roles.
      </p>
    )
  }
];

export default function DashboardFAQSection() {
  return (
    <section className="mo-dbfaq" id="why-us">
      {/* Small floating outline star decoration on the far right */}
      <svg className="mo-dbfaq-star-float" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2 L14.5 8.5 L21.5 9 L16.5 13.5 L18 20 L12 16.5 L6 20 L7.5 13.5 L2.5 9 L9.5 8.5 Z" stroke="#e85b3b" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>

      <div className="container mo-dbfaq-grid">
        {/* Left Column: Visual Arched Images Composition */}
        <div className="mo-dbfaq-visual">
          {/* Orange floating dashes on the left */}
          <svg className="mo-dbfaq-dashes" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 5 C15 15, 20 20, 22 35" stroke="#e85b3b" strokeWidth="3" strokeLinecap="round"/>
            <path d="M22 5 C25 12, 28 18, 30 30" stroke="#e85b3b" strokeWidth="3" strokeLinecap="round"/>
            <path d="M5 20 C12 22, 18 24, 25 25" stroke="#e85b3b" strokeWidth="3" strokeLinecap="round"/>
          </svg>

          {/* Left Arched Image */}
          <img src="/images/nori-img-09.jpg" alt="Writing on notebook topdown" className="mo-dbfaq-img1" />
          
          {/* Right Arched Image (Girl reading book) */}
          <img src="/images/nori-img-10.jpg" alt="Girl in orange sweatshirt reading" className="mo-dbfaq-img2" />
          
          {/* Circular rotating text badge */}
          <div className="mo-dbfaq-circle-badge">
            <svg viewBox="0 0 100 100" width="115" height="115" className="spin-anim">
              <path id="circlePath" d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0" fill="none" />
              <text fontFamily="var(--font-secondary)" fontSize="7.8" fontWeight="700" fill="var(--slate-color)" letterSpacing="1.1">
                <textPath href="#circlePath">
                  REASON FOR CHOOSING OUR MAGRANIT CONSULT •
                </textPath>
              </text>
            </svg>
            <div className="mo-dbfaq-circle-icon">
              {/* Pencil icon in the center */}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--dark-color)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20h9"></path>
                <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
              </svg>
            </div>
          </div>
        </div>

        {/* Right Column: FAQ Accordion */}
        <div className="mo-dbfaq-content">
          <span className="mo-dbfaq-subtitle">[MOST ASKED QUESTION]</span>
          <h2 className="mo-dbfaq-title">Powerful Dashboard & High Performance</h2>

          {/* Accordion FAQ */}
          <div className="mo-dbfaq-accordion">
            <Collapse 
              accordion 
              defaultActiveKey={["1"]} 
              items={faqItems}
              expandIconPosition="start"
              expandIcon={({ isActive }) => (
                isActive ? (
                  <span style={{ color: "#e85b3b", fontSize: "20px", fontWeight: "800", marginRight: "12px", display: "inline-block", userSelect: "none" }}>—</span>
                ) : (
                  <span style={{ color: "var(--dark-color)", fontSize: "20px", fontWeight: "800", marginRight: "12px", display: "inline-block", userSelect: "none" }}>+</span>
                )
              )}
            />
          </div>

          <a href="#courses" className="mo-faq-cta-btn">
            Find Best Courses
          </a>
        </div>
      </div>
    </section>
  );
}
