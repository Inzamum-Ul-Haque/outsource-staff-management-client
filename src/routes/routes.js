import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Registration from "../pages/Registration/Registration";
// import MainLayout from "../layout/MainLayout";

const routes = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/user-registration",
    element: <Registration />,
  },
]);

export default routes;
