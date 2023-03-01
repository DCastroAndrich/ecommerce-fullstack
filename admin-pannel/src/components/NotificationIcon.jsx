import { Badge } from "@mui/material";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";

const NotificationIcon = () => {
  return (
    <div className="mr-1 cursor-pointer">
      <Badge badgeContent={2} color="secondary">
        <NotificationsRoundedIcon color="action" />
      </Badge>
    </div>
  );
};

export default NotificationIcon;
