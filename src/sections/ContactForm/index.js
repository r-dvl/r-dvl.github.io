import React from "react";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col, UncontrolledTooltip } from "reactstrap";

export default function ContactForm({ formState, handleChange, handleSubmit }) {
  return (
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
                <Input
                  placeholder="Darth Vader"
                  type="text"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  required
                  onInvalid={e => e.target.setCustomValidity("Please fill this field.")}
                  onInput={e => e.target.setCustomValidity("")}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label>Email Address</label>
                <Input
                  placeholder="d.vady666@darkside.com"
                  type="email"
                  name="email"
                  value={formState.email}
                  onChange={handleChange}
                  required
                  onInvalid={e => e.target.setCustomValidity("Please fill this field.")}
                  onInput={e => e.target.setCustomValidity("")}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <label>Phone</label>
                <Input
                  placeholder="+34 987654321"
                  type="text"
                  name="phone"
                  value={formState.phone}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <label>Company</label>
                <Input
                  placeholder="Galactic Empire"
                  type="text"
                  name="company"
                  value={formState.company}
                  onChange={handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <FormGroup>
                <label>Message</label>
                <Input
                  placeholder="Luke, I am your father!"
                  type="text"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  onInvalid={e => e.target.setCustomValidity("Please fill this field.")}
                  onInput={e => e.target.setCustomValidity("")}
                />
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
            Send Message
          </Button>
          <UncontrolledTooltip
            delay={0}
            placement="right"
            target="tooltip341148792"
          >
            Looking forward to your message!
          </UncontrolledTooltip>
        </Form>
      </CardBody>
    </Card>
  );
}