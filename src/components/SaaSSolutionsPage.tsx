import React from 'react';
import { motion } from 'framer-motion';
import {
  Cloud,
  ChevronRight,
  ArrowRight,
  CheckCircle2,
  Database,
  Lock,
  Users,
  LineChart,
  Settings,
  Zap,
  Globe,
  Layers,
  Shield,
  Gauge,
  Clock,
  Server
} from 'lucide-react';

const SaaSSolutionsPage = () => {
  const features = [
    {
      title: "Multi-tenant Architecture",
      description: "Secure and scalable infrastructure designed for multiple customers",
      icon: Users,
      color: "#6366F1",
      benefits: [
        "Isolated Customer Data",
        "Resource Optimization",
        "Flexible Scaling",
        "Cost-effective Operations"
      ]
    },
    {
      title: "Security & Compliance",
      description: "Enterprise-grade security with industry compliance standards",
      icon: Shield,
      color: "#8B5CF6",
      benefits: [
        "End-to-end Encryption",
        "GDPR Compliance",
        "Regular Security Audits",
        "Access Control"
      ]
    },
    {
      title: "API Integration",
      description: "Robust API infrastructure for seamless third-party integration",
      icon: Globe,
      color: "#EC4899",
      benefits: [
        "RESTful APIs",
        "GraphQL Support",
        "Webhook Integration",
        "API Documentation"
      ]
    },
    {
      title: "Analytics & Reporting",
      description: "Comprehensive analytics and reporting capabilities",
      icon: LineChart,
      color: "#10B981",
      benefits: [
        "Real-time Analytics",
        "Custom Dashboards",
        "Export Capabilities",
        "Data Visualization"
      ]
    }
  ];

  const architectureComponents = [
    {
      title: "Database Management",
      description: "Scalable and reliable data storage solutions",
      icon: Database,
      color: "#0EA5E9"
    },
    {
      title: "Authentication",
      description: "Secure user authentication and authorization",
      icon: Lock,
      color: "#F97316"
    },
    {
      title: "Performance",
      description: "Optimized for high-performance operations",
      icon: Gauge,
      color: "#8B5CF6"
    },
    {
      title: "Microservices",
      description: "Modular and maintainable architecture",
      icon: Layers,
      color: "#10B981"
    }
  ];

  const benefits = [
    {
      title: "Rapid Development",
      description: "Accelerate your development cycle with our proven frameworks and tools",
      icon: Zap,
      color: "#2A2AE1"
    },
    {
      title: "Scalable Infrastructure",
      description: "Built to grow with your business needs",
      icon: Server,
      color: "#4747E5"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: Clock,
      color: "#6B6BFF"
    },
    {
      title: "Custom Configuration",
      description: "Tailored solutions to match your specific requirements",
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2070')] opacity-5" />
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
              Build Scalable
              <span className="block text-gradient">SaaS Solutions</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Transform your ideas into powerful SaaS applications with our comprehensive 
              development solutions. From architecture to deployment, we've got you covered.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-[#2A2AE1] text-white px-8 py-4 rounded-full hover:bg-[#2424B8] transition flex items-center justify-center gap-2 group">
                Start Building
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-50 transition border-2 border-[#2A2AE1]">
                View Documentation
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Powerful <span className="text-gradient">Features</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build and scale your SaaS application
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8"
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
                <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                <p className="text-gray-600 mb-6">{feature.description}</p>
                
                <ul className="space-y-3">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <motion.li
                      key={benefitIndex}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: index * 0.1 + benefitIndex * 0.1 }}
                      className="flex items-center gap-2 text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture Components */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Enterprise-Grade <span className="text-gradient">Architecture</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built for scale with enterprise-level security and performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {architectureComponents.map((component, index) => (
              <motion.div
                key={component.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="enhanced-border p-8"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${component.color}15` }}
                >
                  <component.icon 
                    className="w-8 h-8"
                    style={{ color: component.color }}
                  />
                </div>
                <h3 className="text-xl font-bold mb-3">{component.title}</h3>
                <p className="text-gray-600">{component.description}</p>
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
              Why Choose Our <span className="text-gradient">SaaS Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the benefits of our enterprise-ready SaaS development platform
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
                Ready to Build Your SaaS Solution?
              </h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Let's discuss how we can help you create a successful SaaS product
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

export default SaaSSolutionsPage;