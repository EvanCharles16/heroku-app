import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbars extends Component {
  render() {
    return (
      <div>
        <Navbar bg="primary" expand="lg">
          <Navbar.Brand href="/" className="logo ml-5 text-light">
            <h3>Evan Charles</h3>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbar-nav" className="bg-light" />
          <Navbar.Collapse id="navbar-nav">
            <Nav className="nav ml-auto mr-5  ">
              <Link to="/" className=" link text-light pr-3 mr-4">
                Home
              </Link>
              <Link to="/about" className="link text-light pr-3 mr-4">
                About
              </Link>
              {/* <Link to="/article" className="link text-light pr-3 mr-4">
                Article
              </Link> */}
              <Link to="/portfolio" className="link text-light pr-3 mr-4">
                Portfolio
              </Link>
              <Link to="/contact" className="link text-light pr-3 mr-4">
                Hire Me
              </Link>
              <Link to="/heroku" className="link text-light pr-3 mr-4">
                HeroKu
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
export default Navbars;
