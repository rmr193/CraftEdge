import React from 'react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="home" className="hero">
            <div className="hero-overlay"></div>
            <div className="container">
                <div className="hero-content">
                    <span className="hero-tagline">7 Years of field experience</span>
                    <h1 className="hero-title">
                        <span>WE ARE THE NEXT</span><br />
                        <span>GENERATION</span><br />
                        <span>BUILDERS</span>
                    </h1>
                    <p className="hero-description">
                        Building your dreams with precision and excellence. We deliver top-quality construction services tailored to your needs.
                    </p>
                    <div className="hero-buttons">
                        <button className="btn">Get a Quote</button>
                        <button className="btn btn-outline">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
