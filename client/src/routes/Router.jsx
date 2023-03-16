import { Routes, Route, Navigate } from "react-router-dom";

//import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductSingle from "../pages/ProductSingle";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";
import { useSelector } from "react-redux";

/* 
export const router = createBrowserRouter(
 // createRoutesFromElements(
   //   <Route path="/" element={<Root />}>
     //   <Route index element={<Home />} />
       // <Route path="products/:category"  element={<ProductsList />} />
        //<Route path="product/:id"  element={<ProductSingle />} />
        //<Route path="cart"  element={<Cart />} />
      //</Route>
      
   // )
  [
    {
      element: <Root />,
      children: [
        {
          path: "/",
          index: true,
          element: <Home />,
        },
        {
          path: "products/:category",
          element: <ProductsList />,
        },
        {
          path: "product/:id",
          element: <ProductSingle />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]
);
 */

const Router = () => {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <>
      <Routes>
        <Route path="/" element={<Root />}>
          <Route index element={<Home />} />
          <Route path="products/:category" element={<ProductsList />} />
          <Route path="product/:id" element={<ProductSingle />} />
          <Route path="cart" element={<Cart />} />
        </Route>
        <Route
          path="login"
          element={user ? <Navigate to="/" replace /> : <Login />}
        />
        <Route
          path="register"
          element={user ? <Navigate to="/" replace /> : <Register />}
        />
      </Routes>
    </>
  );
};

export default Router;
