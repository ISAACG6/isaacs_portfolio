import React from 'react';
import './index.css';
import projects from './data/projects.json'

export default function Portfolio () {

        return (
            <div className="portfolio-page">
            <div className="portfolio-header-section">
                <h1 className="portfolio-main-title">Featured Work</h1>
                <p className="portfolio-main-subtitle">
                Exploring the intersection of design, technology, and human experience
                </p>
            </div>

            <div className="projects-list">
                {projects.map((project, index) => (
                <div key={project.id} className={`project-row ${index % 2 === 0 ? 'image-right' : 'image-left'}`}>
                    <div className="project-content-side">
                    <h2 className="project-row-title">{project.title}</h2>
                    <p className="project-row-description">{project.description}</p>
                    <button className="view-project-btn">View Project Details</button>
                    </div>
                    <div className="project-image-side">
                    <img src={project.image} alt={project.title} className="project-row-image" />
                    </div>
                </div>
                ))}
            </div>
            </div>
        );

   
}