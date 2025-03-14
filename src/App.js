import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  //const [searchTerm, setSearchTerm] = useState("");
  const services = [
    {
      title: "Healthcare AI Solutions",
      description: "✅ AI-driven medical imaging (early disease detection).",
    },
    {
      title: "Salus IAM – Identity & Access Management",
      description: "✅ Zero Trust Security – Identity-based access at every level.",
    },
    {
      title: "Cybersecurity & AI System Security",
      description: "✅ Penetration Testing – Simulated cyberattacks for AI-driven systems.",
    },
  ];

  return (
    <div>
      {/* Navigation Bar with Logo and Search */}
      <nav className="navbar">
        <div className="logo">Sapiencia.AI</div>
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
         // value={searchTerm}
          //onChange={(e) => setSearchTerm(e.target.value)}
        />
        <div className="nav-links">
          <a href="#">Home</a>
          <a href="#">Solutions</a>
          <a href="#">About Us</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <h1>AI-Driven Security & Intelligence for Healthcare & Defense</h1>
        <p>Cutting-edge AI solutions ensuring national security & healthcare integrity.</p>
        <div className="cta-buttons">
          <button className="cta primary">Explore Our Solutions</button>
          <button className="cta secondary">Contact Us for Federal Contracts</button>
        </div>
      </header>

      {/* Compliance Badges */}
      <section className="badges_main">
        <h2>Badges</h2>
        <div className="badges">
          <img src="https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-nist-800-53.png" alt="NIST 800-53"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Seal_of_the_United_States_Department_of_Defense.svg" alt="DoD Compliance"/>
          <img src="https://www.policymed.com/wp-content/uploads/2013/03/OIG.jpg" alt="HHS Compliance"/>
        </div>
      </section>

      {/* Services Section with Staggered Animation */}
      <section className="services">
        <h2>Our Services</h2>
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="card"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }} // Alternates left (-100) & right (+100)
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button className="card-button">Learn More</button>
          </motion.div>
        ))}
      </section>

      {/* Footer */}
      <footer>
        <p>© 2025 AI Security Solutions | Defense & Healthcare</p>
      </footer>
    </div>
  );
}

export default App;
