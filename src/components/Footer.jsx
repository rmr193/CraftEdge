import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Phone, Mail } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-top section-padding">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h3>About Us</h3>
                            <p>
                                CraftEdge is a leading construction company with a strong commitment to quality and excellence. We build your dreams into reality.
                            </p>
                            <div className="footer-social">
                                <a href="#"><Facebook size={18} /></a>
                                <a href="#"><Twitter size={18} /></a>
                                <a href="#"><Instagram size={18} /></a>
                                <a href="#"><Linkedin size={18} /></a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h3>Our Services</h3>
                            <ul className="footer-links">
                                <li><a href="#">Building Construction</a></li>
                                <li><a href="#">House Renovation</a></li>
                                <li><a href="#">Architecture Design</a></li>
                                <li><a href="#">Interior Design</a></li>
                                <li><a href="#">Painting</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Contact Info</h3>
                            <ul className="contact-info">
                                <li>
                                    <MapPin size={18} className="icon" />
                                    <span>123 Construction Ave, City, Country</span>
                                </li>
                                <li>
                                    <Phone size={18} className="icon" />
                                    <span>+123 456 7890</span>
                                </li>
                                <li>
                                    <Mail size={18} className="icon" />
                                    <span>info@craftedge.com</span>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h3>Newsletter</h3>
                            <p>Subscribe to our newsletter for latest updates.</p>
                            <form className="newsletter-form">
                                <input type="email" placeholder="Your Email" />
                                <button type="submit">Subscribe</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} CraftEdge. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
