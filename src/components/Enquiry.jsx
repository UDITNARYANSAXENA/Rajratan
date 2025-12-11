import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, User, Phone, Mail, Package } from 'lucide-react';

// Animation variants for the modal container
const modalVariants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { type: 'spring', stiffness: 200, damping: 25 }
  },
  exit: { opacity: 0, scale: 0.8, transition: { duration: 0.2 } }
};

// Removed sampleTypes array as it's no longer needed

export default function EnquiryModal() {
  // State to control modal visibility (starts true to pop up on load)
  const [isOpen, setIsOpen] = useState(true); 
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    // Removed sampleType from state
    email: '', 
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Function to close the modal
  const closeModal = () => {
    setIsOpen(false);
  };

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate an API call delay
    setTimeout(() => {
      console.log('Form Data Submitted:', formData);
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Optionally, auto-close the modal after a thank-you message
      setTimeout(() => {
        setIsOpen(false);
      }, 3000); 

    }, 1500);
  };

  // Custom Input Field Component
  const FormField = ({ label, name, type = "text", icon: Icon, value, onChange }) => (
    <div className="space-y-2">
      <label htmlFor={name} className="text-sm font-medium text-emerald-800 flex items-center">
        <Icon className="w-4 h-4 mr-1"/> {label} <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required
        className="w-full px-4 py-3 border border-emerald-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition duration-200 bg-white/90 text-gray-800 placeholder-gray-400"
        placeholder={`Enter your ${label.toLowerCase()}`}
      />
    </div>
  );

  return (
    <AnimatePresence>
      {isOpen && (
        // Backdrop Overlay: This creates the full screen BLURRED background
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex items-center justify-center p-4 backdrop-blur-sm" // backdrop-blur-sm blurs the screen
          onClick={closeModal} // Close on backdrop click
        >
          {/* Modal Content: This is the POP-UP box */}
          <motion.div
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="w-full max-w-sm bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-300" // Reduced max-w to sm for a smaller popup
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <div className="relative bg-gradient-to-r from-emerald-700 to-green-700 p-6 text-white">
              <h2 className="text-2xl font-extrabold flex items-center">
                <Package className="w-6 h-6 mr-2"/> Quick Inquiry Form
              </h2>
              <p className="text-emerald-100 text-sm mt-1">Submit your details to start the process.</p>
              
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Close form"
              >
                <X className="w-5 h-5" /> {/* Close button */}
              </button>
            </div>

            <div className="p-6">
              {isSubmitted ? (
                <div className="text-center py-10">
                  <motion.div 
                    initial={{ scale: 0 }} 
                    animate={{ scale: 1 }} 
                    transition={{ type: "spring", stiffness: 300 }}
                    className="text-6xl mb-4"
                  >
                    ✅
                  </motion.div>
                  <h3 className="text-2xl font-bold text-emerald-700">Inquiry Sent!</h3>
                  <p className="text-gray-600 mt-2">
                    We will call or email you shortly to discuss your requirement.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Field 1: Name */}
                  <FormField 
                    label="Your Full Name" 
                    name="name" 
                    icon={User} 
                    value={formData.name} 
                    onChange={handleChange} 
                  />

                  {/* Field 2: Phone Number */}
                  <FormField 
                    label="Phone Number" 
                    name="phone" 
                    type="tel"
                    icon={Phone} 
                    value={formData.phone} 
                    onChange={handleChange} 
                  />

                  {/* Field 3: Email Address */}
                  <FormField 
                    label="Email Address" 
                    name="email" 
                    type="email"
                    icon={Mail} 
                    value={formData.email} 
                    onChange={handleChange} 
                  />

                  {/* Removed Sample Type Dropdown */}
                  
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                    className={`w-full py-3 mt-6 text-white font-bold rounded-lg transition-all duration-300 shadow-lg ${
                      isSubmitting 
                        ? 'bg-gray-400 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-emerald-600 to-green-600 hover:from-emerald-700 hover:to-green-700 hover:shadow-emerald-500/50'
                    }`}
                  >
                    {isSubmitting ? 'Submitting Details...' : 'Get Callback Now'}
                  </motion.button>
                </form>
              )}
            </div>
            <div className="p-4 bg-gray-50 text-center text-xs text-gray-500 border-t border-gray-100">
                <p>We respect your privacy. View our <a href="/privacy" className="text-emerald-600 hover:underline">Privacy Policy</a>.</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}