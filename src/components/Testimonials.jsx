import React from 'react';
import { Quote } from 'lucide-react';
import './Testimonials.css';

const testimonials = [
    {
        name: 'John Doe',
        role: 'CEO, Tech Corp',
        quote: 'CraftEdge did an amazing job on our new office building. Professional, timely, and high quality.',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Jane Smith',
        role: 'Homeowner',
        quote: 'We are absolutely in love with our renovated home. The team was respectful and the craftsmanship is top-notch.',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    },
    {
        name: 'Michael Brown',
        role: 'Project Manager',
        quote: 'Reliable and efficient. They handled our complex infrastructure project with ease. Highly recommended.',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80'
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="section-padding testimonials-section">
            <div className="container">
                <div className="section-title">
                    <h2>Client Testimonials</h2>
                    <p>What our happy clients say about us.</p>
                </div>
                <div className="testimonials-grid">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="testimonial-card">
                            <div className="quote-icon">
                                <Quote size={30} />
                            </div>
                            <p className="quote-text">"{testimonial.quote}"</p>
                            <div className="testimonial-author">
                                <img src={testimonial.image} alt={testimonial.name} />
                                <div className="author-info">
                                    <h4>{testimonial.name}</h4>
                                    <span>{testimonial.role}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
