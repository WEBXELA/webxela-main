import React from 'react';
import { motion } from 'framer-motion';
import {
  Users,
  Target,
  Rocket,
  Award,
  Globe2,
  Heart,
  Lightbulb,
  Zap,
  CheckCircle2,
  ArrowRight,
  ChevronRight
} from 'lucide-react';

const AboutPage = () => {
  const stats = [
    { number: "15+", label: "Years Experience", icon: Award, color: "#6366F1" },
    { number: "500+", label: "Global Clients", icon: Globe2, color: "#8B5CF6" },
    { number: "98%", label: "Client Satisfaction", icon: Heart, color: "#EC4899" },
    { number: "24/7", label: "Support Available", icon: Users, color: "#10B981" },
  ];

  const values = [
    {
      icon: Target,
      title: "Mission-Driven",
      description: "We're on a mission to transform businesses through innovative technology solutions that drive real impact.",
      color: "#6366F1"
    },
    {
      icon: Heart,
      title: "Client-Focused",
      description: "Your success is our success. We build lasting partnerships by delivering exceptional value and support.",
      color: "#8B5CF6"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "We stay ahead of the curve, embracing emerging technologies to solve complex challenges creatively.",
      color: "#EC4899"
    },
    {
      icon: Zap,
      title: "Excellence Always",
      description: "We maintain the highest standards in everything we do, from code quality to client communication.",
      color: "#10B981"
    }
  ];

  const achievements = [
    {
      title: "Industry Recognition",
      description: "Named Top Cloud Solutions Provider 2025",
      icon: Award,
      color: "#6366F1"
    },
    {
      title: "Global Reach",
      description: "Serving clients across 25+ countries",
      icon: Globe2,
      color: "#8B5CF6"
    },
    {
      title: "Client Success",
      description: "98% client retention rate",
      icon: Heart,
      color: "#EC4899"
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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2072')] opacity-5" />
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
              className="w-20 h-20 rounded-2xl bg-blue-500/10 flex items-center justify-center mx-auto mb-8"
            >
              <Rocket className="w-10 h-10 text-blue-600" />
            </motion.div>
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Pioneering the Future of
              <span className="block text-gradient">Digital Innovation</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              We're not just another technology company. We're a team of passionate innovators, 
              dreamers, and problem-solvers dedicated to transforming businesses through 
              cutting-edge technology solutions.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <button className="bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition flex items-center justify-center gap-2 group">
                Learn More
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="bg-white text-blue-600 px-8 py-4 rounded-full hover:bg-gray-50 transition border-2 border-blue-600">
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8 text-center group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl mx-auto mb-6 flex items-center justify-center transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${stat.color}15` }}
                >
                  <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                </div>
                <h3 className="text-4xl font-bold mb-2 gradient-text">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
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
          className="absolute -top-1/2 -left-1/2 w-full h-full bg-[#0062F7]/5 rounded-full blur-3xl"
        />
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="solution-card p-8"
            >
              <h2 className="text-4xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Founded in 2009, WEBXELA emerged from a simple yet powerful vision: to make 
                cutting-edge technology accessible to businesses of all sizes. What started 
                as a small team of passionate developers has grown into a global technology 
                powerhouse, serving clients across 25+ countries.
              </p>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Our journey has been defined by continuous innovation, unwavering commitment 
                to excellence, and a deep understanding of our clients' needs. We've evolved 
                from a cloud solutions provider to a comprehensive technology partner, 
                leading the charge in AI, machine learning, and digital transformation.
              </p>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="flex items-center gap-4 p-4 enhanced-border group hover:scale-105 transition-transform"
                  >
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${achievement.color}15` }}
                    >
                      <achievement.icon className="w-6 h-6" style={{ color: achievement.color }} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{achievement.title}</h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="solution-card overflow-hidden h-full">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800"
                  alt="Team collaboration"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0062F7]/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our Core <span className="text-gradient">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our values shape everything we do, from how we develop solutions to 
              how we serve our clients and support our team members.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8 group"
              >
                <div 
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                  style={{ backgroundColor: `${value.color}15` }}
                >
                  <value.icon className="w-8 h-8" style={{ color: value.color }} />
                </div>
                <h3 className="text-2xl font-bold mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
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
              <h2 className="text-4xl font-bold mb-6 text-white">Join Our Journey</h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Be part of our mission to shape the future of technology. Whether you're 
                looking to transform your business or join our team, we'd love to hear from you.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-100 transition flex items-center justify-center gap-2 group"
                >
                  Partner With Us
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-full hover:bg-white/10 transition flex items-center justify-center gap-2 group"
                >
                  View Careers
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;