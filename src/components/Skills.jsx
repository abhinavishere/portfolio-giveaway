import React from "react";

const Skills = () => {
  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Skills & Technologies</h2>
        <div className="skills-grid">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>
              <li>JavaScript (ES6+)</li>
              <li>React.js</li>
              <li>Vue.js</li>
              <li>HTML5 & CSS3</li>
              <li>SASS/SCSS</li>
              <li>Responsive Design</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Backend</h3>
            <ul>
              <li>Node.js</li>
              <li>Express.js</li>
              <li>Python</li>
              <li>PHP</li>
              <li>RESTful APIs</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Database</h3>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>PostgreSQL</li>
              <li>Redis</li>
              <li>Firebase</li>
              <li>Supabase</li>
            </ul>
          </div>
          <div className="skill-category">
            <h3>Tools & Others</h3>
            <ul>
              <li>Git & GitHub</li>
              <li>Docker</li>
              <li>AWS</li>
              <li>Vercel</li>
              <li>Webpack</li>
              <li>Vite</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
