// pages/Services.jsx → अब बिल्कुल Products.jsx जैसा ही प्रीमियम लुक
import React from "react";
import { motion } from "framer-motion";
import { 
  Recycle, 
  Droplets, 
  AlertTriangle, 
  Leaf, 
  Package,
  CheckCircle2, 
  ChevronRight
} from "lucide-react";

const services = [
  {
    title: "Solid Waste Management",
    icon: Recycle,
    desc: "Complete lifecycle management of municipal and industrial solid waste — from collection to zero landfill disposal using scientific and sustainable methods.",
    features: [
      "Zero Waste to Landfill Plants",
      "Advanced MRF Setup",
      "Bio-CNG & RDF Production",
      "100% SWM Rules 2016 Compliant"
    ]
  },
  {
    title: "Waste Water Management",
    icon: Droplets,
    desc: "Cutting-edge STP, ETP & Zero Liquid Discharge systems with advanced biological and membrane technologies for complete water recycling.",
    features: [
      "MBBR | SBR | MBR | ZLD",
      "Water Reuse for Non-Potable Needs",
      "CPCB/SPCB Approved Designs",
      "IoT-Based Remote Monitoring"
    ]
  },
  {
    title: "Hazardous Ink Waste Management",
    icon: AlertTriangle,
    desc: "Authorized handling, transportation, treatment & disposal of hazardous ink sludge and solvent waste from printing & packaging industries.",
    features: [
      "Incineration & Co-Processing",
      "Solvent Recovery Units",
      "Form-13 & Manifest Compliance",
      "Pan-India Doorstep Collection"
    ]
  },
  {
    title: "Waste Minimization & Circular Economy",
    icon: Leaf,
    desc: "Transforming waste into wealth through process optimization, material recovery, and implementing circular economy models for industries.",
    features: [
      "Waste Audit & Minimization Plans",
      "By-Product Synergy Projects",
      "Carbon Credit Consulting",
      "ISO 14001 & GRI Reporting Support"
    ]
  }
];

export default function Services() {
  return (
    <>
      {/* Hero Section – बिल्कुल Products जैसा */}
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
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto mt-4">
            End-to-end sustainable waste management & environmental compliance solutions trusted by 500+ industries across India.
          </p>
        </motion.div>
      </section>

      {/* Services Grid – EXACT SAME CARD STYLE AS PRODUCTS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Image Placeholder – बिल्कुल Products वाला */}
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-green-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 border-2 border-dashed border-gray-400 rounded-t-3xl flex items-center justify-center">
                      <Package className="w-20 h-20 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <div className="absolute bottom-4 left-4 text-white opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      <p className="text-sm font-medium">Click to view projects</p>
                    </div>
                  </div>

                  {/* Content – 1:1 Products के साथ */}
                  <div className="p-8">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-600 transition-colors duration-300">
                        <Icon className="w-8 h-8 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-gray-600 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, i) => (
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
                      Get Free Consultation
                      <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section – Products वाला ही */}
      <section className="py-24 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Go Green & Compliant?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Zero waste. Zero discharge. Zero worries — हम आपकी पूरी जिम्मेदारी लेते हैं।
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-emerald-800 font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-300 transition"
            >
              Request Free Site Audit
            </motion.a>
            <motion.a
              href="tel:+919685927927"
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