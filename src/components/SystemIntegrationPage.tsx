import React from 'react';
import { motion } from 'framer-motion';
import {
  Settings,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Network,
  Database,
  Code,
  Workflow,
  Cloud,
  Zap,
  Clock,
  Shield,
  Share2,
  Layers,
  GitBranch,
  Server
} from 'lucide-react';

const SystemIntegrationPage = () => {
  const solutions = [
    {
      title: "API Integration",
      description: "Seamless integration of systems through robust API development.",
      icon: Code,
      color: "#6366F1",
      features: [
        "RESTful APIs",
        "GraphQL Solutions",
        "API Gateway",
        "Microservices",
        "Documentation",
        "Version Control"
      ]
    },
    {
      title: "Data Integration",
      description: "Connect and synchronize data across multiple systems.",
      icon: Database,
      color: "#8B5CF6",
      features: [
        "ETL Processing",
        "Data Migration",
        "Real-time Sync",
        "Data Mapping",
        "Quality Control",
        "Master Data Management"
      ]
    },
    {
      title: "Enterprise Integration",
      description: "Connect enterprise applications and systems seamlessly.",
      icon: Network,
      color: "#EC4899",
      features: [
        "ERP Integration",
        "CRM Integration",
        "Legacy Systems",
        "Cloud Services",
        "Workflow Automation",
        "Business Process Integration"
      ]
    },
    {
      title: "Integration Platform",
      description: "Unified platform for managing all integrations.",
      icon: Layers,
      color: "#10B981",
      features: [
        "iPaaS Solutions",
        "Monitoring Tools",
        "Error Handling",
        "Security Controls",
        "Analytics Dashboard",
        "Scalable Architecture"
      ]
    }
  ];

  const features = [
    {
      title: "Automated Workflows",
      description: "Streamlined business processes",
      icon: Workflow,
      color: "#0EA5E9"
    },
    {
      title: "Real-time Sync",
      description: "Instant data synchronization",
      icon: Share2,
      color: "#F97316"
    },
    {
      title: "Version Control",
      description: "Managed integration versions",
      icon: GitBranch,
      color: "#8B5CF6"
    },
    {
      title: "Cloud Ready",
      description: "Cloud-native integration",
      icon: Cloud,
      color: "#10B981"
    }
  ];

  const benefits = [
    {
      title: "Fast Integration",
      description: "Rapid system connection",
      icon: Zap,
      color: "#2A2AE1"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous system oversight",
      icon: Clock,
      color: "#4747E5"
    },
    {
      title: "Secure Transfer",
      description: "Protected data exchange",
      icon: Shield,
      color: "#6B6BFF"
    },
    {
      title: "Scalable Systems",
      description: "Growth-ready architecture",
      icon: Server,
      color: "#2A2AE1"
    }
  ];

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=2070')] opacity-5" />
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
              <Settings className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              System Integration
              <span className="block text-gradient">Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Connect and optimize your business systems with our comprehensive
              integration solutions. From APIs to enterprise applications, we make
              integration seamless.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-[#2A2AE1] text-white px-8 py-4 rounded-full hover:bg-[#2424B8] transition flex items-center justify-center gap-2 group">
                Get Started
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-50 transition border-2 border-[#2A2AE1]">
                View Solutions
              </button>
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
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${solution.color}15` }}
                >
                  <solution.icon 
                    className="w-8 h-8"
                    style={{ color: solution.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{solution.title}</h3>
                <p className="text-gray-600 mb-6">{solution.description}</p>
                
                <ul className="space-y-3">
                  {solution.features.map((feature, featureIndex) => (
                    <motion.li
                      key={featureIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + featureIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ x: 10 }}
                  className="mt-8 flex items-center gap-2 text-[#2A2AE1] font-semibold"
                >
                  Learn more
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Integration <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features for seamless system integration
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="enhanced-border p-8"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${feature.color}15` }}
                >
                  <feature.icon 
                    className="w-8 h-8"
                    style={{ color: feature.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Why Choose Our <span className="text-gradient">Integration Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of our enterprise-ready integration platform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8 text-center"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${benefit.color}15` }}
                >
                  <benefit.icon 
                    className="w-8 h-8"
                    style={{ color: benefit.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
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
                Ready to Connect Your Systems?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Let's discuss how our integration solutions can help streamline your operations
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

export default SystemIntegrationPage;