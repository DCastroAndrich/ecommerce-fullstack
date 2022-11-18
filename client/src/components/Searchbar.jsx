import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="w-1/3">
      <div className="flex h-1/2 w-1/2 flex-row items-center justify-between border-2  bg-white">
        <input type="search" className="outline-none" />
        <SearchIcon fontSize="small" color="warning" />
      </div>
    </div>
  );
};

export default Searchbar;
