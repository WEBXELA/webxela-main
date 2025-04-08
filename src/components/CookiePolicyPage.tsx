import React from 'react';
import { motion } from 'framer-motion';
import { Cookie, ChevronRight } from 'lucide-react';

const CookiePolicyPage = () => {
  const sections = [
    {
      title: "What Are Cookies",
      content: [
        "Small text files stored on your device",
        "Help remember your preferences",
        "Track website usage and performance",
        "Enable certain website functionalities"
      ]
    },
    {
      title: "Types of Cookies We Use",
      content: [
        "Essential cookies for basic functionality",
        "Performance cookies for analytics",
        "Functionality cookies for user preferences",
        "Targeting cookies for advertising"
      ]
    },
    {
      title: "How We Use Cookies",
      content: [
        "Improve website performance",
        "Enhance user experience",
        "Remember user preferences",
        "Analyze site traffic and usage"
      ]
    },
    {
      title: "Managing Cookies",
      content: [
        "Browser settings to control cookies",
        "Option to reject non-essential cookies",
        "Third-party tools for cookie management",
        "Impact of disabling cookies"
      ]
    },
    {
      title: "Third-Party Cookies",
      content: [
        "Analytics providers",
        "Advertising partners",
        "Social media platforms",
        "External service integrations"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="w-20 h-20 rounded-2xl bg-[#2A2AE1]/10 flex items-center justify-center mx-auto mb-8"
            >
              <Cookie className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Cookie Policy
            </h1>
            <p className="text-xl text-gray-600">
              Last updated: March 15, 2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-12">
              This Cookie Policy explains how WEBXELA uses cookies and similar technologies 
              to recognize you when you visit our website. It explains what these technologies 
              are and why we use them, as well as your rights to control our use of them.
            </p>

            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.content.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <ChevronRight className="w-5 h-5 text-[#2A2AE1] flex-shrink-0 mt-1" />
                      <span className="text-gray-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mt-12"
            >
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>
              <p className="text-gray-600">
                If you have any questions about our Cookie Policy, please contact us at 
                privacy@webxela.com or through our contact page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicyPage;