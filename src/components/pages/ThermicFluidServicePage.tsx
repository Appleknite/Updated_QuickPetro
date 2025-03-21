import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Gauge, 
  Shield, 
  Clock, 
  Leaf,
  CheckCircle2,
  Settings,
  FileSpreadsheet,
  BarChart
} from 'lucide-react';

const ThermicFluidServicePage = () => {
  return (
    <>
      <Helmet>
        <title>Thermic Fluid System Cleaning & Flushing Services | QuickPetro</title>
        <meta
          name="description"
          content="Boost efficiency, prevent downtime, and extend equipment life with QuickPetro's expert Thermic Fluid System Cleaning & Flushing Services. Discover our exclusive LEGA Series cleaning fluids and schedule your consultation today!"
        />
      </Helmet>

      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat uppercase">
              Thermic Fluid System Cleaning & Flushing Services
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
              Unlock Unmatched Efficiency & Reliability for Your Thermal Systems
            </p>
            <div className="max-w-3xl">
              <p className="text-gray-300 mb-8">
                At QuickPetro, we know that a clean system is a high-performing system. Our expert Thermic Fluid System 
                Cleaning and Flushing Services don't just remove contaminants—they revitalize your entire heat transfer 
                setup, enhancing performance, safety, and longevity.
              </p>
              <Link 
                to="/contact?source=thermic-fluid-service"
                className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
              >
                <span>Schedule Your Consultation</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#004080] mb-12 font-montserrat uppercase">
              Experience the QuickPetro Difference
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: Gauge,
                  title: "Boost Efficiency Instantly",
                  description: "Remove contaminants that rob your system of heat transfer efficiency, reducing energy costs."
                },
                {
                  icon: Clock,
                  title: "Prevent Costly Downtime",
                  description: "Proactive cleaning and flushing safeguard your equipment, ensuring reliable operation."
                },
                {
                  icon: Shield,
                  title: "Maximize Safety & Compliance",
                  description: "Meet and exceed industry standards including DSEAR, ATEX, and HSE requirements."
                },
                {
                  icon: Leaf,
                  title: "Extend System Life",
                  description: "Prolong the life of your thermal fluids and critical components, reducing replacement frequency."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-[#004080] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#004080] mb-12 font-montserrat uppercase">
              Our Advanced Process—From Inspection to Perfection
            </h2>
            <div className="space-y-8">
              {[
                {
                  icon: FileSpreadsheet,
                  step: "Step 1: Comprehensive System Analysis",
                  description: "We thoroughly assess your system's performance, evaluating heat loads, fluid conditions, and flow dynamics."
                },
                {
                  icon: Settings,
                  step: "Step 2: Optimized Fluid Selection & Testing",
                  description: "Using our proprietary LEGA Series fluids, we select the ideal cleaning agent for your specific system requirements."
                },
                {
                  icon: Gauge,
                  step: "Step 3: Precision Cleaning & High-Flow Flushing",
                  description: "Advanced inline filtration and high-velocity flushing remove even the finest particulates."
                },
                {
                  icon: Shield,
                  step: "Step 4: System Re-Optimization & Safety Checks",
                  description: "Fine-tune your system to maximize heat transfer efficiency while ensuring safety compliance."
                },
                {
                  icon: BarChart,
                  step: "Step 5: Performance Validation & Ongoing Support",
                  description: "Rigorous testing and detailed reporting ensure sustained peak performance."
                }
              ].map((process, index) => (
                <div key={index} className="flex items-start space-x-6 bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <process.icon className="w-12 h-12 text-[#FF8C00] flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                    <p className="text-gray-600">{process.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* LEGA Series Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#004080] mb-12 font-montserrat uppercase">
              Discover the LEGA Series Advantage
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "Advanced Formulation",
                  description: "Breaks down even the toughest contaminants"
                },
                {
                  title: "Superior Thermal Stability",
                  description: "Maintains ideal viscosity in extreme conditions"
                },
                {
                  title: "Eco-Friendly",
                  description: "Minimizes hazardous waste while maximizing performance"
                },
                {
                  title: "Unmatched Versatility",
                  description: "Suitable for a wide range of industrial systems"
                }
              ].map((feature, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <CheckCircle2 className="w-8 h-8 text-[#FF8C00] mb-4" />
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat uppercase">
              Ready to Transform Your Thermal System?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't let contamination compromise your operations. Schedule a consultation today and discover how our 
              LEGA Series can revolutionize your system's performance.
            </p>
            <Link 
              to="/contact?source=thermic-fluid-cta"
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
            >
              <span>Schedule Expert Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ThermicFluidServicePage;
