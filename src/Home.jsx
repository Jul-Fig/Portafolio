import React from "react";
import CoverParticles from "./components/ui/CoverParticles";
import Header        from "./components/layout/Header";
import HeroSection   from "./sections/HeroSection";
import AboutSection  from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import FloatingContact from "./components/ui/FloatingContact";

const Home = () => (
  <div>
    <CoverParticles />
    <Header />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <FloatingContact />
  </div>
);

export default Home;