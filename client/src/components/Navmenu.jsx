import { Link } from "react-router-dom";
import CartIcon from "./CartIcon";

const Navmenu = () => {
  return (
    <div className="flex w-1/3 flex-row justify-end">
      <div className="flex w-1/3 flex-row justify-around">
        <h2 className="cursor-pointer">Register</h2>
        <h2 className="cursor-pointer">Log In</h2>
        <Link to={`/cart`}>
          <CartIcon />
        </Link>
      </div>
    </div>
  );
};

export default Navmenu;
