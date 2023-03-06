import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import StoreRoundedIcon from "@mui/icons-material/StoreRounded";
import ReceiptLongRoundedIcon from "@mui/icons-material/ReceiptLongRounded";
import ScoreRoundedIcon from "@mui/icons-material/ScoreRounded";
import { Link } from "react-router-dom";

const SidebarQuick = () => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold text-gray-500">Quick Menu</h3>
      <ul className="ml-6">
        <Link
          to="/userlist"
          className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600"
        >
          <AccountCircleRoundedIcon fontSize="small" className="mr-2" /> Users
        </Link>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <StoreRoundedIcon fontSize="small" className="mr-2" /> Products
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <ReceiptLongRoundedIcon fontSize="small" className="mr-2" />{" "}
          Transactions
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <ScoreRoundedIcon fontSize="small" className="mr-2" /> Reports
        </li>
      </ul>
    </div>
  );
};

export default SidebarQuick;
