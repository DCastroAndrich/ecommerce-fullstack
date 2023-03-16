import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../layouts/Login";
import ProductNew from "../layouts/ProductNew";
import ProductInfo from "../layouts/ProductInfo";
import ProductList from "../layouts/ProductList";
import UserNew from "../layouts/UserNew";
import UserInfo from "../layouts/UserInfo";
import UserList from "../layouts/UserList";
import Home from "../layouts/Home";
import Root from "./Root";

const Router = () => {
  const admin = JSON.parse(
    JSON.parse(localStorage.getItem("persist:root")).user
  ).currentUser.isAdmin;

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={admin ? <Root /> : <Navigate to="login" replace />}
        >
          <Route index element={<Home />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="userlist/user/:id" element={<UserInfo />} />
          <Route path="newuser" element={<UserNew />} />
          <Route path="productlist" element={<ProductList />} />
          <Route path="productlist/product/:id" element={<ProductInfo />} />
          <Route path="newproduct" element={<ProductNew />} />
        </Route>
        <Route path="login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Router;
