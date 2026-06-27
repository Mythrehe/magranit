"use client";

import React from "react";
import "./ServicesSection.css";

// Custom SVG Icons matching the illustration style in the screenshot
const BookIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="8" y="12" width="48" height="40" rx="4" fill="#f0f6fa" stroke="#08081d" strokeWidth="2.5"/>
    <path d="M32 12V52" stroke="#08081d" strokeWidth="2.5"/>
    <path d="M14 20H26" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14 28H26" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M14 36H20" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 20H50" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 28H50" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M38 36H44" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round"/>
  </svg>
);

const CapIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M32 8L56 18L32 28L8 18L32 8Z" fill="#ffefeb" stroke="#08081d" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M16 21.5V36C16 42 22 46 32 46C42 46 48 42 48 36V21.5" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M52 20V32" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round"/>
    <circle cx="52" cy="34" r="3" fill="#e85b3b"/>
  </svg>
);

const CertificateIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 10H48V46H16V10Z" fill="#f0f6fa" stroke="#08081d" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M22 18H42" stroke="#08081d" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 26H42" stroke="#08081d" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 34H32" stroke="#08081d" strokeWidth="2" strokeLinecap="round"/>
    <path d="M38 40L42 54L32 48L22 54L26 40" fill="#e85b3b" stroke="#08081d" strokeWidth="2.5" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M16 12H48V28C48 36.8 40.8 44 32 44C23.2 44 16 36.8 16 28V12Z" fill="#f0f6fa" stroke="#08081d" strokeWidth="2.5" strokeLinejoin="round"/>
    <path d="M32 44V52" stroke="#08081d" strokeWidth="2.5"/>
    <path d="M20 52H44" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round"/>
    <path d="M16 18H10V26C10 30 13 32 16 32" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 18H54V26C54 30 51 32 48 32" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ClipboardIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="14" y="14" width="36" height="42" rx="3" fill="#ffefeb" stroke="#08081d" strokeWidth="2.5"/>
    <path d="M26 10H38" stroke="#e85b3b" strokeWidth="2.5" strokeLinecap="round"/>
    <rect x="24" y="8" width="16" height="8" rx="2" fill="none" stroke="#e85b3b" strokeWidth="2"/>
    <path d="M22 26L28 32L42 18" stroke="#08081d" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 40H42" stroke="#08081d" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22 48H34" stroke="#08081d" strokeWidth="2" strokeLinecap="round"/>
  </svg>
);

const GlobeIcon = () => (
  <svg width="45" height="45" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="32" cy="28" r="20" fill="#f0f6fa" stroke="#08081d" strokeWidth="2.5"/>
    <path d="M12 28H52" stroke="#08081d" strokeWidth="2"/>
    <path d="M32 8V48" stroke="#08081d" strokeWidth="2"/>
    <path d="M18 18C24 22 40 22 46 18" stroke="#e85b3b" strokeWidth="2" fill="none"/>
    <path d="M18 38C24 34 40 34 46 38" stroke="#e85b3b" strokeWidth="2" fill="none"/>
    <path d="M32 48C32 54 24 58 24 58H40C40 58 32 54 32 48Z" stroke="#08081d" strokeWidth="2.5" fill="none"/>
  </svg>
);

const servicesData = [
  {
    icon: <BookIcon />,
    title: "80+ Online Courses",
    desc: "Experience education platform for success of our online learning."
  },
  {
    icon: <CapIcon />,
    title: "Top Instructors",
    desc: "Experience education platform for success of our online learning."
  },
  {
    icon: <CertificateIcon />,
    title: "Online Certificates",
    desc: "Experience education platform for success of our online learning."
  },
  {
    icon: <TrophyIcon />,
    title: "Academic Enrichment",
    desc: "Experience education platform for success of our online learning."
  },
  {
    icon: <ClipboardIcon />,
    title: "Best Online Learning",
    desc: "Experience education platform for success of our online learning."
  },
  {
    icon: <GlobeIcon />,
    title: "Our Best Courses Help",
    desc: "Experience education platform for success of our online learning."
  }
];

export default function ServicesSection() {
  return (
    <section className="mo-services">
      {/* Background Squiggle Decoration (Left side) */}
      <svg className="mo-services-squiggle" viewBox="0 0 20 80" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 5 C15 15, 5 25, 10 35 C15 45, 5 55, 10 65 C15 75, 5 85, 10 95" stroke="#ffb606" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>

      {/* Background Star Outline Decorations (Right side) */}
      <div className="mo-services-stars">
        <svg className="mo-services-star-1" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20 0 L23 13 L36 16 L23 19 L20 32 L17 19 L4 16 L17 13 Z" stroke="#e85b3b" strokeWidth="2" strokeLinejoin="round"/>
        </svg>
        <svg className="mo-services-star-2" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 0 L17 10 L27 12 L17 14 L15 24 L13 14 L3 12 L13 10 Z" stroke="#e85b3b" strokeWidth="1.5" strokeLinejoin="round"/>
        </svg>
      </div>

      <div className="container">
        {/* Section Header */}
        <div className="mo-services-header">
          <span className="mo-services-badge">[OUR SERVICES]</span>
          <h2 className="mo-services-title">
            Why choose our learning platform? 💎
          </h2>
          <div className="mo-services-subtitle">
            <p>Pick your favorite course from our hand picked categories.</p>
            <p>
              Call to ask any question <a href="#contact" className="mo-services-explore-link">Explore All Categories</a>
            </p>
          </div>
        </div>

        {/* Services Grid (Horizontal Cards Row Layout) */}
        <div className="mo-services-grid">
          {servicesData.map((service, idx) => (
            <div key={idx} className="mo-service-card">
              <div className="mo-service-icon-wrap">
                {service.icon}
              </div>
              <div className="mo-service-card-body">
                <h4>{service.title}</h4>
                <p>{service.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
