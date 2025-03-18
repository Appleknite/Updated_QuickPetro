import React from 'react';
import { Gauge, Target, LineChart, CheckCircle2 } from 'lucide-react';

const SystemOptimizationSection = () => {
  return (
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
  );
};

export default SystemOptimizationSection;