import React, { useContext, useState } from "react";
import { Button, Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import { AiOutlineMenu } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import "./NavigationBar.css";
import { RoleContext } from "../../context/RoleProvider";

const NavigationBar = () => {
  const navigate = useNavigate();
  const { roles, setUser } = useContext(RoleContext);
  const [show, setShow] = useState(false);
  const role = "Admin";
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleLogout = () => {
    setUser(null);
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
              {role === "Admin" && (
                <>
                  {roles.role1.roleMenus.map((menu, idx) => (
                    <Link key={idx} to="/user-registration">
                      {menu}
                    </Link>
                  ))}
                </>
              )}
            </Nav>
            <Button onClick={handleLogout} variant="danger">
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
