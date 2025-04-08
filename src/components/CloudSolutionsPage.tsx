import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  Server,
  Shield,
  Gauge,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Database,
  Lock,
  Globe,
  Zap,
  Settings,
  LineChart,
  Clock,
  Workflow
} from 'lucide-react';

const CloudSolutionsPage = () => {
  const solutions = [
    {
      title: "Cloud Migration",
      description: "Seamlessly transition your infrastructure to the cloud with our expert migration services.",
      icon: Cloud,
      color: "#6366F1",
      features: [
        "Assessment & Planning",
        "Data Migration",
        "Application Migration",
        "Zero-Downtime Transfer",
        "Post-Migration Support",
        "Performance Optimization"
      ]
    },
    {
      title: "Infrastructure as Code",
      description: "Automate your infrastructure deployment with modern IaC practices.",
      icon: Server,
      color: "#8B5CF6",
      features: [
        "Terraform Implementation",
        "Version Control",
        "Automated Deployment",
        "Infrastructure Testing",
        "Configuration Management",
        "Resource Optimization"
      ]
    },
    {
      title: "Cloud Security",
      description: "Protect your cloud infrastructure with enterprise-grade security solutions.",
      icon: Shield,
      color: "#EC4899",
      features: [
        "Security Assessment",
        "Compliance Management",
        "Access Control",
        "Data Encryption",
        "Threat Detection",
        "Security Monitoring"
      ]
    },
    {
      title: "Performance Optimization",
      description: "Maximize your cloud infrastructure efficiency and performance.",
      icon: Gauge,
      color: "#10B981",
      features: [
        "Load Balancing",
        "Auto-scaling",
        "Cache Optimization",
        "Cost Management",
        "Resource Allocation",
        "Performance Monitoring"
      ]
    }
  ];

  const features = [
    {
      title: "Multi-Cloud Strategy",
      description: "Leverage multiple cloud providers for optimal performance and redundancy",
      icon: Globe,
      color: "#0EA5E9"
    },
    {
      title: "Automated Scaling",
      description: "Dynamic resource allocation based on demand",
      icon: Workflow,
      color: "#F97316"
    },
    {
      title: "24/7 Monitoring",
      description: "Continuous monitoring and instant alerts",
      icon: Clock,
      color: "#8B5CF6"
    },
    {
      title: "Cost Management",
      description: "Optimize cloud spending with detailed analytics",
      icon: LineChart,
      color: "#10B981"
    }
  ];

  const benefits = [
    {
      title: "Rapid Deployment",
      description: "Get your applications to market faster with automated deployment pipelines",
      icon: Zap,
      color: "#2A2AE1"
    },
    {
      title: "Enhanced Security",
      description: "Enterprise-grade security with compliance standards",
      icon: Lock,
      color: "#4747E5"
    },
    {
      title: "Scalable Architecture",
      description: "Build systems that grow with your business needs",
      icon: Database,
      color: "#6B6BFF"
    },
    {
      title: "Custom Solutions",
      description: "Tailored cloud solutions for your specific requirements",
      icon: Settings,
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2070')] opacity-5" />
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
              <Cloud className="w-10 h-10 text-[#2A2AE1]" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Enterprise Cloud
              <span className="block text-gradient">Infrastructure Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your business with scalable, secure, and efficient cloud infrastructure.
              Built for enterprise needs, optimized for performance.
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
                Schedule Demo
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
              Enterprise-Grade <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale with enterprise-level security and performance
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
              Why Choose Our <span className="text-gradient">Cloud Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of our enterprise-ready cloud infrastructure
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
                Ready to Transform Your Infrastructure?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Let's discuss how our cloud solutions can help you achieve your goals
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

export default CloudSolutionsPage;