import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import HomePage from './components/HomePage';
import SolutionsPage from './components/SolutionsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import AISolutionsPage from './components/AISolutionsPage';
import SaaSSolutionsPage from './components/SaaSSolutionsPage';
import CloudSolutionsPage from './components/CloudSolutionsPage';
import DevOpsSolutionsPage from './components/DevOpsSolutionsPage';
import WebDevSolutionsPage from './components/WebDevSolutionsPage';
import AppDevSolutionsPage from './components/AppDevSolutionsPage';
import SecuritySolutionsPage from './components/SecuritySolutionsPage';
import IdentityAccessPage from './components/IdentityAccessPage';
import SystemIntegrationPage from './components/SystemIntegrationPage';
import PrivacyPolicyPage from './components/PrivacyPolicyPage';
import TermsOfServicePage from './components/TermsOfServicePage';
import CookiePolicyPage from './components/CookiePolicyPage';
import DisclaimerPage from './components/DisclaimerPage';
import SitemapPage from './components/SitemapPage';

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/solutions/ai" element={<AISolutionsPage />} />
        <Route path="/solutions/saas" element={<SaaSSolutionsPage />} />
        <Route path="/solutions/cloud" element={<CloudSolutionsPage />} />
        <Route path="/solutions/devops" element={<DevOpsSolutionsPage />} />
        <Route path="/solutions/web" element={<WebDevSolutionsPage />} />
        <Route path="/solutions/app" element={<AppDevSolutionsPage />} />
        <Route path="/solutions/security" element={<SecuritySolutionsPage />} />
        <Route path="/solutions/identity" element={<IdentityAccessPage />} />
        <Route path="/solutions/integration" element={<SystemIntegrationPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
        <Route path="/terms-of-service" element={<TermsOfServicePage />} />
        <Route path="/cookie-policy" element={<CookiePolicyPage />} />
        <Route path="/disclaimer" element={<DisclaimerPage />} />
        <Route path="/sitemap" element={<SitemapPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;