"use client";

import React from "react";
import {
  PhoneOutlined,
  MailOutlined,
  WhatsAppOutlined,
  BookOutlined,
  TrophyOutlined,
  TeamOutlined,
  ClockCircleOutlined,
  CheckCircleOutlined,
  StarOutlined,
} from "@ant-design/icons";
import "./Footer.css";

const courses = [
  "SAP MM (Materials Management)",
  "SAP SD (Sales & Distribution)",
  "SAP FICO (Finance & Controlling)",
  "SAP HCM (Human Capital Mgmt)",
  "SAP Basis Administration",
  "SAP S/4HANA",
  "AI Engineering",
  "Data Engineering",
];

const highlights = [
  { icon: <CheckCircleOutlined />, text: "100% practical, hands-on training" },
  { icon: <CheckCircleOutlined />, text: "Industry-certified instructors" },
  { icon: <CheckCircleOutlined />, text: "SAP-authorised curriculum" },
  { icon: <CheckCircleOutlined />, text: "Flexible online batches" },
  { icon: <CheckCircleOutlined />, text: "Job placement support" },
];

export default function Footer() {
  return (
    <footer className="mo-footer" id="contact">
      <div className="container">
        <div className="mo-footer-grid">

          {/* Column 1 — Brand & About */}
          <div className="mo-footer-col">
            <a href="/" className="mo-footer-logo-wrap">
              <img src="/images/nori-icon-06.png" alt="Magranit Logo" />
              <span>magranit</span>
            </a>
            <p className="mo-footer-desc">
              Expert online SAP training and consulting services.
              <br />
              Transforming careers through practical, industry-led education.
              <br />
              Trusted by freshers &amp; professionals across India.
            </p>

            {/* Key highlights */}
            <ul className="mo-footer-highlights">
              {highlights.map((h, i) => (
                <li key={i}>
                  <span style={{ color: "var(--primary-color)", flexShrink: 0 }}>{h.icon}</span>
                  {h.text}
                </li>
              ))}
            </ul>

            {/* Social / Contact icons */}
            <div className="mo-footer-socials">
              <a href="https://wa.me/917010628933" target="_blank" rel="noopener noreferrer" title="WhatsApp">
                <WhatsAppOutlined />
              </a>
              <a href="mailto:info@magranitconsulting.com" title="Email">
                <MailOutlined />
              </a>
              <a href="tel:7010628933" title="Call Us">
                <PhoneOutlined />
              </a>
            </div>
          </div>

          {/* Column 2 — Our Courses */}
          <div className="mo-footer-col">
            <h4>Our Courses</h4>
            <ul className="mo-footer-links">
              {courses.map((c, i) => (
                <li key={i}>
                  <a href="/#courses">{c}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Get in Touch */}
          <div className="mo-footer-col">
            <h4>Get in Touch</h4>

            {/* Stats */}
            <div className="mo-footer-stats">
              <div className="mo-footer-stat">
                <TeamOutlined className="mo-footer-stat-icon" />
                <div>
                  <strong>500+</strong>
                  <span>Students Trained</span>
                </div>
              </div>
              <div className="mo-footer-stat">
                <BookOutlined className="mo-footer-stat-icon" />
                <div>
                  <strong>8+</strong>
                  <span>SAP &amp; Tech Courses</span>
                </div>
              </div>
              <div className="mo-footer-stat">
                <TrophyOutlined className="mo-footer-stat-icon" />
                <div>
                  <strong>95%</strong>
                  <span>Placement Rate</span>
                </div>
              </div>
              <div className="mo-footer-stat">
                <ClockCircleOutlined className="mo-footer-stat-icon" />
                <div>
                  <strong>Live &amp; Recorded</strong>
                  <span>Flexible Batches</span>
                </div>
              </div>
            </div>

            {/* Contact list */}
            <ul className="mo-footer-contact-list">
              <li>
                <MailOutlined style={{ color: "var(--primary-color)" }} />
                <a href="mailto:info@magranitconsulting.com">info@magranitconsulting.com</a>
              </li>
              <li>
                <PhoneOutlined style={{ color: "var(--primary-color)" }} />
                <a href="tel:7010628933">+91 70106 28933</a>
              </li>
            </ul>

            <a
              href="https://wa.me/917010628933"
              target="_blank"
              rel="noopener noreferrer"
              className="mo-footer-cta"
            >
              <WhatsAppOutlined />
              <span>Chat on WhatsApp</span>
            </a>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="mo-footer-bottom">
          <span>© {new Date().getFullYear()} Magranit Consulting. All rights reserved.</span>
          <ul className="mo-footer-bottom-menu">
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Terms &amp; Conditions</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
