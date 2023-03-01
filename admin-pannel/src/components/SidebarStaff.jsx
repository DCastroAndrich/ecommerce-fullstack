import GroupRoundedIcon from "@mui/icons-material/GroupRounded";
import ReportGmailerrorredRoundedIcon from "@mui/icons-material/ReportGmailerrorredRounded";
import QueryStatsRoundedIcon from "@mui/icons-material/QueryStatsRounded";

const SidebarStaff = () => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold text-gray-500">Staff</h3>
      <ul className="ml-6">
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <GroupRoundedIcon fontSize="small" className="mr-2" /> Manage
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <QueryStatsRoundedIcon fontSize="small" className="mr-2" /> Analytics
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <ReportGmailerrorredRoundedIcon fontSize="small" className="mr-2" />{" "}
          Reports
        </li>
      </ul>
    </div>
  );
};

export default SidebarStaff;
