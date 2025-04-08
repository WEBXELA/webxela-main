import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import {
  Menu,
  X,
  ChevronRight,
  Brain,
  Cloud,
  Code,
  Smartphone,
  Server,
  Workflow,
  ChevronDown,
  ExternalLink,
  Shield,
  Key,
  Settings
} from 'lucide-react';

const menuItems = [
  { title: "Home", path: "/" },
  {
    title: "Solutions",
    path: "/solutions",
    items: [
      { name: "AI Solutions", icon: Brain, color: "#6366F1", description: "Transform your business with AI and ML solutions", path: "/solutions/ai" },
      { name: "SaaS Development", icon: Cloud, color: "#8B5CF6", description: "Build scalable cloud-native applications", path: "/solutions/saas" },
      { name: "Cloud Services", icon: Server, color: "#EC4899", description: "Modernize your infrastructure with cloud solutions", path: "/solutions/cloud" },
      { name: "DevOps Excellence", icon: Workflow, color: "#10B981", description: "Streamline development and deployment", path: "/solutions/devops" },
      { name: "Web Development", icon: Code, color: "#F59E0B", description: "Create stunning web applications", path: "/solutions/web" },
      { name: "App Development", icon: Smartphone, color: "#3B82F6", description: "Develop native and cross-platform apps", path: "/solutions/app" },
      { name: "Security Solutions", icon: Shield, color: "#2A2AE1", description: "Protect your digital assets", path: "/solutions/security" },
      { name: "Identity & Access", icon: Key, color: "#4747E5", description: "Secure authentication and authorization", path: "/solutions/identity" },
      { name: "System Integration", icon: Settings, color: "#6B6BFF", description: "Connect and optimize your systems", path: "/solutions/integration" }
    ]
  },
  { title: "About", path: "/about" },
  { 
    title: "Careers",
    path: "https://careers.webxela.com",
    external: true
  },
  { title: "Contact", path: "/contact" }
];

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileSubmenuOpen, setMobileSubmenuOpen] = useState(false);
  const location = useLocation();

  const menuVariants = {
    closed: {
      opacity: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    },
    open: {
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      }
    }
  };

  const submenuVariants = {
    closed: {
      height: 0,
      opacity: 0,
    },
    open: {
      height: "auto",
      opacity: 1,
    }
  };

  const itemVariants = {
    closed: { opacity: 0 },
    open: { opacity: 1 }
  };

  const handleExternalLink = (url: string) => {
    window.open(url, '_blank');
  };

  const handleSolutionClick = () => {
    setActiveDropdown(null);
    setMobileSubmenuOpen(false);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Link to="/">
                <img 
                  src="https://raw.githubusercontent.com/WEBXELA/brand-images/e84c6074fba81c45b6ee4f0e57ac798890e6c352/logo/webxela-logo.svg" 
                  alt="WEBXELA" 
                  className="h-7"
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <div className="flex items-center space-x-8">
                {menuItems.map((item) => (
                  <div
                    key={item.title}
                    className="relative"
                    onMouseEnter={() => item.items && setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.external ? (
                      <button
                        onClick={() => handleExternalLink(item.path)}
                        className="text-gray-700 hover:text-[#2A2AE1] transition-colors flex items-center gap-2"
                      >
                        {item.title}
                        <ExternalLink className="w-3 h-3" />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => item.title === "Solutions" && handleSolutionClick()}
                        className={`text-gray-700 hover:text-[#2A2AE1] transition-colors flex items-center gap-2 ${
                          location.pathname === item.path ? 'text-[#2A2AE1]' : ''
                        }`}
                      >
                        {item.title}
                        {item.items && <ChevronDown className="w-4 h-4" />}
                      </Link>
                    )}
                  </div>
                ))}
                <button className="bg-[#2A2AE1] text-white px-6 py-2 rounded-full hover:bg-[#2424B8] transition-all duration-300 flex items-center gap-2 group">
                  Get Started
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 flex items-center justify-center"
              >
                <Menu className="h-6 w-6 text-gray-700" />
              </button>
            </div>
          </div>
        </div>

        {/* Fullscreen Desktop Dropdown */}
        <AnimatePresence>
          {activeDropdown === "Solutions" && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="absolute left-0 right-0 bg-white border-b border-gray-100 shadow-lg max-h-[calc(100vh-4rem)] overflow-y-auto"
              onMouseEnter={() => setActiveDropdown("Solutions")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <div className="max-w-7xl mx-auto px-4 py-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {menuItems[1].items?.map((item) => (
                    <Link
                      key={item.name}
                      to={item.path}
                      onClick={handleSolutionClick}
                      className="group p-4 rounded-xl hover:bg-gray-50 transition-all duration-300"
                    >
                      <div
                        className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                        style={{ backgroundColor: `${item.color}15` }}
                      >
                        <item.icon
                          className="w-6 h-6"
                          style={{ color: item.color }}
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex items-center text-[#2A2AE1] font-medium group-hover:translate-x-2 transition-transform">
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1" />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 bg-white z-50 overflow-y-auto"
          >
            <div className="min-h-screen">
              <div className="flex justify-between items-center px-6 h-16 border-b border-gray-100">
                <Link to="/" onClick={() => setIsMenuOpen(false)}>
                  <img 
                    src="https://raw.githubusercontent.com/WEBXELA/brand-images/e84c6074fba81c45b6ee4f0e57ac798890e6c352/logo/webxela-logo.svg" 
                    alt="WEBXELA" 
                    className="h-4"
                  />
                </Link>
                <button 
                  onClick={() => setIsMenuOpen(false)}
                  className="w-10 h-10 flex items-center justify-center"
                >
                  <X className="h-6 w-6 text-gray-700" />
                </button>
              </div>

              <div className="px-6 py-8">
                {menuItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    initial="closed"
                    animate="open"
                    transition={{ delay: index * 0.1 }}
                    className="mb-8"
                  >
                    {item.items ? (
                      <div>
                        <button
                          onClick={() => setMobileSubmenuOpen(!mobileSubmenuOpen)}
                          className="flex items-center justify-between w-full text-3xl font-bold text-gray-900 mb-2 hover:text-[#2A2AE1] transition-colors"
                        >
                          {item.title}
                          <ChevronDown
                            className={`w-6 h-6 transition-transform ${
                              mobileSubmenuOpen ? 'rotate-180' : ''
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileSubmenuOpen && (
                            <motion.div
                              initial="closed"
                              animate="open"
                              exit="closed"
                              variants={submenuVariants}
                              className="overflow-hidden"
                            >
                              <div className="space-y-4 mt-4">
                                {item.items.map((subItem) => (
                                  <Link
                                    key={subItem.name}
                                    to={subItem.path}
                                    className="flex items-center gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors border border-gray-100"
                                    onClick={handleSolutionClick}
                                  >
                                    <div
                                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                                      style={{ backgroundColor: `${subItem.color}15` }}
                                    >
                                      <subItem.icon
                                        className="w-6 h-6"
                                        style={{ color: subItem.color }}
                                      />
                                    </div>
                                    <div className="flex-1">
                                      <p className="text-xl font-medium text-gray-900">{subItem.name}</p>
                                      <p className="text-gray-600">{subItem.description}</p>
                                    </div>
                                    <ChevronRight className="w-6 h-6 text-gray-400" />
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      item.external ? (
                        <button
                          onClick={() => handleExternalLink(item.path)}
                          className="text-3xl font-bold text-gray-900 block hover:text-[#2A2AE1] transition-colors flex items-center gap-3"
                        >
                          {item.title}
                          <ExternalLink className="w-4 h-4" />
                        </button>
                      ) : (
                        <Link
                          to={item.path}
                          className="text-3xl font-bold text-gray-900 block hover:text-[#2A2AE1] transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.title}
                        </Link>
                      )
                    )}
                  </motion.div>
                ))}

                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  transition={{ delay: menuItems.length * 0.1 }}
                  className="mt-12"
                >
                  <button className="w-full bg-[#2A2AE1] text-white py-4 rounded-xl text-lg font-semibold hover:bg-[#2424B8] transition-colors flex items-center justify-center gap-2 group">
                    Get Started
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;