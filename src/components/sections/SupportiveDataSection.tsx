import React from 'react';
import { Clock, Target, BarChart3, LineChart, Award } from 'lucide-react';

const SupportiveDataSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">Why Choose QuickPetro</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          With over three decades of experience, we've consistently delivered exceptional results for our clients
        </p>
        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              icon: Clock,
              stat: "30+",
              description: "Years of Experience"
            },
            {
              icon: Target,
              stat: "100+",
              description: "Satisfied Clients"
            },
            {
              icon: BarChart3,
              stat: "30%",
              description: "Average Downtime Reduction"
            },
            {
              icon: LineChart,
              stat: "₹3.5M+",
              description: "Annual Client Savings"
            },
            {
              icon: Award,
              stat: "ISO 9001",
              description: "Certified Quality"
            }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-xl text-center hover:shadow-md transition-shadow">
              <item.icon className="w-8 h-8 text-teal mx-auto mb-4" />
              <p className="text-2xl font-bold text-gray-900 mb-2">{item.stat}</p>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportiveDataSection;