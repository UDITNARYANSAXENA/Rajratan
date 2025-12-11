// pages/AboutUs.jsx (Ultimate Refinement v2.0: Advanced Design & Animation)
import React from "react";
import { motion } from "framer-motion";
import { Leaf, Droplet, Building2, Award, Search, TrendingDown, RefreshCw, Layers, Recycle, User, Briefcase, BarChart, X } from 'lucide-react'; 
import clsx from "clsx";

// --- Data Structures (No Change) ---

// 7R Philosophy Data (Concept tools)
const R_PHILOSOPHY = [
  { R: "Research", icon: Search, description: "Continuous study to develop cleaner technologies." },
  { R: "Renovate", icon: Briefcase, description: "Modernizing processes and adopting new methods." }, 
  { R: "Recharge", icon: RefreshCw, description: "Replenishing natural resources and systems." },
  { R: "Reduce", icon: TrendingDown, description: "Minimizing waste generation at the source." },
  { R: "Reuse", icon: Layers, description: "Finding new utility for materials and products." },
  { R: "Recycle", icon: Recycle, description: "Processing waste into useful, value-added products." },
  { R: "Recover", icon: BarChart, description: "Extracting important substances and energy from waste." }, 
];

// Group Companies Data (No change in data)
const GROUP_COMPANIES = [
  { name: "RAJRATAN INDUSTRIES PRIVATE LIMITED", products: "Pallets for Cement Bricks-Blocks, Shuttering Board (PAC®)", industry: "CONSTRUCTION INDUSTRY", color: "emerald" },
  { name: "RAJRATAN TECHNIQUE AND TECHNOLOGY PRIVATE LIMITED", products: "Dunnage Pallets, Septic Tank, Green Products (Bins, Benches)", industry: "URBAN MUNICIPAL CORPORATIONS", color: "green" },
  { name: "RAJRATAN MARKETING", products: "Doors, Windows, Frame, Furniture, Partitions, Flight Cases", industry: "RETAIL AND CONSUMERS", color: "lime" },
  { name: "RAJRATAN CONCEPT", products: "WASTE MINIMIZATION SERVICE, UNIT ESTABLISHMENT AND OPERATIONS", industry: "FMCG", color: "teal" },
  { name: "RAJRATAN GREEN PRODUCTS", products: "DEVELOPMENTS AND IMPLEMENTATION OF WASTE RECYCLING TECHNOLOGIES", industry: "PACKAGING INDUSTRY", color: "cyan" },
  { name: "RAJRATAN RECYCLING SERVICES", products: "RECOVERY AND RECYCLING OF INK WASTE AND PHARMACEUTICAL WASTE", industry: "PRINTING PRESS, PHARMASUTICAL PACKAGING", color: "sky" },
];

// Timeline Data (No change in data)
const HISTORY_TIMELINE = [
  { year: 1973, title: "Foundation of Ashok Plastic Industries", description: "Laid by Late Shri Ratalalji Deepchandji Jain, focusing on recycling waste poly bags into Agriculture Pipe. The foundation of the Group's recycling focus." },
  { year: 1994, title: "Rajratan Irrigation Private Limited Founded", description: "Shri Ashok Kumar Jain founded the company to promote modern, cost-effective irrigation systems (Rigid PVC, Sprinkler systems) for water conservation in farming." },
  { year: 2001, title: "Rajratan Technique & Technology (P) Ltd and Rajratan Marketing Founded", description: "The 'Guardian of Nature' concept came into existence. RTTPL successfully demonstrated cleaner technology options for complex flexible printing waste (wrappers, currency notes, ink waste). Rajratan Marketing entered retail to promote Green Products." },
  { year: 2002, title: "Rajratan Concept Established (7R Philosophy)", description: "Began as a consultancy, providing end-to-end waste management solutions and evolving traditional waste handling through the guiding 7R philosophy." },
  { year: 2005, title: "Rajratan Green Environment Concept (RGEC) Established", description: "Focused on managing Industrial Packaging, Used Tyre, and E-Waste through proper collection, treatment, and final disposal into useful products across Western India." },
  { year: 2006, title: "Rajratan Recycling Industries Established", description: "Focused on Municipal & Agro Waste, and industrial sludge, converting them into products like Eco-friendly Pellets and plastic to fiber." },
  { year: 2023, title: "New Manufacturing Facility Commissioned", description: "Rajratan Green Products commenced operations at the state-of-the-art SIP, Pithampur facility, enhancing total production capacity by 4x." },
  { year: 2025, title: "Advanced Pharmaceutical Waste Recycling Apparatus", description: "Rajratan Recycling Services introduced a cutting-edge apparatus with magnetic separator technology and a zero-carbon emission process for pre- and post-consumer medicine packaging waste." },
];

// Key Personnel Data (Added placeholder text for clarity)
const LEADERSHIP = [
  { name: "Shri Ashok Kumar Jain", title: "Chairman & Founder", role: "Visionary entrepreneur, law postgraduate. Leads research, administration, operations, and finance, driving sustainability and technological advancement.", photo: "Chairman Portrait" },
  { name: "Mr. Ashay Jain", title: "Director – Operations", role: "Graduate from De Montfort University (U.K.). Manages manufacturing, production, and operations, key in developing green product alternatives.", photo: "Director Ops Portrait" },
  { name: "Mr. Ankit Jain", title: "Director – Sales & Promotion", role: "Leads national sales, marketing, brand promotion, client acquisition, and strategic partnerships across India.", photo: "Director Sales Portrait" },
];

// --- New Components & Design Refinements ---

// Component for Timeline Item (Advanced desktop layout)
const TimelineItem = ({ year, title, description, isLast, side }) => {
    const isLeft = side === 'left';

    return (
        <motion.div 
            initial={{ opacity: 0, x: isLeft ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className={clsx("flex mb-16 items-center relative w-full", {
                "justify-end lg:justify-start": isLeft,
                "lg:col-start-2 lg:flex-row-reverse": !isLeft,
            })}
        >
            {/* Dot & Content Alignment */}
            <div className={clsx("flex flex-col items-center flex-shrink-0 relative z-10", {
                "order-2 lg:order-1 ml-4 lg:ml-0": isLeft,
                "order-2 lg:order-3 mr-4 lg:mr-0": !isLeft,
            })}>
                {/* Dot */}
                <div className="w-6 h-6 rounded-full bg-emerald-600 shadow-xl shadow-emerald-500/60 border-4 border-white flex-shrink-0" />
                {/* Line (Only visible on mobile/single column) */}
                {!isLast && <div className="w-0.5 h-full bg-green-300 absolute top-0 bottom-0 z-0 transform translate-y-6" />}
            </div>
            
            {/* Content Card (Desktop side-switch) */}
            <div className={clsx("p-6 bg-white rounded-xl shadow-lg border-l-4 border-emerald-600 w-full lg:max-w-md transition-all duration-300 hover:shadow-xl", {
                "order-1 lg:order-2 lg:mr-6": isLeft,
                "order-1 lg:order-2 lg:ml-6 border-r-4 border-l-0": !isLeft, // Right-side card uses right border
            })}>
                <span className="text-sm font-extrabold bg-emerald-100 text-emerald-800 py-1 px-3 rounded-full inline-block mb-2 shadow-inner">{year}</span>
                <h3 className="text-xl font-bold text-gray-900 mt-1 mb-2">{title}</h3>
                <p className="text-sm text-gray-600">{description}</p>
            </div>
        </motion.div>
    );
};

// Component for Business Vertical Card (Refined classes)
const BusinessCard = ({ name, products, industry, color }) => (
    <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className={clsx(
            "p-8 border-t-8 shadow-xl transition-all duration-300 bg-white rounded-xl h-full flex flex-col justify-between",
            `border-${color}-600`, // Tailwind requires full class names, use `emerald-600`, `green-600`, etc.
            "hover:shadow-2xl hover:border-b-8 hover:border-opacity-50"
        )}
    >
        <div>
            <h3 className={clsx("text-xl font-extrabold mb-2", `text-${color}-700`)}>{name}</h3>
            <p className="text-xs font-semibold text-gray-500 mb-4 uppercase tracking-widest">{industry}</p>
        </div>
        <div className="border-t border-gray-200 pt-4">
            <p className="text-sm text-gray-700 leading-relaxed">
                <span className="font-bold text-gray-900">Key Focus:</span> {products}
            </p>
        </div>
    </motion.div>
);

// New Component for Interactive Leadership Card (Flip Card)
const LeadershipCard = ({ name, title, role, index }) => {
    const PhotoIcon = User; // Use User icon placeholder
    
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: index * 0.15, duration: 0.6, type: "spring", stiffness: 100 }}
            className="group [perspective:1000px] h-96" // Perspective for 3D flip
        >
            <div className="relative w-full h-full rounded-xl shadow-2xl transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                {/* Front Side */}
                <div className="absolute w-full h-full backface-hidden bg-white p-8 rounded-xl border-t-8 border-emerald-600 text-center flex flex-col items-center justify-center">
                    <div className="mx-auto w-32 h-32 bg-gray-200 rounded-full mb-6 flex items-center justify-center text-gray-500 text-base font-medium border-4 border-emerald-100 overflow-hidden">
                        <PhotoIcon className="w-10 h-10 text-gray-400" />
                    </div>
                    <h3 className="text-2xl font-extrabold text-gray-900 mb-1">{name}</h3>
                    <p className="text-lg font-semibold text-emerald-700 mb-2">{title}</p>
                    <p className="text-sm text-gray-500">Hover for Role Details</p>
                </div>
                
                {/* Back Side */}
                <div className="absolute w-full h-full backface-hidden bg-emerald-700 p-8 rounded-xl border-t-8 border-emerald-900 text-center [transform:rotateY(180deg)] flex flex-col items-center justify-center">
                    <h3 className="text-2xl font-extrabold text-white mb-3">{title}</h3>
                    <p className="text-sm text-emerald-100 leading-relaxed italic">{role}</p>
                    <p className="mt-4 text-xs font-bold text-emerald-200">{name}</p>
                </div>
            </div>
        </motion.div>
    );
};

// Main AboutUs Component
export default function AboutUs() {
  return (
    <div className="pt-36 pb-20 bg-gray-100 text-gray-800 overflow-hidden"> 

      {/* ---------------------------------- */}
      {/* SECTION 1: HEADER & WHO WE ARE     */}
      {/* ---------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center max-w-5xl mx-auto px-6 mb-20"
      >
        <h1 className="text-6xl font-extrabold text-emerald-900 mb-4 leading-tight drop-shadow-md">
          Rajratan Group: Pioneers in Circular Manufacturing
        </h1>
        <p className="text-xl text-gray-600 mt-4 font-light">
          Driving Sustainable Innovation and Industrial Responsibility since 1973.
        </p>
      </motion.div>

      {/* Main Content: Mission & Highlights */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-3 gap-12"
      >
        {/* Text Section */}
        <div className="space-y-6 lg:col-span-2 bg-white p-10 rounded-2xl shadow-3xl border-l-8 border-emerald-600">
          <h2 className="text-3xl font-bold text-emerald-700 pb-3 border-b-2 border-green-200">
            Who We Are
          </h2>
          <p className="leading-relaxed text-lg text-gray-700">
            Rajratan Industries is a forward-thinking organization dedicated to
            <span className="font-bold text-emerald-800"> Sustainable Development</span> and
            eco-friendly industrial practices. Originating in Rajgarh, M.P. and now operating from the Smart Industrial Park in
            <span className="font-bold text-emerald-800"> Pithampur, Madhya Pradesh</span>, we
            deliver innovative solutions that contribute to a cleaner, greener future.
          </p>

          <p className="leading-relaxed text-gray-700">
            With certified excellence in both waste management and
            <span className="font-semibold"> Water Resource Management</span>,
            Rajratan Industries sets benchmarks in responsible operations and environmental stewardship.
            Our expertise extends to providing industrial, environmental, and regulatory solutions to both{" "}
            <span className="font-semibold">Government agencies</span> and leading
            <span className="font-semibold"> Private Corporations</span>.
          </p>
          <div className="mt-8 pt-4 border-t border-green-200">
            <h3 className="font-bold text-xl text-emerald-700 mb-4">Trusted Partners:</h3>
            <ul className="flex flex-wrap gap-x-10 gap-y-3 text-gray-700 font-medium">
              <li className="flex items-center text-lg"><span className="text-emerald-500 mr-2">✓</span> Patanjali</li>
              <li className="flex items-center text-lg"><span className="text-emerald-500 mr-2">✓</span> HUL</li>
              <li className="flex items-center text-lg"><span className="text-emerald-500 mr-2">✓</span> Nestlé India</li>
              <li className="flex items-center text-lg"><span className="text-emerald-500 mr-2">✓</span> And more</li>
            </ul>
          </div>
        </div>

        {/* Side Highlight Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-xl rounded-xl border-t-8 border-emerald-600 transition-all duration-300 cursor-pointer"
          >
            <Leaf className="w-10 h-10 text-emerald-600 mb-3 drop-shadow-lg" />
            <h3 className="font-extrabold text-lg text-emerald-700">PAC® Registered Trademark</h3>
            <p className="text-sm text-gray-600 mt-1">
              Plastic Aluminium Composite engineered boards for sustainable construction.
            </p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-white shadow-xl rounded-xl border-t-8 border-green-600 transition-all duration-300 cursor-pointer"
          >
            <Droplet className="w-10 h-10 text-green-700 mb-3 drop-shadow-lg" />
            <h3 className="font-extrabold text-lg text-green-700">Water Management Focus</h3>
            <p className="text-sm text-gray-600 mt-1">
              Key role since 1994 in promoting conservation via modern irrigation systems.
            </p>
          </motion.div>
        </div>
      </motion.div>

      {/* ---------------------------------- */}
      {/* SECTION 2: THE 7R PHILOSOPHY     */}
      {/* ---------------------------------- */}
      <div className="mt-24 py-20 bg-gradient-to-br from-emerald-50 to-green-100 relative">
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center text-4xl font-extrabold text-emerald-800 mb-16"
            >
                Our Guiding Principle: The 7R Philosophy
            </motion.h2>
            {/* Visual aid for the 7R Circular Economy Model */}
            
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mt-12">
                {R_PHILOSOPHY.map((item, index) => (
                    <motion.div
                        key={item.R}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: index * 0.08, duration: 0.6 }}
                        className="p-5 text-center bg-white shadow-2xl rounded-xl flex flex-col items-center h-full border-b-4 border-emerald-400 transition-shadow hover:shadow-3xl transform hover:scale-[1.02] cursor-default"
                    >
                        <div className="p-3 bg-emerald-100 rounded-full mb-3 shadow-inner">
                           <item.icon className="w-6 h-6 text-emerald-600" />
                        </div>
                        <h3 className="font-extrabold text-lg text-emerald-800 tracking-wide">{item.R}</h3>
                        <p className="text-xs text-gray-600 mt-2 flex-grow">{item.description}</p>
                    </motion.div>
                ))}
            </div>
            <p className="text-center text-sm text-gray-600 mt-10 italic">
                The 7R philosophy ensures every project contributes to resource efficiency and environmental responsibility.
            </p>
        </div>
      </div>
      

      {/* ---------------------------------- */}
      {/* SECTION 3: COMPANY HISTORY TIMELINE */}
      {/* ---------------------------------- */}
      <div className="mt-24 max-w-7xl mx-auto px-6">
          <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-emerald-800 mb-16 text-center"
            >
              Company History Timeline
            </motion.h2>

            <div className="relative">
                {/* Main Timeline Line (Visible on all screens) */}
                <div className="absolute left-0 lg:left-1/2 top-0 bottom-0 w-0.5 bg-green-300 transform lg:-translate-x-1/2 z-0"></div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-0">
                    {HISTORY_TIMELINE.map((item, index) => (
                        <div key={item.year} className={clsx("lg:p-0", {
                            // Alternate sides for a clean horizontal timeline look on large screens
                            "lg:text-right lg:pr-12": index % 2 === 0,
                            "lg:col-start-2 lg:pl-12": index % 2 !== 0
                        })}>
                            <TimelineItem 
                                year={item.year} 
                                title={item.title} 
                                description={item.description} 
                                isLast={index === HISTORY_TIMELINE.length - 1} 
                                side={index % 2 === 0 ? 'left' : 'right'}
                            />
                        </div>
                    ))}
                </div>
            </div>
      </div>
      
      {/* ---------------------------------- */}
      {/* SECTION 4: GROUP BUSINESS VERTICALS */}
      {/* ---------------------------------- */}
      <div className="mt-24 py-16 bg-white shadow-2xl"> 
        <div className="max-w-7xl mx-auto px-6">
            <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-4xl font-extrabold text-emerald-800 mb-16 text-center"
            >
                Group Companies & Business Ecosystem
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {GROUP_COMPANIES.map((company) => (
                    <BusinessCard key={company.name} {...company} />
                ))}
            </div>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* SECTION 5: KEY PERSONNEL         */}
      {/* ---------------------------------- */}
      <div className="mt-24 max-w-7xl mx-auto px-6">
          <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-extrabold text-emerald-800 mb-16 text-center"
            >
              Our Leadership Team
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {LEADERSHIP.map((person, index) => (
                    <LeadershipCard 
                        key={person.name} 
                        name={person.name} 
                        title={person.title} 
                        role={person.role} 
                        index={index}
                    />
                ))}
            </div>
      </div>
    </div>
  );
}