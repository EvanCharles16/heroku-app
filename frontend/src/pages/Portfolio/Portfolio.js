import React, { Component } from "react";
import { Container, Row, Col, Card, CardDeck } from "react-bootstrap";
import Socialmedia from "../../components/Footer/Socialmedia";
import pfoto from "../../img/6.png";
import glints from "../../img/glints.png";
import impact from "../../img/Impact.png";
import udemy from "../../img/udemy.png";
import progate from "../../img/progate.png";
import "./Portfolio.css";

class Portfolio extends Component {
  render() {
    return (
      <div className="mb-4">
        <Container>
          <div className="portfolio m-5 pt-3 text-center">
            <h1>Portfolio</h1>
          </div>

          <Row className="mb-4">
            <Col>
              <div id="portfolio">
                <CardDeck>
                  <Card>
                    <Card.Img variant="top" src={glints} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content. This content is a
                        little bit longer.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={impact} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
                      <Card.Text>
                        This card has supporting text below as a natural lead-in
                        to additional content.
                      </Card.Text>
                    </Card.Body>
                  </Card>
                  <Card>
                    <Card.Img variant="top" src={udemy} />
                    <Card.Body>
                      <Card.Title>Card title</Card.Title>
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

          <Row className="pb-4">
            <Col>
              <CardDeck>
                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={progate} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This card has supporting text below as a natural lead-in
                      to additional content.{" "}
                    </Card.Text>
                  </Card.Body>
                </Card>
                <Card>
                  <Card.Img variant="top" src={pfoto} />
                  <Card.Body>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This card has even
                      longer content than the first to show that equal height
                      action.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          </Row>
        </Container>
        <Socialmedia />
      </div>
    );
  }
}
export default Portfolio;
