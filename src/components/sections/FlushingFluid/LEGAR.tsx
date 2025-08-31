import React from 'react';
import { CheckCircle2, RefreshCw, Shield, Clock } from 'lucide-react';

const LEGAR = () => {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Overview</h4>
        <p className="text-gray-700 leading-relaxed">
          LEGA-R is engineered for radiators, heat exchangers, and other high-fouling equipment where 
          fluid degradation is common. Over time, carbon deposits, sludge, and oxidized residues can 
          choke heat exchangers and radiators, resulting in poor heat transfer and unexpected shutdowns. 
          LEGA-R solves this by aggressively cleaning while remaining safe for system components.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: RefreshCw,
              title: "System Restorer",
              description: "Restores fouled heat exchangers & radiators to like-new performance"
            },
            {
              icon: CheckCircle2,
              title: "Broad Cleaning Capability",
              description: "Eliminates carbon, sludge, water, and degraded oil"
            },
            {
              icon: Shield,
              title: "Safe & Efficient",
              description: "Compatible with most thermal oils, both synthetic and mineral"
            },
            {
              icon: Clock,
              title: "Reduced Downtime",
              description: "Flushing reduces costly maintenance shutdowns"
            }
          ].map((feature, index) => (
            <div key={index} className="flex items-start space-x-3">
              <feature.icon className="w-5 h-5 text-[#FF8C00] flex-shrink-0 mt-1" />
              <div>
                <p className="font-medium text-gray-900">{feature.title}</p>
                <p className="text-sm text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Applications */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Applications</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Flushing radiators and industrial heat exchangers</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Systems that have suffered partial clogging or fluid oxidation</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Energy, chemical, and manufacturing industries</span>
          </li>
        </ul>
      </div>

      {/* Technical Specifications */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Technical Specifications</h4>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Appearance:</span>
              <span className="font-medium">Clear, odorless liquid</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Operating Range:</span>
              <span className="font-medium">-10°C to 60°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Density @ 25°C:</span>
              <span className="font-medium">0.820 – 0.850 kg/m³</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Viscosity @ 40°C:</span>
              <span className="font-medium">1.0 – 6.0 mm²/s</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Flash Point (COC):</span>
              <span className="font-medium">&lt;20°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Autoignition Point:</span>
              <span className="font-medium">~300°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pour Point:</span>
              <span className="font-medium">-12°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Neutralization Nr (TAN):</span>
              <span className="font-medium">&lt;0.05 mgKOH/g</span>
            </div>
          </div>
        </div>
      </div>

      {/* Best Practices */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Best Practices</h4>
        <ul className="space-y-2 text-gray-700">
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Commission new exchangers with LEGA-R before first fill</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Use during scheduled shutdowns to prevent efficiency losses</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Conduct fluid monitoring 3–4 times annually for predictive maintenance</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LEGAR;
