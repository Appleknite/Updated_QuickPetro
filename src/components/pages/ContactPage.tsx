import React, { useState, useRef } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Helmet } from "react-helmet-async";

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    formRef.current?.submit();
    setIsSubmitted(true);
  };

  const closePopup = () => {
    setIsSubmitted(false);
    formRef.current?.reset();
  };

  return (
    <>
      <Helmet>
        <title>Contact QuickPetro - Industrial Thermal Fluid System Solutions</title>
        <meta
          name="description"
          content="Contact QuickPetro for expert thermal fluid system maintenance, filtration, and cleaning. Get in touch for professional solutions tailored to your industry."
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "QuickPetro",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "83, Pushpak Industrial Estate, Nika Tube Compound, Vatva G.I.D.C",
                "addressLocality": "Ahmedabad",
                "addressRegion": "Gujarat",
                "postalCode": "382445",
                "addressCountry": "IN"
              },
              "telephone": "+91 98250 44917",
              "email": "quickpetro@gmail.com"
            }
          `}
        </script>
      </Helmet>

      <div className="pt-32 pb-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#002244] to-navy text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-gray-200 max-w-2xl">
              Get in touch with our experts for professional thermal fluid system solutions tailored to your industry needs.
            </p>
          </div>
        </section>

        {/* Contact Information & Form Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Get in Touch</h2>

                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Visit Us</h3>
                      <p className="text-gray-600">
                        <a href= "https://maps.app.goo.gl/h4givYYdZFCMZD81A"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-secondary"> 
                        83, Pushpak Industrial Estate, Nika Tube Compound, Vatva G.I.D.C<br />
                        Ahmedabad – 382445<br />
                        Gujarat, India
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                      <p className="text-gray-600">
                        <a href="tel:+919825044917" className="hover:text-secondary">
                          +91 98250 44917
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                      <p className="text-gray-600">
                        <a href="mailto:quickpetro@gmail.com" className="hover:text-secondary">
                          quickpetro@gmail.com
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Form Section */}
              <div className="border border-gray-300 p-6 rounded-lg shadow-md bg-white">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                <form
                  ref={formRef}
                  action="https://docs.google.com/forms/d/e/1FAIpQLSe7OA5KW0NAdEeXblMbsJ_ynbd-Kp3wGYVSPrmPsCa7KwCXHw/formResponse"
                  method="POST"
                  target="hidden_iframe"
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  <div>
                    <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      name="entry.537249673"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="entry.220860452"
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your email address"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="entry.648234812"
                      rows={6}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-secondary focus:border-transparent"
                      placeholder="Enter your message"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-secondary text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#FF5722] transition-all duration-200"
                  >
                    Send Message
                  </button>
                </form>
                <iframe
                  name="hidden_iframe"
                  id="hidden_iframe"
                  style={{ display: "none" }}
                ></iframe>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Location</h2>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14694.08353560439!2d72.62795769412608!3d22.967865724121886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85cc5b3c91f3%3A0x48f23a00947a4e52!2sLegato%20Speciality%20Lubricants!5e0!3m2!1sen!2sca!4v1745809870409!5m2!1sen!2sca"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="QuickPetro Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>

      {/* Pop-up Confirmation */}
      {isSubmitted && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 className="text-xl font-semibold mb-4">Message Sent!</h3>
            <p className="text-gray-600 mb-4">
              Thank you for reaching out. We'll get back to you soon.
            </p>
            <button
              onClick={closePopup}
              className="px-6 py-2 bg-secondary text-white rounded-lg hover:bg-[#FF5722]"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ContactPage;
