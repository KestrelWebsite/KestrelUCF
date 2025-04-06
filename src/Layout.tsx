import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import "./index.css";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <div className="absolute z-[999] w-full top-0">
        <NavBar />
      </div>
      <div className=" h-full">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
