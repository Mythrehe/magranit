"use client";

import React, { useState } from "react";
import { BookOutlined, UserOutlined } from "@ant-design/icons";
import "./PopularCoursesSection.css";

// --- Complete Course Database with Images, Categories, and Slugs ---
const coursesDB = {
  sap: [
    {
      slug: "sap-mm",
      image: "/images/nori-post-4-720x720.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP Material Management (MM)",
      lessons: 15,
      students: 120,
      price: "Free"
    },
    {
      slug: "sap-abap",
      image: "/images/nori-img-10.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP ABAP",
      lessons: 24,
      students: 180,
      price: "Free"
    },
    {
      slug: "sap-ariba",
      image: "/images/nori-img-09.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP Ariba",
      lessons: 18,
      students: 95,
      price: "Free"
    },
    {
      slug: "sap-pm",
      image: "/images/nori-img-11.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP Plant Maintenance (PM)",
      lessons: 12,
      students: 75,
      price: "Free"
    },
    {
      slug: "sap-basis",
      image: "/images/nori-img-12.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP Basis",
      lessons: 20,
      students: 140,
      price: "Free"
    },
    {
      slug: "sap-cloud",
      image: "/images/nori-img-13.jpg",
      level: "BEGINNER + ADVANCED",
      category: "SAP",
      title: "SAP Cloud with S/4HANA",
      lessons: 30,
      students: 220,
      price: "Free"
    }
  ],
  ai: [
    {
      slug: "ai-engineering?track=beginner",
      image: "/images/nori-background-16-720x640.jpg",
      level: "BEGINNER",
      category: "AI",
      title: "AI Engineering — Beginner",
      lessons: 10,
      students: 350,
      price: "Free"
    },
    {
      slug: "ai-engineering?track=advanced",
      image: "/images/nori-background-19-720x520.jpg",
      level: "ADVANCED",
      category: "AI",
      title: "AI Engineering — Advanced",
      lessons: 25,
      students: 410,
      price: "Free"
    }
  ],
  data: [
    {
      slug: "data-engineering?track=beginner",
      image: "/images/nori-post-2-720x720.jpg",
      level: "BEGINNER",
      category: "DATA",
      title: "Data Engineering — Beginner",
      lessons: 12,
      students: 280,
      price: "Free"
    },
    {
      slug: "data-engineering?track=advanced",
      image: "/images/nori-portfolio-07-720x720.jpg",
      level: "ADVANCED",
      category: "DATA",
      title: "Data Engineering — Advanced",
      lessons: 28,
      students: 310,
      price: "Free"
    }
  ]
};

export default function PopularCoursesSection() {
  const [activeTab, setActiveTab] = useState<"sap" | "ai" | "data">("sap");

  const currentCourses = coursesDB[activeTab];

  return (
    <section className="mo-courses" id="courses">
      <div className="container">
        {/* Section Header */}
        <div className="mo-courses-header">
          <span className="mo-courses-badge">[POPULAR COURSES]</span>
          <h2 className="mo-courses-title">Explore Our Courses</h2>
          <p className="mo-courses-desc">
            A curated collection of amazing courses, chosen based on popularity and
            ratings by students. Safe, Fun & Educational
          </p>
        </div>

        {/* Tab Capsule Selectors */}
        <div className="mo-courses-tabs-wrap">
          <button 
            className={`mo-course-tab-btn ${activeTab === "sap" ? "active" : ""}`}
            onClick={() => setActiveTab("sap")}
          >
            SAP Modules
          </button>
          <button 
            className={`mo-course-tab-btn ${activeTab === "ai" ? "active" : ""}`}
            onClick={() => setActiveTab("ai")}
          >
            AI Engineering
          </button>
          <button 
            className={`mo-course-tab-btn ${activeTab === "data" ? "active" : ""}`}
            onClick={() => setActiveTab("data")}
          >
            Data Engineering
          </button>
        </div>

        {/* Courses Left-to-Right Grid */}
        <div className={`mo-courses-grid-tabbed ${activeTab !== "sap" ? "centered-grid" : ""}`}>
          {currentCourses.map((course, idx) => (
            <div key={idx} className="mo-tabbed-course-card-with-img">
              {/* Card Thumbnail Image */}
              <a href={`/courses/${course.slug}`} className="mo-course-card-img">
                <img src={course.image} alt={course.title} />
              </a>

              {/* Overlapping Info Container at Bottom */}
              <div className="mo-course-card-info-box">
                {/* Category Tags */}
                <div className="mo-course-card-tags">
                  {course.level} • {course.category}
                </div>

                {/* Course Title */}
                <h3 className="mo-course-card-title">
                  <a href={`/courses/${course.slug}`}>{course.title}</a>
                </h3>

                {/* Footer Details: Lessons, Students & Price */}
                <div className="mo-course-card-footer">
                  <span className="mo-course-footer-item">
                    <BookOutlined style={{ marginRight: "5px", color: "var(--slate-color)" }} />
                    {course.lessons} Lessons
                  </span>
                  <span className="mo-course-footer-item">
                    <UserOutlined style={{ marginRight: "5px", color: "var(--slate-color)" }} />
                    {course.students} Students
                  </span>
                  <span className="mo-course-price">
                    {course.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
