"use client";

import React from "react";
import { 
  CodeOutlined, 
  CameraOutlined, 
  UserSwitchOutlined, 
  MobileOutlined, 
  AppstoreOutlined, 
  FormatPainterOutlined 
} from "@ant-design/icons";
import "./CategoriesSection.css";

const categoriesData = [
  {
    icon: <CodeOutlined />,
    title: "Front-End Developer",
    count: "15 Courses"
  },
  {
    icon: <CameraOutlined />,
    title: "Video & Photography",
    count: "8 Courses"
  },
  {
    icon: <UserSwitchOutlined />,
    title: "Personal Development",
    count: "11 Courses"
  },
  {
    icon: <MobileOutlined />,
    title: "Smartphone Mobile",
    count: "9 Courses"
  },
  {
    icon: <AppstoreOutlined />,
    title: "Business Management",
    count: "22 Courses"
  },
  {
    icon: <FormatPainterOutlined />,
    title: "Paint Art & Humanities",
    count: "14 Courses"
  }
];

export default function CategoriesSection() {
  return (
    <section className="mo-categories">
      {/* Star decorations in background */}
      <img src="/images/nori-icon-08.png" alt="Star Deco" className="mo-categories-star-1 spin-anim" />
      <img src="/images/nori-icon-08.png" alt="Star Deco" className="mo-categories-star-2 spin-anim" />

      <div className="container">
        {/* Header */}
        <div className="mo-categories-header">
          <span className="mo-categories-badge">[ Our Works ]</span>
          <h2 className="mo-categories-title">Our Course Categories</h2>
        </div>

        {/* Categories Grid */}
        <div className="mo-categories-grid">
          {categoriesData.map((cat, idx) => (
            <div key={idx} className="mo-category-card">
              <div className="mo-category-icon">
                {cat.icon}
              </div>
              <div className="mo-category-info">
                <h4>{cat.title}</h4>
                <span>{cat.count}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Footer info badge */}
        <div className="mo-categories-footer">
          <div className="mo-categories-footer-badge">
            <span>You can also find our Learning Service to</span>
            <a href="#">Explore All Categories 👋</a>
          </div>
        </div>
      </div>
    </section>
  );
}
