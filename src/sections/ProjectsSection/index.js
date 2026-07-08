import React from "react";
import { Container, Row, Col } from "reactstrap";

const projects = [
  {
    src: require("assets/img/projects/mahle.png"),
    title: "IoT Software Development",
    client: "MAHLE",
    tags: ["IIoT", "OpenCV", "Python"],
  },
  {
    src: require("assets/img/projects/audi.png"),
    title: "IoT Software Development",
    client: "Audi",
    tags: ["IIoT", "Embedded", "C#"],
  },
  {
    src: require("assets/img/projects/iveco.png"),
    title: "IoT Software Development",
    client: "Iveco",
    tags: ["IIoT", "Angular", "Java"],
  },
  {
    src: require("assets/img/projects/mapfre.png"),
    title: "CI/CD Automation",
    client: "Mapfre",
    tags: ["Software Development", "CI/CD", "Automation"],
  },
  {
    src: require("assets/img/projects/santander.png"),
    title: "DevOps Service",
    client: "Santander",
    tags: ["Platform Engineering", "Kubernetes", "Cloud"],
  },
];

export default function ProjectsSection() {
  return (
    <div className="section" id="projects-section">
      <Container>
        <div className="section-header">
          <span className="section-number">03 — Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle">
            From IoT applications to Platform Engineering — delivering robust solutions for industry leaders.
          </p>
        </div>
        <Row>
          <Col xs="12">
            <div className="projects-grid">
              {projects.map((project, idx) => (
                <div className="project-card stagger-item" key={idx}>
                  <div className="project-image-wrapper">
                    <img
                      src={project.src}
                      alt={`${project.client} - ${project.title}`}
                      className="project-image"
                    />
                  </div>
                  <div className="project-info">
                    <div className="project-client">{project.client}</div>
                    <div className="project-title">{project.title}</div>
                    <div className="project-tags">
                      {project.tags.map((tag, tagIdx) => (
                        <span className="project-tag" key={tagIdx}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}