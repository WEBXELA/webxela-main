import React from 'react';
import { motion } from 'framer-motion';
import { Shield, ChevronRight } from 'lucide-react';

const PrivacyPolicyPage = () => {
  const sections = [
    {
      title: "Information We Collect",
      content: [
        "Personal information (name, email, contact details)",
        "Usage data and analytics",
        "Device and browser information",
        "Cookies and tracking technologies"
      ]
    },
    {
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our services",
        "Improve user experience",
        "Send important updates and communications",
        "Analyze usage patterns and optimize performance"
      ]
    },
    {
      title: "Information Sharing",
      content: [
        "Third-party service providers",
        "Legal requirements",
        "Business transfers",
        "With your consent"
      ]
    },
    {
      title: "Data Security",
      content: [
        "Industry-standard security measures",
        "Regular security audits",
        "Employee training and access controls",
        "Encryption of sensitive data"
      ]
    },
    {
      title: "Your Rights",
      content: [
        "Access your personal information",
        "Request data correction",
        "Data portability",
        "Right to be forgotten"
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
              <Shield className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Privacy Policy
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
              At WEBXELA, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you visit our website or use our services. 
              Please read this privacy policy carefully. If you do not agree with the terms of this privacy 
              policy, please do not access the site.
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
                If you have any questions or suggestions about our Privacy Policy, do not hesitate 
                to contact us at privacy@webxela.com or through our contact page.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicyPage;