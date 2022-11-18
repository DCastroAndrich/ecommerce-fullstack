import React from "react";
import Logo from "../components/Logo";
import Navmenu from "../components/Navmenu";
import Searchbar from "../components/Searchbar";

const NavBar = () => {
  return (
    <div className="h-20 flex flex-row justify-between items-center bg-slate-600 px-4">
      <Searchbar />
      <Logo />
      <Navmenu/>
    </div>
  );
};

export default NavBar;
