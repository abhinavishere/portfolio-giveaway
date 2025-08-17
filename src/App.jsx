import { useState } from 'react'
import './App.css'

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    alert('Thank you for your message! I\'ll get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
  }

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    element.scrollIntoView({ behavior: 'smooth' })
    setIsMobileMenuOpen(false)
  }

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <h2 className="nav-logo">John Doe</h2>
          <button className="mobile-menu-toggle" onClick={toggleMobileMenu}>
            <span></span>
            <span></span>
            <span></span>
          </button>
          <ul className={`nav-menu ${isMobileMenuOpen ? 'nav-menu-open' : ''}`}>
            <li><button onClick={() => scrollToSection('home')}>Home</button></li>
            <li><button onClick={() => scrollToSection('about')}>About</button></li>
            <li><button onClick={() => scrollToSection('skills')}>Skills</button></li>
            <li><button onClick={() => scrollToSection('projects')}>Projects</button></li>
            <li><button onClick={() => scrollToSection('experience')}>Experience</button></li>
            <li><button onClick={() => scrollToSection('contact')}>Contact</button></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <div className="hero-illustration">
            <div className="code-window">
              <div className="window-header">
                <div className="window-controls">
                  <span className="control"></span>
                  <span className="control"></span>
                  <span className="control"></span>
                </div>
              </div>
              <div className="code-content">
                <div className="code-line">
                  <span className="code-keyword">const</span>
                  <span className="code-variable"> developer</span>
                  <span className="code-operator"> = </span>
                  <span className="code-string">"John Doe"</span>
                </div>
                <div className="code-line">
                  <span className="code-keyword">function</span>
                  <span className="code-function"> createAmazingApps</span>
                  <span className="code-bracket">()</span>
                  <span className="code-bracket"> {'{'}</span>
                </div>
                <div className="code-line code-indent">
                  <span className="code-keyword">return</span>
                  <span className="code-string"> "innovative solutions"</span>
                </div>
                <div className="code-line">
                  <span className="code-bracket">{'}'}</span>
                </div>
              </div>
            </div>
            <div className="floating-elements">
              <div className="floating-element element-1">{'{ }'}</div>
              <div className="floating-element element-2">&lt;/&gt;</div>
              <div className="floating-element element-3">( )</div>
              <div className="floating-element element-4">[ ]</div>
            </div>
          </div>
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about creating elegant solutions to complex problems. 
            I build modern web applications with clean code and exceptional user experiences.
          </p>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('contact')}
          >
            Get In Touch
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
                I'm a passionate full-stack developer with over 5 years of experience 
                creating digital solutions that make a difference. My journey in tech 
                started with a curiosity about how websites work, and has evolved into 
                a deep love for building applications that solve real-world problems.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or sharing knowledge with the 
                developer community. I believe in continuous learning and always 
                strive to write clean, maintainable code.
              </p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Projects Completed</p>
              </div>
              <div className="stat">
                <h3>5+</h3>
                <p>Years Experience</p>
              </div>
              <div className="stat">
                <h3>25+</h3>
                <p>Happy Clients</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
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

      {/* Projects Section */}
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
                <p>A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment integration, and admin dashboard.</p>
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
                <p>A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.</p>
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
                <p>A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics using multiple APIs.</p>
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

      {/* Experience Section */}
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
                  Led development of multiple high-traffic web applications serving 100K+ users. 
                  Mentored junior developers and established best practices for code quality and deployment.
                </p>
                <ul>
                  <li>Reduced application load time by 40% through optimization</li>
                  <li>Built scalable microservices architecture</li>
                  <li>Implemented CI/CD pipelines improving deployment efficiency</li>
                </ul>
              </div>
            </div>

            <div className="timeline-item">
              <div className="timeline-date">2019 - 2021</div>
              <div className="timeline-content">
                <h3>Full Stack Developer</h3>
                <h4>StartupXYZ</h4>
                <p>
                  Developed and maintained the company's main product from MVP to production, 
                  working directly with founders to bring their vision to life.
                </p>
                <ul>
                  <li>Built the entire frontend using React and modern JavaScript</li>
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
                  Created responsive websites and web applications for various clients 
                  across different industries, focusing on user experience and performance.
                </p>
                <ul>
                  <li>Developed 20+ client websites with modern frameworks</li>
                  <li>Collaborated with designers to implement pixel-perfect designs</li>
                  <li>Optimized websites for SEO and accessibility</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <div className="contact-content">
            <div className="contact-info">
              <h3>Let's work together</h3>
              <p>
                I'm always interested in new opportunities and challenging projects. 
                Whether you have a project in mind or just want to chat about technology, 
                feel free to reach out!
              </p>
              <div className="contact-details">
                <div className="contact-item">
                  <strong>Email:</strong>
                  <a href="mailto:john.doe@example.com">john.doe@example.com</a>
                </div>
                <div className="contact-item">
                  <strong>Phone:</strong>
                  <a href="tel:+1234567890">+1 (234) 567-890</a>
                </div>
                <div className="contact-item">
                  <strong>Location:</strong>
                  <span>San Francisco, CA</span>
                </div>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">GitHub</a>
                <a href="#" className="social-link">Twitter</a>
              </div>
            </div>

            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send me a message</h3>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                ></textarea>
              </div>
              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2025 John Doe. All rights reserved.</p>
        </div>
      </footer>
    }
    </div>
  )
}

export default App