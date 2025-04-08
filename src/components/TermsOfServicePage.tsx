import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronRight } from 'lucide-react';

const TermsOfServicePage = () => {
  const sections = [
    {
      title: "Agreement to Terms",
      content: [
        "By accessing our website, you agree to these Terms of Service",
        "You acknowledge reading and understanding these terms",
        "You must be at least 18 years old to use our services",
        "You agree to comply with all applicable laws and regulations"
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All content remains the property of WEBXELA",
        "You may not use our content without permission",
        "Trademarks and logos are protected",
        "Your feedback becomes our property"
      ]
    },
    {
      title: "User Responsibilities",
      content: [
        "Maintain accurate account information",
        "Protect your account credentials",
        "Use services responsibly and legally",
        "Report unauthorized access immediately"
      ]
    },
    {
      title: "Service Modifications",
      content: [
        "We may modify services at any time",
        "Changes will be communicated when possible",
        "We may discontinue features or services",
        "Pricing may be adjusted with notice"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Services provided 'as is'",
        "No warranty of uninterrupted service",
        "Not liable for indirect damages",
        "Force majeure events excluded"
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
              <FileText className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Terms of Service
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
              These Terms of Service ("Terms") govern your access to and use of WEBXELA's website 
              and services. By using our services, you agree to be bound by these Terms. Please 
              read them carefully before using our services.
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
                If you have any questions about these Terms of Service, please contact us at 
                legal@webxela.com or through our contact page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfServicePage;