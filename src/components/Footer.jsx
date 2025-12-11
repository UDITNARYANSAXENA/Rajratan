import React from "react";
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import logo from "../assets/Logo.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "What's New", href: "/whats-new" },
    { label: "Contact Us", href: "/contact" },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Instagram, href: "#", label: "Instagram" },
  ];

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  const linkHover = {
    scale: 1.05,
    x: 8,
    transition: { duration: 0.3 },
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-emerald-950 via-emerald-900 to-green-900 text-white overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-emerald-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full">
          <div className="absolute inset-0 bg-gradient-radial from-emerald-800/30 via-transparent to-transparent"></div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-12 lg:gap-16"
        >
          {/* Company Info & Logo */}
          <motion.div variants={itemVariants} className="space-y-8 md:col-span-1">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Rajratan Group Logo"
                className="h-24 w-auto drop-shadow-2xl brightness-110"
              />
            </div>

            <p className="text-green-100 leading-relaxed max-w-xs text-sm lg:text-base">
              Pioneering sustainable engineering solutions with innovation, integrity, and excellence since decades.
            </p>

            {/* Contact Info */}
            <div className="space-y-5 text-sm lg:text-base">
              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-emerald-700/40 rounded-xl backdrop-blur-sm group-hover:bg-emerald-600 transition-all">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="text-green-50">+91 96859 27927</span>
                
              </motion.div>
              

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-center gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-emerald-700/40 rounded-xl backdrop-blur-sm group-hover:bg-emerald-600 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="text-green-50">info@rajratan.in</span>
              </motion.div>

              <motion.div
                whileHover={{ x: 5 }}
                className="flex items-start gap-4 group cursor-pointer"
              >
                <div className="p-3 bg-emerald-700/40 rounded-xl backdrop-blur-sm group-hover:bg-emerald-600 transition-all">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="text-green-50 leading-snug">
                  1st floor 123-124, Shastri Market<br />indore, Madhya Pradesh, 452007
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants} className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
              Quick Links
              <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></span>
            </h3>
            <div className="grid grid-cols-2 gap-8 mt-10">
              {quickLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  variants={itemVariants}
                  whileHover={linkHover}
                  className="group flex items-center gap-3 text-green-100 hover:text-white text-base font-medium transition-all duration-300"
                >
                  <span className="w-2 h-2 bg-emerald-400 rounded-full group-hover:scale-150 transition-transform"></span>
                  <span>{link.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-white relative inline-block">
                Stay Connected
                <span className="absolute -bottom-2 left-0 w-20 h-1 bg-gradient-to-r from-emerald-400 to-green-400 rounded-full"></span>
              </h3>

              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ y: -8, scale: 1.2 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 bg-white/10 backdrop-blur-md rounded-2xl hover:bg-emerald-600 transition-all duration-300 border border-white/20 hover:border-emerald-400 shadow-lg"
                  >
                    <social.icon className="w-6 h-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Optional Newsletter (Bonus) */}
            <div className="mt-10 p-6 bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10">
              <p className="text-green-100 text-sm mb-4">Subscribe for updates</p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-4 py-3 bg-white/10 rounded-l-xl placeholder-green-300 text-white focus:outline-none focus:bg-white/20 transition"
                />
                <button className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-r-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all">
                  Subscribe
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-20 pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-green-200 text-sm gap-4"
        >
          <p>© {currentYear} Rajratan Group. All Rights Reserved.</p>
          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms of Service</a>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ y: -10 }}
          className="fixed bottom-8 right-8 p-4 bg-emerald-600 rounded-full shadow-2xl hover:bg-emerald-500 transition-all z-50 border border-white/30"
        >
          <ArrowUp className="w-6 h-6" />
        </motion.button>
      </div>
    </footer>
  );
}