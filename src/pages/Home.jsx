import React from 'react'
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import WhatWeDo from '../components/WhatWeDo';
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
            <FeatureCards />
            <PartnersSection />
            <ServicesSection />
            <Footer />
    </div>
  )
}
