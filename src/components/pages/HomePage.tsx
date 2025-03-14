import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const HomePage = () => {
  return (
    <>
      <Helmet>
        <title>QuickPetro - Industrial Thermal Fluid System Solutions</title>
        <meta
          name="description"
          content="QuickPetro provides expert thermal fluid system solutions including maintenance, filtration, and cleaning services for industrial applications."
        />
      </Helmet>

      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#002244] to-navy text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Advanced Thermal Fluid System Solutions
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Optimize your industrial operations with our comprehensive thermal fluid system 
                maintenance and filtration solutions.
              </p>
              <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF5722] transform hover:scale-105 transition-all duration-200">
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>

        {/* Main Content Placeholder */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Welcome to QuickPetro
            </h2>
            <p className="text-lg text-gray-700">
              Content for the homepage will be added here based on specific requirements.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
