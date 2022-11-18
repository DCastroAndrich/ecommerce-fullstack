import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Searchbar = () => {
  return (
    <div className="w-1/3">
      <div className="flex flex-row justify-between items-center h-1/2 w-1/2 border rounded bg-white">
        <input type="search" className="outline-none" />
        <SearchIcon />
      </div>
    </div>
  );
};

export default Searchbar;
