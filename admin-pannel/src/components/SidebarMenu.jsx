import HomeRoundedIcon from "@mui/icons-material/HomeRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import { Link } from "react-router-dom";

const SidebarMenu = () => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold text-gray-500">Dashboard</h3>
      <ul className="ml-6">
        <Link
          to="/"
          className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600"
        >
          <HomeRoundedIcon fontSize="small" className="mr-2" /> Home
        </Link>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <QueryStatsRoundedIcon fontSize="small" className="mr-2" /> Analytics
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <PaidRoundedIcon fontSize="small" className="mr-2" /> Sales
        </li>
      </ul>
    </div>
  );
};

export default SidebarMenu;
