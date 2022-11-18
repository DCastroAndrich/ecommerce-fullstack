import { Badge } from "@mui/material";
import React from "react";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const CartIcon = () => {
  return (
    <div className="cursor-pointer">
      <Badge badgeContent={1} color="warning">
        <ShoppingCartOutlinedIcon color="action" />
      </Badge>
    </div>
  );
};

export default CartIcon;
