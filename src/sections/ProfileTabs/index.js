import React from "react";
import { Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
import classnames from "classnames";

const experiences = [
  { company: "UST", role: "DevOps Engineer", date: "2024 - Present", icon: "fas fa-cloud" },
  { company: "Kyndryl", role: "Software Engineer", date: "2023 - 2024", icon: "fas fa-code" },
  { company: "STC", role: "Software Engineer", date: "2022 - 2023", icon: "fas fa-microchip" },
  { company: "Roptex", role: "Software Engineer", date: "2021 - 2022", icon: "fas fa-robot" },
];

const certifications = [
  { issuer: "Microsoft", name: "AZ-900", desc: "Azure Fundamentals", badge: "cert-azure" },
  { issuer: "Microsoft", name: "AZ-204", desc: "Azure Developer Associate", badge: "cert-azure" },
  { issuer: "Microsoft", name: "AZ-400", desc: "Azure DevOps Expert", badge: "cert-azure" },
  { issuer: "Oracle", name: "OCI", desc: "Oracle Cloud Infrastructure Fundamentals", badge: "cert-oracle" },
  { issuer: "MongoDB", name: "M320", desc: "MongoDB Database Modelling", badge: "cert-mongodb" },
];

const education = [
  { course: "Master's in Robotics and Automation", date: "2020 - 2021", icon: "fas fa-graduation-cap" },
  { course: "Electronics", date: "2019 - 2021", icon: "fas fa-bolt" },
];

export default function ProfileTabs({ tabs, setTabs }) {
  return (
    <Card className="card-coin card-plain profile-card-enhanced">
      <CardHeader>
        <img
          alt="Raúl Del Valle Lima"
          className="img-center img-fluid rounded-circle"
          src={require("assets/img/profile.png")}
        />
        <h4 className="title">Raúl Del Valle Lima</h4>
      </CardHeader>
      <CardBody>
        <Nav className="nav-tabs-primary justify-content-center" tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: tabs === 1 })}
              onClick={e => { e.preventDefault(); setTabs(1); }}
              href="#experience"
            >
              Experience
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: tabs === 2 })}
              onClick={e => { e.preventDefault(); setTabs(2); }}
              href="#certifications"
            >
              Certifications
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: tabs === 3 })}
              onClick={e => { e.preventDefault(); setTabs(3); }}
              href="#studies"
            >
              Education
            </NavLink>
          </NavItem>
        </Nav>
        <TabContent className="tab-subcategories" activeTab={"tab" + tabs}>
          <TabPane tabId="tab1">
            {experiences.map((exp, idx) => (
              <div className="experience-card stagger-item" key={idx}>
                <div className="exp-icon">
                  <i className={exp.icon} />
                </div>
                <div className="exp-details">
                  <div className="exp-company">{exp.company}</div>
                  <div className="exp-role">{exp.role}</div>
                  <div className="exp-date">{exp.date}</div>
                </div>
              </div>
            ))}
          </TabPane>
          <TabPane tabId="tab2">
            {certifications.map((cert, idx) => (
              <div className="experience-card stagger-item" key={idx}>
                <div className="exp-icon">
                  <i className="fas fa-certificate" />
                </div>
                <div className="exp-details">
                  <div className="exp-company">
                    {cert.desc}
                    <span className={`cert-badge ${cert.badge}`} style={{ marginLeft: 10 }}>
                      {cert.name}
                    </span>
                  </div>
                  <div className="exp-role">{cert.issuer}</div>
                </div>
              </div>
            ))}
          </TabPane>
          <TabPane tabId="tab3">
            {education.map((edu, idx) => (
              <div className="experience-card stagger-item" key={idx}>
                <div className="exp-icon">
                  <i className={edu.icon} />
                </div>
                <div className="exp-details">
                  <div className="exp-company">{edu.course}</div>
                  <div className="exp-date">{edu.date}</div>
                </div>
              </div>
            ))}
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}