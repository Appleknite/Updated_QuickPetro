import React from 'react';
import { CheckCircle2, Container, Wrench, Factory } from 'lucide-react';

const LEGAK = () => {
  return (
    <div className="space-y-6">
      {/* Overview */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-3">Overview</h4>
        <p className="text-gray-700 leading-relaxed">
          LEGA-K is designed for the unique challenges of vessel cleaning — particularly coil-type and 
          jacketed vessels used in high-stakes industries. Deposits inside these vessels can be difficult 
          to reach, leading to inefficiencies, hotspots, and accelerated equipment wear. LEGA-K penetrates 
          deep into vessel internals to dissolve and remove contaminants, ensuring maximum thermal transfer efficiency.
        </p>
      </div>

      {/* Key Features */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Key Features</h4>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              icon: Container,
              title: "Targeted Cleaning",
              description: "Specialized for coil-type and jacket vessels"
            },
            {
              icon: Wrench,
              title: "Deposit Removal",
              description: "Breaks down sludge, scaling, and hydrocarbon residues"
            },
            {
              icon: CheckCircle2,
              title: "System Longevity",
              description: "Protects vessels from premature failure"
            },
            {
              icon: Factory,
              title: "Industrial-Grade",
              description: "Proven in pharmaceutical, chemical, and food industries"
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
            <span>Cleaning inner coil-type vessels</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Flushing jacketed reactor vessels</span>
          </li>
          <li className="flex items-start space-x-2">
            <span className="w-2 h-2 bg-[#FF8C00] rounded-full mt-2 flex-shrink-0"></span>
            <span>Periodic maintenance of critical processing vessels</span>
          </li>
        </ul>
      </div>

      {/* Technical Specifications */}
      <div>
        <h4 className="text-lg font-semibold text-[#004080] mb-4">Technical Specifications</h4>
        <div className="bg-gray-100 p-4 rounded-lg">
          <div className="space-y-2">
            <div className="flex justify-between">
              <span className="text-gray-600">Appearance:</span>
              <span className="font-medium">Transparent liquid</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Application Range:</span>
              <span className="font-medium">Ambient to mid-range operating temperatures</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Target Use:</span>
              <span className="font-medium">Carbonaceous and hydrocarbon residue removal</span>
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
            <span>Always perform vessel flushing before recharging fluids</span>
          </li>
          <li className="flex items-start space-x-2">
            <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
            <span>Recommended during annual preventive maintenance cycles</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LEGAK;
