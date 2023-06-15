import React, { useState } from "react";
import {
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const NavigationBar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Text onClick={handleShow} className="me-3 menu-icon">
            <AiOutlineMenu />
          </Navbar.Text>
          <Navbar.Brand>OSIMS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link>
                <Link to="/user-registration">User Registration</Link>
              </Nav.Link>
              <Nav.Link>
                <Link to="/dashboard">Key Info</Link>
              </Nav.Link>
              <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/dashboard">Change Password</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/dashboard">Reset Password</Link>
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OSIMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav.Link href="#home">Menu 1</Nav.Link>
          <hr />
          <Nav.Link href="#link">Menu 2</Nav.Link>
          <hr />
          <Nav.Link href="#home">Menu 3</Nav.Link>
          <hr />
          <Nav.Link href="#link">Menu 4</Nav.Link>
          <hr />
          <Nav.Link href="#home">Menu 5</Nav.Link>
          <hr />
          <Nav.Link href="#link">Menu 6</Nav.Link>
          <hr />
          <Nav.Link href="#home">Menu 7</Nav.Link>
          <hr />
          <Nav.Link href="#link">Menu 8</Nav.Link>
          <hr />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
