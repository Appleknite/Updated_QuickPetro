import React, { useState } from 'react';
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
  BarChart,
  Plus,
  Minus
} from 'lucide-react';

const ThermicFluidServicePage = () => {
  const processes = [
    {
      icon: FileSpreadsheet,
      step: "Step 1: Comprehensive System Analysis",
      description: "We begin with a detailed evaluation of your thermal fluid system’s performance, focusing on key parameters to pinpoint inefficiencies.",
      subpoints: [
        "Heat Loads: We measure your system’s heat handling capacity—whether cooling or heating—to ensure optimal energy transfer.",
        "Fluid Conditions: We assess fluid temperature, pressure, and cleanliness; identifying fouling and degradation that reduce performance.",
        "Flow Dynamics: We analyze fluid movement to detect blockages and uneven flow, ensuring consistent heat transfer across the system.",
        "This analysis allows us to develop a customized plan that saves energy, reduces costs, and enhances reliability."
      ]
    },
    {
      icon: Settings,
      step: "Step 2: Optimized Fluid Selection & Testing",
      description: "Based on our analysis, we select the ideal cleaning fluid from our proprietary LEGA Series, ensuring compatibility and superior performance.",
      subpoints: [
        "Tailored Fluid Choice: We choose between synthetic and mineral-based fluids depending on your system’s materials and deposit types.",
        "Compatibility & Performance: We ensure the selected fluid is compatible with your equipment and performs effectively under extreme conditions.",
        "Rigorous Testing: Our experts test the fluid to verify its cleaning efficiency and safety without damaging system components.",
        "This step prepares your system for optimal cleaning and enhances overall safety and efficiency."
      ]
    },
    {
      icon: Gauge,
      step: "Step 3: Precision Cleaning & High-Flow Flushing",
      description: "We execute a meticulous cleaning process to remove all contaminants and restore your system’s peak performance.",
      subpoints: [
        "Draining & Analysis: We carefully drain the current fluid and analyze it to identify contaminants such as scale, sludge, or organic residues.",
        "Targeted Component Cleaning: We clean all critical components, addressing even hard-to-reach areas to ensure no part is left behind.",
        "High-Velocity Flushing & Inline Filtration: Our advanced flushing technique dislodges debris while inline filters capture even the smallest particles.",
        "This comprehensive cleaning leaves your system pristine and maximizes heat transfer efficiency."
      ]
    },
    {
      icon: Shield,
      step: "Step 4: System Re-Optimization & Safety Checks",
      description: "After cleaning, we re-optimize your system to maximize performance while strictly adhering to safety and compliance standards.",
      subpoints: [
        "Piping & Component Optimization: We reconfigure the piping layout and upgrade key components to reduce flow resistance and improve heat exchange.",
        "Integration of Smart Monitoring: We install IoT devices and real-time performance monitors to detect issues before they escalate.",
        "Safety & Compliance: Every adjustment complies with industry standard such as ISO 9001, ensuring a safe operating environment.",
        "This step enhances system reliability, reduces operating costs, and extends the lifespan of your equipment."
      ]
    },
    {
      icon: BarChart,
      step: "Step 5: Performance Validation & Ongoing Support",
      description: "We conclude with rigorous testing and provide ongoing support to ensure your system continues operating at peak efficiency.",
      subpoints: [
        "Performance Testing: We measure key parameters like heat transfer rates, fluid flow, and energy consumption against industry benchmarks.",
        "Detailed Reporting: Comprehensive reports document the improvements, offering clear insights into energy savings and efficiency gains.",
        "Expert Maintenance Recommendations: We advise on regular maintenance practices, including periodic fluid checks and cleaning schedules.",
        "Our ongoing support minimizes downtime and ensures your system remains cost-effective and efficient over the long term."
      ]
    }
  ];

  // State to manage the expansion of process steps
  const [expandedSteps, setExpandedSteps] = useState<boolean[]>(new Array(processes.length).fill(false));

  const toggleStep = (index: number) => {
    setExpandedSteps(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
                  description: "Meet and exceed industry standards including ISO (International Organization for Standardization) 9001 requirements."
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

        {/* Process Section with Expandable Subpoints */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center text-[#004080] mb-12 font-montserrat uppercase">
              Our Advanced Process: From Inspection to Perfection
            </h2>
            <div className="space-y-8">
              {processes.map((process, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start bg-white p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <process.icon className="w-12 h-12 text-[#FF8C00] flex-shrink-0 mb-4 md:mb-0" />
                  <div className="w-full">
                    <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleStep(index)}>
                      <h3 className="text-xl font-semibold mb-2">{process.step}</h3>
                      <button className="text-[#FF8C00] focus:outline-none p-2 hover:bg-gray-200 rounded-md">
                        {expandedSteps[index] ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                      </button>
                    </div>
                    <p className="text-gray-600 mb-2">{process.description}</p>
                    {expandedSteps[index] && (
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {process.subpoints.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
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
