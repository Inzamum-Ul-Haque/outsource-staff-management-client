import React, { useContext } from "react";
import "./Dashboard.css";
import { Container } from "react-bootstrap";
import NavigationBar from "../../components/Navbar/NavigationBar";
import { RoleContext } from "../../context/RoleProvider";

const Dashboard = () => {
  const { user } = useContext(RoleContext);
  console.log(user);

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
