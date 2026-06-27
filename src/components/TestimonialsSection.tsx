"use client";

import React from "react";
import { Carousel } from "antd";
import "./TestimonialsSection.css";

const testimonialsData = [
  {
    content: "I needed to get a certification in SAP Material Management (MM) to boost my procurement career, and magranit was my best choice. The free server access let me practice configuration scenarios, and the support was outstanding! 👏👏",
    image: "/images/nori-testimonial-02.jpg",
    name: "Mona Kamal",
    role: "Founder & CEO"
  },
  {
    content: "Their AI Engineering course is exceptionally smart and professional. I built live projects using LLMs and vector databases, which helped me land my dream job as an AI Engineer! Thanks and 5 stars! ❤️•",
    image: "/images/nori-testimonial-01-1.jpg",
    name: "Sarah Hanley",
    role: "Product Manager"
  },
  {
    content: "Enrolling in the Data Engineering course was a game-changer. Learning Apache Spark, Airflow, and dbt with hands-on labs gave me the exact practical experience companies look for! 👏👏",
    image: "/images/nori-testimonial-05.jpg",
    name: "David Miller",
    role: "Solutions Architect"
  },
  {
    content: "The SAP ABAP training was professional and structured. The custom development projects and dedicated sandbox server made the learning experience incredibly interactive. Thanks and 5 stars! ❤️•",
    image: "/images/nori-testimonial-07.jpg",
    name: "Nour Osman",
    role: "SAP Developer"
  },
  {
    content: "The Advanced AI Engineering curriculum is top-tier. Deep dives into RAG, vector databases, and fine-tuning models gave me a competitive edge in my job search. 5 stars! ⚡⚡",
    image: "/images/nori-team-04.jpg",
    name: "Emma Watson",
    role: "AI Researcher"
  },
  {
    content: "The Data Engineering Beginner track is very comprehensive. Great explanation of ETL pipelines, SQL queries, and cloud database setups. Highly recommended! 👍👍",
    image: "/images/nori-team-06.jpg",
    name: "Rajesh Kumar",
    role: "Data Architect"
  },
  {
    content: "SAP Basis administration requires hands-on experience, and magranit delivered exactly that. The live projects and server sandbox were perfect for learning landscape architecture. 👏👏",
    image: "/images/nori-team-05.jpg",
    name: "Sophia Lin",
    role: "SAP Basis Administrator"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="mo-testimonials">
      {/* Background Clouds decoration */}
      <svg className="mo-testimonials-cloud mo-t-cloud-1" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.95"/>
      </svg>
      <svg className="mo-testimonials-cloud mo-t-cloud-2" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.95"/>
      </svg>

      <div className="container">
        {/* Header */}
        <div className="mo-testimonials-header">
          <span className="mo-testimonials-badge">[ TESTIMONIALS ]</span>
          <h2 className="mo-testimonials-title">Access smart Tutoring program for benefits</h2>
          <p className="mo-testimonials-desc">
            We craft unique digital experiences. With more than ten years of knowledge and
            expertise we design and code clean websites!
          </p>
        </div>

        {/* Carousel Slider Row (3 cards slidesToShow, Autoplay enabled) */}
        <div className="mo-testimonials-carousel-wrapper">
          <Carousel 
            autoplay 
            slidesToShow={3} 
            slidesToScroll={1} 
            infinite
            dots={true}
            responsive={[
              { breakpoint: 991, settings: { slidesToShow: 2 } },
              { breakpoint: 767, settings: { slidesToShow: 1 } }
            ]}
          >
            {testimonialsData.map((test, idx) => (
              <div key={idx} className="mo-testimonial-slide-padding">
                <div className={`mo-testimonial-card-tilted card-tilt-${(idx % 4) + 1}`}>
                  {/* Content */}
                  <p className="mo-t-card-content">
                    "{test.content}"
                  </p>

                  {/* Profile separator line */}
                  <div className="mo-t-card-separator"></div>

                  {/* Profile info */}
                  <div className="mo-t-card-user">
                    <div className="mo-t-card-avatar">
                      <img src={test.image} alt={test.name} />
                    </div>
                    <div className="mo-t-card-user-info">
                      <h4 className="mo-t-card-user-name">{test.name}</h4>
                      <span className="mo-t-card-user-role">{test.role}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
}
