import React, { useState, useEffect } from 'react';
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  ChevronRight, Cloud, Brain, Sparkles, Notebook as Robot, 
  Cpu, Network, Star, Quote, Users, GitBranch, Building2, 
  ArrowRight, CheckCircle2, Zap, Code, Globe, Smartphone,
  Database, Server, Workflow, Shield, Lock, Settings
} from 'lucide-react';

function HomePage() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const floatingBgControls = useAnimation();

  const testimonials = [
    {
      quote: "WEBXELA transformed our cloud infrastructure, reducing costs by 40% while improving performance. Their expertise in AI integration has given us a competitive edge.",
      author: "Sarah Chen",
      position: "CTO",
      company: "TechVision Inc.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    },
    {
      quote: "The team's deep understanding of cloud architecture and AI solutions helped us scale our operations seamlessly. Their support has been invaluable.",
      author: "Michael Rodriguez",
      position: "Head of Engineering",
      company: "DataFlow Systems",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    },
    {
      quote: "Working with WEBXELA has been transformative. Their innovative approach to cloud solutions and AI integration has exceeded our expectations.",
      author: "Emily Thompson",
      position: "Director of Innovation",
      company: "FutureScale",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=128&h=128&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    floatingBgControls.start({
      x: mousePosition.x - 150,
      y: mousePosition.y - 150,
      transition: { type: "spring", stiffness: 50, damping: 30 }
    });
  }, [mousePosition, floatingBgControls]);

  const solutions = [
    {
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions.",
      icon: Brain,
      color: "#6366F1",
      path: "/solutions/ai",
      features: ["Custom ML Models", "NLP Integration", "AI-Powered Analytics"]
    },
    {
      title: "Cloud Services",
      description: "Modernize your infrastructure with comprehensive cloud solutions and expert migration.",
      icon: Cloud,
      color: "#8B5CF6",
      path: "/solutions/cloud",
      features: ["Cloud Migration", "Infrastructure as Code", "24/7 Monitoring"]
    },
    {
      title: "DevOps Excellence",
      description: "Streamline your development pipeline with automated CI/CD and infrastructure management.",
      icon: Workflow,
      color: "#EC4899",
      path: "/solutions/devops",
      features: ["CI/CD Pipelines", "Container Orchestration", "Infrastructure Automation"]
    },
    {
      title: "Security Solutions",
      description: "Protect your digital assets with enterprise-grade security and compliance measures.",
      icon: Shield,
      color: "#10B981",
      path: "/solutions/security",
      features: ["Threat Detection", "Compliance Management", "Security Audits"]
    },
    {
      title: "Data Engineering",
      description: "Build robust data pipelines and analytics solutions for actionable insights.",
      icon: Database,
      color: "#F59E0B",
      path: "/solutions/integration",
      features: ["Data Pipelines", "Analytics Platform", "Real-time Processing"]
    },
    {
      title: "Web Development",
      description: "Create stunning, responsive web applications with modern technologies.",
      icon: Globe,
      color: "#3B82F6",
      path: "/solutions/web",
      features: ["React/Next.js", "Progressive Web Apps", "Performance Optimization"]
    },
    {
      title: "App Development",
      description: "Build native and cross-platform mobile applications that deliver results.",
      icon: Smartphone,
      color: "#2A2AE1",
      path: "/solutions/app",
      features: ["iOS/Android Apps", "Cross-platform Development", "App Store Optimization"]
    },
    {
      title: "Identity & Access",
      description: "Implement secure authentication and authorization systems.",
      icon: Lock,
      color: "#4747E5",
      path: "/solutions/identity",
      features: ["SSO Integration", "Multi-factor Auth", "Access Control"]
    },
    {
      title: "System Integration",
      description: "Connect and optimize your business systems for seamless operations.",
      icon: Settings,
      color: "#6B6BFF",
      path: "/solutions/integration",
      features: ["API Integration", "Workflow Automation", "Legacy System Integration"]
    }
  ];

  const cloudProviders = [
    {
      name: "AWS",
      logo: "https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg",
      description: "Empowering 100+ enterprises with AWS cloud solutions",
      projects: "200+ successful migrations",
      color: "#FF9900"
    },
    {
      name: "Microsoft Azure",
      logo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg",
      description: "Delivering enterprise-grade Azure infrastructure",
      projects: "150+ cloud transformations",
      color: "#008AD7"
    },
    {
      name: "Google Cloud",
      logo: "https://upload.wikimedia.org/wikipedia/commons/5/51/Google_Cloud_logo.svg",
      description: "Innovating with GCP's cutting-edge solutions",
      projects: "100+ cloud implementations",
      color: "#4285F4"
    }
  ];

  const stats = [
    {
      number: "10+",
      label: "Build Products",
      icon: Users,
      description: "Satisfied customers worldwide"
    },
    {
      number: "100+",
      label: "Projects Delivered",
      icon: GitBranch,
      description: "Successful implementations"
    },
    {
      number: "25+",
      label: "Certifications",
      icon: Building2,
      description: "Expert Cloud & DevOps Engineers"
    }
  ];

  const techLogos = [
    { name: "React", color: "#61DAFB" },
    { name: "Vue", color: "#41B883" },
    { name: "Python", color: "#3776AB" },
    { name: "Node.js", color: "#339933" },
    { name: "TypeScript", color: "#3178C6" },
    { name: "Docker", color: "#2496ED" },
    { name: "Kubernetes", color: "#326CE5" },
    { name: "Django", color: "#092E20" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-20 px-4 gradient-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center"
          >
            <motion.h1 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-5xl md:text-7xl font-bold mb-6"
            >
              Transform Your Business with{' '} 
              <br></br>
              <span className="gradient-text">Cloud & AI</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
            >
              Accelerate innovation with cutting-edge cloud solutions, AI integration, 
              and enterprise-grade development services. Build the future with WEBXELA.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col sm:flex-row justify-center gap-4"
            >
              <Link to="/solutions" className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 group">
                Our Solutions
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a 
                href="https://calendly.com/webxela/demo" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="gradient-border px-8 py-4 text-gray-700 hover:text-[#2A2AE1] transition flex items-center justify-center gap-2"
              >
                Book a demo
                <ChevronRight />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-32 relative overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Our Strategic{' '}
              <span className="gradient-text">Partners</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Microsoft Partnership */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="partner-card rounded-2xl"
            >
              <div className="p-12 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/WEBXELA/brand-images/fa88f831f4cca553e65123e2ebf2980daec2898c/partners/microsoft-for-startups-webxela.svg"
                  alt="Microsoft for Startups"
                  className="h-20 partner-logo"
                />
              </div>
            </motion.div>

            {/* AWS Partnership */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="partner-card rounded-2xl"
            >
              <div className="p-12 flex items-center justify-center">
                <img
                  src="https://raw.githubusercontent.com/WEBXELA/brand-images/752663304424cb4bde4f5a1138d4bb1dc936b787/partners/aws-activate-webxela.svg"
                  alt="AWS Activate"
                  className="h-20 partner-logo"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

       {/* Cloud Providers Section */}
       <section className="py-32 relative overflow-hidden bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Trusted by Industry Leaders for{' '}
              <span className="gradient-text">Cloud Excellence</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Delivering enterprise-grade cloud solutions with proven expertise across major platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {cloudProviders.map((provider, index) => (
              <motion.div
                key={provider.name}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="enhanced-border bg-white rounded-2xl overflow-hidden"
              >
                <div className="p-8">
                  <div className="h-12 flex items-center mb-6">
                    <img
                      src={provider.logo}
                      alt={provider.name}
                      className="h-full object-contain"
                    />
                  </div>
                  <div className="space-y-4">
                    <p className="text-gray-600 leading-relaxed">
                      {provider.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm font-semibold text-gray-900">
                      <Cloud className="h-4 w-4" />
                      {provider.projects}
                    </div>
                  </div>
                </div>
                <div className="h-2" style={{ background: provider.color }} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* Solutions Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Comprehensive <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your business with our full spectrum of technology solutions,
              from AI integration to system optimization
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Link
                key={solution.title}
                to={solution.path}
                className="block transform transition-all duration-300 hover:-translate-y-2"
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="solution-card p-8 hover:bg-gray-50"
                >
                  <div 
                    className="rounded-full w-16 h-16 flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${solution.color}15` }}
                  >
                    <solution.icon 
                      className="solution-icon w-8 h-8"
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

                  <div className="flex items-center gap-2 text-[#2A2AE1] font-semibold group mt-6">
                    Learn more
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
                  </div>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>

        {/* Background elements */}
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
      </section>

     
      

      {/* Developer Community Section */}
      <section className="py-32 bg-gray-50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6">
              Home to the World's{' '}
              <span className="gradient-text">Software Teams</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet your developers where they already are. Join the world's largest community
              of developers and technology enthusiasts.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
              >
                <stat.icon className="w-12 h-12 text-[#2A2AE1] mb-6" />
                <motion.h3
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.2 }}
                  className="text-4xl font-bold mb-2"
                >
                  {stat.number}
                </motion.h3>
                <h4 className="text-xl font-semibold mb-2">{stat.label}</h4>
                <p className="text-gray-600">{stat.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="relative">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 bg-gradient-to-r from-gray-50 via-transparent to-gray-50 z-10"
            />
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: -1000 }}
              transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear"
              }}
              className="flex space-x-8 mb-12"
            >
              {[...techLogos, ...techLogos].map((logo, index) => (
                <div
                  key={index}
                  className="flex items-center justify-center w-32 h-32 bg-white rounded-xl shadow-md flex-shrink-0"
                  style={{ border: `2px solid ${logo.color}30` }}
                >
                  <span className="text-xl font-semibold" style={{ color: logo.color }}>
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition flex items-center justify-center gap-2 mx-auto group">
              Join our community
              <ChevronRight className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 testimonial-gradient relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Hear from industry leaders who have transformed their businesses with our solutions
            </p>
          </motion.div>

          <div className="relative h-[400px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <div className="testimonial-card testimonial-shadow rounded-2xl p-8 md:p-12 text-white max-w-4xl mx-auto">
                  <Quote className="w-12 h-12 mb-6 text-blue-300 opacity-50" />
                  <p className="text-2xl md:text-3xl font-light leading-relaxed mb-8">
                    "{testimonials[currentTestimonial].quote}"
                  </p>
                  {/* <div className="flex items-center">
                    <img
                      src={testimonials[currentTestimonial].image}
                      alt={testimonials[currentTestimonial].author}
                      className="w-16 h-16 rounded-full mr-4 border-2 border-white/10"
                    />
                    <div>
                      <h4 className="text-xl font-semibold">
                        {testimonials[currentTestimonial].author}
                      </h4>
                      <p className="text-gray-300">
                        {testimonials[currentTestimonial].position} at {testimonials[currentTestimonial].company}
                      </p>
                    </div>
                  </div> */}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentTestimonial === index ? 'bg-white' : 'bg-white/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Animated background elements */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [90, 0, 90],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
        />
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="gradient-bg rounded-3xl p-12 text-center"
          >
            <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Business?</h2>
            <p className="text-xl mb-8 text-gray-600">Let's discuss how WEBXELA can help you achieve your goals</p>
            <button className="bg-black text-white px-8 py-4 rounded-full hover:bg-gray-800 transition">
              Contact Us Today
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;