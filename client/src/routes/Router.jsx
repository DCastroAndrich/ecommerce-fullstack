import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "../pages/Home";
import ProductsList from "../pages/ProductsList";
import ProductSingle from "../pages/ProductSingle";
import Cart from "../pages/Cart";
import Register from "../pages/Register";
import Login from "../pages/Login";


export const router = createBrowserRouter(
  /* createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="products/:category"  element={<ProductsList />} />
        <Route path="product/:id"  element={<ProductSingle />} />
        <Route path="cart"  element={<Cart />} />
      </Route>
      
    ) */
  [
    {
      path: "/",
      element: <Root />,
      children: [
        {
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
