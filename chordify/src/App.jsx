import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider, useAuth } from './context/AuthContext';
import NavBar from './components/Navbar';
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import EventsPage from './components/pages/EventsPage';
import TeamPage from './components/pages/TeamPage';
import LoginPage from './components/pages/LoginPage';
import ProfilePage from './components/pages/ProfilePage';
import TermsAndConditionsPage from './components/pages/TermsAndConditionsPage';
import PrivacyPolicyPage from './components/pages/PrivacyPolicyPage';
import Footer from './components/Footer';
import './App.css';
import DetailsPage from './components/pages/DetailsPage';
// Component that uses the auth context
function AppContent() {
  const { isAuthenticated, setIsAuthenticated } = useAuth();

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/login" element={<LoginPage setIsAuthenticated={setIsAuthenticated} />} />
            <Route path="/profile" element={<ProfilePage isAuthenticated={isAuthenticated} />} />
            <Route path="/terms" element={<TermsAndConditionsPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/details" element={<DetailsPage/>} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;