"use client";

import React from "react";
import { 
  FacebookOutlined, 
  TwitterOutlined, 
  LinkedinOutlined, 
  YoutubeOutlined,
  PlusOutlined
} from "@ant-design/icons";
import "./InstructorsSection.css";

const instructorsData = [
  {
    image: "/images/nori-team-09.jpg",
    name: "Sarah Hanley",
    role: "Assistant Teacher"
  },
  {
    image: "/images/nori-team-05.jpg",
    name: "Dasia Steiner",
    role: "UX/UI Designer"
  },
  {
    image: "/images/nori-team-10.jpg",
    name: "Alex Jason",
    role: "Senior Instructor"
  },
  {
    image: "/images/nori-team-01.jpg",
    name: "Martin Doe",
    role: "Business Instructor"
  },
  {
    image: "/images/nori-team-11.jpg",
    name: "Nour osman",
    role: "Asst. Professor"
  },
  {
    image: "/images/nori-team-04.jpg",
    name: "Richard Divas",
    role: "Digital Marketing"
  },
  {
    image: "/images/nori-team-06.jpg",
    name: "Jin Steven",
    role: "Certified Life Coach"
  }
];

export default function InstructorsSection() {
  return (
    <section className="mo-instructors">
      <div className="container">
        {/* Header */}
        <div className="mo-instructors-header">
          <span className="mo-instructors-badge">[ The Best Professional ]</span>
          <h2 className="mo-instructors-title">Meet Our Expert Instructor</h2>
          <img src="/images/nori-img-18.svg" alt="Line decoration" className="mo-instructors-line" />
        </div>

        {/* Instructors Grid */}
        <div className="mo-instructors-grid">
          {instructorsData.map((inst, idx) => (
            <div key={idx} className="mo-instructor-card">
              <div className="mo-instructor-thumb-wrap">
                <img src={inst.image} alt={inst.name} />
              </div>
              <h3 className="mo-instructor-name">{inst.name}</h3>
              <span className="mo-instructor-role">{inst.role}</span>
              
              <div className="mo-instructor-socials">
                <a href="#"><FacebookOutlined /></a>
                <a href="#"><TwitterOutlined /></a>
                <a href="#"><LinkedinOutlined /></a>
                <a href="#"><YoutubeOutlined /></a>
              </div>
            </div>
          ))}

          {/* CTA Card */}
          <div className="mo-instructor-cta-card">
            <h4>Get to know all of our fantastic Instructors 👋</h4>
            <a href="#" className="mo-btn mo-btn-primary">
              Join Our Team <PlusOutlined style={{ marginLeft: "6px" }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
