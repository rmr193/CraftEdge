import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="section-padding about-section">
            <div className="container about-container">
                <div className="about-image">
                    <img src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="Construction Site" />
                    <div className="experience-badge">
                        <span className="years">25+</span>
                        <span className="text">Years Experience</span>
                    </div>
                </div>
                <div className="about-content">
                    <span className="subtitle">About Us</span>
                    <h2>We Are The Leader In The Construction Industry</h2>
                    <p>
                        With over 25 years of experience, we have established ourselves as a trusted name in the construction industry. Our commitment to quality, safety, and customer satisfaction sets us apart.
                    </p>
                    <p>
                        We specialize in residential and commercial construction, renovation, and project management. Our team of experts ensures that every project is delivered on time and within budget.
                    </p>
                    <ul className="about-list">
                        <li>Professional Team</li>
                        <li>Quality Materials</li>
                        <li>On-Time Delivery</li>
                        <li>24/7 Support</li>
                    </ul>
                    <button className="btn">Learn More</button>
                </div>
            </div>
        </section>
    );
};

export default About;
