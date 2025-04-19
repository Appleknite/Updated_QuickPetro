import React from 'react';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
          "Transformed Our System Efficiency Overnight"
        </h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          See what our clients say about their experience with QuickPetro
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              text: "The improvement in our system's performance was immediate and significant. QuickPetro's expertise has helped us reduce maintenance costs by 30%.",
              name: "Suresh Kumar",
              title: "Plant Manager",
              company: "Gujarat Chemicals Ltd"
            },
            {
              text: "Their preventive maintenance program has virtually eliminated unexpected downtimes. The team's technical knowledge and professionalism are outstanding.",
              name: "Meera Shah",
              title: "Operations Director",
              company: "Ahmedabad Manufacturing"
            },
            {
              text: "QuickPetro's solutions have been instrumental in optimizing our thermal fluid systems. The ROI has exceeded our expectations.",
              name: "Vikram Mehta",
              title: "Technical Head",
              company: "Industrial Solutions Inc"
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-md transition-shadow">
              <p className="text-gray-600 italic mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.title}</p>
                  <p className="text-sm text-primary">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
