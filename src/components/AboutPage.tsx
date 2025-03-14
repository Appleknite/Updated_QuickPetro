import React from 'react';
import { 
  Award, 
  Users, 
  Target, 
  Gauge, 
  LineChart, 
  ArrowRight,
  Building2,
  Globe,
  Clock,
  CheckCircle2
} from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="pt-32">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-50 to-white py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 max-w-4xl">
            Optimizing Industrial Efficiency with Advanced Thermal Fluid System Solutions
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl leading-relaxed mb-8">
            Based in Ahmedabad, India, QUICKPETRO has been a leader in thermal fluid system solutions for over 30 years. 
            We specialize in industrial filtration, system cleaning, and performance testing, helping businesses reduce 
            downtime and optimize efficiency. As an ISO 9001 certified company, we deliver sustainable, cost-effective 
            solutions tailored to industrial needs.
          </p>
          <div className="flex items-center space-x-4">
            <Award className="w-12 h-12 text-secondary" />
            <p className="text-lg text-gray-600">ISO 9001 Certified Excellence</p>
          </div>
        </div>
      </section>

      {/* Key Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Comprehensive Thermal Fluid System Solutions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Gauge,
                title: "Advanced System Cleaning",
                description: "State-of-the-art cleaning and flushing services that restore system efficiency and extend equipment life."
              },
              {
                icon: Target,
                title: "High-Efficiency Filtration",
                description: "Premium filtration solutions that remove contaminants and optimize system performance."
              },
              {
                icon: LineChart,
                title: "Precision Testing & Maintenance",
                description: "Comprehensive testing and preventive maintenance programs to ensure peak system efficiency."
              }
            ].map((service, index) => (
              <div key={index} className="p-6 bg-gray-50 rounded-xl">
                <service.icon className="w-12 h-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Benefits for Your Business
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Clock,
                title: "Reduced Downtime",
                description: "Our proactive system management approach minimizes unexpected shutdowns and maximizes operational efficiency."
              },
              {
                icon: Building2,
                title: "Extended Equipment Life",
                description: "Advanced filtration and maintenance solutions that protect your investment and extend machinery lifespan."
              },
              {
                icon: Globe,
                title: "Sustainable Solutions",
                description: "Eco-friendly practices and sustainable technologies that reduce environmental impact."
              },
              {
                icon: CheckCircle2,
                title: "Cost Optimization",
                description: "Significant reduction in maintenance costs through preventive care and efficient system management."
              }
            ].map((benefit, index) => (
              <div key={index} className="flex items-start space-x-4">
                <benefit.icon className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Trusted by Industry Leaders
          </h2>
          <div className="grid md:grid-cols-2 gap-12 mb-12">
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Industry Recognition</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Award className="w-6 h-6 text-secondary" />
                  <span>ISO 9001:2015 Certified</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-secondary" />
                  <span>Serving 100+ Industrial Clients</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-secondary" />
                  <span>Global Service Network</span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Performance Metrics</h3>
              <ul className="space-y-4">
                <li className="flex items-center space-x-3">
                  <Target className="w-6 h-6 text-secondary" />
                  <span>30% Average System Efficiency Improvement</span>
                </li>
                <li className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-secondary" />
                  <span>50% Reduction in Maintenance Time</span>
                </li>
                <li className="flex items-center space-x-3">
                  <LineChart className="w-6 h-6 text-secondary" />
                  <span>25% Average Cost Savings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Transform Your Industrial Operations Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Experience QUICKPETRO's industry-leading thermal fluid system solutions and optimize your industrial efficiency.
          </p>
          <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF5722] transform hover:scale-105 transition-all duration-200">
            <span>Get a Free Consultation</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
