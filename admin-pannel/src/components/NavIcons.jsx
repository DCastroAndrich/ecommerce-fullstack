import NotificationIcon from "./NotificationIcon";
import SettingsIcon from "@mui/icons-material/Settings";
import Avatar from '@mui/material/Avatar';

const NavIcons = () => {
  return (
    <div className="flex items-center justify-evenly px-5">
      <NotificationIcon />
      <SettingsIcon color="secondary" className="cursor-pointer" />
      <Avatar alt="user1" src="https://images.unsplash.com/photo-1639149888905-fb39731f2e6c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80" />
    </div>
  );
};

export default NavIcons;
