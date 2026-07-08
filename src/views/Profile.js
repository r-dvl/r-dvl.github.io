import React, { useState, useEffect, useCallback } from 'react';
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ContactForm from "sections/ContactForm";
import ProfileTabs from "sections/ProfileTabs";
import ProjectsSection from "sections/ProjectsSection";
import ContactInfo from "sections/ContactInfo";
import TechStack from "sections/TechStack";
import { Container, Row, Col } from "reactstrap";

const DISCORD_WEBHOOK_URL = process.env.REACT_APP_DISCORD_WEBHOOK_URL;

const roles = [
  "DevOps Engineer",
  "Software Developer",
  "Automation Enthusiast",
  "Cloud Architect",
  "Platform Engineer",
];

let ps = null;

function TypingEffect({ words, typingSpeed = 80, deletingSpeed = 40, pauseTime = 2000 }) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const tick = useCallback(() => {
    const currentWord = words[wordIndex];

    if (!isDeleting) {
      setDisplayText(currentWord.substring(0, displayText.length + 1));
      if (displayText.length + 1 === currentWord.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
        return;
      }
    } else {
      setDisplayText(currentWord.substring(0, displayText.length - 1));
      if (displayText.length - 1 === 0) {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
        return;
      }
    }
  }, [displayText, isDeleting, wordIndex, words, pauseTime]);

  useEffect(() => {
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    const timer = setTimeout(tick, speed);
    return () => clearTimeout(timer);
  }, [tick, isDeleting, typingSpeed, deletingSpeed]);

  return (
    <span>
      {displayText}
      <span className="typing-cursor" />
    </span>
  );
}

export default function ProfilePage() {
  const [tabs, setTabs] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  useEffect(() => {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1 && ps) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const { name, email, phone, company, message } = formState;

    const payload = {
      content: `New contact form submission from **${name}**`,
      embeds: [{
        title: `📩 New message from ${name}`,
        color: 0xe14eca,
        fields: [
          { name: "📧 Email", value: email, inline: true },
          { name: "📱 Phone", value: phone || "N/A", inline: true },
          { name: "🏢 Company", value: company || "N/A", inline: true },
          { name: "💬 Message", value: message },
        ],
        timestamp: new Date().toISOString(),
      }]
    };

    const formData = new FormData();
    formData.append("payload_json", JSON.stringify(payload));

    // Using FormData and 'no-cors' mode avoids CORS preflight OPTIONS requests,
    // which Discord's API doesn't support for client-side webhooks.
    await fetch(DISCORD_WEBHOOK_URL, {
      method: "POST",
      mode: "no-cors",
      body: formData,
    });

    setFormState({ name: "", email: "", phone: "", company: "", message: "" });
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        {/* ===== HERO SECTION ===== */}
        <div className="page-header" id="about-section">
          <img alt="" className="dots" src={require("assets/img/dots.png")} />
          <img alt="" className="path" src={require("assets/img/path4.png")} />

          {/* Floating decorative squares */}
          <div
            className="floating-square sq-1"
            style={{ backgroundImage: `url(${require("assets/img/square1.png")})` }}
          />
          <div
            className="floating-square sq-2"
            style={{ backgroundImage: `url(${require("assets/img/square2.png")})` }}
          />
          <div
            className="floating-square sq-3"
            style={{ backgroundImage: `url(${require("assets/img/square5.png")})` }}
          />
          <div
            className="floating-square sq-4"
            style={{ backgroundImage: `url(${require("assets/img/square3.png")})` }}
          />

          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6" className="mb-5 mb-md-0">
                <div className="section-animate">
                  <div className="section-header" style={{ position: 'relative', top: 'auto', left: 'auto' }}>
                    <span className="section-number">01 — About</span>
                  </div>
                  <h1 className="hero-name">
                    Hi, I'm{" "}
                    <span className="gradient-text">Raúl Del Valle</span>
                  </h1>
                  <div className="hero-roles">
                    <TypingEffect words={roles} />
                  </div>
                  <p className="hero-description">
                    Curious developer with experience in Automation, IoT, Web Development,
                    and DevOps practices. Passionate about building scalable infrastructure
                    and obsessed with clean code.
                  </p>
                  <div className="hero-social-btns">
                    <a
                      className="hero-social-btn"
                      href="https://github.com/r-dvl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="GitHub"
                    >
                      <i className="fab fa-github" />
                    </a>
                    <a
                      className="hero-social-btn"
                      href="https://www.linkedin.com/in/r-dvl"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="LinkedIn"
                    >
                      <i className="fab fa-linkedin" />
                    </a>
                  </div>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <div className="section-animate section-animate-delay-2">
                  <ProfileTabs tabs={tabs} setTabs={setTabs} />
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* ===== TECH STACK ===== */}
        <TechStack />

        {/* ===== PROJECTS ===== */}
        <ProjectsSection />

        {/* ===== CONTACT ===== */}
        <section className="section" id="contact-section">
          <Container>
            <Row>
              <Col md="6">
                <ContactForm
                  formState={formState}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </Col>
              <Col className="ml-auto mt-4 mt-md-0" md="4">
                <div className="contact-info-wrapper">
                  <ContactInfo />
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        <Footer />
      </div>
    </>
  );
}