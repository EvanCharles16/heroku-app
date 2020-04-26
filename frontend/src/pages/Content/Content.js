import React, { Component } from "react";
import { Container, Row, Col, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import me from "../../img/me.jpg";

import "./Content.css";

class Content extends Component {
  render() {
    return (
      <div className="background-content">
        <Container>
          <Row className="text-center">
            <Col>
              <img src={me} className="me" />
              <div className="mt-4 text-white justify-content-center">
                <h1>I am Evan Charles</h1>
                <h4>Fullstack Developer</h4>
              </div>
            </Col>
          </Row>

          <Nav className="justify-content-center mt-3">
            <Nav.Item className="icons">
              <Nav.Link href="https://www.facebook.com/" target="blank">
                <i className="fa fa-facebook fa-2x"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.twitter.com" target="blank">
                <i className="fa fa-twitter fa-2x"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.linkedin.com/" target="blank">
                <i className="fa fa-linkedin fa-2x"></i>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://www.whatsapp.com/" target="blank">
                <i className="fa fa-whatsapp fa-2x"></i>
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="text-center mt-4">
            <Link to="/contact" className="text-light pl-4">
              <Button
                className="text-center"
                variant="primary mt-3 p-3"
                size="lg"
              >
                Hire Me
              </Button>
            </Link>
            <Link to="/contact" className="text-light pl-4">
              <Button variant="primary mt-3 p-3" size="lg">
                Get CV
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    );
  }
}
export default Content;
