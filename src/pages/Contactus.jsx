// pages/Contact.jsx → FINAL VERSION WITH REAL EMAIL (FormSubmit.co)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, Mail, MapPin, Clock, Facebook, Linkedin, Youtube, Instagram,
  Send, Building2, CheckCircle2, Loader2
} from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    setIsLoading(true);
    setShowSuccess(false);

    // Simulate sending (FormSubmit handles actual sending)
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 7000);
    }, 1500);
  };

  return (
    <>
      {/* HERO – FULL SCREEN */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/50"></div>
        
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.2, 1, 1.2], rotate: [0, -180, -360] }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 bg-green-600/30 rounded-full blur-3xl"
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl font-black mb-8 leading-tight"
          >
            Let's Connect
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-400">
              We're Here to Help
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-2xl md:text-3xl text-emerald-100 max-w-4xl mx-auto"
          >
            Get in touch for quotations, site visits, or partnership opportunities
          </motion.p>
        </div>
      </section>

      {/* MAIN CONTACT SECTION */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">

            {/* LEFT: CONTACT FORM WITH FORMSUBMIT */}
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-2xl p-10 lg:p-12 border border-gray-100"
            >
              <h2 className="text-4xl font-black text-gray-800 mb-8">Send us a Message</h2>

              {/* SUCCESS MESSAGE */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 bg-emerald-100 border-2 border-emerald-500 text-emerald-800 p-6 rounded-2xl font-bold text-center flex items-center justify-center gap-4 shadow-lg"
                >
                  <CheckCircle2 className="w-10 h-10" />
                  Thank You! Your message has been sent successfully. We will contact you within 2 hours!
                </motion.div>
              )}

              {/* FORM – USING FORMSUBMIT.CO (FREE & WORKING) */}
              <form
                action="https://formsubmit.co/info@rajratan.com"  // ← YAHAN APNA EMAIL DAAL DE
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-8"
              >
                {/* Hidden Fields for Better Email & Anti-Spam */}
                <input type="hidden" name="_next" value="https://yourwebsite.com/contact" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_subject" value="New Website Inquiry - Rajratan Group" />
                <input type="hidden" name="_template" value="table" />

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="John Doe"
                      className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      placeholder="ABC Industries Ltd"
                      className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Phone *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 98765 43210"
                      className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-3">Email *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="john@company.com"
                      className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Interested In</label>
                  <select
                    name="interest"
                    className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg"
                  >
                    <option value="">Select Service</option>
                    <option>Waste Water Treatment</option>
                    <option>Solid Waste Management</option>
                    <option>Hazardous Waste Solutions</option>
                    <option>Custom Fabrication</option>
                    <option>Partnership / Dealership</option>
                    <option>Others</option>
                  </select>
                </div>

                <div>
                  <label className="block text-gray-700 font-semibold mb-3">Message</label>
                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us about your requirement..."
                    className="w-full px-6 py-5 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 transition-all outline-none text-lg resize-none"
                  ></textarea>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  whileHover={{ scale: isLoading ? 1 : 1.05 }}
                  whileTap={{ scale: isLoading ? 1 : 0.95 }}
                  className="w-full py-6 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-black text-xl rounded-2xl shadow-2xl hover:shadow-emerald-500/50 transition-all duration-300 flex items-center justify-center gap-4 disabled:opacity-70"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-7 h-7 animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="w-7 h-7" />
                    </>
                  )}
                </motion.button>

                <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" />
                  We reply within 2 hours (9 AM – 6 PM)
                </p>
              </form>
            </motion.div>

            {/* RIGHT SIDE: CONTACT INFO + MAP + SOCIAL */}
            <div className="space-y-12">

              {/* Contact Cards */}
              <motion.div initial={{ opacity: 0, x: 80 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="grid md:grid-cols-2 gap-8">
                {[
                  { icon: Phone, title: "Call Us", details: ["+91 96859 27927", "+91 98930 27744"], color: "emerald" },
                  { icon: Mail, title: "Email Us", details: ["info@rajratan.in", "response@rajratan.in"], color: "blue" },
                  { icon: MapPin, title: "Factory & Office", details: ["1st floor 123-124, Shastri Market", "indore, Madhya Pradesh, 452007"], color: "purple" },
                  { icon: Clock, title: "Working Hours", details: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"], color: "amber" }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ y: -10 }} className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100 text-center group">
                    <div className={`inline-flex p-5 rounded-3xl bg-gradient-to-br from-${item.color}-500 to-${item.color}-600 text-white mb-6 shadow-lg group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                    {item.details.map((line, j) => (
                      <p key={j} className="text-gray-600 font-medium">{line}</p>
                    ))}
                  </motion.div>
                ))}
              </motion.div>

              {/* Google Maps */}
              <motion.div initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100">
                <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-6">
                  <h3 className="text-3xl font-black flex items-center gap-3">
                    <Building2 className="w-10 h-10" />
                    Visit Our Facility
                  </h3>
                </div>
                <div className="h-96">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.967052391582!2d73.912191614895!3d18.520430187403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c077e3b3e5a9%3A0x9d9b9b9b9b9b9b9b!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Rajratan Group Location"
                  ></iframe>
                </div>
              </motion.div>

              {/* Social Media */}
              <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.6 }} className="bg-gradient-to-r from-emerald-900 to-green-800 rounded-3xl p-10 text-white text-center">
                <h3 className="text-3xl font-black mb-8">Follow Our Journey</h3>
                <div className="flex justify-center gap-8">
                  {[
                    { icon: Facebook, link: "https://facebook.com/rajratangroup", color: "hover:bg-blue-600" },
                    { icon: Linkedin, link: "https://linkedin.com/company/rajratan", color: "hover:bg-blue-700" },
                    { icon: Youtube, link: "https://youtube.com/@rajratangroup", color: "hover:bg-red-600" },
                    { icon: Instagram, link: "https://instagram.com/rajratan_group", color: "hover:bg-pink-600" }
                  ].map((social, i) => (
                    <motion.a
                      key={i}
                      href={social.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                      className={`p-6 bg-white/20 backdrop-blur rounded-full ${social.color} transition-all shadow-xl`}
                    >
                      <social.icon className="w-10 h-10" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-7xl font-black mb-8">
            Ready to Start Your Project?
          </h2>
          <p className="text-2xl text-green-100 mb-12">
            Our team is waiting to assist you 24/7
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center">
            <motion.a
              href="tel:+91 96859 27927"
              whileHover={{ scale: 1.05 }}
              className="px-16 py-8 bg-white text-emerald-800 text-2xl font-black rounded-full shadow-2xl hover:shadow-emerald-400/50 transition-all flex items-center justify-center gap-4"
            >
              Call Now
              <Phone className="w-10 h-10" />
            </motion.a>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              className="px-16 py-8 border-4 border-white text-2xl font-black rounded-full hover:bg-white hover:text-emerald-800 transition-all"
            >
              Fill Form Again
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}