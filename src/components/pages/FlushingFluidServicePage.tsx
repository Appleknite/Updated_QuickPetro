import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ProductAccordion from '../sections/FlushingFluid/ProductAccordion';
import WhyChooseQuickPetro from '../sections/FlushingFluid/WhyChooseQuickPetro';
import TestimonialsSection from '../sections/FlushingFluid/TestimonialsSection';
import BottomCTA from '../sections/FlushingFluid/BottomCTA';

const FlushingFluidServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Flushing Fluids – Enhance System Longevity & Performance | QuickPetro</title>
        <meta
          name="description"
          content="QuickPetro's specialized flushing fluids remove deposits, restore efficiency, and extend the life of thermal systems. Discover LEGA-36, LEGA-R, LEGA-K, and LEGA-11 for industrial system cleaning."
        />
        <meta
          name="keywords"
          content="flushing fluids for heat transfer systems, industrial system cleaning, thermal fluid flushing, LEGA series, heat transfer system cleaner"
        />
      </Helmet>

      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat uppercase">
              Flushing Fluids – Enhance System Longevity & Performance
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
              QuickPetro's specialized flushing fluids remove deposits, restore efficiency, and extend the life of thermal systems.
            </p>
            <Link 
              to="/contact?source=flushing-fluids"
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
            >
              <span>Get Expert Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Introduction Block */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-[#004080] mb-6">
                Why Flushing Fluids are Critical for Heat Transfer Systems
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Heat transfer systems accumulate deposits, sludge, and contaminants over time, significantly reducing 
                efficiency and potentially causing costly equipment failures. Regular flushing with specialized fluids 
                is essential for maintaining optimal performance, preventing downtime, and extending system life. 
                QuickPetro's LEGA series flushing fluids are specifically formulated to address these challenges, 
                providing comprehensive cleaning solutions for industrial system cleaning and thermal fluid flushing 
                applications across diverse industries.
              </p>
            </div>
          </div>
        </section>

        {/* Product Overview Accordion */}
        <ProductAccordion />

        {/* Why Choose QuickPetro */}
        <WhyChooseQuickPetro />

        {/* Visual Evidence / Case Studies */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#004080] mb-6">
              Trusted by Leading Industries
            </h2>
            <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
              QuickPetro flushing fluids are used in Pharma, Food, Chemicals, and Energy sectors.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                {
                  sector: "Pharmaceutical",
                  service: "LEGA-36 flushing reduced system downtime by 20% for a major pharmaceutical plant",
                  icon: "💊"
                },
                {
                  sector: "Food Processing",
                  service: "LEGA-R restored heat exchanger efficiency by 35% in food manufacturing facility",
                  icon: "🍽️"
                },
                {
                  sector: "Chemical Industry",
                  service: "LEGA-K vessel cleaning eliminated recurring fouling issues in chemical processing",
                  icon: "⚗️"
                },
                {
                  sector: "Energy Sector",
                  service: "LEGA-11 high-temperature cleaning improved thermal efficiency by 25%",
                  icon: "⚡"
                }
              ].map((example, index) => (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-3xl mb-4">{example.icon}</div>
                  <h3 className="text-xl font-semibold mb-3 text-[#004080]">{example.sector}</h3>
                  <p className="text-gray-600 text-sm">{example.service}</p>
                </div>
              ))}
            </div>
            <div className="bg-[#004080] text-white p-6 rounded-xl text-center">
              <p className="text-lg italic">
                "After LEGA-36 flushing, a pharmaceutical plant reduced downtime by 20%."
              </p>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <TestimonialsSection />

        {/* Bottom CTA */}
        <BottomCTA />
      </div>
    </>
  );
};

export default FlushingFluidServicePage;
