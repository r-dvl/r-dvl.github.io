import React, { useState } from "react";
import { Button, Card, CardHeader, CardBody, FormGroup, Form, Input, Row, Col } from "reactstrap";

export default function ContactForm({ formState, handleChange, handleSubmit: parentHandleSubmit }) {
  const [submitStatus, setSubmitStatus] = useState("idle"); // idle | loading | success | error

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitStatus("loading");
    try {
      await parentHandleSubmit(event);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    } catch {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 4000);
    }
  };

  return (
    <Card className="card-plain">
      <CardHeader>
        <div className="section-header" style={{ marginBottom: 20 }}>
          <span className="section-number">04 — Contact</span>
          <h2 className="section-title">
            Get in <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind or just want to say hi? Drop me a message!
          </p>
        </div>
      </CardHeader>
      <CardBody>
        <Form onSubmit={handleSubmit} className="form-enhanced">
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
                  type="textarea"
                  name="message"
                  rows="4"
                  value={formState.message}
                  onChange={handleChange}
                  required
                  onInvalid={e => e.target.setCustomValidity("Please fill this field.")}
                  onInput={e => e.target.setCustomValidity("")}
                />
              </FormGroup>
            </Col>
          </Row>

          {submitStatus === "idle" && (
            <Button
              className="btn-round float-right btn-glow"
              color="primary"
              type="submit"
            >
              <i className="fas fa-paper-plane" style={{ marginRight: 8 }} />
              Send Message
            </Button>
          )}

          {submitStatus === "loading" && (
            <Button
              className="btn-round float-right"
              color="primary"
              disabled
            >
              <i className="fas fa-spinner fa-spin" style={{ marginRight: 8 }} />
              Sending...
            </Button>
          )}

          {submitStatus === "success" && (
            <div className="submit-success float-right">
              <i className="fas fa-check-circle" />
              Message sent successfully!
            </div>
          )}

          {submitStatus === "error" && (
            <div className="float-right" style={{ color: "#fd5d93", fontWeight: 600 }}>
              <i className="fas fa-exclamation-circle" style={{ marginRight: 6 }} />
              Something went wrong. Try again.
            </div>
          )}
        </Form>
      </CardBody>
    </Card>
  );
}