import React from 'react';
import { Home, PenTool, Hammer } from 'lucide-react';
import './Services.css';

const services = [
    {
        icon: <Home size={40} />,
        title: 'Building Construction',
        description: 'We provide high-quality building construction services with a focus on durability and design excellence.'
    },
    {
        icon: <Hammer size={40} />,
        title: 'House Renovation',
        description: 'Transform your existing space into something new and exciting with our expert renovation services.'
    },
    {
        icon: <PenTool size={40} />,
        title: 'Interior Design',
        description: 'Our interior design team creates functional and beautiful spaces that reflect your personal style.'
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding services-section">
            <div className="container">
                <div className="section-title">
                    <h2>What We Offer</h2>
                    <p>Comprehensive construction solutions for every need.</p>
                </div>
                <div className="services-grid">
                    {services.map((service, index) => (
                        <div key={index} className="service-card">
                            <div className="icon-box">
                                {service.icon}
                            </div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                            <a href="#" className="read-more">Read More</a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
