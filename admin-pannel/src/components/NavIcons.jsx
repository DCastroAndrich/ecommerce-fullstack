import NotificationIcon from "./NotificationIcon";
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';
import Avatar from "@mui/material/Avatar";

const NavIcons = () => {
  return (
    <div className="flex w-1/6 flex-row justify-end mr-5 ">
      <div className="flex w-2/5  items-center justify-between ">
        <NotificationIcon />
        <SettingsRoundedIcon color="secondary" className="cursor-pointer mr-1" />
        <Avatar
          className="cursor-pointer mr-1"
          sx={{ height: 40, width: 40 }}
          alt="user1"
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fGF2YXRhcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
        />
      </div>
    </div>
  );
};

export default NavIcons;
