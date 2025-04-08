import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle, ChevronRight } from 'lucide-react';

const DisclaimerPage = () => {
  const sections = [
    {
      title: "Website Content",
      content: [
        "Information provided 'as is'",
        "No guarantee of accuracy or completeness",
        "Subject to change without notice",
        "Use at your own risk"
      ]
    },
    {
      title: "Professional Advice",
      content: [
        "Not a substitute for professional advice",
        "Consult qualified professionals",
        "Individual circumstances may vary",
        "Results not guaranteed"
      ]
    },
    {
      title: "External Links",
      content: [
        "No control over external websites",
        "Not responsible for third-party content",
        "Links provided for convenience only",
        "No endorsement implied"
      ]
    },
    {
      title: "Technical Issues",
      content: [
        "Website may be temporarily unavailable",
        "No guarantee of uninterrupted access",
        "Technical errors may occur",
        "Regular maintenance periods"
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Verify information independently",
        "Use appropriate security measures",
        "Report issues promptly",
        "Comply with terms of use"
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
              <AlertTriangle className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Disclaimer
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
              This disclaimer ("Disclaimer") sets forth the general guidelines, disclosures, 
              and terms of use for the WEBXELA website. This Disclaimer is a legally binding 
              agreement between you ("User", "you" or "your") and WEBXELA ("Company", "we", 
              "us" or "our").
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
                If you have any questions about this Disclaimer, please contact us at 
                legal@webxela.com or through our contact page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DisclaimerPage;