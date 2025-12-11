// pages/WhatsNew.jsx → ULTRA PREMIUM VERSION
import React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Trophy, 
  Lightbulb, 
  Globe, 
  Users, 
  ChevronRight, 
  MapPin,
  Clock,
  Award,
  Sparkles
} from "lucide-react";

const updates = [
  {
    type: "exhibition",
    title: "WasteTech India 2025",
    date: "12–14 March 2025",
    location: "Bombay Exhibition Centre, Mumbai",
    desc: "Showcasing our latest Zero Liquid Discharge & Bio-CNG plants. Visit us at Stall A-17!",
    image: "/api/placeholder/800/500",
    highlight: true
  },
  {
    type: "innovation",
    title: "Launched AI-Powered Waste Sorting Robot",
    date: "January 2025",
    desc: "India’s first fully autonomous robotic system that sorts 98% accuracy using computer vision & machine learning.",
    features: ["50 tons/hour capacity", "99.9% uptime", "Reduces manual labor by 80%"],
    highlight: true
  },
  {
    type: "award",
    title: "National Energy Conservation Award 2024",
    date: "14 December 2024",
    desc: "Received from Hon’ble President of India for excellence in waste-to-energy conversion.",
    winner: "Rajratan Green Solutions Pvt Ltd"
  },
  {
    type: "event",
    title: "PlastIndia 2025",
    date: "6–10 February 2025",
    location: "Pragati Maidan, New Delhi",
    desc: "Presenting our Hazardous Ink Waste Recycling Technology. Live demo of solvent recovery unit."
  },
  {
    type: "csr",
    title: "Adopted 50 Villages for 100% Waste Segregation",
    date: "Ongoing – 2024-2027",
    desc: "Under Swachh Bharat Mission, installed door-to-door collection & composting units in rural Maharashtra & Gujarat."
  },
  {
    type: "innovation",
    title: "Patented Plasma Gasification Technology",
    date: "November 2024",
    desc: "Converts non-recyclable plastic waste into syngas for power generation. First commercial plant commissioned in Indore."
  }
];

export default function WhatsNew() {
  const getTypeColor = (type) => {
    switch(type) {
      case "exhibition": return "from-purple-600 to-pink-600";
      case "innovation": return "from-emerald-600 to-green-600";
      case "award": return "from-yellow-500 to-amber-600";
      case "event": return "from-blue-600 to-cyan-600";
      case "csr": return "from-teal-600 to-emerald-600";
      default: return "from-gray-600 to-gray-700";
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case "exhibition": return Globe;
      case "innovation": return Lightbulb;
      case "award": return Trophy;
      case "event": return Calendar;
      case "csr": return Users;
      default: return Sparkles;
    }
  };

  return (
    <>
      {/* HERO – EPIC FULL SCREEN */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Animated Blobs */}
        <motion.div
          animate={{ x: [-100, 100, -100], y: [-50, 100, -50] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-0 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [100, -100, 100], y: [50, -100, 50] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-0 w-96 h-96 bg-green-600/30 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            What's New at
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-green-400 to-cyan-400">
              Rajratan Group
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-2xl md:text-3xl text-emerald-100 max-w-4xl mx-auto"
          >
            Latest Events • Groundbreaking Innovations • Awards • Sustainability Impact
          </motion.p>
        </div>
      </section>

      {/* UPDATES GRID – FULL WIDTH, MASSIVE CARDS */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-12">
            {updates.map((item, index) => {
              const Icon = getTypeIcon(item.type);
              const gradient = getTypeColor(item.type);

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`group relative bg-white rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-700 ${
                    item.highlight ? "ring-4 ring-emerald-500 ring-opacity-50" : ""
                  }`}
                >
                  {/* Highlight Badge */}
                  {item.highlight && (
                    <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-4 py-2 rounded-full text-sm font-bold flex items-center gap-2 shadow-lg">
                      <Sparkles className="w-4 h-4" />
                      Featured
                    </div>
                  )}

                  {/* Image Placeholder */}
                  <div className="relative h-64 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <div className="absolute inset-0 bg-gray-300 border-4 border-dashed border-gray-400 flex items-center justify-center">
                      {item.type === "award" ? 
                        <Trophy className="w-32 h-32 text-yellow-600" /> :
                        item.type === "innovation" ?
                        <Lightbulb className="w-32 h-32 text-emerald-600" /> :
                        <Calendar className="w-32 h-32 text-blue-600" />
                      }
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-8">
                      <p className="text-white text-xl font-bold">View Details</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 lg:p-10">
                    {/* Type Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`p-3 bg-gradient-to-br ${gradient} rounded-2xl shadow-lg`}>
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
                        {item.type === "csr" ? "CSR Initiative" : item.type}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-gray-800 mb-4 group-hover:text-emerald-700 transition-colors">
                      {item.title}
                    </h3>

                    {/* Date & Location */}
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-6">
                      {item.date && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{item.date}</span>
                        </div>
                      )}
                      {item.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{item.location}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                      {item.desc}
                    </p>

                    {/* Features (for innovation) */}
                    {item.features && (
                      <ul className="space-y-3 mb-8">
                        {item.features.map((feat, i) => (
                          <li key={i} className="flex items-center gap-3 text-gray-700">
                            <Award className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium">{feat}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* CTA */}
                    <motion.a
                      href="/contact"
                      whileHover={{ x: 10 }}
                      className="inline-flex items-center gap-3 text-emerald-600 font-bold text-lg group"
                    >
                      Know More
                      <ChevronRight className="w-6 h-6 group-hover:translate-x-3 transition-transform duration-300" />
                    </motion.a>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA – MASSIVE */}
      <section className="py-32 bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 max-w-5xl mx-auto text-center px-6">
          <motion.h2
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black mb-10 leading-tight"
          >
            Be Part of the
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              Future of Sustainability
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-emerald-100 mb-16"
          >
            Meet us at the next exhibition or invite us for a free consultation
          </motion.p>

          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-16 py-8 bg-white text-emerald-800 font-black text-2xl rounded-full shadow-2xl hover:shadow-emerald-400/50 transition-all flex items-center justify-center gap-4"
            >
              Book Meeting at Exhibition
              <Calendar className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="tel:+91 96859 27927"
              whileHover={{ scale: 1.05 }}
              className="px-16 py-8 border-4 border-white font-black text-2xl rounded-full hover:bg-white hover:text-emerald-800 transition-all"
            >
              Call: +91 96859 27927
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}