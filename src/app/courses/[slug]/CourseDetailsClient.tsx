"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useParams, notFound, useSearchParams } from "next/navigation";
import { PlayCircleOutlined, BookOutlined, UserOutlined, ClockCircleOutlined, SafetyCertificateOutlined, GlobalOutlined } from "@ant-design/icons";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "../courses.css";

// --- Course database mapping ---
interface SubTrackData {
  title: string;
  subtitle: string;
  overviewHeading: string;
  overviewText1: string;
  overviewText2: string;
  overviewHeading2: string;
  overviewText3: string;
  modules: Array<{
    title: string;
    topics: string[];
  }>;
}

interface CourseData {
  title: string;
  category: string;
  image: string;
  lessons: number;
  students: number;
  duration: string;
  // Standard course properties
  overviewHeading?: string;
  overviewText1?: string;
  overviewText2?: string;
  overviewHeading2?: string;
  overviewText3?: string;
  modules?: Array<{
    title: string;
    topics: string[];
  }>;
  // Unified tracks properties (for AI/Data)
  tracks?: {
    beginner: SubTrackData;
    advanced: SubTrackData;
  };
}

const coursesDB: Record<string, CourseData> = {
  "sap-mm": {
    title: "SAP Material Management (MM)",
    category: "SAP Modules",
    image: "/images/nori-post-4-720x720.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "SAP Material Management (MM) is one of the foundational modules of SAP ERP, managing the procurement process, inventory logistics, and invoice reconciliations inside major corporations. This course is designed to take you from a complete beginner to a confident SAP MM consultant.",
    overviewText2: "You will start by exploring the core ERP landscape, learning how to configure organisational elements (Company Codes, Plants, Storage Locations, and Purchase Organisations). From there, you will cover the entire procure-to-pay (P2P) lifecycle—creating Purchase Requisitions, issuing Requests for Quotation (RFQ), generating Purchase Orders, executing Goods Receipts in MIGO, and performing invoice verification checks in MIRO.",
    overviewHeading2: "Learn SAP MM: From Beginner to Advanced",
    overviewText3: "Through hands-on labs and sandbox exercises, you will master warehouse management basics, stock transfer postings, reorder point planning, and vendor evaluations. You will be fully equipped to design, configure, and maintain material procurement architectures for global enterprises.",
    lessons: 15,
    students: 120,
    duration: "6 Weeks",
    modules: [
      {
        title: "Introduction to SAP & MM Overview",
        topics: [
          "SAP Architecture & Navigation",
          "Organizational Structure in MM",
          "Company Code, Plant, Storage Location",
          "Purchase Organization Setup",
          "Material Types & Material Master",
          "Vendor Master Data"
        ]
      },
      {
        title: "Procurement Cycle",
        topics: [
          "Purchase Requisition (PR)",
          "Request for Quotation (RFQ)",
          "Purchase Order (PO) Creation",
          "Goods Receipt (GR) — MIGO",
          "Invoice Verification — MIRO",
          "Account Payables Integration",
          "Release Strategy & Approval",
          "Outline Agreements: Contracts & Scheduling Agreements"
        ]
      },
      {
        title: "Inventory Management",
        topics: [
          "Stock Types & Stock Overview",
          "Goods Issue & Transfer Posting",
          "Physical Inventory & Cycle Counting",
          "Special Stocks: Consignment, Pipeline",
          "Batch Management",
          "Serial Number Management",
          "Warehouse Management Basics"
        ]
      },
      {
        title: "Material Requirements Planning (MRP)",
        topics: [
          "MRP Types & Planning Strategies",
          "MRP Run & Results Analysis",
          "Planned Orders vs Purchase Requisitions",
          "Reorder Point Planning",
          "Consumption-Based Planning"
        ]
      },
      {
        title: "Vendor Evaluation & Reporting",
        topics: [
          "Vendor Evaluation Criteria",
          "Automatic & Manual Scoring",
          "ME2M, ME2N — PO Reporting",
          "MB52 — Warehouse Stocks",
          "Custom Reports & Analytics"
        ]
      }
    ]
  },
  "sap-abap": {
    title: "SAP ABAP",
    category: "SAP Modules",
    image: "/images/nori-img-10.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "SAP ABAP (Advanced Business Application Programming) is the programming language that powers SAP applications and custom business workflows. This course provides a complete, developer-centric roadmap to mastering ABAP from the ground up.",
    overviewText2: "You will begin by learning the ABAP Workbench (SE38, SE11), understanding variables, control structures, loops, and data structures. You will gain extensive experience database scripting with SELECT, INSERT, and UPDATE queries. As you progress, you will master the creation of classical, interactive, and advanced ALV grid reports.",
    overviewHeading2: "Learn SAP ABAP: From Beginner to Advanced",
    overviewText3: "The advanced modules guide you through integrations (BAPIs, RFCs, Web Services), enhancements (BADIs, User Exits), object-oriented programming (ABAP OO Classes & Interfaces), SmartForms, CDS views, and modern RESTful ABAP Programming (RAP) models for S/4HANA environments.",
    lessons: 24,
    students: 180,
    duration: "8 Weeks",
    modules: [
      {
        title: "ABAP Fundamentals",
        topics: [
          "ABAP Workbench & SE38",
          "Data Types, Variables & Constants",
          "Internal Tables & Structures",
          "Control Statements & Loops",
          "Modularization: Subroutines & Function Modules",
          "Selection Screens",
          "Database Operations — SELECT, INSERT, UPDATE"
        ]
      },
      {
        title: "Reports & ALV",
        topics: [
          "Classical & Interactive Reports",
          "ALV Grid Reports using REUSE_ALV_GRID_DISPLAY",
          "ALV with OO Classes (CL_SALV_TABLE)",
          "Field Symbols & Dynamic Programming",
          "Performance Optimization in Reports"
        ]
      },
      {
        title: "Interfaces & Enhancements",
        topics: [
          "BAPIs — Business Application Programming Interfaces",
          "BADIs & User Exits",
          "Customer Exits & Enhancement Spots",
          "IDocs — Intermediate Documents",
          "RFCs — Remote Function Calls",
          "Web Services & REST APIs in ABAP"
        ]
      },
      {
        title: "Object-Oriented ABAP",
        topics: [
          "Classes & Interfaces in ABAP OO",
          "Inheritance & Polymorphism",
          "Exception Handling",
          "Design Patterns in ABAP",
          "Unit Testing with ABAP Unit"
        ]
      },
      {
        title: "Forms & S/4HANA ABAP",
        topics: [
          "SmartForms & Adobe Forms",
          "SAPScript Basics",
          "CDS Views — Core Data Services",
          "AMDP — ABAP Managed Database Procedures",
          "RAP — RESTful ABAP Programming Model"
        ]
      }
    ]
  },
  "sap-ariba": {
    title: "SAP Ariba",
    category: "SAP Modules",
    image: "/images/nori-img-09.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "SAP Ariba is the leading cloud-based procurement platform that connects buyers and suppliers worldwide. This course offers a deep dive into configuring and managing Ariba modules for modern procurement solutions.",
    overviewText2: "You will explore the Ariba Network navigation, user administration, and master data integration with backend ERP systems like S/4HANA. The course covers Guided Buying configuration, purchasing cycles, catalog management, sourcing events (RFI/RFP/RFQ), and contract compliance workspaces.",
    overviewHeading2: "Learn SAP Ariba: From Beginner to Advanced",
    overviewText3: "Master supplier registration, performance evaluations, and contract compliance monitoring. By the end of this course, you will be capable of administering Ariba procurement portals to streamline vendor collaborations and bidding workflows.",
    lessons: 18,
    students: 95,
    duration: "6 Weeks",
    modules: [
      {
        title: "SAP Ariba Overview & Navigation",
        topics: [
          "Ariba Network Overview",
          "Buyer & Supplier Portal Navigation",
          "Integration with SAP S/4HANA",
          "User Administration & Roles",
          "Ariba Cloud vs On-Premise"
        ]
      },
      {
        title: "Procurement & Buying",
        topics: [
          "Guided Buying Configuration",
          "Purchase Requisitions in Ariba",
          "Purchase Orders & Confirmations",
          "Catalog Management",
          "Invoice Reconciliation",
          "Approval Workflows"
        ]
      },
      {
        title: "Sourcing & RFx",
        topics: [
          "Creating RFI, RFP, RFQ Events",
          "Bid Evaluation & Awarding",
          "Reverse Auctions",
          "Supplier Discovery",
          "Sourcing Projects"
        ]
      },
      {
        title: "Supplier Management",
        topics: [
          "Supplier Registration & Qualification",
          "Supplier Performance Management",
          "Supplier Risk Management",
          "Preferred Supplier Lists",
          "Supplier 360 Profile"
        ]
      },
      {
        title: "Contract Management",
        topics: [
          "Contract Workspace Creation",
          "Contract Clauses & Templates",
          "Contract Compliance & Monitoring",
          "Renewals & Amendments"
        ]
      }
    ]
  },
  "sap-pm": {
    title: "SAP Plant Maintenance (PM)",
    category: "SAP Modules",
    image: "/images/nori-img-11.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "SAP Plant Maintenance (PM) is critical for managing asset lifecycles, equipment tracking, and planning technical inspections inside factories and plants. This course provides comprehensive training on managing asset workflows.",
    overviewText2: "You will start by defining technical structures, functional locations, bills of materials (BOM), and work centers. The course covers notifications processing, work order scheduling, preventive maintenance strategies, and direct integrations with Materials Management (MM) and Controlling (CO).",
    overviewHeading2: "Learn SAP Plant Maintenance: From Beginner to Advanced",
    overviewText3: "Master MTTR (Mean Time to Repair) and MTBF (Mean Time Between Failures) calculations, cost reporting, and standard dashboards. You will acquire the skills needed to design preventive maintenance programs that minimize machinery downtimes.",
    lessons: 12,
    students: 75,
    duration: "5 Weeks",
    modules: [
      {
        title: "PM Organization & Master Data",
        topics: [
          "Maintenance Plant & Planning Plant",
          "Equipment Master & Technical Objects",
          "Functional Locations",
          "Bills of Materials (BOM) in PM",
          "Measurement Points & Documents",
          "Work Centers & Task Lists"
        ]
      },
      {
        title: "Notifications & Work Orders",
        topics: [
          "Maintenance Notification Types",
          "Creating & Processing Work Orders",
          "Work Order Planning & Scheduling",
          "Order Release & Confirmation",
          "Technical Completion & Settlement",
          "PM Integration with MM & CO"
        ]
      },
      {
        title: "Preventive Maintenance",
        topics: [
          "Maintenance Plans & Strategies",
          "Single-Cycle & Strategy Plans",
          "Scheduling & Call Objects",
          "Maintenance Items",
          "IP10 Scheduling Overview"
        ]
      },
      {
        title: "Reporting & Analytics",
        topics: [
          "Equipment History Reports",
          "MTTR & MTBF Calculations",
          "Cost Reports for Maintenance Orders",
          "PM Standard Reports & Dashboards"
        ]
      }
    ]
  },
  "sap-basis": {
    title: "SAP Basis",
    category: "SAP Modules",
    image: "/images/nori-img-12.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "Learn SAP system administration, installation, user management, and authorization setups. Master performance tuning, transport directory configurations, background job schedules, and server monitoring basics.",
    overviewText2: "Students will explore system landscape layouts, installation sequences, patch updates, and system upgrade routines. Practical training includes configuring client copy processes and client import/export tasks.",
    overviewHeading2: "Learn SAP Basis: From Beginner to Advanced",
    overviewText3: "By the end of this course, you will be capable of administering transport logs (TMS), printer/spool set-ups, and security policies for corporate environments.",
    lessons: 20,
    students: 140,
    duration: "7 Weeks",
    modules: [
      {
        title: "SAP Architecture & Installation",
        topics: [
          "SAP System Architecture (3-tier)",
          "SAP NetWeaver & ABAP Stack",
          "SAP Installation & Post-Installation",
          "System Landscape: DEV/QAS/PRD",
          "SAP Logon & Client Concepts",
          "SAP Profiles & Parameters"
        ]
      },
      {
        title: "User & Authorization Management",
        topics: [
          "User Types & User Maintenance (SU01)",
          "Roles & Profiles (PFCG)",
          "Authorization Objects & Checks",
          "Security Audit Log (SM20)",
          "Password Policies & CUA"
        ]
      },
      {
        title: "Transport Management System",
        topics: [
          "TMS Configuration (STMS)",
          "Transport Routes & Layers",
          "Exporting & Importing Transports",
          "Transport Logs & Error Analysis",
          "Manual Transport Processing"
        ]
      },
      {
        title: "Performance Monitoring & Tuning",
        topics: [
          "Work Process Monitoring (SM50/SM66)",
          "System Log Analysis (SM21)",
          "Buffer Tuning & Memory Management",
          "Database Administration Basics",
          "SAP EarlyWatch & CCMS Alerts"
        ]
      },
      {
        title: "SAP on Cloud & S/4HANA Basis",
        topics: [
          "SAP on AWS / Azure Overview",
          "HANA Database Administration Basics",
          "S/4HANA System Copy",
          "SAP Cloud ALM Overview"
        ]
      }
    ]
  },
  "sap-cloud": {
    title: "SAP Cloud with S/4HANA",
    category: "SAP Modules",
    image: "/images/nori-img-13.jpg",
    overviewHeading: "Course Description:",
    overviewText1: "Master S/4HANA cloud architecture and business processes. Learn public/private cloud models, custom development, business technology platform (BTP) integrations, and S/4HANA database migration techniques.",
    overviewText2: "This course is designed to guide developers and system architects on how to bridge traditional ERP infrastructure with modern SaaS products.",
    overviewHeading2: "Learn SAP Cloud S/4HANA: From Beginner to Advanced",
    overviewText3: "Understand how to implement communication scenarios, communicate with remote endpoints, and design side-by-side extensibility options using SAP BTP services.",
    lessons: 30,
    students: 220,
    duration: "10 Weeks",
    modules: [
      {
        title: "S/4HANA Overview & Architecture",
        topics: [
          "SAP S/4HANA vs ECC Differences",
          "HANA In-Memory Database Concepts",
          "Deployment Options: Cloud vs On-Premise",
          "S/4HANA Functional Scope",
          "Intelligent Enterprise Strategy"
        ]
      },
      {
        title: "SAP Fiori & UX",
        topics: [
          "Fiori Launchpad Configuration",
          "Fiori App Types: Transactional, Analytical, Factsheet",
          "Fiori App Library Navigation",
          "Role-Based Fiori Tile Configuration",
          "Fiori for Mobile"
        ]
      },
      {
        title: "Migration from ECC to S/4HANA",
        topics: [
          "Migration Approaches: Greenfield, Brownfield, Bluefield",
          "SAP Readiness Check",
          "Data Migration using LTMC",
          "Custom Code Adaptation (ABAP)",
          "Cutover Planning & Go-Live"
        ]
      },
      {
        title: "SAP Business Technology Platform (BTP)",
        topics: [
          "BTP Overview & Services",
          "Integration Suite (SAP iFlow)",
          "SAP Build Apps & Low-Code",
          "SAP Analytics Cloud Basics",
          "Extension Apps on BTP"
        ]
      }
    ]
  },
  "ai-engineering": {
    title: "AI Engineering",
    category: "AI Engineering",
    image: "/images/nori-background-19-720x520.jpg",
    lessons: 25,
    students: 410,
    duration: "8 Weeks",
    tracks: {
      beginner: {
        title: "Start from Zero",
        subtitle: "No coding experience required. Build your foundation in Python and machine learning.",
        overviewHeading: "Course Description:",
        overviewText1: "Kickstart your journey in Artificial Intelligence. This track is specially designed for non-programmers who want to build a solid foundational understanding of python, mathematics, vector operations, and visual data libraries.",
        overviewText2: "You will master variables, conditional logic, internal loops, functions, and advanced matrix calculations with NumPy & Pandas. Learn to script visualizations, call API JSON outputs, configure virtual environments, and use Jupyter Notebooks for structural prototyping.",
        overviewHeading2: "Build Foundations: From Python to Machine Learning Basics",
        overviewText3: "Master supervised and unsupervised models (Linear/Logistic Regressions, Decision Trees, Random Forests), metrics calculations, Scikit-learn pipelines, model fine-tunings, sentiment classifications, and deployment scripts.",
        modules: [
          {
            title: "Python for AI",
            topics: [
              "Python Basics: Variables, Loops, Functions",
              "NumPy & Pandas for Data Manipulation",
              "Matplotlib & Seaborn Visualizations",
              "File I/O, APIs & JSON",
              "Virtual Environments & Package Management",
              "Jupyter Notebooks"
            ]
          },
          {
            title: "Machine Learning Fundamentals",
            topics: [
              "Supervised vs Unsupervised Learning",
              "Linear & Logistic Regression",
              "Decision Trees & Random Forests",
              "Model Evaluation: Accuracy, F1, AUC",
              "Scikit-Learn Pipelines",
              "Cross-Validation & Hyperparameter Tuning"
            ]
          },
          {
            title: "Your First AI App",
            topics: [
              "Building a Sentiment Analysis Model",
              "Deploying with Flask/FastAPI",
              "Using OpenAI API for NLP Tasks",
              "Hosting on Hugging Face Spaces"
            ]
          }
        ]
      },
      advanced: {
        title: "Go Production-Grade",
        subtitle: "For those with Python basics who want to build enterprise-level AI systems.",
        overviewHeading: "Course Description:",
        overviewText1: "Deep dive into Large Language Models (LLMs) and advanced AI architectures. This track covers embedding models, attention mechanics, prompt structuring, and vector databases in production environments.",
        overviewText2: "Learn how to orchestrate multi-page applications, build production-grade Retrieval-Augmented Generation (RAG) pipelines, evaluate retrieval benchmarks, and deploy microservices for low latency configurations.",
        overviewHeading2: "Learn Advanced AI Systems: From Theory to Production",
        overviewText3: "Master parameter-efficient fine-tuning (LoRA/QLoRA), model quantization, retrieval interfaces (LangChain/LlamaIndex), multi-agent systems, and real-time observability tools.",
        modules: [
          {
            title: "LLMs & Prompt Engineering",
            topics: [
              "How Large Language Models Work",
              "Prompt Engineering Techniques",
              "OpenAI, Anthropic, Gemini APIs",
              "LangChain & LlamaIndex Frameworks",
              "Fine-Tuning vs Prompting"
            ]
          },
          {
            title: "RAG — Retrieval Augmented Generation",
            topics: [
              "Vector Databases: Pinecone, Chroma, Weaviate",
              "Embeddings & Semantic Search",
              "Building a RAG Pipeline from Scratch",
              "Chunking Strategies",
              "Evaluation & Hallucination Reduction"
            ]
          },
          {
            title: "Agentic AI & Production Systems",
            topics: [
              "AI Agents with Tool Use",
              "Multi-Agent Systems (CrewAI, AutoGen)",
              "Observability: LangSmith, LangFuse",
              "Dockerizing & Deploying AI Apps",
              "Cost Optimization & Latency Tuning"
            ]
          }
        ]
      }
    }
  },
  "data-engineering": {
    title: "Data Engineering",
    category: "Data Engineering",
    image: "/images/nori-portfolio-07-720x720.jpg",
    lessons: 28,
    students: 310,
    duration: "8 Weeks",
    tracks: {
      beginner: {
        title: "Data Foundations",
        subtitle: "Start your data career with SQL, Python, and the fundamentals of data pipelines.",
        overviewHeading: "Course Description:",
        overviewText1: "Build a strong foundation in data engineering. Master relational databases, SQL queries, data warehousing layouts, basic ETL scripts, python files parser, and command line tools for data administration.",
        overviewText2: "Aspiring data professionals will learn normalizations schemas, primary/foreign key connections, advanced joins, and database setup instructions using PostgreSQL or MySQL engines.",
        overviewHeading2: "Learn Data Foundations: From SQL to ETL Basics",
        overviewText3: "Master pandas wrangling structures, API extractions, storage bucket integrations (S3/GCS), Snowflake fundamentals, and Looker Studio visualizations.",
        modules: [
          {
            title: "SQL & Data Fundamentals",
            topics: [
              "Relational Databases & SQL Basics",
              "Joins, Aggregations & Window Functions",
              "PostgreSQL / MySQL Setup",
              "Data Modelling: Star & Snowflake Schema",
              "Indexing & Query Optimization",
              "Introduction to NoSQL"
            ]
          },
          {
            title: "Python for Data",
            topics: [
              "Pandas for Data Wrangling",
              "API Data Extraction",
              "CSV, JSON, Parquet File Handling",
              "Basic ETL Script Writing",
              "Scheduling with Cron Jobs"
            ]
          },
          {
            title: "Cloud Data Platforms Intro",
            topics: [
              "Cloud Storage: S3, GCS, Azure Blob",
              "BigQuery / Snowflake Basics",
              "Building Your First Pipeline",
              "Data Visualization with Looker Studio"
            ]
          }
        ]
      },
      advanced: {
        title: "Advanced Track: Production Pipelines",
        subtitle: "For those with SQL/Python basics who want to work with enterprise-scale data infrastructure.",
        overviewHeading: "Course Description:",
        overviewText1: "Master big data technologies and advanced streaming architectures. Learn apache spark cluster setups, airflow workflow orchestration, dbt modeling, real-time streaming, and cloud data lakes.",
        overviewText2: "Understand how to manage large-scale data systems using distributed RDD structures, spark optimization queries, and delta storage formats.",
        overviewHeading2: "Learn Advanced Data Infrastructure: Scaling Enterprise Pipelines",
        overviewText3: "Master Apache Airflow DAG modeling, dbt schema transformations, Kafka messaging clusters, and real-time streaming ingestions.",
        modules: [
          {
            title: "Apache Spark",
            topics: [
              "Spark Architecture & RDDs",
              "PySpark DataFrames",
              "Spark SQL & Optimizations",
              "Spark Structured Streaming",
              "Databricks Hands-On"
            ]
          },
          {
            title: "Kafka & Real Time Pipelines",
            topics: [
              "Kafka Architecture: Topics, Partitions, Brokers",
              "Producers & Consumers in Python",
              "Kafka Connect & Schema Registry",
              "Real-Time ETL with Kafka + Spark",
              "Flink Overview"
            ]
          },
          {
            title: "Orchestration & Transformation",
            topics: [
              "Apache Airflow DAG Design",
              "dbt — Data Build Tool for Transformations",
              "Data Quality with Great Expectations",
              "Data Lakehouse Architecture",
              "Delta Lake & Apache Iceberg"
            ]
          }
        ]
      }
    }
  }
};

function CourseContent() {
  const { slug } = useParams() as { slug: string };
  const searchParams = useSearchParams();
  const course = coursesDB[slug];

  if (!course) {
    notFound();
  }

  // Detect sub-track query parameter
  const trackParam = searchParams ? searchParams.get("track") : null;
  const hasSubTracks = !!course.tracks;

  // Active sub-track state (Beginner or Advanced)
  const [activeSubTrack, setActiveSubTrack] = useState<"beginner" | "advanced">("beginner");

  // Sync sub-track state with query parameter
  useEffect(() => {
    if (trackParam === "advanced") {
      setActiveSubTrack("advanced");
    } else if (trackParam === "beginner") {
      setActiveSubTrack("beginner");
    }
  }, [trackParam]);

  // State for toggling between Overview and Curriculum tabs
  const [activeTab, setActiveTab] = useState<"overview" | "curriculum">("overview");

  // State for toggling curriculum accordions (default open Module 1)
  const [activeModule, setActiveModule] = useState<number | null>(0);

  const toggleModule = (index: number) => {
    setActiveModule(activeModule === index ? null : index);
  };

  // Resolve content based on standard course or sub-track selection
  const title = course.title;
  const image = course.image;
  const lessons = course.lessons;
  const students = course.students;
  const duration = course.duration;

  let displayOverviewHeading = course.overviewHeading || "";
  let displayOverviewText1 = course.overviewText1 || "";
  let displayOverviewText2 = course.overviewText2 || "";
  let displayOverviewHeading2 = course.overviewHeading2 || "";
  let displayOverviewText3 = course.overviewText3 || "";
  let displayModules = course.modules || [];
  let displaySubTitle = "";

  if (hasSubTracks && course.tracks) {
    const trackData = course.tracks[activeSubTrack];
    displaySubTitle = trackData.subtitle;
    displayOverviewHeading = trackData.overviewHeading;
    displayOverviewText1 = trackData.overviewText1;
    displayOverviewText2 = trackData.overviewText2;
    displayOverviewHeading2 = trackData.overviewHeading2;
    displayOverviewText3 = trackData.overviewText3;
    displayModules = trackData.modules;
  }

  return (
    <>
      <Header />
      <main className="mo-course-details-page">
        
        {/* Course Hero Section */}
        <section className="mo-course-hero">
          {/* Background cloud decorations */}
          <svg className="mo-course-hero-cloud mo-ch-cloud-1" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.9"/>
          </svg>
          <svg className="mo-course-hero-cloud mo-ch-cloud-2" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.9"/>
          </svg>
          <svg className="mo-course-hero-cloud mo-ch-cloud-3" viewBox="0 0 100 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.3,28.8C18.6,21.5,24.3,15,31.7,15c1.4,0,2.8,0.2,4.1,0.7C39.1,9.2,46.2,5,54.2,5c10.5,0,19.3,7.5,21.1,17.5c0.9-0.2,1.8-0.3,2.7-0.3c6.6,0,12,5.4,12,12c0,6.6-5.4,12-12,12H19.3C13.6,46.2,9,41.6,9,35.9C9,30.9,13.2,29.1,19.3,28.8z" fill="white" opacity="0.9"/>
          </svg>

          <div className="container">
            <span className="mo-course-hero-breadcrumbs">
              <a href="/">Home</a> / <a href="/#courses">Course</a> / {title}
            </span>
            <h1 className="mo-course-hero-title">
              {title}
            </h1>
          </div>
        </section>

        {/* 2-Column Details Grid */}
        <section className="container">
          <div className="mo-course-content-grid">
            
            {/* Left Column: Overview / Curriculum Tabs */}
            <div className="mo-course-main">
              
              {/* Tab Selector Row (Shows ONLY Overview and Curriculum, ignoring rest) */}
              <div className="mo-course-tabs-wrap">
                <button 
                  className={`mo-course-tab-btn ${activeTab === "overview" ? "active" : ""}`}
                  onClick={() => setActiveTab("overview")}
                >
                  Overview
                </button>
                <button 
                  className={`mo-course-tab-btn ${activeTab === "curriculum" ? "active" : ""}`}
                  onClick={() => setActiveTab("curriculum")}
                >
                  Curriculum
                </button>
              </div>

              {/* Sub-track Pill Selector Row (For AI / Data Engineering) */}
              {hasSubTracks && (
                <div className="mo-track-pills-wrap">
                  <button 
                    className={`mo-track-pill ${activeSubTrack === "beginner" ? "active" : ""}`}
                    onClick={() => {
                      setActiveSubTrack("beginner");
                      setActiveModule(0); // reset open accordion module
                    }}
                  >
                    Beginner Track
                  </button>
                  <button 
                    className={`mo-track-pill ${activeSubTrack === "advanced" ? "active advanced" : ""}`}
                    onClick={() => {
                      setActiveSubTrack("advanced");
                      setActiveModule(0); // reset open accordion module
                    }}
                  >
                    Advanced Track
                  </button>
                </div>
              )}

              {/* Tab Content 1: Overview (Richer & Bigger description) */}
              {activeTab === "overview" && (
                <div style={{ textAlign: "left" }}>
                  {hasSubTracks && (
                    <h2 style={{ fontFamily: "var(--font-primary)", fontSize: "36px", fontWeight: "800", color: "var(--dark-color)", marginBottom: "10px", marginTop: "-10px", letterSpacing: "-0.5px" }}>
                      {activeSubTrack === "beginner" ? "Start from Zero" : "Go Production-Grade"}
                    </h2>
                  )}
                  {displaySubTitle && (
                    <p style={{ fontFamily: "var(--font-secondary)", fontSize: "16px", color: "var(--slate-color)", fontWeight: "500", marginBottom: "30px", marginTop: "0" }}>
                      {displaySubTitle}
                    </p>
                  )}

                  <h3 className="mo-course-section-title">{displayOverviewHeading}</h3>
                  <p className="mo-course-overview-text" style={{ marginBottom: "20px" }}>
                    {displayOverviewText1}
                  </p>
                  <p className="mo-course-overview-text" style={{ marginBottom: "35px" }}>
                    {displayOverviewText2}
                  </p>

                  <h3 className="mo-course-section-title" style={{ fontSize: "24px", marginTop: "40px" }}>
                    {displayOverviewHeading2}
                  </h3>
                  <p className="mo-course-overview-text">
                    {displayOverviewText3}
                  </p>
                </div>
              )}

              {/* Tab Content 2: Curriculum Accordion */}
              {activeTab === "curriculum" && (
                <div>
                  <h3 className="mo-course-section-title" style={{ textAlign: "left" }}>Course Curriculum</h3>
                  <p className="mo-course-overview-text" style={{ marginBottom: "30px", textAlign: "left" }}>
                    A structured program covering every critical area of {title} used in real enterprise environments.
                  </p>

                  <div className="mo-curriculum-accordion">
                    {displayModules.map((mod, index) => {
                      const isActive = activeModule === index;
                      const badgeLabel = hasSubTracks 
                        ? `${activeSubTrack === "beginner" ? "B" : "A"}${index + 1}`
                        : `Module ${index + 1}`;
                      return (
                        <div key={index} className={`mo-curriculum-module ${isActive ? "active" : ""}`}>
                          {/* Accordion header */}
                          <div className="mo-module-header" onClick={() => toggleModule(index)}>
                            <div className="mo-module-header-left">
                              <div className="mo-module-tag-row">
                                <span className="mo-module-badge">{badgeLabel}</span>
                                <span className="mo-module-topics-count">{mod.topics.length} topics</span>
                              </div>
                              <h4 className="mo-module-title">{mod.title}</h4>
                            </div>
                            <div className="mo-module-chevron">
                              {isActive ? "▲" : "▼"}
                            </div>
                          </div>

                          {/* Accordion topics list */}
                          <div className="mo-module-body">
                            <ul className="mo-module-topics-list">
                              {mod.topics.map((topic, tIdx) => (
                                <li key={tIdx} className="mo-module-topic-item">
                                  <span className="mo-topic-bullet"></span>
                                  {topic}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            {/* Right Column: Preview Floating Card */}
            <div className="mo-course-sidebar">
              <div className="mo-course-preview-card">
                <div className="mo-course-preview-img-wrap">
                  <img src={image} alt={title} />
                  <div className="mo-course-preview-play-btn">
                    <PlayCircleOutlined />
                  </div>
                </div>

                <div className="mo-course-preview-details">
                  <a href="/book-demo" className="mo-course-preview-cta-btn">
                    Book A Free Demo
                  </a>

                  <ul className="mo-course-preview-info-list">
                    <li className="mo-course-preview-info-item">
                      <span><BookOutlined style={{ marginRight: "8px" }} /> Lessons</span>
                      <strong>{lessons}</strong>
                    </li>
                    <li className="mo-course-preview-info-item">
                      <span><UserOutlined style={{ marginRight: "8px" }} /> Students</span>
                      <strong>{students}</strong>
                    </li>
                    <li className="mo-course-preview-info-item">
                      <span><ClockCircleOutlined style={{ marginRight: "8px" }} /> Duration</span>
                      <strong>{duration}</strong>
                    </li>
                    <li className="mo-course-preview-info-item">
                      <span><SafetyCertificateOutlined style={{ marginRight: "8px" }} /> Certificate</span>
                      <strong>Yes</strong>
                    </li>
                    <li className="mo-course-preview-info-item">
                      <span><GlobalOutlined style={{ marginRight: "8px" }} /> Language</span>
                      <strong>English</strong>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

export default function CourseDetailsPage() {
  return (
    <Suspense fallback={
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
        <h3>Loading Course Details...</h3>
      </div>
    }>
      <CourseContent />
    </Suspense>
  );
}
