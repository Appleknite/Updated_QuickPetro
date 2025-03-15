import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import AboutPage from './components/AboutPage';
import { 
  Droplets, 
  Filter, 
  Wrench, 
  LineChart, 
  ArrowRight, 
  Award, 
  Gauge,
  Clock,
  Target,
  CheckCircle2,
  BarChart3,
  Mail,
  ChevronRight
} from 'lucide-react';

// Footer component extracted for reuse
const Footer = () => (
  <footer className="bg-gray-900 text-white py-16">
    <div className="container mx-auto px-4">
      <div className="grid md:grid-cols-4 gap-12">
        {/* Navigation */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            {['Home', 'Our Services', 'Testimonials', 'About Us', 'Contact'].map((link) => (
              <li key={link}>
                <a href={`#${link.toLowerCase().replace(' ', '-')}`} className="text-gray-400 hover:text-white transition-colors">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            {[
              'System Flushing',
              'Filtration Solutions',
              'Performance Testing',
              'Maintenance Services'
            ].map((service) => (
              <li key={service}>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Evidence */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Why QuickPetro</h3>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <Award className="w-5 h-5 text-secondary" />
              <span className="text-gray-400">ISO 9001 Certified</span>
            </li>
            <li className="flex items-center space-x-2">
              <Clock className="w-5 h-5 text-secondary" />
              <span className="text-gray-400">30+ Years Experience</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Expert Tips & Updates</h3>
          <p className="text-gray-400 mb-4">
            Subscribe for maintenance tips and industry insights
          </p>
          <div className="flex space-x-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-gray-800 text-white px-4 py-2 rounded-lg flex-grow"
            />
            <button title="Subscribe" className="bg-secondary text-white p-2 rounded-lg hover:bg-[#FF5722] transition-colors">
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
        <p>© 2024 QuickPetro. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-grow">
          <Routes>
            <Route path="/about" element={<AboutPage />} />
            <Route path="/" element={
              <main className="pt-32">
                {/* Hero Section */}
                <section className="container mx-auto px-4 py-16">
                  <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to QuickPetro</h1>
                  <div className="max-w-3xl">
                    <p className="text-lg leading-relaxed text-gray-700 mb-8">
                      Based in Ahmedabad, India, QuickPetro brings over 30 years of expertise in industrial filtration solutions. 
                      Our flagship products, LEGA-11 and LEGA-36, set industry standards for system cleaning, filtration, and 
                      performance testing. As an ISO 9001 certified company, we're committed to sustainable practices while 
                      delivering exceptional results for our clients worldwide.
                    </p>
                    
                    {/* CTA Button */}
                    <button className="bg-secondary text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center space-x-2 hover:bg-[#FF5722] transform hover:scale-105 transition-all duration-200 shadow-lg">
                      <span>Get a Free Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </section>

                {/* Products & Services Section */}
                <section className="bg-gray-50 py-20">
                  <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12">
                      {/* Products Section */}
                      <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Products</h2>
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <Droplets className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-semibold text-xl mb-2">Premium Flushing Fluids</h3>
                              <p className="text-gray-600">
                                Our LEGA-11 and LEGA-36 flushing fluids feature deep hydro-finished base stocks, 
                                delivering superior oxidation stability and comprehensive system protection with 
                                advanced anti-rust and anti-wear properties.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <Filter className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-semibold text-xl mb-2">System Cleaner</h3>
                              <p className="text-gray-600">
                                Our specialized system cleaner ensures thorough removal of contaminants, 
                                sludge, and deposits, restoring optimal system performance and extending 
                                equipment life.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Services Section */}
                      <div className="bg-white p-8 rounded-xl shadow-sm">
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Services</h2>
                        <div className="space-y-6">
                          <div className="flex items-start space-x-4">
                            <Wrench className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-semibold text-xl mb-2">System Flushing & Maintenance</h3>
                              <p className="text-gray-600">
                                Expert clean-out services with controlled heating and circulation, 
                                complemented by comprehensive system inspections for preventive maintenance.
                              </p>
                            </div>
                          </div>
                          <div className="flex items-start space-x-4">
                            <LineChart className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                            <div>
                              <h3 className="font-semibold text-xl mb-2">Filtration & Performance Testing</h3>
                              <p className="text-gray-600">
                                Advanced contaminant removal through our ISO 9001 certified filtration service, 
                                coupled with detailed efficiency analysis and performance testing.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Visual Evidence Section */}
                <section className="py-16 bg-white">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Trusted by Industry Leaders</h2>
                    
                    {/* Client Logos */}
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
                      {[1, 2, 3, 4, 5].map((num) => (
                        <div key={num} className="flex items-center justify-center">
                          <div className="w-full h-24 bg-gray-50 rounded-lg border border-gray-200 flex items-center justify-center text-gray-400 transition-all duration-200 hover:border-primary hover:shadow-md">
                            Client Logo {num}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* ISO Certification Note */}
                    <div className="flex items-center justify-center space-x-3 text-center">
                      <Award className="w-6 h-6 text-primary" />
                      <p className="text-gray-700">
                        ISO 9001 certified for excellence in quality management and customer satisfaction.
                      </p>
                    </div>
                  </div>
                </section>

                {/* Services Overview Section */}
                <section className="bg-gray-50 py-20">
                  <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Comprehensive Services Overview</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-4 text-primary">System Flushing Solutions</h3>
                        <p className="text-gray-600">
                          Our advanced flushing process removes harmful contaminants and deposits, 
                          ensuring optimal system performance and extended equipment life.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Filtration Excellence</h3>
                        <p className="text-gray-600">
                          State-of-the-art filtration systems that significantly reduce downtime 
                          and maintain peak operational efficiency.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Reliable System Maintenance</h3>
                        <p className="text-gray-600">
                          Comprehensive preventive maintenance programs designed to maximize 
                          system longevity and minimize unexpected downtimes.
                        </p>
                      </div>
                      <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
                        <h3 className="text-xl font-semibold mb-4 text-primary">Performance Testing Insights</h3>
                        <p className="text-gray-600">
                          Detailed analysis and reporting ensure your systems meet industry 
                          standards and operate at peak efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Thermal Fluid System Optimization Section */}
                <section className="py-20 bg-white">
                  <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                      <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6">
                          Our Approach to Thermal Fluid System Optimization
                        </h2>
                        <div className="space-y-4 text-gray-600">
                          <p>
                            With over three decades of expertise in thermal fluid system solutions, 
                            QuickPetro has developed a comprehensive approach to system optimization 
                            that delivers measurable results for our clients.
                          </p>
                          <p>
                            Our process begins with a thorough system evaluation, identifying potential 
                            inefficiencies and areas for improvement. We then implement customized 
                            solutions using our proprietary LEGA series products, ensuring optimal 
                            performance and extended equipment life.
                          </p>
                          <p>
                            Through continuous monitoring and regular performance testing, we maintain 
                            peak efficiency while reducing operational costs. Our ISO 9001 certified 
                            processes ensure consistent quality and reliability, resulting in significant 
                            cost savings and improved sustainability for our clients.
                          </p>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <Gauge className="w-8 h-8 text-primary mb-4" />
                          <h3 className="font-semibold mb-2">System Evaluation</h3>
                          <p className="text-sm text-gray-600">Comprehensive analysis of your current system performance</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <Target className="w-8 h-8 text-primary mb-4" />
                          <h3 className="font-semibold mb-2">Custom Solutions</h3>
                          <p className="text-sm text-gray-600">Tailored optimization strategies for your specific needs</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <LineChart className="w-8 h-8 text-primary mb-4" />
                          <h3 className="font-semibold mb-2">Performance Testing</h3>
                          <p className="text-sm text-gray-600">Regular monitoring and efficiency assessment</p>
                        </div>
                        <div className="bg-gray-50 p-6 rounded-xl">
                          <CheckCircle2 className="w-8 h-8 text-primary mb-4" />
                          <h3 className="font-semibold mb-2">Ongoing Support</h3>
                          <p className="text-sm text-gray-600">Continuous maintenance and optimization services</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>

                {/* Team Section & Personal Statement */}
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

                {/* Testimonials Section */}
                <section className="py-20 bg-white">
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

                {/* Supportive Data Section */}
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

                {/* Final CTA Section */}
                <section className="bg-gradient-to-r from-teal to-navy py-20">
                  <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold text-white mb-4">Boost Your System Efficiency Now</h2>
                    <p className="text-gray-200 mb-8 max-w-2xl mx-auto">
                      Schedule a quick consultation with our thermal fluid system experts to optimize your operations—we'll respond within 1-2 business days.
                    </p>
                    <button className="bg-white text-teal px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-teal hover:text-white transform hover:scale-105 transition-all duration-200">
                      <span>Schedule Your Consultation</span>
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </section>
              </main>
            } />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
