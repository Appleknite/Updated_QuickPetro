import React from 'react';
import { Target, Award, Recycle, LifeBuoy } from 'lucide-react';

const WhyChooseQuickPetro = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-[#004080] mb-12 font-montserrat">
          Why Choose QuickPetro
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: Target,
              title: "Tailored Solutions",
              description: "Every flushing fluid is customized to your specific system requirements, operating conditions, and industry standards. Our technical team analyzes your unique challenges to recommend the optimal LEGA series product for maximum effectiveness."
            },
            {
              icon: Award,
              title: "Proven Results Across Industries",
              description: "With over 30 years of experience and ISO 9001 certification, we've successfully optimized thermal systems across pharmaceutical, chemical, food processing, and energy sectors, delivering measurable improvements in efficiency and reliability."
            },
            {
              icon: LifeBuoy,
              title: "Lifecycle Management",
              description: "Beyond just providing flushing fluids, we offer comprehensive lifecycle support including system assessment, maintenance planning, performance monitoring, and ongoing technical consultation to ensure long-term system optimization."
            },
            {
              icon: Recycle,
              title: "Eco-Friendly Disposal",
              description: "Our commitment to sustainability includes responsible disposal options such as oil recycling, energy recovery, and controlled burning protocols. We help you minimize environmental impact while maintaining operational excellence."
            }
          ].map((reason, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
              <reason.icon className="w-12 h-12 text-[#FF8C00] mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-[#004080]">{reason.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseQuickPetro;
