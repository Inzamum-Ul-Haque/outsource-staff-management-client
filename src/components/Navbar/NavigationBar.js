import React, { useContext, useState } from "react";
import {
  Button,
  Container,
  Nav,
  NavDropdown,
  Navbar,
  Offcanvas,
} from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { RoleContext } from "../../context/RoleBasedInfo";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { roles } = useContext(RoleContext);
  const [show, setShow] = useState(false);
  const role = "Guest";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogin = () => {
    navigate("/");
  };

  const offCanvasMenu = [
    "Family Information",
    "Children Information",
    "Education",
    "Posting Info at DBBL*",
    "Job Status",
    "PF Input",
    "Gratuity Input",
  ];

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
            <Nav className="me-auto nav-menu">
              {role === "Guest" && (
                <>
                  {roles.role3.roleMenus.map((menu, idx) => (
                    <Link key={idx} to="/user-registration">
                      {menu}
                    </Link>
                  ))}
                </>
              )}
              {/* <NavDropdown title="Actions" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  <Link to="/dashboard">Change Password</Link>
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  <Link to="/dashboard">Reset Password</Link>
                </NavDropdown.Item>
              </NavDropdown> */}
            </Nav>
            <Button onClick={handleLogin} variant="danger">
              Logout
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>OSIMS</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {offCanvasMenu.map((menu, idx) => (
            <div key={idx}>
              <Nav.Link>{menu}</Nav.Link>
              <hr />
            </div>
          ))}
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default NavigationBar;
