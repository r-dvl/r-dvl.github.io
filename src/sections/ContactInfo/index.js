import React from "react";

export default function ContactInfo() {
  return (
    <>
      <div className="contact-glass-card">
        <div className="contact-icon">
          <i className="tim-icons icon-square-pin" />
        </div>
        <div className="contact-details">
          <h4>Location</h4>
          <p>
            Algeciras (Cádiz),<br />
            Spain
          </p>
        </div>
      </div>
      <div className="contact-glass-card">
        <div className="contact-icon">
          <i className="tim-icons icon-email-85" />
        </div>
        <div className="contact-details">
          <h4>Email</h4>
          <p>
            <a href="mailto:rauldel.valle.lima@gmail.com">
              rauldel.valle.lima@gmail.com
            </a>
            <br />
            Mon - Fri, 8:00-17:00
          </p>
        </div>
      </div>
      <div className="contact-glass-card">
        <div className="contact-icon">
          <i className="fab fa-linkedin" />
        </div>
        <div className="contact-details">
          <h4>LinkedIn</h4>
          <p>
            <a
              href="https://www.linkedin.com/in/r-dvl"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/r-dvl
            </a>
          </p>
        </div>
      </div>
    </>
  );
}