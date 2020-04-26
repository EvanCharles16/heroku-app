import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import Socialmedia from "../../components/Footer/Socialmedia";
import foto2 from "../../img/3.png";
import boy from "../../img/boy.png";
import "./About.css";

class About extends Component {
  render() {
    return (
      <div className="background-about">
        <h1 className="mt-4 text-center">About Me</h1>
        <Container className="about">
          <Row>
            <Col md={5} sm={12}>
              <div id="about">
                <img src={foto2} alt="foto" style={{ width: "100%" }} />
              </div>
            </Col>
            <Col md={7} sm={12} className="text mt-3">
              <h3 className="ml-4 pt-5 mt-3 text-left">
                My name is Evan Charles
              </h3>
              <h3>
                <h3 className="ml-4 pt-3 text-left">
                  I am a simple, creative, enthusiastic and fun-loving person. I
                  always like to create something on my own which is helpful for
                  others
                </h3>
                <h3 className="ml-4 pt-3 text-left">
                  I have vast experience in HTML5, CSS3, Javascript, JQuery,
                  NodeJs, ReactJs and on. I have already completed many
                  projects.
                </h3>
              </h3>

              <Row className="mt-4 mr-5">
                <Col md={{ span: 5, offset: 1 }}>
                  Name : Evan Charles
                  <br />
                  Age : 18 Years Old
                  <br />
                  Email : ec@vannch.com
                </Col>
                <Col md={6}>
                  Phone : 0895 627 436 758
                  <br />
                  Address : 18 Years Old
                  <br />
                  Hobby : Learning & Discovering technology , Basketball
                </Col>
              </Row>
            </Col>
          </Row>

          <hr />

          <h1 className="mt-5 text-center">What I Can Do</h1>
          <Row>
            <Col md={6}>
              <img
                src={boy}
                alt="character"
                style={{
                  width: "16rem",
                  marginLeft: "6rem",
                }}
              />
            </Col>
            <Col md={6} className="mt-5" style={{ textAlign: "justify" }}>
              <h3>Design What you want</h3>
              <h5>
                I like to keep it smile. My goals are on focus on typography,
                content, and conveying the message that you want to send.
              </h5>
            </Col>
          </Row>

          <Row>
            <Col md={6} className="mt-5" style={{ textAlign: "justify" }}>
              <h3>Develop What you need</h3>
              <h5>
                I'm a developer, so i know how to create your website to run
                across devices during using the latest technology available.
              </h5>
            </Col>
            <Col md={6}>
              <img
                src={boy}
                alt="character"
                style={{ width: "16rem", marginLeft: "6rem" }}
              />
            </Col>
          </Row>

          <hr className="mt-5" />

          <Row className="mb-4">
            <Col>
              <div id="portfolio">
                <div className="services text-center mb-5 mt-4">
                  <h1>Services</h1>
                </div>
                <CardDeck className="text-center">
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-book fa-4x"></i>
                    <Card.Body>
                      <Card.Title>Documentation</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-mobile fa-5x"></i>
                    <Card.Body>
                      <Card.Title>Mobile Develop</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.{" "}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" />
                    <i class="fa fa-desktop fa-4x"></i>
                    <Card.Body>
                      <Card.Title>Web Develop</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This card has
                        even longer content than the first to show that equal
                        height action.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </CardDeck>
              </div>
            </Col>
          </Row>
        </Container>

        <Socialmedia />
      </div>
    );
  }
}
export default About;
