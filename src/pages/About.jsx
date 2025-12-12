// pages/AboutUs.jsx → Fully Working, Ultra Premium Version (Same as Products/Services)
import React from "react";
import { motion } from "framer-motion";
import { 
  Recycle, 
  Leaf, 
  Trophy, 
  Zap, 
  Shield, 
  HeartHandshake, 
  Globe, 
  Factory, 
  TrendingUp,
  CheckCircle2,
  ChevronRight
} from "lucide-react";

// Replace these paths with your actual logo paths or use direct URLs
import client1 from "../assets/Patanjali-logo.webp";
import client2 from "../assets/images.png";
import client3 from "../assets/images (1).png";
import client4 from "../assets/ITC.jpg";
import client5 from "../assets/Skypack.png";
import client6 from "../assets/banknot.jpg";

const stats = [
  { icon: Recycle, value: "30+", label: "Years of Excellence" },
  { icon: Leaf, value: "7R", label: "Philosophy" },
  { icon: Factory, value: "500+", label: "Clients Served" },
  { icon: Trophy, value: "4x", label: "Capacity Growth 2023" },
];

const journey = [
  {
    year: "1994",
    title: "Foundation Year",
    desc: "Started with water conservation & modern irrigation systems (Rigid PVC Pipes & Sprinklers)",
    icon: Globe
  },
  {
    year: "2001",
    title: "Green Technology Pivot",
    desc: "Entered industrial waste recycling clean technology domain",
    icon: Recycle
  },
  {
    year: "2002",
    title: "7R Philosophy Born",
    desc: "Formalized our unique 7R Framework: Research, Renovate, Recharge, Reduce, Reuse, Recycle, Recover",
    icon: Leaf
  },
  {
    year: "2005",
    title: "Integrated Waste Solutions",
    desc: "Launched end-to-end industrial packaging, tyre e-waste management",
    icon: Factory
  },
  {
    year: "2023",
    title: "Massive Expansion",
    desc: "New 4x capacity state-of-the-art facility in Pithampur, MP",
    icon: TrendingUp
  },
  {
    year: "2025",
    title: "Zero-Carbon Future",
    desc: "Launching advanced pharmaceutical packaging recycling with zero emissions",
    icon: Zap
  },
];

const values = [
  {
    icon: Shield,
    title: "Stewardship",
    desc: "Guardian of Nature – We take responsibility for tomorrow, today."
  },
  {
    icon: Recycle,
    title: "Circular Innovation",
    desc: "Turning complex industrial waste into high-value reusable products."
  },
  {
    icon: HeartHandshake,
    title: "True Partnership",
    desc: "Long-term, transparent, industry-specific sustainable solutions."
  },
];

const clients = [client1, client2, client3, client4, client5, client6];

export default function AboutUs() {
  return (
    <>
      {/* Hero Section – Same as Products & Services */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 text-center"
        >
          <h1 className="text-5xl md:text-6xl md:text-7xl font-bold mb-6 leading-tight">
            About Rajratan Group
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-5xl mx-auto leading-relaxed">
            From water conservation pioneers in 1994 to India’s leading circular economy champion — 
            powered by innovation, responsibility, and our revolutionary <span className="font-bold text-emerald-300">7R Philosophy</span>.
          </p>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-emerald-800">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="text-center text-white"
              >
                
                <Icon className="w-16 h-16 mx-auto mb-4 text-emerald-300" />
                <div className="text-4xl md:text-5xl font-black">{stat.value}</div>
                <p className="text-green-200 text-sm md:text-base mt-2">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Journey Timeline – Card Grid Style (Same as Products) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Journey</h2>
            <p className="text-xl text-gray-600 mt-4">30+ Years of Sustainable Innovation</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {journey.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  <div className="relative h-64 bg-gradient-to-br from-emerald-100 to-green-100 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 border-2 border-dashed border-gray-400 rounded-t-3xl flex items-center justify-center">
                      <Icon className="w-20 h-20 text-gray-400" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>

                  <div className="p-8">
                    <span className="text-3xl font-bold text-emerald-600 block mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Core Values – Same Card Style */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800">Our Core Values</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {values.map((value, i) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="group bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-gray-100 p-10 text-center"
                >
                  <div className="p-4 bg-emerald-100 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                    <Icon className="w-12 h-12 text-emerald-600 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Trusted Clients */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-gray-600 mb-12">FMCG • Pharma • Packaging • Manufacturing</p>

          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {clients.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.15 }}
                className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300"
              >
                <img 
                  src={logo} 
                  alt="Trusted Client"
                  className="h-16 md:h-20 mx-auto object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA – Same as Products & Services */}
      <section className="py-24 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Build a Greener Tomorrow?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Join 500+ industries already partnered with Rajratan for sustainable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-emerald-800 font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-300 transition"
            >
              Get Free Consultation
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