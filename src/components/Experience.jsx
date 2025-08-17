import React from "react";

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">Work Experience</h2>
        <div className="timeline">
          <div className="timeline-item">
            <div className="timeline-date">2021 - Present</div>
            <div className="timeline-content">
              <h3>Senior Full Stack Developer</h3>
              <h4>TechCorp Solutions</h4>
              <p>
                Led development of multiple high-traffic web applications
                serving 100K+ users. Mentored junior developers and established
                best practices for code quality and deployment.
              </p>
              <ul>
                <li>
                  Reduced application load time by 40% through optimization
                </li>
                <li>Built scalable microservices architecture</li>
                <li>
                  Implemented CI/CD pipelines improving deployment efficiency
                </li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2019 - 2021</div>
            <div className="timeline-content">
              <h3>Full Stack Developer</h3>
              <h4>StartupXYZ</h4>
              <p>
                Developed and maintained the company's main product from MVP to
                production, working directly with founders to bring their vision
                to life.
              </p>
              <ul>
                <li>
                  Built the entire frontend using React and modern JavaScript
                </li>
                <li>Designed RESTful APIs and database architecture</li>
                <li>Integrated third-party services and payment systems</li>
              </ul>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-date">2018 - 2019</div>
            <div className="timeline-content">
              <h3>Frontend Developer</h3>
              <h4>Digital Agency Inc</h4>
              <p>
                Created responsive websites and web applications for various
                clients across different industries, focusing on user experience
                and performance.
              </p>
              <ul>
                <li>Developed 20+ client websites with modern frameworks</li>
                <li>
                  Collaborated with designers to implement pixel-perfect designs
                </li>
                <li>Optimized websites for SEO and accessibility</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
