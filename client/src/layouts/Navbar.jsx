import Logo from "../components/Logo";
import Navmenu from "../components/Navmenu";
import Searchbar from "../components/Searchbar";

const NavBar = () => {
  return (
    <div className="flex h-20 flex-row items-center justify-between px-4">
      <Searchbar />
      <Logo />
      <Navmenu />
    </div>
  );
};

export default NavBar;
