import React, { useState, useEffect } from "react";

const techCategories = [
  {
    label: "Backend",
    badgeClass: "badge-purple",
    items: [
      { name: "Java", icon: "fab fa-java" },
      { name: "Spring Boot", icon: "fas fa-leaf" },
      { name: "Python", icon: "fab fa-python" },
      { name: "Go", icon: "fas fa-code" },
      { name: "Groovy", icon: "fas fa-code" },
      { name: "Node.js", icon: "fab fa-node-js" },
      { name: "Bash", icon: "fas fa-terminal" },
      { name: "Powershell", icon: "fas fa-terminal" },
      { name: "PostgreSQL", icon: "fas fa-database" },
      { name: "MongoDB", icon: "fas fa-database" },
      { name: "SQL Server", icon: "fas fa-database" },
    ],
  },
  {
    label: "Frontend",
    badgeClass: "badge-green",
    items: [
      { name: "React", icon: "fab fa-react" },
      { name: "Angular", icon: "fab fa-angular" },
      { name: "Django", icon: "fas fa-code" },
      { name: "CSS", icon: "fab fa-css3-alt" },
      { name: "JavaScript", icon: "fab fa-js-square" },
    ],
  },
  {
    label: "DevOps",
    badgeClass: "badge-azure",
    items: [
      { name: "Azure", icon: "fab fa-microsoft" },
      { name: "AWS", icon: "fab fa-aws" },
      { name: "Terraform", icon: "fas fa-cube" },
      { name: "Jenkins", icon: "fas fa-cogs" },
      { name: "Actions", icon: "fab fa-github" },
      { name: "Ansible", icon: "fas fa-server" },
      { name: "Docker", icon: "fab fa-docker" },
      { name: "K8S", icon: "fas fa-dharmachakra" },
      { name: "Git", icon: "fab fa-git-alt" },
      { name: "Grafana", icon: "fas fa-chart-line" },
      { name: "Dynatrace", icon: "fas fa-chart-bar" },
    ],
  },
];

export default function TechStack() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById("skills-section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="section tech-stack-section" id="skills-section">
      <div className="container">
        <div className="section-header">
          <span className="section-number">02 — Skills</span>
          <h2 className="section-title">
            Tech <span className="gradient-text">Stack</span>
          </h2>
          <p className="section-subtitle">
            Technologies and tools I work with daily to build and deliver robust solutions.
          </p>
        </div>
        <div className="row">
          {techCategories.map((cat, catIdx) => (
            <div className="col-lg-4 col-md-6 col-sm-12" key={cat.label}>
              <div className="tech-category">
                <div className="category-label">{cat.label}</div>
                <div className="tech-badges-container">
                  {cat.items.map((item, itemIdx) => (
                    <span
                      className={`tech-badge ${cat.badgeClass} ${
                        isVisible ? "stagger-item" : ""
                      }`}
                      key={item.name}
                      style={
                        isVisible
                          ? { animationDelay: `${(catIdx * 6 + itemIdx) * 0.05}s` }
                          : { opacity: 0 }
                      }
                    >
                      <i className={item.icon} />
                      {item.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
