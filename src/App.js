import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Works from './components/Works';
import Services from './components/Services';
import Blogs from './components/Blogs';
import ISMSPolicy from './components/ISMSPolicy';
import Contact from './components/Contact';
import Login from './components/backup/Login';
import Biometrics from './components/Biometrics';
import Smartcards from './components/Smartcards';
import RFIDSolutions from './components/RFIDSolutions';
import EnterpriseMobility from './components/EnterpriseMobility';
import EmbeddedDesign from './components/EmbeddedDesign';
import HardwareProduction from './components/HardwareProduction';
import Register from './components/backup/Register';
import ResetPassword from './components/ResetPassword';
import FAQ from './components/FAQ';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/works" element={<Works />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/isms-policy" element={<ISMSPolicy />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reset-password" element={<ResetPassword />} />
          <Route path="/biometrics" element={<Biometrics />} />
          <Route path="/smartcards" element={<Smartcards />} />
          <Route path="/rfid" element={<RFIDSolutions />} />
          <Route path="/enterprise-mobility" element={<EnterpriseMobility />} />
          <Route path="/embedded-design" element={<EmbeddedDesign />} />
          <Route path="/hardware-production" element={<HardwareProduction />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
