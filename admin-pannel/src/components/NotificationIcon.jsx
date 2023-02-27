import { Badge } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

const NotificationIcon = () => {
  return (
      <div className="cursor-pointer px-5">
        <Badge badgeContent={2} color="secondary">
          <NotificationsIcon color="action" />
        </Badge>
      </div>
  );
};

export default NotificationIcon;
