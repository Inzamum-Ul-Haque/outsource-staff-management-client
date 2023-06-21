import React from "react";
import "./Login.css";
import { Button, Container, Form, Image, InputGroup } from "react-bootstrap";
import dbblImg from "../../assets/images/Dutch-Bangla Bank Limited.jpg";
import { FaUserCircle } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (event) => {
    event.preventDefault();

    const form = event.target;
    const userId = form.id.value;
    const password = form.password.value;

    // form checking
    if (!userId && !password) {
      toast.error("Fields can't be empty!");
      return;
    } else if (!userId || !password) {
      toast.error("User id or password can't be empty!");
      return;
    }

    const userCredentials = {
      userId,
      password,
    };

    fetch(`http://192.168.194.225:8080/login`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userCredentials),
    })
      .then((res) => {
        console.log(res);
        if (!res.ok) throw new Error(res.status);
        else return res.json();
      })
      .then((data) => {
        if (data) {
          console.log(data);
          navigate("/dashboard");
        } else {
          toast.error("An error occurred!");
        }
      })
      .catch((error) => {
        console.error(error);
        toast.error("An error occurred! Please try again!");
      });
  };

  return (
    <div>
      <Container className="login-container">
        <Image fluid src={dbblImg} />
        <h1>Outsource Staff Information Management System</h1>

        <Form onSubmit={handleLogin} className="container-sm login-form">
          <h2>Login</h2>
          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <FaUserCircle />
            </InputGroup.Text>
            <Form.Control
              name="id"
              type="text"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter user id"
            />
          </InputGroup>

          <InputGroup size="sm" className="mb-3">
            <InputGroup.Text id="inputGroup-sizing-sm">
              <RiLockPasswordFill />
            </InputGroup.Text>
            <Form.Control
              type="password"
              name="password"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
              placeholder="Enter password"
            />
          </InputGroup>
          <Button variant="success" type="submit">
            Login
          </Button>
        </Form>
      </Container>
    </div>
  );
};

export default Login;
