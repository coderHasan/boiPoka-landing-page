import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ErrorPage from "../components/Pages/ErrorPage";
import Login from "../components/Pages/Login";
import Register from "../components/Pages/Register";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ],
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

export default routes;
