import React from "react";
import "./FamilyInfo.css";
import NavigationBar from "../../components/Navbar/NavigationBar";
import { Col, Container, Row } from "react-bootstrap";

const FamilyInfo = () => {
  return (
    <div>
      <NavigationBar />

      <Container>
        <Row>
          <Col>
            <h1 className="mt-2">Add User</h1>
            <h3>Family Information</h3>
            <hr />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FamilyInfo;
