import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/layout/Header';
import AppRoutes from './routes';
import Footer from './components/layout/Footer';

function App() {
  return (
    <Router>
      <HelmetProvider>
        <div className="min-h-screen flex flex-col bg-white">
          <Header />
          <div className="flex-grow">
            <AppRoutes />
          </div>
          <Footer />
        </div>
      </HelmetProvider>
    </Router>
  );
}

export default App;