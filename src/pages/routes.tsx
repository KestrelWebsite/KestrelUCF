import { createBrowserRouter } from "react-router-dom";
import HomePage from "./HomePage";
import Layout from "../Layout";
import About from "./About";
import Devlogs from "./Devlogs";
import Teams from "./Teams";

/*Club Links:
  CK:
    http://charginknights.com/
  ACM:
    https://discord.gg/GxJACm8S9H
    https://linktr.ee/acmucf
  AI @ UCF:
    https://ucfai.org/
    https://knightconnect.campuslabs.com/engage/organization/ucfai
*/



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
