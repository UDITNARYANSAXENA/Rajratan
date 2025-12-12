// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import clsx from 'clsx';

// Replace these with your actual paths
import logo from "../assets/Logo.png";
import PDF from "../assets/Corporate Profile 2021.pdf";

const TOP_BAR_HEIGHT = 40;

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Get current path safely
  const currentPath = typeof window !== 'undefined' ? window.location.pathname : '/';

  // Handle scroll for top bar hide + navbar style change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > TOP_BAR_HEIGHT + 30);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "What's New", href: "/whats-new" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (path) => currentPath === path;

  const toggleMobileMenu = () => setMobileMenuOpen(prev => !prev);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <LayoutGroup>
      {/* ==================================== */}
      {/* TOP CONTACT BAR (Hidden on Scroll) */}
      {/* ==================================== */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ y: -TOP_BAR_HEIGHT, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -TOP_BAR_HEIGHT, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="hidden lg:flex items-center justify-between px-8 xl:px-16 py-3 text-xs font-medium
                       fixed top-0 left-0 right-0 z-[9999] 
                       bg-gradient-to-r from-emerald-900 via-green-800 to-green-700 
                       border-b border-white/10 shadow-xl"
          >
            <div className="flex items-center gap-8 xl:gap-12">
              {[
                { icon: Phone, text: "+91 96859 27927", link: "tel:+919685927927" },
                { icon: Mail, text: "info@rajratan.in", link: "mailto:info@rajratan.in" },
                { icon: MapPin, text: "Indore, Madhya Pradesh" },
              ].map(({ icon: Icon, text, link }) => (
                <div key={text} className="flex items-center gap-2 text-emerald-100">
                  <Icon className="w-4 h-4 text-emerald-300" />
                  {link ? (
                    <a href={link} className="hover:text-white transition">
                      {text}
                    </a>
                  ) : (
                    <span>{text}</span>
                  )}
                </div>
              ))}
            </div>

            <a
              href={PDF}
              download
              className="text-emerald-200 hover:text-white font-semibold underline-offset-2 hover:underline transition"
            >
              Company Profile ↓
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ======================= */}
      {/* MAIN NAVBAR */}
      {/* ======================= */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-[9998] transition-all duration-500",
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-xl"
            : "bg-transparent"
        )}
      >
        {/* Spacer when top bar is visible */}
        {!scrolled && <div className="h-10 hidden lg:block" />}

        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-20 lg:h-24">

            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative z-10"
            >
              <img
                src={logo}
                alt="Rajratan Group"
                className={clsx(
                  "h-14 lg:h-20 w-auto transition-all duration-700",
                  scrolled ? "brightness-100" : "brightness-125 contrast-130"
                )}
              />
              {scrolled && (
                <motion.div
                  layoutId="logoGlow"
                  className="absolute -inset-4 bg-emerald-400/20 blur-3xl -z-10 rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                />
              )}
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-2">
              {menuItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "relative px-6 py-4 text-base font-semibold transition-colors duration-300",
                      scrolled
                        ? active ? "text-emerald-700" : "text-gray-700 hover:text-emerald-600"
                        : active ? "text-emerald-200" : "text-white hover:text-emerald-100"
                    )}
                    whileHover={{ y: -4 }}
                  >
                    {item.label}

                    {active && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute bottom-1 left-4 right-4 h-1 bg-emerald-500 rounded-full shadow-lg"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.a>
                );
              })}

              <motion.a
                href="/contact"
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="ml-8 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-2xl hover:shadow-emerald-600/50 flex items-center gap-3"
              >
                Get a Quote
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Menu Button - Always Clickable */}
            <button
              onClick={toggleMobileMenu}
              className={clsx(
                "lg:hidden relative z-[99999] p-4 rounded-2xl transition-all duration-300",
                scrolled
                  ? "bg-emerald-100 text-emerald-800 shadow-lg hover:bg-emerald-200"
                  : "bg-white/20 backdrop-blur-md text-white hover:bg-white/30"
              )}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                  >
                    <X className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                  >
                    <Menu className="w-8 h-8" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* ======================= */}
      {/* MOBILE MENU - FULLY WORKING */}
      {/* ======================= */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Dark Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/90 backdrop-blur-md z-[99990]"
            />

            {/* Sliding Menu Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="fixed inset-y-0 right-0 w-full max-w-md bg-gradient-to-br from-emerald-950 via-green-900 to-emerald-950 shadow-2xl z-[99991] overflow-y-auto"
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-8 border-b border-white/10 flex justify-between items-center">
                  <img src={logo} alt="Logo" className="h-16 brightness-150" />
                  <button
                    onClick={closeMobileMenu}
                    className="p-3 bg-white/10 rounded-2xl hover:bg-white/20 transition"
                  >
                    <X className="w-10 h-10 text-white" />
                  </button>
                </div>

                {/* Menu Links */}
                <nav className="flex-1 px-8 py-12 space-y-1">
                  {menuItems.map((item, index) => (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={closeMobileMenu}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={clsx(
                        "block text-2xl lg:text-3xl font-bold py-5 border-b border-white/10 transition-all duration-300",
                        isActive(item.href)
                          ? "text-emerald-300 border-emerald-400 pl-6"
                          : "text-white hover:text-emerald-300 hover:pl-6"
                      )}
                      whileHover={{ x: 16 }}
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>

                {/* Footer CTA */}
                <div className="p-8 space-y-6 border-t border-white/10">
                  <a
                    href="/contact"
                    onClick={closeMobileMenu}
                    className="block text-center py-6 bg-white text-emerald-800 font-black text-xl rounded-2xl shadow-2xl hover:shadow-emerald-500/40 transition hover:shadow-emerald-500/60"
                  >
                    Get in Touch
                  </a>
                  <p className="text-center text-emerald-300 text-sm font-medium">
                    © {new Date().getFullYear()} Rajratan Group. All Rights Reserved.
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </LayoutGroup>
  );
}