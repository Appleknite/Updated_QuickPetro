import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../components/pages/AboutPage';
import ContactPage from '../components/pages/ContactPage';
import HomePage from '../components/pages/HomePage';
import ThermicFluidServicePage from '../components/pages/ThermicFluidServicePage';
import IndustrialHeatTransferOilTestingPage from '../components/pages/IndustrialHeatTransferOilTestingPage';
import CustomThermalSystemDesign from '../components/pages/CustomThermalSystemDesign';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/services/thermic-fluid-cleaning-flushing" element={<ThermicFluidServicePage />} />
      <Route path="/services/oil-testing" element={<IndustrialHeatTransferOilTestingPage />} />
      <Route path="/services/system-design" element={<CustomThermalSystemDesign />} />
    </Routes>
  );
};

export default AppRoutes;
