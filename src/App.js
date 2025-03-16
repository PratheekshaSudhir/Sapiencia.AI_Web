import React from "react";
import { motion } from "framer-motion";
import "./App.css";

function App() {
  
  const services = [
    {
      //icon: <FaHeartbeat className="text-5xl text-red-500" />,
      title: "Healthcare AI Solutions",
      description:
        "Our AI-driven medical imaging enables early disease detection, while predictive analytics optimize hospital resources and reduce readmissions. We ensure secure, interoperable healthcare data and advanced anomaly detection for rare diseases and adverse events.",
    },
    {
      //icon: <FaUserShield className="text-5xl text-yellow-500" />,
      title: "Salus IAM – Identity & Access Management for DoD",
      description:
        "Salus IAM provides Zero Trust Security, ensuring identity-based access at all levels. It supports tactical edge deployment in disconnected environments and meets DoD compliance standards (IL5/IL6, NIST 800-53, DISA STG). With phishing-resistant authentication and multi-domain federation, it integrates seamlessly across agencies.",
    },
    {
      //icon: <FaLock className="text-5xl text-blue-500" />,
      title: "Cybersecurity & AI System Security Services",
      description:
        "Our Cybersecurity & AI Security Services include penetration testing to simulate cyberattacks on AI systems. We conduct cybersecurity audits to ensure compliance and use AI-driven threat detection for real-time defense against adversarial AI threats.",
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

      {/* Services Section with Staggered Animation */}
      <section className="services p-10 rounded-xl">
      <h2 className="text-center text-3xl font-bold text-white mb-8">
        Our Services
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-xl rounded-2xl p-6 flex flex-col items-start space-y-4"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
          >
            <div className="icon bg-gray-100 p-4 rounded-xl flex justify-center items-center">
              {service.icon}
            </div>
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="text-gray-700">{service.description}</p>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Learn More
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  

      {/* Compliance Badges */}
      <section className="badges_main">
        <h2>Badges</h2>
        <div className="badges">
          <img src="https://hyperproof.io/wp-content/uploads/2023/06/framework-informational-page_hero-badges-nist-800-53.png" alt="NIST 800-53"/>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2e/Seal_of_the_United_States_Department_of_Defense.svg" alt="DoD Compliance"/>
          <img src="https://www.policymed.com/wp-content/uploads/2013/03/OIG.jpg" alt="HHS Compliance"/>
        </div>
      </section>
      
      {/* Footer */}
      <footer>
        <p>© 2025 AI Security Solutions | Defense & Healthcare</p>
      </footer>
    </div>
  );
}

export default App;
