import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Brain,
  Cloud,
  Code,
  Smartphone,
  Server,
  Workflow,
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Shield,
  Lock,
  Settings,
  Database
} from 'lucide-react';

const solutions = [
  {
    title: "AI Solutions",
    description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
    icon: Brain,
    color: "#6366F1",
    path: "/solutions/ai",
    features: [
      "Custom ML Models",
      "Natural Language Processing",
      "Computer Vision Systems",
      "AI Integration Services",
      "Predictive Analytics",
      "Automated Decision Systems"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/ea17ae79b99627936949c400cdfc97d70316c397/solutions/ai-solutions-webxela.svg"
  },
  {
    title: "SaaS Development",
    description: "Build scalable, cloud-native software solutions that drive business growth.",
    icon: Cloud,
    color: "#8B5CF6",
    path: "/solutions/saas",
    features: [
      "Multi-tenant Architecture",
      "API Development",
      "Subscription Management",
      "User Analytics",
      "Custom Dashboards",
      "Third-party Integrations"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/e8bbd16c5b968749f98805610e3438f693bcec5f/solutions/saas-solutions-webxela.svg"
  },
  {
    title: "Cloud Services",
    description: "Modernize your infrastructure with comprehensive cloud solutions.",
    icon: Server,
    color: "#EC4899",
    path: "/solutions/cloud",
    features: [
      "Cloud Migration",
      "Infrastructure as Code",
      "Cost Optimization",
      "24/7 Monitoring",
      "Disaster Recovery",
      "Security Compliance"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/ea17ae79b99627936949c400cdfc97d70316c397/solutions/cloud-computing-solutions-webxela.svg"
  },
  {
    title: "DevOps Excellence",
    description: "Streamline development with automated pipelines and infrastructure management.",
    icon: Workflow,
    color: "#10B981",
    path: "/solutions/devops",
    features: [
      "CI/CD Implementation",
      "Container Orchestration",
      "Infrastructure Automation",
      "Performance Monitoring",
      "Security Integration",
      "Configuration Management"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/ea17ae79b99627936949c400cdfc97d70316c397/solutions/devops-solutions-webxela.svg"
  },
  {
    title: "Web Development",
    description: "Create stunning, responsive web applications with modern technologies.",
    icon: Code,
    color: "#F59E0B",
    path: "/solutions/web",
    features: [
      "React/Next.js Apps",
      "Vue/Nuxt.js Solutions",
      "Progressive Web Apps",
      "Performance Optimization",
      "SEO Enhancement",
      "Accessibility Standards"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/ea17ae79b99627936949c400cdfc97d70316c397/solutions/web-development-solutions-webxela.svg"
  },
  {
    title: "App Development",
    description: "Develop native and cross-platform mobile applications.",
    icon: Smartphone,
    color: "#3B82F6",
    path: "/solutions/app",
    features: [
      "iOS Development",
      "Android Development",
      "React Native Apps",
      "Flutter Solutions",
      "App Store Optimization",
      "Mobile Analytics"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/ea17ae79b99627936949c400cdfc97d70316c397/solutions/app-development-solutions-webxela.svg"
  },
  {
    title: "Security Solutions",
    description: "Protect your digital assets with enterprise-grade security measures.",
    icon: Shield,
    color: "#2A2AE1",
    path: "/solutions/security",
    features: [
      "Threat Detection",
      "Security Audits",
      "Compliance Management",
      "Data Protection",
      "Access Control",
      "Security Training"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/752663304424cb4bde4f5a1138d4bb1dc936b787/solutions/security-solutions-webxela.svg"
  },
  {
    title: "Identity & Access",
    description: "Implement secure authentication and authorization systems.",
    icon: Lock,
    color: "#4747E5",
    path: "/solutions/identity",
    features: [
      "SSO Integration",
      "Multi-factor Auth",
      "Access Control",
      "User Management",
      "Identity Governance",
      "Compliance"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/752663304424cb4bde4f5a1138d4bb1dc936b787/solutions/authentication-solutions-webxela.svg"
  },
  {
    title: "System Integration",
    description: "Connect and optimize your business systems for seamless operations.",
    icon: Settings,
    color: "#6B6BFF",
    path: "/solutions/integration",
    features: [
      "API Integration",
      "Workflow Automation",
      "Legacy System Integration",
      "Data Migration",
      "Process Optimization",
      "Custom Solutions"
    ],
    image: "https://raw.githubusercontent.com/WEBXELA/brand-images/752663304424cb4bde4f5a1138d4bb1dc936b787/solutions/system-integration-d-solutions-webxela.svg"
  }
];

const SolutionsPage = () => {
  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50" />
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070')] opacity-5" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Innovative Solutions for
              <span className="block text-gradient">Digital Excellence</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with our comprehensive suite of technology solutions.
              From AI integration to cloud infrastructure, we deliver excellence at every step.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link
                to="/contact"
                className="bg-[#2A2AE1] text-white px-8 py-4 rounded-full hover:bg-[#2424B8] transition flex items-center justify-center gap-2 group"
              >
                Start Building
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://calendly.com/webxela/demo"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-50 transition border-2 border-[#2A2AE1]"
              >
                Book a Demo
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="py-20 bg-gray-50 relative overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#2A2AE1]/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [45, 0, 45],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-purple-500/5 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to={solution.path}
                className="block transform transition-all duration-300 hover:-translate-y-2"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="solution-card group h-full cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <div className="aspect-[16/9]">
                      <img
                        src={solution.image}
                        alt={solution.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <div 
                      className="absolute top-4 left-4 rounded-xl w-12 h-12 flex items-center justify-center"
                      style={{ backgroundColor: `${solution.color}15` }}
                    >
                      <solution.icon 
                        className="w-6 h-6"
                        style={{ color: solution.color }}
                      />
                    </div>
                  </div>

                  <div className="p-8">
                    <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                    <p className="text-gray-600 mb-6">{solution.description}</p>

                    <div className="space-y-3 mb-8">
                      {solution.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                          className="flex items-center gap-2 text-gray-700"
                        >
                          <CheckCircle2 
                            className="w-5 h-5" 
                            style={{ color: solution.color }}
                          />
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="flex items-center gap-2 text-[#2A2AE1] font-semibold group">
                      Learn more
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                    </div>
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-[#2A2AE1] via-[#4747E5] to-[#6B6BFF] rounded-3xl p-12 text-center relative overflow-hidden"
          >
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 180, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-2xl"
            />
            
            <div className="relative z-10">
              <h2 className="text-4xl font-bold mb-6 text-white">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Let's discuss how our solutions can help you achieve your goals
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold inline-flex items-center gap-2"
              >
                Schedule a Consultation
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default SolutionsPage;