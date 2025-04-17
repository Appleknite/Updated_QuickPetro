import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import AppRoutes from './routes/index.tsx';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-grow">
          <AppRoutes />
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
