import React, { useState } from 'react';
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
} from "reactstrap";

// core components
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import Carousel from "components/Carousel";

const carouselItems = [
  {
    src: require("assets/img/invoice-control.png"),
    altText: "Slide 1",
    caption: "Django-powered WebApp for invoice control.",
    header: "AMS Invoice Control"
  },
  {
    src: require("assets/img/ansible-manager.png"),
    altText: "Slide 2",
    caption: "WebApp built with React and FastAPI for Ansible jobs management.",
    header: "Ansible Manager"
  }
];

let ps = null;

export default function ProfilePage() {
  const [tabs, setTabs] = React.useState(1);

  // Contact form
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
    // Specify how to clean up after this effect:
    return function cleanup() {
      if (navigator.platform.indexOf("Win") > -1) {
        ps.destroy();
        document.documentElement.className += " perfect-scrollbar-off";
        document.documentElement.classList.remove("perfect-scrollbar-on");
      }
      document.body.classList.toggle("profile-page");
    };
  }, []);

  // Contact form logic
  const handleChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { name, email, phone, company, message } = formState;

    const response = await fetch('https://ntfy.rdvl-server.site/Portfolio', {
      method: 'POST',
      body: `${message} \n Contact: ${email}, ${phone}`,
      headers: {
          'Title': `${name} from ${company} sent a message.`,
          'Priority': 'urgent',
      }
  })

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
                  Hi!👋, my name is Raúl Del Valle Lima,<br />
                  I am a curious Developer with experience in Automation,
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
                    Follow me on Github
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
                    Follow me on Linkedin
                  </UncontrolledTooltip>
                </div>
              </Col>
              <Col className="ml-auto mr-auto" lg="6" md="6">
                <Card className="card-coin card-plain">
                  <CardHeader>
                    <img
                      alt="..."
                      className="img-center img-fluid rounded-circle"
                      src={require("assets/img/profile.png")}
                    />
                    <h4 className="title">Raúl Del Valle Lima</h4>
                  </CardHeader>
                  <CardBody>
                    <Nav
                      className="nav-tabs-primary justify-content-center"
                      tabs
                    >
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 1,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(1);
                          }}
                          href="#r-dvl"
                        >
                          Experience
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 2,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(2);
                          }}
                          href="#r-dvl"
                        >
                          Certifications
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames({
                            active: tabs === 3,
                          })}
                          onClick={(e) => {
                            e.preventDefault();
                            setTabs(3);
                          }}
                          href="#r-dvl"
                        >
                          Studies
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <TabContent
                      className="tab-subcategories"
                      activeTab={"tab" + tabs}
                    >
                      <TabPane tabId="tab1">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Company</th>
                              <th className="header">Role</th>
                              <th className="header">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>UST</td>
                              <td>DevOps Engineer</td>
                              <td>2024 - Now</td>
                            </tr>
                            <tr>
                              <td>Kyndryl</td>
                              <td>Software Engineer</td>
                              <td>2023 - 2024</td>
                            </tr>
                            <tr>
                              <td>STC</td>
                              <td>Software Engineer</td>
                              <td>2022 - 2023</td>
                            </tr>
                            <tr>
                              <td>Roptex</td>
                              <td>Software Engineer</td>
                              <td>2021 - 2022</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab2">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Issuer</th>
                              <th className="header">Name</th>
                              <th className="header">Description</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Microsoft</td>
                              <td>AZ-900</td>
                              <td>Azure Fundamentals</td>
                            </tr>
                            <tr>
                              <td>Microsoft</td>
                              <td>AZ-204</td>
                              <td>Azure Developer Associate</td>
                            </tr>
                            <tr>
                              <td>Microsoft</td>
                              <td>AZ-400</td>
                              <td>Azure DevOps Expert</td>
                            </tr>
                            <tr>
                              <td>Oracle</td>
                              <td>OCI</td>
                              <td>Oracle Cloud Infrastructure Fundamentals</td>
                            </tr>
                            <tr>
                              <td>MongoDB</td>
                              <td>M320</td>
                              <td>MongoDB Database Modelling</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                      <TabPane tabId="tab3">
                        <Table className="tablesorter" responsive>
                          <thead className="text-primary">
                            <tr>
                              <th className="header">Course</th>
                              <th className="header">Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Master in Robotics and Automation</td>
                              <td>2020 - 2021</td>
                            </tr>
                            <tr>
                              <td>Electronics</td>
                              <td>2019-2021</td>
                            </tr>
                          </tbody>
                        </Table>
                      </TabPane>
                    </TabContent>
                  </CardBody>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
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
                  I spend a lot of time developing, testing and studying the best CI/CD lifecycle of my own
                  APPs just to learn new technologies or apply new methods to
                  improve the performance or security of my code.<br />
                  As I don't forget my roots, I also love to create
                  domotic applications with PLCs and electronic junk.
                </p>
              </Col>
            </Row>
          </Container>
        </div>
        <section className="section">
          <Container>
            <Row>
              <Col md="6">
                <Card className="card-plain">
                  <CardHeader>
                    <h1 className="profile-title text-left">Contact</h1>
                    <h5 className="text-on-back">03</h5>
                  </CardHeader>
                  <CardBody>
                    <Form onSubmit={handleSubmit}>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Your Name</label>
                            <Input placeholder="Darth Vader" type="text" name="name" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity("Please fill this field.")} onInput={e => e.target.setCustomValidity("")} />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Email address</label>
                            <Input placeholder="d.vady666@darkside.com" type="email" name="email" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity("Please fill this field.")} onInput={e => e.target.setCustomValidity("")} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="6">
                          <FormGroup>
                            <label>Phone</label>
                            <Input placeholder="+34 987654321" type="text" name="phone" onChange={handleChange} />
                          </FormGroup>
                        </Col>
                        <Col md="6">
                          <FormGroup>
                            <label>Company</label>
                            <Input placeholder="Galactic Empire" type="text" name="company" onChange={handleChange} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col md="12">
                          <FormGroup>
                            <label>Message</label>
                            <Input placeholder="Luke, I am your father!" type="text" name="message" onChange={handleChange} required onInvalid={e => e.target.setCustomValidity("Please fill this field.")} onInput={e => e.target.setCustomValidity("")} />
                          </FormGroup>
                        </Col>
                      </Row>
                      <Button
                        className="btn-round float-right"
                        color="primary"
                        data-placement="right"
                        id="tooltip341148792"
                        type="submit"
                      >
                        Send text
                      </Button>
                      <UncontrolledTooltip
                        delay={0}
                        placement="right"
                        target="tooltip341148792"
                      >
                        Can't wait for your message
                      </UncontrolledTooltip>
                    </Form>
                  </CardBody>
                </Card>
              </Col>
              <Col className="ml-auto" md="4">
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-square-pin" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Location</h4>
                    <p>
                      Algeciras (Cádiz),<br />
                      Spain
                    </p>
                  </div>
                </div>
                <div className="info info-horizontal">
                  <div className="icon icon-primary">
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <div className="description">
                    <h4 className="info-title">Contact me by e-mail</h4>
                    <p>
                      Raúl Del Valle Lima <br />
                      rauldel.valle.lima@gmail.com <br />
                      Mon - Fri, 8:00-17:00
                    </p>
                  </div>
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