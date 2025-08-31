import React from 'react';
import { CheckCircle2, Flame, Cog, Leaf } from 'lucide-react';

const LEGA11 = () => {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Overview</h4>
        <p className="text-gray-700 leading-relaxed">
          LEGA-11 is QuickPetro's heavy-duty flushing fluid for high-temperature heat transfer systems 
          operating up to 250°C. Where traditional cleaners fail, LEGA-11 excels — removing stubborn 
          sludge, deposits, and degraded fluid residues even under extreme conditions. Designed for 
          demanding industries, it ensures systems run at peak performance with minimal downtime.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Flame,
              title: "High-Temperature Resistant",
              description: "Effective up to 250°C film temperature"
            },
            {
              icon: CheckCircle2,
              title: "Advanced Cleaning Chemistry",
              description: "Tackles sludge, volatile light ends, carbon deposits"
            },
            {
              icon: Cog,
              title: "Dual-Action Performance",
              description: "Both a cleaner and flushing agent in one"
            },
            {
              icon: Leaf,
              title: "Eco-Conscious Disposal",
              description: "Supports oil recycling and energy recovery options"
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
            <span>Heat transfer systems requiring high-temp maintenance</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Pre-commissioning of new high-temp equipment</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Regular preventive flushing in chemical, pharma, and heavy industry plants</span>
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
              <span className="font-medium">Colorless transparent liquid</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Operating Range:</span>
              <span className="font-medium">-10°C to 250°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Density @ 25°C:</span>
              <span className="font-medium">0.820 – 0.850 kg/m³</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Viscosity @ 40°C:</span>
              <span className="font-medium">9.0 – 13.0 mm²/s</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Viscosity @ 100°C:</span>
              <span className="font-medium">2.5 – 3.5 mm²/s</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between">
              <span className="text-gray-600">Flash Point (COC):</span>
              <span className="font-medium">230°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Autoignition Point:</span>
              <span className="font-medium">320°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Pour Point:</span>
              <span className="font-medium">-12°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Max Bulk Temp:</span>
              <span className="font-medium">240°C</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Max Film Temp:</span>
              <span className="font-medium">250°C</span>
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
            <span>Vent all air and water before heating</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Use during scheduled maintenance to avoid emergency shutdowns</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Always follow safe disposal protocols (recycling, controlled burning, etc.)</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LEGA11;
