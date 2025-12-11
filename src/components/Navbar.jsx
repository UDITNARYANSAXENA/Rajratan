// components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import clsx from 'clsx';
import logo from "../assets/Logo.png";
import PDF from "../assets/Corporate Profile 2021.pdf";

const TOP_BAR_HEIGHT_LG = 40; // The height of the top contact bar in pixels

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const currentPath =
    typeof window !== 'undefined' ? window.location.pathname : '/';

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > TOP_BAR_HEIGHT_LG + 20); // Check scroll past the top bar + some buffer
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Services", href: "/services" },
    { label: "What's New", href: "/whats-new" },
    { label: "Contact Us", href: "/contact" },
  ];

  const isActive = (path) => currentPath === path;

  // Dynamic top offset based on scroll status (only offset when NOT scrolled)
  const mainNavTopPosition = scrolled ? 0 : TOP_BAR_HEIGHT_LG; 

  return (
    <LayoutGroup>

      {/* ---------------------------------- */}
      {/* 🚀 PREMIUM TOP CONTACT BAR         */}
      {/* ---------------------------------- */}
      {/* Animate out on scroll to keep navigation cleaner when content is viewed */}
      <AnimatePresence>
        {!scrolled && (
          <motion.div
            initial={{ y: -TOP_BAR_HEIGHT_LG, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -TOP_BAR_HEIGHT_LG, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={clsx(
              "hidden lg:flex justify-between items-center px-10 h-10 text-xs font-medium relative overflow-hidden",
              "fixed top-0 left-0 right-0 z-[100] transition-colors duration-500", 
              "bg-gradient-to-r from-emerald-900 via-green-800 to-green-700 shadow-xl border-b border-white/20"
            )}
          >
            {/* Subtle Background Accent */}
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-emerald-600/10 via-transparent to-green-500/10"></div>

<div className="flex items-center gap-10">
  {[
    { icon: Phone, text: "+91 96859 27927", link: "tel:+919685927927" },
    { icon: Mail, text: "info@rajratan.in", link: "mailto:info@rajratan.in" },
    { icon: MapPin, text: "indore, Madhya Pradesh, 452007", link: null },
  ].map(({ icon: Icon, text, link }) => (
    <div key={text} className="flex items-center gap-2">
      <Icon className="w-4 h-4 text-emerald-300 drop-shadow-sm" />

      {link ? (
        <a
          href={link}
          className="text-emerald-50 hover:text-white transition-colors"
        >
          {text}
        </a>
      ) : (
        <span className="text-emerald-50 hover:text-white transition-colors cursor-default">
          {text}
        </span>
      )}
    </div>
  ))}
</div>


<div className="text-emerald-200 font-semibold tracking-wider text-sm flex items-center gap-2">
  <a
    href={PDF}
    download
    className="text-emerald-300 underline hover:text-white transition"
  >
    Company Profile
  </a>
</div>

          </motion.div>
        )}
      </AnimatePresence>


      {/* ---------------------------------- */}
      {/* MAIN NAVBAR                        */}
      {/* ---------------------------------- */}
      <motion.nav
        // Change: Removed the style={{ top: mainNavTopPosition }} for a simpler, fixed top bar that replaces the contact bar on scroll.
        // It now always sits at top-0, effectively replacing the top bar when scrolled.
        initial={{ y: -120 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300", 
          // New: Smoother Scrolled State
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-2xl shadow-gray-400/20 border-b border-emerald-500/10"
            : "bg-transparent"
        )}
      >
        {/* Spacer for when the Top Bar is visible (unscrolled) */}
        {!scrolled && <div className="hidden lg:block h-10"></div>}

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center h-20 lg:h-24">

            {/* Logo */}
            <motion.a
              href="/"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              className="relative"
            >
              <img
                src={logo}
                alt="Rajratan Group"
                className={clsx(
                  "h-16 lg:h-20 w-auto transition-all duration-500 ease-out",
                  scrolled 
                    ? "drop-shadow-xl saturate-100" 
                    : "drop-shadow-2xl brightness-[1.15] contrast-125" // Higher contrast when transparent
                )}
              />

              {/* Soft Glow When Scrolled */}
              {scrolled && (
                <motion.div
                  layoutId="logoGlow"
                  className="absolute inset-0 -z-10 bg-emerald-400/20 blur-2xl rounded-full"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                />
              )}
            </motion.a>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-1">
              {menuItems.map((item) => {
                const active = isActive(item.href);

                return (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    className={clsx(
                      "relative px-5 py-6 text-base font-semibold tracking-wide transition-all duration-300 group",
                      scrolled
                        ? active
                          ? "text-emerald-700"
                          : "text-gray-700 hover:text-emerald-600"
                        : active
                          ? "text-emerald-300"
                          : "text-white hover:text-emerald-200"
                    )}
                    whileHover={{ y: -3 }}
                  >
                    {item.label}

                    {/* Active Indicator (Clean bottom bar) */}
                    {active && (
                      <motion.div
                        layoutId="activeNavIndicator"
                        className={clsx(
                            "absolute bottom-0 left-0 right-0 h-1 rounded-t-lg",
                            scrolled ? "bg-emerald-600 shadow-md shadow-emerald-500/50" : "bg-emerald-400"
                        )}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                      />
                    )}

                    {/* Hover underline (more subtle) */}
                    {!active && (
                        <span className="absolute bottom-0 left-0 right-0 h-0.5 overflow-hidden">
                            <motion.div
                                className={clsx(
                                    "h-full rounded-full",
                                    scrolled ? "bg-emerald-500/70" : "bg-emerald-300/70"
                                )}
                                initial={{ scaleX: 0 }}
                                whileHover={{ scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                                style={{ originX: 0.5 }}
                            />
                        </span>
                    )}

                  </motion.a>
                );
              })}

              {/* CTA Button */}
              <motion.a
                href="/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="ml-10 px-8 py-4 bg-gradient-to-r from-emerald-600 to-green-600 text-white font-bold rounded-full shadow-xl hover:shadow-2xl shadow-emerald-700/40 hover:shadow-emerald-700/60 transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
              >
                Get a Quote
                <ChevronRight className="w-5 h-5" />
              </motion.a>
            </div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={clsx(
                "lg:hidden p-3 rounded-xl transition-all duration-300 shadow-lg",
                scrolled
                  ? "bg-emerald-100 hover:bg-emerald-200 text-gray-800"
                  : "bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white"
              )}
              aria-label="Toggle Mobile Menu"
            >
              <AnimatePresence mode="wait">
                {mobileMenuOpen ? (
                  <motion.div key="close" initial={{ rotate: -90 }} animate={{ rotate: 0 }}>
                    <X className="w-7 h-7" />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90 }} animate={{ rotate: 0 }}>
                    <Menu className="w-7 h-7" />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <>
              {/* Mobile Menu Panel */}
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring", damping: 25, stiffness: 200 }}
                className="fixed inset-y-0 right-0 w-full md:w-96 bg-gradient-to-br from-emerald-900 to-green-950 shadow-2xl z-[150] overflow-y-auto" 
              >
                <div className="flex flex-col h-full">
                  <div className="p-8 pt-10 border-b border-white/10 flex justify-between items-center">
                    <img src={logo} alt="Logo" className="h-16 brightness-150" />
                    <button onClick={() => setMobileMenuOpen(false)} className="p-2 text-white hover:text-emerald-300">
                        <X className="w-8 h-8" />
                    </button>
                  </div>

                  <nav className="flex-1 px-8 py-10 space-y-2">
                    {menuItems.map((item, i) => (
                      <motion.a
                        key={item.label}
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        initial={{ opacity: 0, x: 60 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        className={clsx(
                            "block text-2xl font-bold py-4 transition-all duration-200 relative",
                            isActive(item.href) 
                                ? "text-emerald-300 border-l-4 border-emerald-400 pl-4 shadow-sm" 
                                : "text-white hover:text-emerald-300 hover:pl-2"
                        )}
                        whileHover={{ x: 10 }}
                      >
                        {item.label}
                      </motion.a>
                    ))}
                  </nav>

                  <div className="p-8 space-y-6 border-t border-white/10">
                    <a
                      href="/contact"
                      className="block text-center py-5 bg-white text-emerald-700 font-extrabold text-xl rounded-xl shadow-2xl shadow-emerald-400/30 hover:bg-emerald-50 transition"
                    >
                      Get in Touch
                    </a>
                    <p className="text-center text-emerald-200 text-sm">
                      © {new Date().getFullYear()} Rajratan Group. All Rights Reserved.
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.8 }}
                exit={{ opacity: 0 }}
                onClick={() => setMobileMenuOpen(false)}
                className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[140]" 
              />
            </>
          )}
        </AnimatePresence>
      </motion.nav>
    </LayoutGroup>
  );
}