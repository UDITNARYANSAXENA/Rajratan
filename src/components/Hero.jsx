// components/HeroCarousel.jsx
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

// Replace these with your actual high-quality images
const slides = [
  {
    id: 1,
    title: "Building a Greener Tomorrow",
    subtitle: "Sustainable Solutions with Recycled Plastic Innovation",
    img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=1920&h=1080&fit=crop",
  },
  {
    id: 2,
    title: "Eco-Friendly Products That Last",
    subtitle: "From Waste to Wonder – 100% Recycled & Recyclable",
    img: "https://viablerecyler.com/wp-content/uploads/2023/10/1562568323-current-trends-in-recycling-and-e-waste-management.jpg",
  },
  {
    id: 3,
    title: "Join the Sustainable Revolution",
    subtitle: "Innovative. Durable. Responsible.",
    img: "https://static.vecteezy.com/system/resources/thumbnails/039/063/060/small/ai-generated-observe-world-environment-day-and-join-with-global-communities-for-sustainable-development-csr-and-environmental-energy-savings-photo.jpeg",
  },
];

export default function HeroCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };

  // Auto-play
  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Slides */}
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentIndex}
          custom={direction}
          variants={{
            enter: (direction) => ({
              x: direction > 0 ? 1000 : -1000,
              opacity: 0,
            }),
            center: {
              zIndex: 1,
              x: 0,
              opacity: 1,
            },
            exit: (direction) => ({
              zIndex: 0,
              x: direction < 0 ? 1000 : -1000,
              opacity: 0,
            }),
          }}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.4 },
          }}
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${slides[currentIndex].img})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay + Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          
          {/* Content */}
          <div className="relative h-full flex items-center justify-center text-center px-6">
            <div className="max-w-5xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6 drop-shadow-2xl"
              >
                {slides[currentIndex].title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-xl md:text-3xl text-green-100 font-light mb-12 max-w-3xl mx-auto drop-shadow-lg"
              >
                {slides[currentIndex].subtitle}
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-6 justify-center items-center"
              >
                <a
                  href="/contact"
                  className="group px-10 py-5 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold text-lg rounded-full shadow-2xl hover:shadow-green-500/50 transform hover:scale-110 transition-all duration-300 relative overflow-hidden"
                >
                  <span className="relative z-10">Contact Us</span>
                  <div className="absolute inset-0 bg-white/30 translate-x-full group-hover:translate-x-0 transition-transform duration-500" />
                </a>

                <a
                  href="/products"
                  className="px-10 py-5 bg-white/20 backdrop-blur-xl border-2 border-white/50 text-white font-bold text-lg rounded-full shadow-2xl hover:bg-white/30 transform hover:scale-110 transition-all duration-300"
                >
                  Explore Products
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/40 transition-all duration-300 group"
      >
        <ChevronLeft className="w-8 h-8 text-white group-hover:scale-110 transition" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 p-4 bg-white/20 backdrop-blur-xl rounded-full hover:bg-white/40 transition-all duration-300 group"
      >
        <ChevronRight className="w-8 h-8 text-white group-hover:scale-110 transition" />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              index === currentIndex
                ? "w-12 h-3 bg-green-400 rounded-full"
                : "w-3 h-3 bg-white/50 rounded-full hover:bg-white/80"
            }`}
          />
        ))}
      </div>
    </div>
  );
}