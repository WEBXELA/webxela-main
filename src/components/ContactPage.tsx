import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  Clock,
  MessageSquare,
  Globe2,
  Building2,
  Users,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import Toast from './Toast';

const ContactPage = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    message: ''
  });
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');
  
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      details: [
        "+1 (555) 123-4567",
        "+44 20 7123 4567",
      ],
      color: "#6366F1",
    },
    {
      icon: Mail,
      title: "Email Us",
      details: [
        "hello@webxela.com",
        "support@webxela.com",
      ],
      color: "#8B5CF6",
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9AM - 6PM",
        "Weekend: By Appointment",
      ],
      color: "#EC4899",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    try {
      const { error } = await supabase
        .from('contacts')
        .insert([{
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          company: formData.company,
          message: formData.message
        }]);

      if (error) throw error;

      setFormStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        message: ''
      });
      setToastMessage('Message sent successfully! We\'ll get back to you soon.');
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      console.error('Error submitting form:', error);
      setFormStatus('error');
      setToastMessage('Error sending message. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const email = (form.elements.namedItem('email') as HTMLInputElement).value;

    try {
      // First check if the email already exists
      const { data: existingSubscriber } = await supabase
        .from('newsletter_subscribers')
        .select('email')
        .eq('email', email)
        .single();

      if (existingSubscriber) {
        setToastMessage('This email is already subscribed. Please try with a different email address.');
        setToastType('error');
        setShowToast(true);
        return;
      }

      // If email doesn't exist, proceed with subscription
      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;
      
      form.reset();
      setToastMessage('Successfully subscribed to our newsletter!');
      setToastType('success');
      setShowToast(true);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setToastMessage('Error subscribing to newsletter. Please try again.');
      setToastType('error');
      setShowToast(true);
    }
  };

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
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2070')] opacity-5" />
        </motion.div>
        
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8">
              Let's Build Something
              <span className="block text-gradient">Amazing Together</span>
            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Whether you're looking to transform your business, discuss a project, 
              or just want to say hello, we'd love to hear from you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="solution-card p-8"
              >
                <div 
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{ backgroundColor: `${info.color}15` }}
                >
                  <info.icon 
                    className="w-6 h-6"
                    style={{ color: info.color }}
                  />
                </div>
                <h3 className="text-2xl font-bold mb-4">{info.title}</h3>
                {info.details.map((detail, i) => (
                  <p key={i} className="text-gray-600 mb-2">{detail}</p>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="solution-card p-8"
            >
              <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-600 mb-8 text-lg">
                Fill out the form below and we'll get back to you within 24 hours. 
                We're excited to learn about your project and explore how we can help.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <Globe2 className="w-6 h-6 text-[#0062F7]" />
                  <div>
                    <h3 className="font-semibold">Global Reach</h3>
                    <p className="text-gray-600">Serving clients in 25+ countries</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Building2 className="w-6 h-6 text-[#0062F7]" />
                  <div>
                    <h3 className="font-semibold">Enterprise Solutions</h3>
                    <p className="text-gray-600">Trusted by Fortune 500 companies</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Users className="w-6 h-6 text-[#0062F7]" />
                  <div>
                    <h3 className="font-semibold">Dedicated Support</h3>
                    <p className="text-gray-600">Personal account manager for every client</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="solution-card p-8"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0062F7] focus:border-transparent transition"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0062F7] focus:border-transparent transition"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0062F7] focus:border-transparent transition"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0062F7] focus:border-transparent transition"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#0062F7] focus:border-transparent transition"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className={`w-full py-4 rounded-xl text-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${
                    formStatus === 'submitting'
                      ? 'bg-gray-400 cursor-not-allowed'
                      : formStatus === 'success'
                      ? 'bg-green-500 hover:bg-green-600 text-white'
                      : formStatus === 'error'
                      ? 'bg-red-500 hover:bg-red-600 text-white'
                      : 'bg-[#2A2AE1] hover:bg-[#2424B8] text-white'
                  }`}
                >
                  {formStatus === 'submitting' ? (
                    'Sending...'
                  ) : formStatus === 'success' ? (
                    <>
                      <CheckCircle2 className="w-5 h-5" />
                      Message Sent!
                    </>
                  ) : formStatus === 'error' ? (
                    'Error - Try Again'
                  ) : (
                    <>
                      Send Message
                      <ArrowRight className="w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
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
              <h2 className="text-4xl font-bold mb-6 text-white">Stay Updated</h2>
              <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
                Subscribe to our newsletter for the latest insights on technology, 
                innovation, and industry trends.
              </p>
              <form
                onSubmit={handleNewsletterSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
              >
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-4 rounded-full focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="bg-white text-[#2A2AE1] px-8 py-4 rounded-full hover:bg-gray-100 transition font-semibold inline-flex items-center justify-center gap-2"
                >
                  Subscribe
                  <ArrowRight className="w-5 h-5" />
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add Toast component */}
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </div>
  );
};

export default ContactPage;