import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration/Registration";
import FamilyInfo from "../pages/FamilyInfo/FamilyInfo";
import Error from "../pages/Error/Error";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
  },
  {
    path: "/user-registration",
    element: (
      <PrivateRoute>
        <Registration />
      </PrivateRoute>
    ),
  },
  {
    path: "/family-info",
    element: (
      <PrivateRoute>
        <FamilyInfo />
      </PrivateRoute>
    ),
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
