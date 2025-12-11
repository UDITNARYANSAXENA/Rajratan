// components/Testimonials.jsx
import React from "react";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rajesh Mehta",
      company: "Sunrise Packaging Ltd.",
      text: "Their hazardous ink waste management saved us from heavy fines and improved our sustainability score. Truly professional and reliable partner.",
      rating: 5,
    },
    {
      name: "Priya Sharma",
      company: "AquaPure Beverages",
      text: "The wastewater recycling system they installed reduced our water consumption by 40%. Outstanding service and technical expertise!",
      rating: 5,
    },
    {
      name: "Vikram Singh",
      company: "ColorPrint Industries",
      text: "Best decision we made was partnering with them for solid waste and ink waste disposal. On-time collection, proper documentation, zero hassle.",
      rating: 5,
    },
    {
      name: "Anita Desai",
      company: "GreenChem Pharmaceuticals",
      text: "They helped us achieve waste minimization goals ahead of schedule. Their consulting + execution approach is world-class.",
      rating: 5,
    },
  ];

  return (
    <div className="py-20 bg-white">
      <h2 className="text-4xl font-extrabold text-center text-green-700 mb-12">
        What Our Clients Say
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-6xl mx-auto">
        {testimonials.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
            className="bg-gray-50 border border-gray-200 rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:border-green-500 transition-all duration-300 relative"
          >
            <Quote className="absolute top-6 right-6 w-12 h-12 text-green-200 opacity-50" />

            <div className="flex mb-4">
              {[...Array(item.rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
              ))}
            </div>

            <p className="text-gray-700 italic text-lg leading-relaxed mb-6">
              "{item.text}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-600 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                {item.name.split(" ").map((n) => n[0]).join("")}
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 text-lg">
                  {item.name}
                </h4>
                <p className="text-sm text-gray-600">{item.company}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}