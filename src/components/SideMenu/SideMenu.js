import React from "react";
import "./SideMenu.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="bg-light side-menu p-4 mt-2">
      <Button className="btn btn-secondary mb-2">
        <Link to="/family-info" className="text-white">
          Family Information
        </Link>
      </Button>
      <Button className="btn btn-secondary mb-2">Children Information</Button>
      <Button className="btn btn-secondary mb-2">Education</Button>
      <Button className="btn btn-secondary mb-2">Posting Info at DBBL*</Button>
      <Button className="btn btn-secondary mb-2">Job Status</Button>
      <Button className="btn btn-secondary mb-2">PF Input</Button>
      <Button className="btn btn-secondary mb-2">Gratuity Input</Button>
      <Button className="btn btn-secondary mb-2">Check Unverify</Button>
      <Button className="btn btn-secondary mb-2">Logout</Button>
    </div>
  );
};

export default SideMenu;
