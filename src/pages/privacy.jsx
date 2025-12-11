import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Users, Mail, Globe, ArrowRight, Phone, MapPin } from 'lucide-react';

// Animation Variants for sections
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// Component for a styled list item
const PolicyListItem = ({ children, icon: Icon = ArrowRight }) => (
    <motion.li 
        initial={{ opacity: 0, x: -10 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.4 }}
        className="flex items-start text-gray-700 space-x-3 mb-3"
    >
        <Icon className="w-5 h-5 mt-1 flex-shrink-0 text-emerald-600" />
        <p className="flex-grow">{children}</p>
    </motion.li>
);

export default function PrivacyPolicy() {
  const lastUpdated = "December 12, 2025";
  const effectiveDate = "January 1, 2026";

  const renderSection = (title, content, Icon) => (
    <motion.section 
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="p-8 bg-white shadow-xl rounded-xl border-t-4 border-emerald-500 mb-12"
    >
      <div className="flex items-center space-x-4 mb-6 pb-3 border-b border-gray-100">
        <Icon className="w-8 h-8 text-emerald-600" />
        <h2 className="text-3xl font-bold text-gray-900">{title}</h2>
      </div>
      {content}
    </motion.section>
  );

  const introduction = (
    <p className="text-lg text-gray-700 leading-relaxed">
      Rajratan Group ("we," "our," or "us") is committed to protecting the privacy of its industrial partners, customers, and website users. This Privacy Policy outlines the types of information we collect, how we use it, and the steps we take to safeguard your data in compliance with general data protection principles.
      <br /><br />
      By using our website and services, you consent to the data practices described in this policy.
    </p>
  );

  const informationCollection = (
    <>
      <p className="mb-4 text-gray-700">We collect information through two primary methods:</p>
      
      <h3 className="text-xl font-semibold text-emerald-700 mt-6 mb-3">1. Information You Voluntarily Provide (Direct Collection)</h3>
      <ul className="list-disc list-inside space-y-2">
        <PolicyListItem>
          **Contact Data:** Your name, company name, email address, phone number, and professional designation when you use our contact forms or interact with our teams.
        </PolicyListItem>
        <PolicyListItem>
          **Subscription Data:** Your email address when you sign up for our newsletter or updates.
        </PolicyListItem>
        <PolicyListItem>
          **Correspondence:** Records of any inquiries or feedback you provide via email or phone.
        </PolicyListItem>
      </ul>

      <h3 className="text-xl font-semibold text-emerald-700 mt-6 mb-3">2. Automatically Collected Information (Usage Data)</h3>
      <p className="text-gray-700">When you visit our website, our servers automatically record certain information:</p>
      <ul className="list-disc list-inside space-y-2 mt-2">
        <PolicyListItem icon={Globe}>
          **Device Information:** IP address, browser type, operating system, and unique device identifiers.
        </PolicyListItem>
        <PolicyListItem icon={Users}>
          **Usage Data:** Pages viewed, time spent on pages, referral sources, and interaction patterns (collected via cookies and standard analytics).
        </PolicyListItem>
      </ul>
      <p className="text-sm italic mt-4 text-gray-500">
        We use cookies and similar tracking technologies to track activity and enhance user experience. You may adjust your browser settings to reject cookies.
      </p>
    </>
  );

  const dataUsage = (
    <>
      <p className="mb-4 text-gray-700">
        The information we collect is used strictly for legitimate business purposes, including:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <PolicyListItem>
          **Service Delivery:** Responding to your inquiries, providing quotes, or fulfilling requests related to our recycling and engineering services.
        </PolicyListItem>
        <PolicyListItem>
          **Communication:** Sending updates, company news, and information related to our sustainable products and 7R philosophy, based on your consent (e.g., newsletter subscription).
        </PolicyListItem>
        <PolicyListItem>
          **Improvement:** Analyzing website traffic and user behavior to improve site functionality and optimize our content and service offerings.
        </PolicyListItem>
        <PolicyListItem>
          **Security:** Protecting against fraudulent transactions and unauthorized access to our systems.
        </PolicyListItem>
      </ul>
    </>
  );

  const dataSharing = (
    <>
      <p className="mb-4 text-gray-700">
        We do not sell, rent, or lease your personal information to third parties. We may share data only in the following limited circumstances:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <PolicyListItem>
          **Group Entities:** With Rajratan Group entities (e.g., Rajratan Recycling Services, Rajratan Industries) to provide cohesive services across our business verticals.
        </PolicyListItem>
        <PolicyListItem>
          **Service Providers:** With third-party service providers (e.g., hosting, analytics, email distribution) who require the information to perform services on our behalf and are bound by confidentiality agreements.
        </PolicyListItem>
        <PolicyListItem>
          **Legal Compliance:** When required by law, regulation, or government request (e.g., subpoenas, legal processes).
        </PolicyListItem>
      </ul>
    </>
  );

  const dataSecurity = (
    <>
      <p className="mb-4 text-gray-700">
        We are committed to ensuring the security of your data. We implement reasonable technical and organizational measures to protect your personal information from unauthorized access, loss, misuse, or alteration.
      </p>
      <ul className="list-disc list-inside space-y-2">
        <PolicyListItem>
          Data is stored on secure servers with access restricted to necessary personnel.
        </PolicyListItem>
        <PolicyListItem>
          We use industry-standard encryption for data transmission where appropriate.
        </PolicyListItem>
        <PolicyListItem>
          Regular security audits are conducted to maintain the integrity of our systems.
        </PolicyListItem>
      </ul>
      <p className="mt-4 italic text-sm text-gray-500">
        Note: While we strive for absolute security, no method of transmission over the Internet is 100% secure. You share information at your own risk.
      </p>
    </>
  );

  const userRights = (
    <>
      <p className="mb-4 text-gray-700">
        Depending on your jurisdiction, you may have the following rights regarding your personal data:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <PolicyListItem>
          **Right to Access:** Request a copy of the personal data we hold about you.
        </PolicyListItem>
        <PolicyListItem>
          **Right to Rectification:** Request correction of inaccurate or incomplete data.
        </PolicyListItem>
        <PolicyListItem>
          **Right to Withdraw Consent:** You can unsubscribe from marketing communications at any time.
        </PolicyListItem>
        <PolicyListItem>
          **Data Retention:** We retain personal data only for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required or permitted by law.
        </PolicyListItem>
      </ul>
      <p className="mt-6 font-semibold text-gray-700">
        To exercise any of these rights, please contact us using the details provided below.
      </p>
    </>
  );

  const contactInfo = (
    <>
      <p className="mb-4 text-gray-700">
        If you have questions or concerns about this policy, please contact our Compliance Officer:
      </p>
      <div className="space-y-3 mt-5 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
        <p className="flex items-center text-lg font-bold text-emerald-800"><Mail className="w-5 h-5 mr-3"/> Email: compliance@rajratan.com</p>
        <p className="flex items-center text-lg font-bold text-emerald-800"><Phone className="w-5 h-5 mr-3"/> Phone: [Relevant Compliance/Admin Number]</p>
        <p className="flex items-start text-lg font-bold text-emerald-800">
            <MapPin className="w-5 h-5 mr-3 mt-1"/> Address: 123 Industrial Estate, [City], Maharashtra, India
        </p>
      </div>
    </>
  );

  return (
    <div className="pt-36 pb-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 mb-16 text-center">
        <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <Shield className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-5xl font-extrabold text-emerald-900 mb-3">Privacy Policy</h1>
            <p className="text-xl text-gray-600">Rajratan Group</p>
            <p className="text-sm text-gray-500 mt-2">
                Last Updated: **{lastUpdated}** | Effective Date: **{effectiveDate}**
            </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {renderSection("Introduction", introduction, Shield)}
        {renderSection("Information We Collect", informationCollection, Mail)}
        {renderSection("How We Use Your Information", dataUsage, Users)}
        {renderSection("Disclosure and Sharing", dataSharing, Lock)}
        {renderSection("Data Security", dataSecurity, Lock)}
        {renderSection("Your Rights and Choices", userRights, Users)}
        {renderSection("Contact Us", contactInfo, Mail)}

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 text-center bg-emerald-100 rounded-xl text-emerald-800 font-medium"
        >
            <p>We reserve the right to modify this Privacy Policy at any time. Any changes will be posted on this page with a revised "Last Updated" date.</p>
        </motion.div>
      </div>
    </div>
  );
}