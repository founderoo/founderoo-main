import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/WhatWeDo';
import MissionVisionSection from '../components/MissionVisionSection';
import WhyChooseFounderooSection from '../components/WhyChooseFounderooSection';
import FeatureCards from '../components/FeatureCards';
import PartnersSection from '../components/PartnersSection';
import ServicesSection from '../components/ServicesSection';
import Footer from '../components/Footer';
export const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <WhatWeDo />
      <MissionVisionSection />

      <FeatureCards />
      <PartnersSection />
      <ServicesSection />
      <WhyChooseFounderooSection />
      <Footer />
    </div>
  )
}
