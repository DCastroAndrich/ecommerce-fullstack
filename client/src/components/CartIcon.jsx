import { Badge } from "@mui/material";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useSelector } from "react-redux";

const CartIcon = () => {
  const quantity = useSelector((state) => state.cart.quantity);

  console.log(quantity);

  return (
    <div className="cursor-pointer">
      <Badge badgeContent={quantity} color="secondary">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartIcon;
