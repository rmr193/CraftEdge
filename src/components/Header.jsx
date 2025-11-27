import React, { useState, useEffect } from 'react';
import { Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin, Search, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="header">
      {/* Top Bar */}
      <div className="top-bar">
        <div className="container top-bar-content">
          <div className="top-info">
            <div className="info-item">
              <Phone size={14} className="icon" />
              <span>0123-456-789</span>
            </div>
            <div className="info-item">
              <Mail size={14} className="icon" />
              <span>info@craftedge.com</span>
            </div>
            <div className="info-item">
              <Clock size={14} className="icon" />
              <span>Mon - Sat 8.00 - 18.00</span>
            </div>
          </div>
          <div className="social-icons">
            <a href="#"><Facebook size={14} /></a>
            <a href="#"><Twitter size={14} /></a>
            <a href="#"><Instagram size={14} /></a>
            <a href="#"><Linkedin size={14} /></a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className={`main-nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-content">
          <div className="logo">
            <h1>CraftEdge</h1>
          </div>

          <nav className={`desktop-nav ${mobileMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#home" className="active">HOME</a></li>
              <li><a href="#about">ABOUT</a></li>
              <li><a href="#services">SERVICES</a></li>
              <li><a href="#projects">PROJECTS</a></li>
              <li><a href="#contact">CONTACT</a></li>
            </ul>
          </nav>

          <div className="nav-actions">
            <Search size={20} className="search-icon" />
            <button className="mobile-toggle" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
