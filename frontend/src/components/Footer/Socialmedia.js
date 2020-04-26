import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Socialmedia.css";

class Socialmedia extends Component {
  render() {
    return (
      <div className="bg-light p-3 mt-4 sticky-bottom icon">
        <Container>
          <Row className="ml-5 mt-3 pl-5">
            <Col md={3} sm={6}>
              <a href="https://www.facebook.com/" target="blank">
                <i className="fa fa-facebook fa-2x icons"></i>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href="https://www.twitter.com/" target="blank">
                <i className="fa fa-twitter fa-2x icons"></i>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href="https://www.whatsapp.com/" target="blank">
                <i className="fa fa-whatsapp fa-2x icons"></i>
              </a>
            </Col>
            <Col md={3} sm={6}>
              <a href="https://www.linkedin.com/" target="blank">
                <i className="fa fa-linkedin fa-2x icons"></i>
              </a>
            </Col>
          </Row>
        </Container>

        <h3 className="text-center pt-5">Designed By Me - EvanCharles 2020</h3>
      </div>
    );
  }
}
export default Socialmedia;
