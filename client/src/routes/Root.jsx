import NavBar from "../layouts/Navbar";
import Announcement from "../layouts/Announcement";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Root;
