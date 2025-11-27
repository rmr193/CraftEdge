import React from 'react';
import './Projects.css';

const projects = [
    {
        image: '/images/skyline-tower.jpg',
        title: 'Skyline Tower',
        category: 'Commercial'
    },
    {
        image: '/images/green-valley-villa.jpg',
        title: 'Green Valley Villa',
        category: 'Residential'
    },
    {
        image: '/images/city-general-hospital.jpg',
        title: 'City General Hospital',
        category: 'Healthcare'
    },
    {
        image: '/images/tech-hub-plaza.jpg',
        title: 'Tech Hub Plaza',
        category: 'Commercial'
    }
];

const Projects = () => {
    return (
        <section id="projects" className="section-padding projects-section">
            <div className="container">
                <div className="section-title">
                    <h2>Our Latest Projects</h2>
                    <p>Explore our portfolio of successful construction projects.</p>
                </div>
                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                                <div className="project-overlay">
                                    <h3>{project.title}</h3>
                                    <span>{project.category}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
