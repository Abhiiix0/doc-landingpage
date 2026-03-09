import Benefits from "@/components/Benefits";
import DocOnCall from "@/components/DocOnCall";
import DocServices from "@/components/DocServices";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MedicalHelps from "@/components/MedicalHelps";
import Services from "@/components/Services";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import React from "react";

const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <MedicalHelps />
      <DocOnCall />
      <Benefits />
      <Services />
      <DocServices />
      <WhyChooseUs />
      <TestimonialsSection />
      <FAQ></FAQ>
      <Footer />
    </div>
  );
};

export default page;
