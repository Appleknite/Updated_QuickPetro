import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight,
  Clock,
  Shield,
  Gauge,
  Leaf,
  CheckCircle2,
  FileText,
  AlertTriangle,
  TrendingUp,
  Database,
  BarChart
} from 'lucide-react';

const IndustrialHeatTransferOilTestingPage = () => {
  return (
    <>
      <Helmet>
        <title>Industrial Heat Transfer Oil Testing | Comprehensive Fluid Analysis – QuickPetro</title>
        <meta
          name="description"
          content="Discover our comprehensive industrial heat transfer oil testing service. Our fluid analysis extends equipment life, prevents downtime, and ensures safety. Contact QuickPetro today for expert analysis!"
        />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "Industrial Heat Transfer Oil Testing",
              "provider": {
                "@type": "Organization",
                "name": "QuickPetro",
                "url": "https://quickpetro.com"
              },
              "description": "Comprehensive industrial heat transfer oil testing and fluid analysis services to optimize system performance and ensure safety.",
              "areaServed": "IN",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Heat Transfer Oil Testing Services",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Comprehensive Fluid Analysis"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "System Performance Optimization"
                    }
                  }
                ]
              }
            }
          `}
        </script>
      </Helmet>

      <div className="pt-32">
        {/* Hero Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 font-montserrat">
              Industrial Heat Transfer Oil Testing: Comprehensive Fluid Analysis
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl leading-relaxed mb-8">
              Optimize Your System. Enhance Efficiency. Ensure Safety.
            </p>
            <Link 
              to="/contact?source=oil-testing"
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
            >
              <span>Schedule Your Analysis Today</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>

        {/* Why Fluid Analysis Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#004080] mb-8 font-montserrat">
              Why Fluid Analysis is Critical for Your Industrial Heating System
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mb-12">
              Industrial heating systems require fluids that not only transfer heat effectively but also maintain 
              chemical stability over time. Regular oil testing is essential to monitor the condition of your thermal 
              fluid, detect early signs of degradation, and optimize system performance.
            </p>

            {/* Benefits Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Clock,
                  title: "Extended Equipment Lifespan",
                  description: "Continuous monitoring detects viscosity shifts, oxidation, and contamination before they become major issues. Preventive actions extend the operational life of critical components."
                },
                {
                  icon: AlertTriangle,
                  title: "Prevention of Costly Downtime",
                  description: "Early issue detection minimizes emergency shutdowns and high repair costs. Scheduled interventions ensure seamless operations."
                },
                {
                  icon: Shield,
                  title: "Enhanced Safety & Compliance",
                  description: "Maintains thermal fluid within safe operational parameters. Ensures compliance with ISO 9001 and other regulatory standards."
                },
                {
                  icon: TrendingUp,
                  title: "Optimized Energy Efficiency",
                  description: "Clean, well-maintained fluid enhances heat transfer efficiency. Reduces operational energy consumption."
                },
                {
                  icon: Database,
                  title: "Actionable Data",
                  description: "Detailed reports guide maintenance strategies. Helps refine operational parameters for better system performance."
                }
              ].map((benefit, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-all duration-300">
                  <benefit.icon className="w-12 h-12 text-[#FF8C00] mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Analysis Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#004080] mb-12 font-montserrat text-center">
              Our 11-Step Fluid Analysis Process
            </h2>
            <div className="max-w-4xl mx-auto space-y-8">
              {[
                {
                  step: "Schedule Regular Sampling",
                  description: "Plan fluid testing at consistent intervals (every three months) to capture early degradation signals and detect potential issues before they escalate. Regular sampling forms the foundation of a proactive maintenance strategy.",
                  subpoint: "Establish a calendar and use automated reminders to ensure no sample is missed."
                },
                {
                  step: "Prepare for Sampling",
                  description: "Before collecting a sample, ensure that the system is fully operational with fluid at the correct temperature and proper circulation. This preparation guarantees that the sample accurately reflects the current state of the system under normal operating conditions.",
                  subpoint: "Verify system parameters like temperature and flow rate prior to sampling."
                },
                {
                  step: "Collect a Closed Sample",
                  description: "Utilize sealed sampling devices to collect the fluid sample. This prevents contamination from air or moisture, which can significantly alter the test results and lead to inaccurate assessments.",
                  subpoint: "Follow strict protocols to avoid any exposure during collection."
                },
                {
                  step: "Engage Specialist Personnel",
                  description: "Trained thermal fluid experts perform the sampling to ensure consistency and minimal disruption to operations. Their expertise ensures that the sample is handled correctly from start to finish.",
                  subpoint: "Document the qualifications of personnel handling the sample for quality assurance."
                },
                {
                  step: "Transport the Sample Securely",
                  description: "Immediately package and transport the collected sample to an accredited laboratory. Secure handling and prompt delivery are crucial to preserving the sample's integrity and ensuring accurate results.",
                  subpoint: "Use temperature-controlled transport if required."
                },
                {
                  step: "Conduct Comprehensive Laboratory Testing",
                  description: "The sample undergoes an extensive battery of tests—over 11 different analyses—to evaluate critical parameters such as Ramsbottom Carbon Residue, Total Acid Number (TAN), viscosity, flash point, and particulate content.",
                  subpoint: "Each test is performed using industry-standard methods to ensure consistency and reliability."
                },
                {
                  step: "Generate a Detailed Analysis Report",
                  description: "After testing, the laboratory produces an in-depth report outlining the fluid's condition, including test results, performance trends, and historical comparisons.",
                  subpoint: "The report includes visual data representations such as graphs and trend lines for clarity."
                },
                {
                  step: "Review Findings and Identify Issues",
                  description: "Our experts review the report to detect early signs of problems such as carbon buildup, reduced flash points, and increased acidity. This thorough review helps identify potential risks before they become critical.",
                  subpoint: "Recommendations are provided to address each identified issue."
                },
                {
                  step: "Implement Corrective Actions",
                  description: "Based on the analysis, corrective measures such as advanced filtration, fluid dilution, or complete system cleaning/replacement are recommended and implemented to restore optimal fluid conditions.",
                  subpoint: "Each recommended action is prioritized based on the severity of the issue."
                },
                {
                  step: "Integrate Findings into Your Maintenance Plan",
                  description: "Utilize the data and recommendations to schedule proactive maintenance. Integrating this analysis into your routine maintenance plan ensures that your system remains efficient and avoids unexpected shutdowns.",
                  subpoint: "Use maintenance management software to track and schedule recommended actions."
                },
                {
                  step: "Continuous Monitoring and Repeat Testing",
                  description: "Finally, re-assess your system every three months to monitor fluid condition over time, refine maintenance strategies, and ensure continuous optimal performance.",
                  subpoint: "Adjust the maintenance schedule based on evolving fluid conditions and performance trends."
                }
              ].map((step, index) => (
                <div key={index} className="flex items-start space-x-4 bg-white p-6 rounded-xl shadow-sm">
                  <div className="w-12 h-12 bg-[#FF8C00] text-white rounded-full flex items-center justify-center flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{step.step}</h3>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <p className="text-gray-500 text-sm italic">• {step.subpoint}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* New Section: Maximizing System Performance and Longevity */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-[#004080] mb-8 font-montserrat">
              Maximizing System Performance and Longevity
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-gray-700 mb-6">
                Our comprehensive oil testing service isn't just a diagnostic tool—it's a strategic approach to achieving peak system performance. By integrating regular fluid analysis into your maintenance regimen, you can minimize downtime, reduce operating costs, and significantly extend the life of your industrial heating system.
              </p>
              <p className="text-lg text-gray-700">
                Detailed reports and proactive recommendations empower you to make informed decisions that drive long-term success. Our approach transforms fluid analysis from a routine check to a critical strategy for operational excellence, ensuring your industrial heating systems operate at their absolute best.
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-[#004080] to-[#002244] py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 font-montserrat">
              Ready to Optimize Your System Performance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't wait for system issues to arise. Schedule your comprehensive fluid analysis today and ensure 
              your system operates at peak efficiency.
            </p>
            <Link 
              to="/contact?source=oil-testing-bottom"
              className="bg-[#FF8C00] text-white px-8 py-4 rounded-lg text-lg font-semibold inline-flex items-center space-x-2 hover:bg-[#FF9922] transform hover:scale-105 transition-all duration-200"
            >
              <span>Schedule Expert Analysis</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default IndustrialHeatTransferOilTestingPage;
