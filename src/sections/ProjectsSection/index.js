import React from "react";
import { Container, Row, Col } from "reactstrap";
import Carousel from "components/Carousel";

export default function ProjectsSection({ carouselItems }) {
  return (
    <div className="section">
      <Container>
        <Row className="justify-content-between">
          <Col md="6">
            <Row className="justify-content-between align-items-center">
              <Carousel items={carouselItems} />
            </Row>
          </Col>
          <Col md="5">
            <h1 className="profile-title text-left">Projects</h1>
            <h5 className="text-on-back">02</h5>
            <p className="profile-description text-left">
              My career began in developing IoT applications, contributing to projects for companies such as Audi, MAHLE, and Iveco.<br /><br />
              I later specialized in automation and CI/CD pipeline development at Mapfre, as I am obsessed with automation and clean code.<br /><br />
              Currently, I deliver DevOps services for Santander Bank, where I am expanding my knowledge about Platform Engineering.<br /><br />
              I am also dedicated to personal projects, which you can explore on my GitHub profile.<br /><br />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}