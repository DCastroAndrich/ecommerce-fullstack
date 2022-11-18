import React from "react";
import CartIcon from "./CartIcon";

const Navmenu = () => {
  return (
    <div className="flex flex-row justify-end w-1/3">
      <div className="flex flex-row w-1/3 justify-around">
        <h2 className="cursor-pointer">Sing In</h2>
        <h2 className="cursor-pointer">Log In</h2>
        <CartIcon />
      </div>
    </div>
  );
};

export default Navmenu;
