import Logo from "../components/Logo";
import NavIcons from "../components/NavIcons";

const Navbar = () => {
  return (
    <div className="flex h-14 flex-row items-center justify-between bg-white text-purple-600">
      <Logo />
      <NavIcons />
    </div>
  );
};

export default Navbar;
