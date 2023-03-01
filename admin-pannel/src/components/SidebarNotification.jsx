import AlternateEmailRoundedIcon from "@mui/icons-material/AlternateEmailRounded";
import ForumRoundedIcon from "@mui/icons-material/ForumRounded";
import FeedbackRoundedIcon from "@mui/icons-material/FeedbackRounded";

const SidebarNotification = () => {
  return (
    <div className="mb-5">
      <h3 className="text-2xl font-bold text-gray-500">Notifications</h3>
      <ul className="ml-6">
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <AlternateEmailRoundedIcon fontSize="small" className="mr-2" /> Mails
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <FeedbackRoundedIcon fontSize="small" className="mr-2" /> Feedback
        </li>
        <li className="m-2 flex w-2/5 cursor-pointer items-center rounded-md p-1 text-lg font-medium hover:bg-purple-400 active:bg-purple-600">
          <ForumRoundedIcon fontSize="small" className="mr-2" /> Messages
        </li>
      </ul>
    </div>
  );
};

export default SidebarNotification;
