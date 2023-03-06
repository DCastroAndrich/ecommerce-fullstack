import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Navbar />
      <div className="mt-3 flex w-full">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default Root;
