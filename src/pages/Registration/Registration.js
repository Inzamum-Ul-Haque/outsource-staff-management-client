import React, { useState } from "react";
import "./Registration.css";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import NavigationBar from "../../components/Navbar/NavigationBar";

const Registration = () => {
  const navigate = useNavigate();

  const handleUserRegistration = (event) => {
    event.preventDefault();
    const form = event.target;
    const userId = form.userId.value;
    const firstName = form.firstName.value;
    const middleName = form.middleName.value;
    const lastName = form.lastName.value;
    const email = form.email.value;

    const userInformation = {
      userId,
      firstName,
      middleName,
      lastName,
      email,
    };

    console.log(userInformation);

    fetch(`${process.env.REACT_api_URL}/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInformation),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("User added successfully");
        navigate("/user-registration");
        form.reset();
      })
      .catch((error) => console.error(error));
  };

  return (
    <div>
      <NavigationBar />

      {/* User Registration form */}
      <Container className="mb-3">
        <Row>
          <Col>
            <h1 className="mt-2">Add User</h1>
            <h3>Key Information</h3>
            <hr />
            <Form onSubmit={handleUserRegistration}>
              <Row>
                <Col xs={3}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Id*</Form.Label>
                    <Form.Control type="text" name="userId" />
                  </Form.Group>
                </Col>
                <Col xs={9}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput1"
                  >
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control type="text" name="fullName" />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput2"
                  >
                    <Form.Label>First Name</Form.Label>
                    <Form.Control type="text" name="firstName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput3"
                  >
                    <Form.Label>Middle Name</Form.Label>
                    <Form.Control type="text" name="middleName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control type="text" name="lastName" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput4"
                  >
                    <Form.Label>Known as</Form.Label>
                    <Form.Control type="text" name="knownAs" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>DOB*</Form.Label>
                    <Form.Control type="date" name="dob" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Place of Birth</Form.Label>
                    <Form.Control type="text" name="pob" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Home District</Form.Label>
                    <Form.Control type="text" name="homeDistrict" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col xs={4}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Date of Joining*</Form.Label>
                    <Form.Control type="date" name="doj" />
                  </Form.Group>
                </Col>
                <Col xs={4}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Nationality</Form.Label>
                    <Form.Control type="text" name="nationality" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Salary Account</Form.Label>
                    <Form.Control type="text" name="salaryAcc" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Rocket Acc</Form.Label>
                    <Form.Control type="text" name="rocketAcc" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Cadre Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Job Status</Form.Label>
                    <Form.Control type="text" name="jobStatus" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Designation</Form.Label>
                    <Form.Control type="text" name="designation" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Employee Type</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
              </Row>

              <h3>General Information</h3>
              <hr />

              <Row>
                <Col>
                  <Form.Label>Present Address</Form.Label>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control name="presentAddress" type="text" />
                  </FloatingLabel>
                </Col>
                <Col>
                  <Form.Label>Permanent Address</Form.Label>
                  <FloatingLabel
                    controlId="floatingInput"
                    label="Address"
                    className="mb-3"
                  >
                    <Form.Control name="permanentAddress" type="text" />
                  </FloatingLabel>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Present District</Form.Label>
                    <Form.Control type="text" name="presentDistrict" />
                  </Form.Group>
                </Col>
                <Col xs={3}>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Permanent District</Form.Label>
                    <Form.Control type="text" name="permanentDistrict" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Telephone</Form.Label>
                    <Form.Control type="text" name="telephone" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Mobile</Form.Label>
                    <Form.Control type="text" name="mobile" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>E-mail</Form.Label>
                    <Form.Control type="email" name="email" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group>
                    <Form.Label>Sex*</Form.Label>
                    <div className="radio-buttons">
                      <Form.Check
                        className="me-2"
                        type="radio"
                        name="sex"
                        label="Male"
                      />
                      <Form.Check type="radio" name="sex" label="Female" />
                    </div>
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Label>Marital Status</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Identifying Marks</Form.Label>
                    <Form.Control type="text" name="identificationMarks" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Religion</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Emergency Phone No.</Form.Label>
                    <Form.Control type="text" name="emergencyPhone" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Label>Blood Group</Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>National ID No.</Form.Label>
                    <Form.Control type="text" name="nid" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>ARO Code/Nexuspay Mobile No.</Form.Label>
                    <Form.Control type="text" name="aroCode" />
                  </Form.Group>
                </Col>
              </Row>

              <Row>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>TIN No.</Form.Label>
                    <Form.Control type="text" name="tin" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlInput5"
                  >
                    <Form.Label>Passport No.</Form.Label>
                    <Form.Control type="text" name="passport" />
                  </Form.Group>
                </Col>
                <Col>
                  <Form.Group>
                    <Form.Label>Police Verification Done?</Form.Label>
                    <div className="radio-buttons">
                      <Form.Check
                        className="me-2"
                        type="radio"
                        name="pVerification"
                        label="Yes"
                      />
                      <Form.Check
                        type="radio"
                        name="pVerification"
                        label="No"
                      />
                    </div>
                  </Form.Group>
                </Col>
              </Row>

              {/* onClick={handleShowModal} on this button*/}
              <Button variant="success" type="submit">
                Add User
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      {/* User Registration form */}

      {/* <Modal show={showConfirmModal} onHide={handleCloseModal}>
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>Are you sure want to add this user?</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="success" onClick={handleCloseModal}>
            Add
          </Button>
        </Modal.Footer>
      </Modal> */}
    </div>
  );
};

export default Registration;
