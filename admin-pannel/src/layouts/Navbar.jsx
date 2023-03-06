import Logo from "../components/Logo";
import NavIcons from "../components/NavIcons";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 flex h-14 w-full flex-row items-center justify-between bg-white text-purple-600">
      <Logo />
      <NavIcons />
    </div>
  );
};

export default Navbar;
