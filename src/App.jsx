import { useState } from "react";
import "./App.css";
import HeroIllustration from "./components/HeroIllustration";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for your message! I'll get back to you soon.");
    setFormData({ name: "", email: "", message: "" });
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="App">
      {/* Navigation */}
      <Navbar
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        scrollToSection={scrollToSection}
      />
      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <HeroIllustration />
          <h1 className="hero-title">John Doe</h1>
          <h2 className="hero-subtitle">Full Stack Developer</h2>
          <p className="hero-description">
            Passionate about creating elegant solutions to complex problems. I
            build modern web applications with clean code and exceptional user
            experiences.
          </p>
          <button
            className="cta-button"
            onClick={() => scrollToSection("contact")}
          >
            Get In Touch
          </button>
        </div>
      </section>
      {/* About Section */}
      <About />
      {/* Skills Section */}
      <Skills />
      {/* Projects Section */}
      <Projects />
      {/* Experience Section */}
      <Experience />
      {/* Contact Section */}
      <Contact
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formData={formData}
      />
      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
