import SidebarMenu from "../components/SidebarMenu";
import SidebarNotification from "../components/SidebarNotification";
import SidebarQuick from "../components/SidebarQuick";
import SidebarStaff from "../components/SidebarStaff";

const Sidebar = () => {
  return (
    <div className="sticky top-14 h-[calc(100vh_-_4.25rem)] w-1/5 bg-purple-200 p-5 text-gray-700 ">
      <SidebarMenu />
      <SidebarQuick />
      <SidebarNotification />
      <SidebarStaff />
    </div>
  );
};

export default Sidebar;
