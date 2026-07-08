import React from "react";
import { Container, Row, Col } from "reactstrap";

export default function Footer() {
  return (
    <footer className="footer footer-enhanced">
      <Container>
        <Row>
          <Col lg="4" md="6" sm="12">
            <div className="footer-brand">
              <h3 className="footer-logo">
                <span className="gradient-text">r-dvl</span>
              </h3>
              <p className="footer-tagline">
                DevOps Engineer & Software Developer. Passionate about automation, cloud infrastructure, and clean code.
              </p>
            </div>
          </Col>
          <Col lg="2" md="3" sm="6">
            <h4 className="footer-section-title">Links</h4>
            <ul className="footer-links">
              <li>
                <a href="https://r-dvl.github.io/blog" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-pen-fancy" />
                  Blog
                </a>
              </li>
              <li>
                <a href="https://r-dvl.github.io/docs" target="_blank" rel="noopener noreferrer">
                  <i className="fas fa-book" />
                  Docs
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="3" sm="6">
            <h4 className="footer-section-title">Curriculum Vitae</h4>
            <ul className="footer-links">
              <li>
                <a href="https://rxresu.me/r-dvl/cv-en" target="_blank" rel="noopener noreferrer">
                  <i className="far fa-file-alt" />
                  English Version
                </a>
              </li>
              <li>
                <a href="https://rxresu.me/r-dvl/cv-es" target="_blank" rel="noopener noreferrer">
                  <i className="far fa-file-alt" />
                  Versión Española
                </a>
              </li>
            </ul>
          </Col>
          <Col lg="3" md="12">
            <h4 className="footer-section-title">Follow me</h4>
            <div className="footer-social">
              <a
                className="social-btn"
                href="https://github.com/r-dvl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <i className="fab fa-github" />
              </a>
              <a
                className="social-btn"
                href="https://www.linkedin.com/in/r-dvl"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin" />
              </a>
            </div>
          </Col>
        </Row>
        <div className="footer-bottom">
          <p className="copyright">
            © {new Date().getFullYear()} Raúl Del Valle Lima. All rights reserved.
          </p>
          <span className="footer-credits">
            Made with <span style={{ color: "#e14eca" }}>♥</span> from Algeciras
          </span>
        </div>
      </Container>
    </footer>
  );
}
