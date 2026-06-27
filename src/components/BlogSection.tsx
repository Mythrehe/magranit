"use client";

import React from "react";
import { ArrowRightOutlined } from "@ant-design/icons";
import "./BlogSection.css";

const blogData = [
  {
    image: "/images/nori-background-19-720x520.jpg",
    category: "Education",
    title: "Choosing the right online course for your career",
    date: "June 20, 2026"
  },
  {
    image: "/images/nori-portfolio-01-720x520.jpg",
    category: "Marketing",
    title: "Rules for a Productive When the Kids Are Home",
    date: "June 22, 2026"
  },
  {
    image: "/images/nori-portfolio-02-720x520.jpg",
    category: "Online",
    title: "Essential Skills Learned in Design Courses",
    date: "June 24, 2026"
  }
];

export default function BlogSection() {
  return (
    <section className="mo-blog">
      <div className="container">
        {/* Header */}
        <div className="mo-blog-header">
          <span className="mo-blog-badge">[ Our Recent Posts ]</span>
          <h2 className="mo-blog-title">Read our blog for the latest on research & insights.</h2>
        </div>

        {/* Blog Grid */}
        <div className="mo-blog-grid">
          {blogData.map((post, idx) => (
            <div key={idx} className="mo-blog-card">
              <div className="mo-blog-thumb">
                <img src={post.image} alt={post.title} />
                <span className="mo-blog-cat">{post.category}</span>
              </div>
              
              <div className="mo-blog-body">
                <span className="mo-blog-date">{post.date}</span>
                <h3 className="mo-blog-card-title">
                  <a href="#">{post.title}</a>
                </h3>
                <a href="#" className="mo-blog-link">
                  Read More <ArrowRightOutlined style={{ fontSize: "12px" }} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
