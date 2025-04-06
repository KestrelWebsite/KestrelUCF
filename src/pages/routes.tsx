import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "../Layout";
import About from "./About";
import Devlogs from "./Devlogs";
import Teams from "./Teams";

//Club Websites:
  //http://charginknights.com/

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "about", element: <About /> },
        { path: "devlogs", element: <Devlogs /> },
        { path: "teams", element: <Teams />}
      ],
    },
  ],
  {
    basename: "/KestrelUCF",
  }
);

export default router;
