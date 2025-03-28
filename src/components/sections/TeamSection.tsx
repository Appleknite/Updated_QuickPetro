import React from 'react';

const TeamSection = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Expert Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Team Members */}
          {[
            {
              name: "Rajesh Patel",
              role: "Founder & CEO",
              tenure: "30+ years experience",
              image: "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=300"
            },
            {
              name: "Amit Shah",
              role: "Technical Director",
              tenure: "15+ years experience",
              image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=300"
            },
            {
              name: "Priya Desai",
              role: "Operations Manager",
              tenure: "12+ years experience",
              image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=300"
            }
          ].map((member, index) => (
            <div key={index} className="text-center">
              <div className="w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-primary font-medium">{member.role}</p>
              <p className="text-gray-600">{member.tenure}</p>
            </div>
          ))}
        </div>

        {/* Personal Statement */}
        <div className="bg-navy text-white p-8 rounded-xl">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&q=80&w=150" 
                alt="Rajesh Patel" 
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <blockquote className="text-lg italic mb-4">
                "For over three decades, we've been committed to delivering excellence in thermal fluid system solutions. 
                Our success is built on a foundation of technical expertise, unwavering commitment to quality, and 
                a deep understanding of our clients' needs."
              </blockquote>
              <p className="font-semibold">Rajesh Patel</p>
              <p className="text-gray-300">Founder & CEO, QuickPetro</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;