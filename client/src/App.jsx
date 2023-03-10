import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import ProductSingle from "./pages/ProductSingle";
import ProductsList from "./pages/ProductsList";
import Register from "./pages/Register";
import Root from "./routes/Root";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
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

  return (
    <div className="font-commisioner">
      <RouterProvider router={router} />
      
    </div>
  );
};

export default App;
