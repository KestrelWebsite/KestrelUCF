import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "../Layout";
import About from "./About";
import Devlogs from "./Devlogs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <About /> },
      { path: "devlogs", element: <Devlogs /> },
    ],
  },
]);

export default router;
