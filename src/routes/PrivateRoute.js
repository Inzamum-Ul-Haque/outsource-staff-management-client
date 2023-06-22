import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { RoleContext } from "../context/RoleProvider";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(RoleContext);

  // check if the user exists here from the context
  if (user) {
    return children;
  }
  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default PrivateRoute;
