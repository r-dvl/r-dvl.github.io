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
              I spend a lot of time developing, testing, and studying the best CI/CD lifecycles for my own
              apps to learn new technologies or apply new methods to
              improve the performance or security of my code.<br />
              I also love creating home automation applications with PLCs and electronics.<br />
              You can find more information about my projects on my GitHub profile!
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}