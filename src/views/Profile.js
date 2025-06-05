import React, { useState } from 'react';
import PerfectScrollbar from "perfect-scrollbar";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import ContactForm from "sections/ContactForm";
import ProfileTabs from "sections/ProfileTabs";
import ProjectsSection from "sections/ProjectsSection";
import ContactInfo from "sections/ContactInfo";
import { Container, Row, Col, Button, UncontrolledTooltip } from "reactstrap";

const carouselItems = [
  {
    src: require("assets/img/projects/mahle.png"),
    altText: "Slide 1",
    caption: "Mahle, IoT Software Development",
    header: "Mahle, IoT Software Development"
  },
  {
    src: require("assets/img/projects/audi.png"),
    altText: "Slide 2",
    caption: "Audi, IoT Software Development",
    header: "Audi, IoT Software Development"
  },
  {
    src: require("assets/img/projects/iveco.png"),
    altText: "Slide 3",
    caption: "Iveco, IoT Software Development",
    header: "Iveco, IoT Software Development"
  },
  {
    src: require("assets/img/projects/mapfre.png"),
    altText: "Slide 4",
    caption: "Mapfre, CI/CD Automation",
    header: "Mapfre, CI/CD Automation"
  },
  {
    src: require("assets/img/projects/santander.png"),
    altText: "Slide 5",
    caption: "Santander, DevOps Service",
    header: "Santander, DevOps Service"
  }
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = useState(1);
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  });

  React.useEffect(() => {
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
    const response = await fetch('https://ntfy.rdvl.net/Portfolio', {
      method: 'POST',
      body: `${message} \n Contact: ${email}, ${phone}`,
      headers: {
        'Title': `${name} from ${company} sent a message.`,
        'Priority': 'urgent',
      }
    });
    if (!response.ok) {
      console.error('Failed to send message', response);
    }
  };

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="page-header">
          <img
            alt="..."
            className="dots"
            src={require("assets/img/dots.png")}
          />
          <img
            alt="..."
            className="path"
            src={require("assets/img/path4.png")}
          />
          <Container className="align-items-center">
            <Row>
              <Col lg="6" md="6">
                <h1 className="profile-title text-left">About Me</h1>
                <h5 className="text-on-back">01</h5>
                <p className="profile-description">
                  Hi! 👋 My name is Raúl Del Valle Lima.<br />
                  I am a curious developer with experience in Automation,
                  IoT, Web Development, and DevOps practices.<br /><br />
                  Always eager to learn and grow.
                </p>
                <div className="btn-wrapper profile pt-3">
                  <Button
                    className="btn-icon btn-round"
                    color="github"
                    href="https://github.com/r-dvl"
                    id="tooltip639225725"
                    target="_blank"
                  >
                    <i className="fab fa-github" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip639225725">
                    Follow me on GitHub
                  </UncontrolledTooltip>
                  <Button
                    className="btn-icon btn-round"
                    color="linkedin"
                    href="https://www.linkedin.com/in/r-dvl"
                    id="tooltip982846143"
                    target="_blank"
                  >
                    <i className="fab fa-linkedin" />
                  </Button>
                  <UncontrolledTooltip delay={0} target="tooltip982846143">
                    Follow me on LinkedIn
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <ProfileTabs tabs={tabs} setTabs={setTabs} />
              </Col>
            </Row>
          </Container>
        </div>
        <ProjectsSection carouselItems={carouselItems} />
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <ContactForm
                  formState={formState}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </Col>
              <Col className="ml-auto" md="4">
                <ContactInfo />
              </Col>
            </Row>
          </Container>
        </section>
        <Footer />
      </div>
    </>
  );
}