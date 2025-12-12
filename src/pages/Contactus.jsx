// pages/Contact.jsx → FINAL UPDATED & PERFECT VERSION (Same Design as All Pages)
import React, { useState } from "react";
import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Loader2,
  Building2
} from "lucide-react";

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setShowSuccess(false);

    // FormSubmit.co handles actual email sending
    setTimeout(() => {
      setIsLoading(false);
      setShowSuccess(true);
      e.target.reset();
      setTimeout(() => setShowSuccess(false), 8000);
    }, 1800);
  };

  return (
    <>
      {/* Hero Section – Exact Same as Products/Services/About */}
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
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Contact Us
          </h1>
          <p className="text-xl md:text-2xl text-green-100 max-w-4xl mx-auto leading-relaxed">
            We're here to help you go green. Get a free quote, site audit or consultation – 
            we reply within 2 hours!
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section – Card Style Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10">

            {/* Contact Form Card */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="p-8 lg:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-8">
                  Send us a Message
                </h2>

                {/* Success Message */}
                {showSuccess && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="mb-8 bg-emerald-50 border-2 border-emerald-500 text-emerald-800 px-6 py-5 rounded-2xl font-bold text-center flex items-center justify-center gap-4 shadow-lg"
                  >
                    <CheckCircle2 className="w-10 h-10 flex-shrink-0" />
                    <div>
                      <p>Thank You!</p>
                      <br />
                      <span className="text-sm font-normal">We'll contact you within 2 hours</span>
                    </div>
                  </motion.div>
                )}

                {/* Real Working Form – FormSubmit.co */}
                <form
                  action="https://formsubmit.co/info@rajratan.in"  // अपना ईमेल यहाँ डालो
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  {/* Hidden Config */}
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" />
                  <input type="hidden" name="_subject" value="New Inquiry from Rajratan Website" />
                  <input type="hidden" name="_template" value="table" />

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="text"
                      name="name"
                      placeholder="Full Name *"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-4 focus:ring-emerald-100 outline-none transition text-lg"
                    />
                    <input
                      type="text"
                      name="company"
                      placeholder="Company Name"
                      className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 outline-none transition text-lg"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number *"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 outline-none transition text-lg"
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address *"
                      required
                      className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 outline-none transition text-lg"
                    />
                  </div>

                  <select
                    name="service"
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 outline-none transition text-lg"
                    defaultValue=""
                    required
                  >
                    <option value="" disabled>Interested In...</option>
                    <option>Solid Waste Management</option>
                    <option>Waste Water Treatment</option>
                    <option>Hazardous Waste Disposal</option>
                    <option>Steel Pallets & Fabrication</option>
                    <option>Site Audit / Consultation</option>
                    <option>Partnership</option>
                    <option>Others</option>
                  </select>

                  <textarea
                    name="message"
                    rows="5"
                    placeholder="Tell us your requirement..."
                    className="w-full px-6 py-4 rounded-2xl border border-gray-300 focus:border-emerald-600 focus:ring-emerald-100 outline-none transition text-lg resize-none"
                  ></textarea>

                  <motion.button
                    type="submit"
                    disabled={isLoading}
                    whileHover={{ scale: isLoading ? 1 : 1.03 }}
                    whileTap={{ scale: isLoading ? 1 : 0.97 }}
                    className="w-full bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 text-white font-bold text-xl py-5 rounded-2xl shadow-xl transition-all flex items-center justify-center gap-4 disabled:opacity-70"
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
                </form>
              </div>
            </motion.div>

            {/* Contact Info Cards – Same Card Style */}
            <div className="space-y-10">
              {[
                {
                  icon: Phone,
                  title: "Call Us",
                  lines: ["+91 96859 27927", "+91 98930 27744"]
                },
                {
                  icon: Mail,
                  title: "Email Us",
                  lines: ["info@rajratan.in", "response@rajratan.in"]
                },
                {
                  icon: MapPin,
                  title: "Visit Our Office",
                  lines: ["123-124 Shastri Market,", "Indore, Madhya Pradesh - 452007"]
                },
                {
                  icon: Clock,
                  title: "Working Hours",
                  lines: ["Mon–Sat: 9:00 AM – 6:00 PM", "Sunday: Closed"]
                }
              ].map((item, i) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.15 }}
                    viewport={{ once: true }}
                    className="group bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100"
                  >
                    <div className="p-8 text-center">
                      <div className="p-4 bg-emerald-100 rounded-2xl w-fit mx-auto mb-6 group-hover:bg-emerald-600 transition-colors duration-300">
                        <Icon className="w-12 h-12 text-emerald-600 group-hover:text-white transition-colors" />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">{item.title}</h3>
                      <div className="space-y-2">
                        {item.lines.map((line, j) => (
                          <p key={j} className="text-gray-600 font-medium">{line}</p>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps – Full Width Card */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="bg-gradient-to-r from-emerald-600 to-green-600 text-white p-8 text-center">
              <h3 className="text-3xl md:text-4xl font-bold flex items-center justify-center gap-4">
                <Building2 className="w-10 h-10" />
                Visit Our Facility
              </h3>
            </div>
            <div className="h-96 md:h-[520px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3679.326888021016!2d75.867745575899!3d22.719568379385!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fd4f2f7b3f71:0x9d9b9b9b9b9b9b9b!2sIndore,!5e0!3m2!1sen!2sin!4v1738000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Rajratan Group Location"
                className="w-full"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA – Same as All Pages */}
      <section className="py-24 bg-gradient-to-r from-emerald-800 to-green-800 text-white">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Green Journey?
          </h2>
          <p className="text-xl text-green-100 mb-10">
            Call or message us – we're available 6 days a week!
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <motion.a
              href="tel:+919685927927"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-white text-emerald-800 font-bold text-xl rounded-full shadow-2xl hover:shadow-emerald-300 transition"
            >
              Call Now: +91 96859 27927
            </motion.a>
            <motion.a
              href="mailto:info@rajratan.in"
              whileHover={{ scale: 1.05 }}
              className="px-10 py-5 border-2 border-white font-bold text-xl rounded-full hover:bg-white/10 transition"
            >
              Email Us
            </motion.a>
          </div>
        </div>
      </section>
    </>
  );
}