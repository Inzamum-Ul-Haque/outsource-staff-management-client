import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration/Registration";
import FamilyInfo from "../pages/FamilyInfo/FamilyInfo";
import Error from "../pages/Error/Error";
// import MainLayout from "../layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/user-registration",
    element: <Registration />,
  },
  {
    path: "/family-info",
    element: <FamilyInfo />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
