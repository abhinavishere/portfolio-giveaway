import React from "react";

const Projects = () => {
  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">E-Commerce Platform</div>
            </div>
            <div className="project-info">
              <h3>E-Commerce Platform</h3>
              <p>
                A full-stack e-commerce solution with React, Node.js, and
                MongoDB. Features include user authentication, payment
                integration, and admin dashboard.
              </p>
              <div className="project-tech">
                <span>React</span>
                <span>Node.js</span>
                <span>MongoDB</span>
                <span>Stripe</span>
              </div>
              <div className="project-links">
                <button className="project-link">Live Demo</button>
                <button className="project-link">GitHub</button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Task Management App</div>
            </div>
            <div className="project-info">
              <h3>Task Management App</h3>
              <p>
                A collaborative task management application with real-time
                updates, drag-and-drop functionality, and team collaboration
                features.
              </p>
              <div className="project-tech">
                <span>Vue.js</span>
                <span>Express.js</span>
                <span>Socket.io</span>
                <span>PostgreSQL</span>
              </div>
              <div className="project-links">
                <button className="project-link">Live Demo</button>
                <button className="project-link">GitHub</button>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-image">
              <div className="project-placeholder">Weather Dashboard</div>
            </div>
            <div className="project-info">
              <h3>Weather Dashboard</h3>
              <p>
                A responsive weather application with location-based forecasts,
                interactive maps, and detailed weather analytics using multiple
                APIs.
              </p>
              <div className="project-tech">
                <span>JavaScript</span>
                <span>Chart.js</span>
                <span>Weather API</span>
                <span>CSS3</span>
              </div>
              <div className="project-links">
                <button className="project-link">Live Demo</button>
                <button className="project-link">GitHub</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
