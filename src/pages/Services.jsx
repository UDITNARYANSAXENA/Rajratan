// pages/Services.jsx  →  ULTRA PREMIUM VERSION
import React from "react";
import { motion } from "framer-motion";
import { 
  Recycle, 
  Droplets, 
  AlertTriangle, 
  Leaf, 
  CheckCircle2, 
  ChevronRight,
  ShieldCheck,
  Globe,
  Factory,
  Zap,
  Award,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Solid Waste Management",
    icon: Recycle,
    desc: "Complete lifecycle management of municipal and industrial solid waste — from collection to zero landfill disposal using scientific and sustainable methods.",
    features: ["Zero Waste to Landfill Plants", "Advanced MRF Setup", "Bio-CNG & RDF Production", "100% SWM Rules 2016 Compliant"],
    gradient: "from-emerald-600 to-green-600",
    hoverGradient: "from-emerald-500 to-green-500",
    iconBg: "bg-emerald-600"
  },
  {
    title: "Waste Water Management",
    icon: Droplets,
    desc: "Cutting-edge STP, ETP & Zero Liquid Discharge systems with advanced biological and membrane technologies for complete water recycling.",
    features: ["MBBR | SBR | MBR | ZLD", "Water Reuse for Non-Potable Needs", "CPCB/SPCB Approved Designs", "IoT-Based Remote Monitoring"],
    gradient: "from-blue-600 to-cyan-600",
    hoverGradient: "from-blue-500 to-cyan-500",
    iconBg: "bg-blue-600"
  },
  {
    title: "Hazardous Ink Waste Management",
    icon: AlertTriangle,
    desc: "Authorized handling, transportation, treatment & disposal of hazardous ink sludge and solvent waste from printing & packaging industries.",
    features: ["Incineration & Co-Processing", "Solvent Recovery Units", "Form-13 & Manifest Compliance", "Pan-India Doorstep Collection"],
    gradient: "from-amber-600 to-orange-600",
    hoverGradient: "from-amber-500 to-orange-500",
    iconBg: "bg-amber-600"
  },
  {
    title: "Waste Minimization & Circular Economy",
    icon: Leaf,
    desc: "Transforming waste into wealth through process optimization, material recovery, and implementing circular economy models for industries.",
    features: ["Waste Audit & Minimization Plans", "By-Product Synergy Projects", "Carbon Credit Consulting", "ISO 14001 & GRI Reporting Support"],
    gradient: "from-green-600 to-emerald-700",
    hoverGradient: "from-green-500 to-emerald-600",
    iconBg: "bg-green-600"
  }
];

export default function Services() {
  return (
    <>
      {/* HERO – CINEMATIC FULL SCREEN */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated Background Blobs */}
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-0 -left-40 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -90, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-0 -right-40 w-96 h-96 bg-green-600/30 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            Tomorrow Starts
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              With Responsibility
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="text-2xl md:text-3xl text-emerald-100 max-w-5xl mx-auto leading-relaxed mb-12"
          >
            India’s most trusted partner for sustainable waste management & environmental compliance
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="flex flex-wrap justify-center gap-6 text-lg"
          >
            {["CPCB Authorized", "ISO 9001 & 14001", "500+ Projects", "20+ Years Excellence"].map((badge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + i * 0.1 }}
                className="flex items-center gap-3 bg-white/10 backdrop-blur-lg px-8 py-4 rounded-full border border-white/20"
              >
                <CheckCircle2 className="w-6 h-6 text-emerald-400" />
                <span>{badge}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID – FULL BLEED, MASSIVE CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="group relative bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-700 border border-gray-100"
                >
                  {/* Gradient Hover Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
                  
                  {/* Image Placeholder */}
                  <div className="relative h-96 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 border-4 border-dashed border-gray-400 flex items-center justify-center">
                      <Factory className="w-32 h-32 text-gray-500" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex items-end p-10">
                      <p className="text-white text-2xl font-bold">View Real Projects →</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="relative p-10 lg:p-12">
                    <div className="flex items-center gap-6 mb-8">
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 360 }}
                        transition={{ duration: 0.6 }}
                        className={`p-6 ${service.iconBg} rounded-3xl shadow-2xl`}
                      >
                        <Icon className="w-12 h-12 text-white" />
                      </motion.div>
                      <h3 className="text-4xl font-black text-gray-800 group-hover:text-white transition-colors duration-500">
                        {service.title}
                      </h3>
                    </div>

                    <p className="text-xl text-gray-600 group-hover:text-gray-100 transition-colors duration-500 leading-relaxed mb-10">
                      {service.desc}
                    </p>

                    <ul className="space-y-5 mb-12">
                      {service.features.map((feat, i) => (
                        <motion.li
                          key={i}
                          initial={{ opacity: 0, x: -30 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-4 text-lg"
                        >
                          <CheckCircle2 className="w-7 h-7 text-emerald-500 flex-shrink-0" />
                          <span className="text-gray-700 group-hover:text-white transition-colors duration-500 font-medium">
                            {feat}
                          </span>
                        </motion.li>
                      ))}
                    </ul>

                    <motion.a
                      href="/contact"
                      whileHover={{ x: 20 }}
                      className="inline-flex items-center gap-4 text-emerald-600 group-hover:text-white font-bold text-xl group"
                    >
                      Get Free Consultation
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL EPIC CTA */}
      <section className="py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-10 leading-tight"
          >
            Let's Build a
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Greener India Together
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-emerald-100 mb-16 max-w-4xl mx-auto"
          >
            One plant. One industry. One step at a time.
          </motion.p>

          <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-white text-emerald-800 font-black text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/50 transition-all duration-300 flex items-center gap-4"
            >
              Request Site Audit (Free)
              <Zap className="w-10 h-10" />
            </motion.a>

            <motion.a
              href="tel:+91 96859 27927"
              whileHover={{ scale: 1.05 }}
              className="px-16 py-8 border-4 border-white font-black text-2xl rounded-full hover:bg-white hover:text-emerald-800 transition-all duration-300"
            >
              Call Now: +91 96859 27927
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}