import React from 'react';
import { CheckCircle2, Thermometer, Droplets, Cog } from 'lucide-react';

const LEGA36 = () => {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Overview</h4>
        <p className="text-gray-700 leading-relaxed">
          LEGA-36 is a dual-action flushing fluid and system cleaner formulated to bring neglected or 
          underperforming heat transfer systems back to life. It works by penetrating system deposits, 
          dissolving sludge, and carrying away contaminants that reduce efficiency. Whether you're 
          recharging a system with new fluid or commissioning a fresh installation, LEGA-36 ensures 
          your equipment starts clean and stays efficient.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Cog,
              title: "Dual-Action Formula",
              description: "Combines a system cleaner with a flushing agent in one product"
            },
            {
              icon: Droplets,
              title: "Comprehensive Contaminant Removal",
              description: "Clears sludge, carbon deposits, oxidized fluid residues, water, and volatile light ends"
            },
            {
              icon: CheckCircle2,
              title: "Versatile Compatibility",
              description: "Suitable with both mineral-based and synthetic thermal fluids"
            },
            {
              icon: Thermometer,
              title: "Efficiency Restorer",
              description: "Reduces heat transfer resistance, ensuring optimal performance"
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
            <span>Pre-commissioning of new heat transfer systems</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Maintenance flushing of systems operating up to 60°C bulk temperature</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Ideal for process industries where sludge and fouling are common</span>
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
              <span className="font-medium">Clear, colorless liquid</span>
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
            <span>Always flush with LEGA-36 before charging new fluids</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Vent air & moisture completely before heating</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Avoid copper alloys in contact with hot oil to minimize oxidation risks</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LEGA36;
