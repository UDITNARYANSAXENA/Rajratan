// pages/Products.jsx
import React from "react";
import { motion } from "framer-motion";
import { 
  Package, 
  Shield, 
  Truck, 
  Wrench, 
  Home, 
  Building2, 
  ChevronRight,
  CheckCircle2
} from "lucide-react";

const products = [
  {
    title: "Pallets for Bricks, Blocks & Pavers",
    icon: Package,
    desc: "Heavy-duty steel pallets designed for safe stacking and transportation of bricks, concrete blocks, fly ash bricks, and interlocking pavers. Built to withstand extreme loads and harsh weather conditions.",
    features: [
      "Load capacity up to 3000 kg",
      "Hot-dip galvanized for rust protection",
      "Stackable design saves 70% storage space",
      "Compatible with forklifts & cranes"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Dunnage Pallets",
    icon: Truck,
    desc: "Lightweight yet strong dunnage pallets ideal for separating and protecting materials during storage and transit. Widely used in AAC block and brick manufacturing units.",
    features: [
      "Custom sizes available",
      "Anti-slip surface",
      "Reusable for 10+ years",
      "Reduces material damage by 90%"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Fork Lift Pallets",
    icon: Wrench,
    desc: "Precision-engineered fork lift pallets with reinforced entry pockets for seamless handling. Designed for high-frequency use in automated plants.",
    features: [
      "4-way entry for forklifts",
      "Welded construction",
      "Powder-coated finish",
      "Zero maintenance design"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Ready-Made Septic Tanks",
    icon: Home,
    desc: "Pre-fabricated RCC septic tanks with leak-proof design. Easy to install, durable, and compliant with all pollution control board norms.",
    features: [
      "Available in 500–5000 liter capacity",
      "100% leak-proof joints",
      "Quick installation (1 day)",
      "20-year structural warranty"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Flight Cases & Equipment Cases",
    icon: Shield,
    desc: "Custom-built aluminum flight cases for industrial tools, machines, and sensitive equipment. Used by leading OEMs for safe transportation.",
    features: [
      "Military-grade protection",
      "Custom foam interiors",
      "Water & dust proof (IP67)",
      "TSA-approved locks"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Doors & Windows (Industrial Grade)",
    icon: Building2,
    desc: "Heavy-duty MS and GI doors/windows for factories, warehouses, and industrial sheds. Fire-rated and weather-resistant options available.",
    features: [
      "Fire-rated up to 120 minutes",
      "Powder-coated / galvanized",
      "Acoustic insulation options",
      "Panic bar & access control ready"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Shuttering Scaffolding Systems",
    icon: Wrench,
    desc: "Complete range of modular scaffolding and formwork systems for construction of buildings, bridges, and industrial structures.",
    features: [
      "H-frame, Cuplock & Ringlock systems",
      "IS-certified materials",
      "Load capacity up to 7 ton per leg",
      "Quick assembly design"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Security Huts & Sheds",
    icon: Shield,
    desc: "Pre-fabricated security cabins and portable sheds for factories, construction sites, and commercial complexes.",
    features: [
      "Insulated roof & walls",
      "Bulletproof glass option",
      "Air-conditioned variants",
      "Ready in 48 hours"
    ],
    image: "/api/placeholder/600/400"
  },
  {
    title: "Eco Planters & Green Solutions",
    icon: Home,
    desc: "Sustainable vertical gardening systems and large planters made from recycled steel. Perfect for factories aiming for green certification.",
    features: [
      "Made from 80% recycled steel",
      "Self-watering system",
      "Modular & expandable",
      "Supports LEED & IGBC points"
    ],
    image: "/api/placeholder/600/400"
  }
];

export default function Products() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Our Product Range
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto">
            Engineered for durability, precision, and sustainability — trusted by 1000+ factories across India.
          </p>
        </motion.div>
      </section>

      {/* Products Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product, index) => {
              const Icon = product.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-green-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 border-2 border-dashed border-gray-400 rounded-t-3xl flex items-center justify-center">
                      <Package className="w-20 h-20 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm font-medium">Click to view gallery</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-600 transition-colors">
                        <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {product.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {product.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {product.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <motion.a
                      href="/contact"
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center text-emerald-600 font-bold group"
                    >
                      Request Quote
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Need Custom Fabrication?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            We design and manufacture tailor-made industrial solutions as per your drawings and requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-emerald-800 font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-300 transition"
            >
              Get Custom Quote
            </motion.a>
            <motion.a
              href="tel:+91 96859 27927"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 border-2 border-white font-bold text-xl rounded-full hover:bg-white/10 transition"
            >
              Call Now: +91 96859 27927
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}