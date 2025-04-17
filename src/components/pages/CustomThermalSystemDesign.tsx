import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Gauge, FlaskRound as Flask, Zap, Cog, Shield, Filter, Cpu, LayoutGrid, Leaf, Clock } from 'lucide-react';

const CustomThermalSystemDesign = () => {
  return (
    <>
      <Helmet>
        <title>Custom Thermal System Design & Optimization | QuickPetro</title>
        <meta
          name="description"
          content="Partner with QuickPetro for Custom Thermal System Design & Optimization. From in-depth assessments and precision fluid selection to advanced automation and sustainable operation, our tailored solutions maximize efficiency, safety, and scalability."
        />
      </Helmet>

      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat uppercase">
              Custom Thermal System Design & Optimization
            </h1>
            <div className="max-w-3xl">
              <p className="text-xl text-gray-200 mb-8">
                Experience the transformative power of engineered precision. Our Custom Thermal System Design & Optimization 
                service delivers fully tailored solutions from initial audit to long-term performance programs that drive 
                operational excellence, reduce costs, and future-proof your facility.
              </p>
              <Link 
                to="/contact?source=system-design"
                className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
              >
                <span>Contact Us Today</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Service Steps Grid */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  icon: Gauge,
                  title: "Comprehensive System Assessment",
                  description: "We begin with a data-driven evaluation of your facility's thermal needs analyzing heat load profiles, target process temperatures, and compatibility with fluid types. Our engineers identify infrastructure limitations and inefficiencies, then map historical energy usage to highlight high-impact areas for thermal optimization."
                },
                {
                  icon: Flask,
                  title: "Precision Thermal Fluid Selection",
                  description: "We help you select the right thermal fluid by assessing stability, oxidation resistance, and viscosity. Whether your process demands high-temperature synthetic oils or cost-efficient mineral-based alternatives, we test for material compatibility to avoid corrosion or thermal breakdown."
                },
                {
                  icon: Zap,
                  title: "Heat Transfer Efficiency Optimization",
                  description: "We engineer system layouts with minimized pressure drops and superior circulation. By integrating high-performance heat exchangers and thermal insulation, we boost overall heat exchange efficiency while reducing thermal waste and operating costs."
                },
                {
                  icon: Cog,
                  title: "Strategic Component Selection",
                  description: "From pumps and valves to sensors and controls, each component is chosen for thermal endurance, corrosion resistance, and high-efficiency ratings. We match specifications to your operating range to reduce failures and increase operational reliability."
                },
                {
                  icon: Shield,
                  title: "Rigorous Safety & Compliance",
                  description: "All system designs meet or exceed DSEAR, ATEX, and HSE standards. We incorporate redundant safety layers including pressure relief valves, expansion tanks, fire suppression, and emergency shut-offs ensuring safe operation in hazardous environments."
                },
                {
                  icon: Filter,
                  title: "Advanced Filtration Control",
                  description: "We integrate inline filters and monitoring ports for continuous fluid purity. Real-time and scheduled fluid analysis allows for predictive maintenance and reduced component wear extending both system and fluid life."
                },
                {
                  icon: Cpu,
                  title: "Intelligent System Control",
                  description: "We implement smart control platforms (PLC/SCADA) that track system variables, optimize pump speeds, and predict maintenance needs. This intelligent automation ensures 24/7 system optimization and reduced energy waste."
                },
                {
                  icon: LayoutGrid,
                  title: "Modular Expansion & Scalability",
                  description: "Need to scale operations? Our systems are modular by design. Whether you're adding new lines or increasing heat demand, expansion is fast, cost-efficient, and seamless."
                },
                {
                  icon: Leaf,
                  title: "Energy Efficiency & Sustainability",
                  description: "We optimize all heat-carrying pathways to reduce energy losses and install recovery loops to reuse waste heat. This design helps reduce your carbon footprint and boosts long-term ROI."
                },
                {
                  icon: Clock,
                  title: "Long-Term Optimization",
                  description: "Our maintenance programs include scheduled flushing, analysis, filtration, and component review. Combined with upgrade pathways, your system stays up to date, efficient, and reliable well into the future."
                }
              ].map((step, index) => (
                <div key={index} className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300">
                  <step.icon className="w-12 h-12 text-[#004080] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Ready to Engineer Your Perfect Thermal Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how QuickPetro can help you design, build, and sustain the most advanced thermal systems in your industry.
            </p>
            <Link 
              to="/contact?source=system-design-bottom"
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
            >
              <span>Schedule Your Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CustomThermalSystemDesign;
