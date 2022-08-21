import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import { Navbar } from "react-bootstrap";
import logo_black from "../../imgs/Logo_white.png";
// import logoWhite from '../../imgs/logo_white.png'

// import headerlogo from '../../imgs/headerlogo.png'
function CollapsibleExample() {
  return (
    <Navbar className="fixed-top  " collapseOnSelect expand="lg" bg="light">
      <Container>
        <Navbar.Brand href="#home">
          <div className="header-logo overflow-hidden">
            <img
              src={logo_black}
              alt="logo"
              className="logo_img overflow-hidden "
            />
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav text-center">
          <Nav className="ms-auto  ">
            <Nav.Link href="/" className="text-center">
              HOME
            </Nav.Link>
            <Nav.Link href="/#about" className="text-center">
              ABOUT
            </Nav.Link>
            <Nav.Link href="/#services" className="text-center">
              SERVICES
            </Nav.Link>
            <Nav.Link href="/#works" className="text-center">
              WORKS
            </Nav.Link>
            <Nav.Link href="#contact" className="text-center">
              CONTACT US
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;
