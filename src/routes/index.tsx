import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../components/pages/AboutPage';
import ContactPage from '../components/pages/ContactPage';
import HomePage from '../components/pages/HomePage';
import ThermicFluidServicePage from '../components/pages/ThermicFluidServicePage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/thermic-fluid-cleaning-flushing" element={<ThermicFluidServicePage />} />
    </Routes>
  );
};

export default AppRoutes;
