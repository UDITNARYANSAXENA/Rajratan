// components/ProductShowcase.jsx
import React from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ProductShowcase() {
  const products = [
    {
      title: "Pallets",
      image: "http:pallet",
      items: [
        "Pallets for Bricks, Blocks & Pavers",
        "Dunnage Pallets",
        "Fork Lift Pallets",
      ],
      color: "from-green-600 to-emerald-600",
    },
    {
      title: "Ready-Made Septic Tank",
      image: "httpseptic",
      color: "from-blue-600 to-cyan-600",
    },
    {
      title: "Flight Cases",
      image: "httpflight",
      color: "from-purple-600 to-fuchsia-600",
    },
    {
      title: "Doors / Windows",
      image: "httpdoor",
      color: "from-orange-600 to-yellow-500",
    },
    {
      title: "Shuttering Scaffolding",
      image: "httpshutter",
      color: "from-rose-600 to-red-600",
    },
    {
      title: "Security Huts & Sheds",
      image: "httphut",
      color: "from-teal-600 to-green-500",
    },
    {
      title: "Eco Planters",
      image: "httpplanters",
      color: "from-lime-600 to-green-500",
    },
  ];

  return (
    <div className="py-20">
      <h2 className="text-4xl font-extrabold mb-10 text-center text-green-700">
        Our Products
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-7xl mx-auto">
        {products.map((product) => (
          <motion.div
            key={product.title}
            whileHover={{ scale: 1.05 }}
            className="rounded-2xl shadow-xl overflow-hidden bg-white"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>

            {/* Text Content */}
            <div className="p-6">
              <h3 className="text-2xl font-bold text-gray-800">
                {product.title}
              </h3>

              {/* sub-items */}
              {product.items && (
                <ul className="mt-3 space-y-2 text-gray-600 text-sm">
                  {product.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2 hover:text-green-600 transition"
                    >
                      <ChevronRight className="w-4 h-4" />
                      {item}
                    </li>
                  ))}
                </ul>
              )}

              {/* Button */}
              <motion.a
                href="#"
                whileHover={{ x: 5 }}
                className={`inline-block mt-5 px-5 py-2 rounded-lg text-white font-semibold bg-gradient-to-r ${product.color} shadow-lg`}
              >
                View Details
              </motion.a>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
