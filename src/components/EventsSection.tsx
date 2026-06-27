"use client";

import React from "react";
import { ClockCircleOutlined, EnvironmentOutlined, ArrowRightOutlined } from "@ant-design/icons";
import "./EventsSection.css";

const eventsData = [
  {
    day: "28",
    month: "Jun",
    title: "Networking Skills: Connect and Collaborate",
    time: "10:00 AM - 12:00 PM",
    location: "Online (Zoom)"
  },
  {
    day: "05",
    month: "Jul",
    title: "Creative Teaching Seminar Master Student Class",
    time: "02:00 PM - 04:00 PM",
    location: "New York, USA"
  },
  {
    day: "12",
    month: "Jul",
    title: "Based Learning: Engaging Students Through World",
    time: "09:00 AM - 11:30 AM",
    location: "Online (Zoom)"
  }
];

export default function EventsSection() {
  return (
    <section className="mo-events">
      {/* Background decoration */}
      <img src="/images/nori-icon-09.png" alt="Deco Icon" className="mo-events-float float-anim" />

      <div className="container">
        {/* Header */}
        <div className="mo-events-header">
          <span className="mo-events-badge">[ Clients & reviews ]</span>
          <h2 className="mo-events-title">Upcoming Events</h2>
        </div>

        {/* Events list */}
        <div className="mo-events-list">
          {eventsData.map((ev, idx) => (
            <div key={idx} className="mo-event-item">
              <div className="mo-event-date">
                <span className="mo-event-date-day">{ev.day}</span>
                <span className="mo-event-date-month">{ev.month}</span>
              </div>
              
              <div className="mo-event-info">
                <div className="mo-event-meta">
                  <span>
                    <ClockCircleOutlined style={{ marginRight: "6px" }} />
                    {ev.time}
                  </span>
                  <span>
                    <EnvironmentOutlined style={{ marginRight: "6px" }} />
                    {ev.location}
                  </span>
                </div>
                
                <h3 className="mo-event-card-title">
                  <a href="#">{ev.title}</a>
                </h3>
              </div>

              <div className="mo-event-btn">
                <a href="#" className="mo-btn mo-btn-primary" style={{ padding: "10px 20px", fontSize: "13px" }}>
                  Register Now
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upgrade Banner */}
        <div className="mo-upgrade-banner">
          <div className="mo-upgrade-text">
            <h3>Get The Best Courses & Upgrade Your Skills</h3>
            <p>Join millions of students learning online at their own pace.</p>
          </div>
          <a href="#" className="mo-btn mo-btn-secondary" style={{ color: "var(--dark-color)", borderColor: "var(--light-color)", backgroundColor: "var(--light-color)" }}>
            Become a Student <ArrowRightOutlined style={{ marginLeft: "8px" }} />
          </a>
        </div>
      </div>
    </section>
  );
}
