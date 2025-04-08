import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ChevronRight } from 'lucide-react';

const SitemapPage = () => {
  const siteStructure = [
    {
      title: "Main Pages",
      links: [
        { name: "Home", path: "/" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Solutions",
      links: [
        { name: "AI Solutions", path: "/solutions/ai" },
        { name: "SaaS Development", path: "/solutions/saas" },
        { name: "Cloud Services", path: "/solutions/cloud" },
        { name: "DevOps Solutions", path: "/solutions/devops" },
        { name: "Web Development", path: "/solutions/web" },
        { name: "App Development", path: "/solutions/app" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", path: "/privacy-policy" },
        { name: "Terms of Service", path: "/terms-of-service" },
        { name: "Cookie Policy", path: "/cookie-policy" },
        { name: "Disclaimer", path: "/disclaimer" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", path: "/blog" },
        { name: "Documentation", path: "/docs" },
        { name: "Support", path: "/support" },
        { name: "FAQ", path: "/faq" }
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
              <Map className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Sitemap
            </h1>
            <p className="text-xl text-gray-600">
              Find everything on our website
            </p>
          </motion.div>
        </div>
      </section>

      {/* Sitemap Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {siteStructure.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8"
              >
                <h2 className="text-2xl font-bold mb-6">{section.title}</h2>
                <ul className="space-y-4">
                  {section.links.map((link, linkIndex) => (
                    <motion.li
                      key={linkIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + linkIndex * 0.1 }}
                    >
                      <Link
                        to={link.path}
                        className="flex items-center gap-2 text-gray-600 hover:text-[#2A2AE1] transition-colors group"
                      >
                        <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        {link.name}
                      </Link>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SitemapPage;