import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Collapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  Row,
  Col,
} from "reactstrap";

const scrollToSection = (e, sectionId) => {
  e.preventDefault();
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth", block: "start" });
  }
};

export default function IndexNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  const [collapseOut, setCollapseOut] = React.useState("");
  const [color, setColor] = React.useState("navbar-transparent");
  React.useEffect(() => {
    window.addEventListener("scroll", changeColor);
    return function cleanup() {
      window.removeEventListener("scroll", changeColor);
    };
  }, []);
  const changeColor = () => {
    if (
      document.documentElement.scrollTop > 99 ||
      document.body.scrollTop > 99
    ) {
      setColor("bg-info");
    } else if (
      document.documentElement.scrollTop < 100 ||
      document.body.scrollTop < 100
    ) {
      setColor("navbar-transparent");
    }
  };
  const toggleCollapse = () => {
    document.documentElement.classList.toggle("nav-open");
    setCollapseOpen(!collapseOpen);
  };
  const onCollapseExiting = () => {
    setCollapseOut("collapsing-out");
  };
  const onCollapseExited = () => {
    setCollapseOut("");
  };
  return (
    <Navbar className={"fixed-top " + color} color-on-scroll="100" expand="lg">
      <Container>
        <div className="navbar-translate">
          <NavbarBrand to="/" tag={Link} id="navbar-brand">
            <span>r-dvl | </span>
            Portfolio
          </NavbarBrand>
          <button
            aria-expanded={collapseOpen}
            className="navbar-toggler navbar-toggler"
            onClick={toggleCollapse}
          >
            <span className="navbar-toggler-bar bar1" />
            <span className="navbar-toggler-bar bar2" />
            <span className="navbar-toggler-bar bar3" />
          </button>
        </div>
        <Collapse
          className={"justify-content-end " + collapseOut}
          navbar
          isOpen={collapseOpen}
          onExiting={onCollapseExiting}
          onExited={onCollapseExited}
        >
          <div className="navbar-collapse-header">
            <Row>
              <Col className="collapse-brand" xs="6">
                <a href="#r-dvl" onClick={(e) => e.preventDefault()}>
                  r-dvl | Portfolio
                </a>
              </Col>
              <Col className="collapse-close text-right" xs="6">
                <button
                  aria-expanded={collapseOpen}
                  className="navbar-toggler"
                  onClick={toggleCollapse}
                >
                  <i className="tim-icons icon-simple-remove" />
                </button>
              </Col>
            </Row>
          </div>
          <Nav navbar>
            <NavItem>
              <NavLink
                className="nav-section-link"
                href="#about"
                onClick={(e) => scrollToSection(e, "about-section")}
              >
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-section-link"
                href="#skills"
                onClick={(e) => scrollToSection(e, "skills-section")}
              >
                Skills
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-section-link"
                href="#projects"
                onClick={(e) => scrollToSection(e, "projects-section")}
              >
                Projects
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className="nav-section-link"
                href="#contact"
                onClick={(e) => scrollToSection(e, "contact-section")}
              >
                Contact
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.github.com/r-dvl/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on Github"
              >
                <i className="fab fa-github" />
                <p className="d-lg-none d-xl-none">Github</p>
              </NavLink>
            </NavItem>
            <NavItem className="p-0">
              <NavLink
                data-placement="bottom"
                href="https://www.linkedin.com/in/r-dvl/"
                rel="noopener noreferrer"
                target="_blank"
                title="Follow me on LinkedIn"
              >
                <i className="fab fa-linkedin" />
                <p className="d-lg-none d-xl-none">Linkedin</p>
              </NavLink>
            </NavItem>
            <NavItem>
              <a
                className="nav-cv-btn"
                href="https://rxresu.me/r-dvl/cv-en"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fas fa-file-alt" />
                CV
              </a>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  );
}
