import React from "react";
import { Card, CardHeader, CardBody, Nav, NavItem, NavLink, TabContent, TabPane, Table } from "reactstrap";
import classnames from "classnames";

export default function ProfileTabs({ tabs, setTabs }) {
  return (
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
                  <td>2024 - Present</td>
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
                  <td>Master's in Robotics and Automation</td>
                  <td>2020 - 2021</td>
                </tr>
                <tr>
                  <td>Electronics</td>
                  <td>2019 - 2021</td>
                </tr>
              </tbody>
            </Table>
          </TabPane>
        </TabContent>
      </CardBody>
    </Card>
  );
}