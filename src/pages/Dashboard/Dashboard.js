import React from "react";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import NavigationBar from "../../components/Navbar/NavigationBar";

const Dashboard = () => {
  return (
    <div>
      <NavigationBar />
      <Container>
        <h1 className="mt-2">Welcome to Dashboard, Mr. </h1>
      </Container>
    </div>
  );
};

export default Dashboard;
