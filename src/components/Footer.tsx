import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Phone,
  Mail,
  MapPin,
  Linkedin,
  ArrowRight
} from 'lucide-react';
import { supabase } from '../lib/supabase';
import Toast from './Toast';

const Footer = () => {
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'submitting' | 'success' | 'error' | 'exists'>('idle');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');
  const [toastType, setToastType] = useState<'success' | 'error'>('success');

  const handleNewsletterSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubscribeStatus('submitting');

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
        setSubscribeStatus('exists');
        setToastMessage('This email is already subscribed to our newsletter. Please try with a different email address.');
        setToastType('error');
        setShowToast(true);
        return;
      }

      const { error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }]);

      if (error) throw error;

      setSubscribeStatus('success');
      form.reset();
      setToastMessage('Successfully subscribed to our newsletter!');
      setToastType('success');
      setShowToast(true);
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      setSubscribeStatus('error');
      setToastMessage('Error subscribing to newsletter. Please try again.');
      setToastType('error');
      setShowToast(true);
      setTimeout(() => setSubscribeStatus('idle'), 3000);
    }
  };

  return (
    <footer className="bg-[#1A1A2E] text-white pt-20 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <img 
              src="https://raw.githubusercontent.com/WEBXELA/brand-images/e84c6074fba81c45b6ee4f0e57ac798890e6c352/logo/webxela-logo.svg" 
              alt="WEBXELA" 
              className="h-8 mb-6 brightness-0 invert"
            />
            <p className="text-gray-300 mb-6">
              Making Your Online Dreams Come True! We've got everything you from online to physical infrastructure.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2A2AE1] transition">
                  <Phone className="w-4 h-4 text-white" />
                </div>
                <a href="tel:+919724823602" className="text-gray-300 hover:text-white transition">
                  +91 9724823602
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2A2AE1] transition">
                  <Mail className="w-4 h-4 text-white" />
                </div>
                <a href="mailto:info@webxela.com" className="text-gray-300 hover:text-white transition">
                  info@webxela.com
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#2A2AE1] transition flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-white" />
                </div>
                <p className="text-gray-300 group-hover:text-white transition">
                  E10, Green Glen Layout, Outer Ring Road, Bellandur, Bengaluru, Karnataka, India - 560103
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/solutions" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Our Solutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://careers.webxela.com" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Careers
                </a>
              </li>
              <li>
                <a 
                  href="https://calendly.com/webxela/demo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white transition flex items-center gap-2 group"
                >
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Book a Demo
                </a>
              </li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/solutions/ai" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link to="/solutions/cloud" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Cloud Services
                </Link>
              </li>
              <li>
                <Link to="/solutions/web" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/solutions/app" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/solutions/devops" className="text-gray-300 hover:text-white transition flex items-center gap-2 group">
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -ml-6 group-hover:ml-0" />
                  DevOps Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Newsletter</h3>
            <p className="text-gray-300 mb-6">
              Subscribe to our newsletter for the latest updates and insights.
            </p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-4">
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                  className="w-full px-4 py-3 bg-white/10 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#2A2AE1] border border-white/10"
                />
                <button
                  type="submit"
                  disabled={subscribeStatus === 'submitting'}
                  className={`absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full transition ${
                    subscribeStatus === 'submitting'
                      ? 'bg-gray-500 cursor-not-allowed'
                      : subscribeStatus === 'success'
                      ? 'bg-green-500'
                      : subscribeStatus === 'error' || subscribeStatus === 'exists'
                      ? 'bg-red-500'
                      : 'bg-[#2A2AE1] hover:bg-[#2424B8]'
                  }`}
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
              {subscribeStatus === 'success' && (
                <p className="text-green-500 text-sm">Successfully subscribed!</p>
              )}
              {subscribeStatus === 'exists' && (
                <p className="text-red-500 text-sm">Please use a different email address.</p>
              )}
              {subscribeStatus === 'error' && (
                <p className="text-red-500 text-sm">Error subscribing. Please try again.</p>
              )}
            </form>

            {/* Social Links */}
            <div className="mt-8">
              <h4 className="text-sm font-semibold mb-4 text-white">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://linkedin.com/company/webxela"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 p-2 rounded-full hover:bg-[#2A2AE1] transition"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Links */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2025 WEBXELA. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition">
                Terms of Service
              </Link>
              <Link to="/cookie-policy" className="text-gray-300 hover:text-white transition">
                Cookie Policy
              </Link>
              <Link to="/disclaimer" className="text-gray-300 hover:text-white transition">
                Disclaimer
              </Link>
              <Link to="/sitemap" className="text-gray-300 hover:text-white transition">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      <Toast
        message={toastMessage}
        type={toastType}
        isVisible={showToast}
        onClose={() => setShowToast(false)}
      />
    </footer>
  );
};

export default Footer;