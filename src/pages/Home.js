import React from 'react';
import AboutSection from '../components/AboutSection';
import ProjectsSection from '../components/ProjectsSection';
import ContactBanner from '../components/ContactBanner';
import HomeSection from '../components/HomeSection';

export default function Home() {
  return (
    <div>
      <HomeSection />
      <AboutSection />
      <ProjectsSection />
      <ContactBanner />
    </div>
  );
}
