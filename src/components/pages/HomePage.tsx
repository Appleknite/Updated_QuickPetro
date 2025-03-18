import React from 'react';
import HeroSection from '../sections/HeroSection';
import ProductsServicesSection from '../sections/ProductsServicesSection';
import VisualEvidenceSection from '../sections/VisualEvidenceSection';
import ServicesOverviewSection from '../sections/ServicesOverviewSection';
import SystemOptimizationSection from '../sections/SystemOptimizationSection';
import TeamSection from '../sections/TeamSection';
import TestimonialsSection from '../sections/TestimonialsSection';
import SupportiveDataSection from '../sections/SupportiveDataSection';
import CTASection from '../sections/CTASection';

const HomePage = () => {
  return (
    <main className="pt-32">
      <HeroSection />
      <ProductsServicesSection />
      <VisualEvidenceSection />
      <ServicesOverviewSection />
      <SystemOptimizationSection />
      <TeamSection />
      <TestimonialsSection />
      <SupportiveDataSection />
      <CTASection />
    </main>
  );
};

export default HomePage;
