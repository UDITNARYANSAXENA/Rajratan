import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Scale, Zap, Hammer, AlertTriangle, ArrowRight , Mail , Phone, Globe } from 'lucide-react';

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
};

// Component for a styled list item
const ToSListItem = ({ children, icon: Icon = ArrowRight }) => (
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

export default function TermsOfService() {
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
      Welcome to the Rajratan Group website. These Terms of Service ("Terms") govern your access to and use of our website, including any content, functionality, and services offered on or through our website.
      <br /><br />
      By accessing or using the website, you agree to be bound by these Terms and our Privacy Policy. If you disagree with any part of the terms, then you may not access the service.
    </p>
  );

  const intellectualProperty = (
    <>
      <p className="mb-4 text-gray-700">
        The website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof) are owned by the Rajratan Group, its licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
      </p>
      <ul className="list-disc list-inside space-y-2 mt-4">
        <ToSListItem>
          You are granted a non-exclusive, non-transferable, revocable license to access and use the website strictly in accordance with these Terms.
        </ToSListItem>
        <ToSListItem>
          You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our website, except as generally and incidentally permitted by the website itself.
        </ToSListItem>
      </ul>
    </>
  );

  const acceptableUse = (
    <>
      <p className="mb-4 text-gray-700">
        You may use the website only for lawful purposes and in accordance with these Terms of Service. You agree not to use the website:
      </p>
      <ul className="list-disc list-inside space-y-2">
        <ToSListItem icon={Zap}>
          In any way that violates any applicable national or international law or regulation.
        </ToSListItem>
        <ToSListItem icon={Zap}>
          To transmit, or procure the sending of, any advertising or promotional material, including any "junk mail," "chain letter," "spam," or any other similar solicitation.
        </ToSListItem>
        <ToSListItem icon={Zap}>
          To impersonate or attempt to impersonate the Rajratan Group, a Group employee, another user, or any other person or entity.
        </ToSListItem>
        <ToSListItem icon={Zap}>
          To engage in any conduct that restricts or inhibits anyone's use or enjoyment of the website, or which, as determined by us, may harm the Rajratan Group or users of the website.
        </ToSListItem>
      </ul>
    </>
  );

  const termination = (
    <p className="text-gray-700">
      We may terminate or suspend your access to all or part of the website immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms. All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity, and limitations of liability.
    </p>
  );

  const warrantyDisclaimer = (
    <p className="text-gray-700 font-medium">
      YOUR USE OF THE WEBSITE IS AT YOUR SOLE RISK. THE WEBSITE IS PROVIDED ON AN "AS IS" AND "AS AVAILABLE" BASIS. THE RAJRATAN GROUP EXPRESSLY DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS OR IMPLIED, INCLUDING, BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT WARRANT THAT THE WEBSITE WILL BE UNINTERRUPTED, SECURE, OR ERROR-FREE.
    </p>
  );

  const limitationOfLiability = (
    <p className="text-gray-700 font-medium">
      IN NO EVENT SHALL THE RAJRATAN GROUP, NOR ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES, BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER INTANGIBLE LOSSES, RESULTING FROM (I) YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE WEBSITE; (II) ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE WEBSITE; (III) ANY CONTENT OBTAINED FROM THE WEBSITE; AND (IV) UNAUTHORIZED ACCESS, USE OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT, WHETHER BASED ON WARRANTY, CONTRACT, TORT (INCLUDING NEGLIGENCE) OR ANY OTHER LEGAL THEORY, WHETHER OR NOT WE HAVE BEEN INFORMED OF THE POSSIBILITY OF SUCH DAMAGE.
    </p>
  );

  const governingLaw = (
    <p className="text-gray-700">
      These Terms shall be governed and construed in accordance with the laws of **India**, without regard to its conflict of law provisions. Any legal action or proceeding related to this website shall be brought exclusively in the courts located in **Pune, Maharashtra, India.**
    </p>
  );

  const contactInfo = (
    <>
      <p className="mb-4 text-gray-700">
        If you have any questions about these Terms, please contact us:
      </p>
      <div className="space-y-3 mt-5 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
        <p className="flex items-center text-lg font-bold text-emerald-800"><Mail className="w-5 h-5 mr-3"/> Email: legal@rajratan.com</p>
        <p className="flex items-center text-lg font-bold text-emerald-800"><Phone className="w-5 h-5 mr-3"/> Phone: [Relevant Legal/Admin Number]</p>
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
            <Scale className="w-12 h-12 text-emerald-600 mx-auto mb-4" />
            <h1 className="text-5xl font-extrabold text-emerald-900 mb-3">Terms of Service</h1>
            <p className="text-xl text-gray-600">Rajratan Group Website Usage Agreement</p>
            <p className="text-sm text-gray-500 mt-2">
                Effective Date: **{effectiveDate}**
            </p>
        </motion.div>
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {renderSection("1. Introduction and Acceptance", introduction, BookOpen)}
        {renderSection("2. Intellectual Property Rights", intellectualProperty, Hammer)}
        {renderSection("3. Acceptable Use Policy", acceptableUse, AlertTriangle)}
        {renderSection("4. Termination", termination, Zap)}
        
        <h3 className="text-3xl font-extrabold text-red-700 mt-16 mb-6">LIMITATION OF LIABILITY (IMPORTANT LEGAL SECTION)</h3>
        
        {renderSection("5. Disclaimer of Warranties", warrantyDisclaimer, AlertTriangle)}
        {renderSection("6. Limitation of Liability", limitationOfLiability, Scale)}
        {renderSection("7. Governing Law", governingLaw, Globe)}
        {renderSection("8. Contact Information", contactInfo, Mail)}

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 p-6 text-center bg-emerald-100 rounded-xl text-emerald-800 font-medium"
        >
            <p>We reserve the right to revise and amend these Terms of Service periodically. Your continued use of the website following the posting of revised Terms means that you accept and agree to the changes.</p>
        </motion.div>
      </div>
    </div>
  );
}