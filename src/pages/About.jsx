import { motion } from "framer-motion";
import { 
  Award, 
  Globe, 
  Users, 
  Factory, 
  TrendingUp, 
  Shield, 
  HeartHandshake,
  ChevronRight,
  Quote,
  Zap, // For Green Technology/Innovation
  Recycle, // For Recycling Focus
  Tractor, // For Original Irrigation Focus
  Leaf, // For Nature/Green Products
  Trophy, // For Achievements
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

// Placeholder client logos - replace with real ones relevant to Waste Management/Pharma/FMCG/etc.
// Retaining original placeholders for structure, but they should be replaced by the user.
import client1 from "../assets/Patanjali-logo.webp"; 
import client2 from "../assets/images.png"; 
import client3 from "../assets/images (1).png"; 
import client4 from "../assets/ITC.jpg"; 
import client5 from "../assets/Skypack.png"; 
import client6 from "../assets/banknot.jpg"; 

export default function AboutUs() {
  // --- UPDATED DATA BASED ON THE PROVIDED HISTORY ---
  
  // 1. Stats reflecting the current Waste Management/Recycling focus
  const stats = [
    { icon: Recycle, value: "30+", label: "Years of Green Innovation" }, // 2025 - 1994 = 31
    { icon: Leaf, value: "7R", label: "Guiding Philosophy" }, // The 7R philosophy
    { icon: Factory, value: "4x", label: "Capacity Increased (2023)" },
    { icon: Zap, value: "Zero", label: "Carbon Emission Tech" }, // 2025 recycling apparatus
  ];

  // 2. Timeline reflecting the key company milestones
  const timeline = [
    { 
      year: "1994", 
      title: "The Foundation: Irrigation", 
      desc: "Shri Ashok Kumar Jain founded Rajratan Irrigation Pvt. Ltd. to promote water conservation and introduce modern systems like Rigid PVC Pipes & Sprinkler Irrigation.",
      icon: Tractor
    },
    { 
      year: "2001", 
      title: "Guardian of Nature (i)", 
      desc: "Rajratan Technique & Technology (P) Ltd was founded, marking the pivot to waste recycling and clean technology, focusing on complex waste like Multilayer Flexible Printing Waste.",
      icon: Shield
    },
    { 
      year: "2002", 
      title: "The 7R Philosophy", 
      desc: "Rajratan Concept was founded as a consultancy, formalizing the Group’s guiding 7R philosophy: Research, Renovate, Recharge, Reduce, Reuse, Recycle, and Recover.",
      icon: Globe
    },
    { 
      year: "2005", 
      title: "Integrated Waste Management", 
      desc: "Rajratan Green Environment Concept (RGEC) established to manage Industrial Packaging, Used Tyre & E-Waste, focusing on Research, Recover, and Recycle practices.",
      icon: Factory
    },
    { 
      year: "2023", 
      title: "Capacity Expansion", 
      desc: "Commissioning of a new state-of-the-art manufacturing facility in Pithampur, significantly enhancing total production capacity by 4x.",
      icon: TrendingUp
    },
    { 
      year: "2025", 
      title: "Advanced Pharma Recycling", 
      desc: "Introduction of a cutting-edge recycling apparatus for pre- and post-consumer pharmaceutical packaging waste, incorporating magnetic separator and zero-carbon emission process.",
      icon: Trophy
    },
  ];

  // 3. Core Values (keeping the abstract ones but ensuring they align with the new focus)
  const values = [
    { icon: Shield, title: "Stewardship", desc: "Serving as 'Guardian of Nature' through responsible resource management." },
    { icon: Recycle, title: "Circular Innovation", desc: "Developing cleaner, proprietary technologies for waste-to-useful-product conversion." },
    { icon: HeartHandshake, title: "Partnership", desc: "Delivering end-to-end, industry-specific waste management solutions to clients." },
  ];

  // 4. Testimonials (using original placeholders)
  const testimonials = [
    { name: "Mr. Vikram Singh", role: "CEO, Apex Industries", text: "Rajratan has been our trusted partner for 15 years. Their precision and on-time delivery are unmatched.", rating: 5 },
    { name: "Dr. Anita Sharma", role: "Procurement Head, GlobalTech Ltd.", text: "The quality consistency and sustainable practices make Rajratan our first choice every time.", rating: 5 },
    { name: "Rajesh Patel", role: "Director, SteelForge Corp", text: "From prototype to mass production — they've exceeded expectations every single time.", rating: 5 },
  ];

  // 5. Clients (using original placeholders)
  const clients = [client1, client2, client3, client4, client5, client6];
  // --------------------------------------------------

  return (
    <>
      {/* Hero Section - The Guardian of Nature Theme */}
      <section className="relative bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-emerald-500/30 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-green-400/20 rounded-full blur-3xl"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-7xl mx-auto px-6 py-32 text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Guardians of Nature,
            <br />
            <span className="text-emerald-300">Pioneers of Circularity</span>
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            Since 1994, the Rajratan Group has evolved from water conservation into a leader in sustainable waste management, driven by our revolutionary **7R Philosophy**.
          </p>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <div className="bg-emerald-800 py-12">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center text-white"
            >
              <stat.icon className="w-12 h-12 mx-auto mb-3 text-emerald-300" />
              <div className="text-4xl font-bold">{stat.value}</div>
              <div className="text-green-200">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Company Overview - Focusing on Waste Management and 7R */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
              The Power of the
              <span className="text-emerald-600"> 7R Philosophy</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              Our journey began with a focus on resource efficiency in agriculture (1994). This led to the formation of the 'i' (Guardian of Nature) concept in 2001 and the creation of our holistic, proprietary framework: **Research, Renovate, Recharge, Reduce, Reuse, Recycle, and Recover.**
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              Today, this philosophy guides our end-to-end waste management solutions for complex industrial, packaging, and E-Waste, transforming waste into valuable end products with cleaner, specialized technology.
            </p>
            <motion.a
              href="https://rajratan.in/Concept-Tools" // Linking to the 7R page
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 10 }}
              className="inline-flex items-center mt-8 text-emerald-600 font-bold text-lg group"
            >
              Discover the 7R in Detail
              <ChevronRight className="ml-2 w-6 h-6 group-hover:translate-x-2 transition" />
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-emerald-600 to-green-600 rounded-3xl p-8 shadow-2xl">
              {/* Image related to recycling or 7R diagram */}
              <img src="/api/placeholder/600/500" alt="The 7R Cycle Diagram" className="rounded-2xl shadow-xl" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-3xl flex items-end p-8">
                <p className="text-white text-xl font-semibold">Our Integrated Waste Management Cycle</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* History Timeline - Now accurate and detailed */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-800">Our Evolution</h2>
            <p className="text-xl text-gray-600 mt-4">From Water Conservation to Waste Circularity</p>
          </motion.div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-emerald-200 h-full"></div>
            {timeline.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className={`relative flex items-center mb-12 ${i % 2 === 0 ? "justify-start" : "justify-end"}`}
              >
                <div className={`w-5/12 ${i % 2 === 0 ? "text-right pr-12" : "text-left pl-12"}`}>
                  <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100">
                    <div className="text-3xl font-bold text-emerald-600">{item.year}</div>
                    <h3 className="text-2xl font-bold text-gray-800 mt-2">{item.title}</h3>
                    <p className="text-gray-600 mt-3">{item.desc}</p>
                  </div>
                </div>
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 bg-emerald-600 rounded-full border-8 border-white shadow-lg flex items-center justify-center">
                   <item.icon className="w-6 h-6 text-white" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values - Now reflecting 'Guardian of Nature' focus */}
      <section className="py-24 bg-gradient-to-r from-emerald-900 to-green-800 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-16">Our Guiding Principles</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20"
              >
                <value.icon className="w-16 h-16 mx-auto mb-6 text-emerald-300" />
                <h3 className="text-3xl font-bold mb-4">{value.title}</h3>
                <p className="text-green-100 text-lg">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Portfolio - (Placeholder Section) */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold text-gray-800 mb-4">Trusted Partner in Sustainability</h2>
          <p className="text-xl text-gray-600 mb-16">Working with leaders in Pharma, FMCG, and Manufacturing across India.</p>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 items-center opacity-70 grayscale hover:grayscale-0 transition-all">
            {clients.map((logo, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, filter: "grayscale(0%)" }}
                className="bg-white p-8 rounded-2xl shadow-lg"
              >
                <img src={logo} alt="Client" className="h-20 mx-auto object-contain" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - (Placeholder Section) */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-5xl font-bold text-center text-gray-800 mb-16">Client Success Stories</h2>
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
            pagination={{ clickable: true }}
            breakpoints={{ 768: { slidesPerView: 2 } }}
            className="pb-12"
          >
            {testimonials.map((t, i) => (
              <SwiperSlide key={i}>
                <motion.div
                  whileHover={{ y: -10 }}
                  className="bg-gradient-to-br from-emerald-50 to-green-50 p-10 rounded-3xl shadow-xl border border-emerald-100"
                >
                  <Quote className="w-12 h-12 text-emerald-600 mb-6" />
                  <p className="text-xl text-gray-700 italic mb-8">"{t.text}"</p>
                  <div>
                    <p className="font-bold text-gray-800">{t.name}</p>
                    <p className="text-emerald-600">{t.role}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}