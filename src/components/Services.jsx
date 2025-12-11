// components/ServiceComponent.jsx
import React from "react";
import { motion } from "framer-motion";
import { Recycle, Droplet, AlertTriangle, Layers } from "lucide-react";

export default function ServiceComponent() {
  const services = [
    {
      title: "Solid Waste Management",
      icon: <Recycle className="w-10 h-10 text-green-600" />,
      desc: "Comprehensive solutions for managing industrial and commercial solid waste with sustainable disposal methods.",
    },
    {
      title: "Waste Water Management",
      icon: <Droplet className="w-10 h-10 text-blue-600" />,
      desc: "Advanced treatment processes to recycle and reuse industrial wastewater efficiently.",
    },
    {
      title: "Hazardous Ink Waste Management",
      icon: <AlertTriangle className="w-10 h-10 text-red-600" />,
      desc: "Safe handling and disposal of hazardous ink and chemical waste following compliance norms.",
    },
    {
      title: "Waste Minimization",
      icon: <Layers className="w-10 h-10 text-emerald-600" />,
      desc: "Strategies and solutions to help industries reduce waste generation and optimize resources.",
    },
  ];

  return (
    <div className="py-20 bg-gray-100">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12">
        Our Environmental Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {services.map((service) => (
          <motion.div
            key={service.title}
            whileHover={{ scale: 1.05 }}
            className="bg-white shadow-xl p-8 rounded-2xl border border-gray-200 hover:border-green-500 transition-all duration-300"
          >
            <div className="flex items-center gap-5">
              {service.icon}
              <h3 className="text-2xl font-semibold text-gray-800">
                {service.title}
              </h3>
            </div>

            <p className="mt-4 text-gray-600 text-sm leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
