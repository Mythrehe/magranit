import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import PopularCoursesSection from "@/components/PopularCoursesSection";
//import ExamPrepSection from "@/components/ExamPrepSection";
//import PartnersSection from "@/components/PartnersSection";
//import CategoriesSection from "@/components/CategoriesSection";
import DashboardFAQSection from "@/components/DashboardFAQSection";
import StepsSection from "@/components/StepsSection";
//import StatsSection from "@/components/StatsSection";
//import InstructorsSection from "@/components/InstructorsSection";
//import EventsSection from "@/components/EventsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
//import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <div id="why-us">
          <ServicesSection />
        </div>
        <div id="courses">
          <PopularCoursesSection />
        </div>
        <div id="how-it-works">
          <StepsSection />
        </div>
      
        <DashboardFAQSection />
        
        <TestimonialsSection />
        
      </main>
      <Footer />
    </>
  );
}

