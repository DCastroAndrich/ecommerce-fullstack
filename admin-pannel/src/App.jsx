import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Home from "./layouts/Home";
import UserList from "./layouts/UserList";
import UserInfo from "./layouts/UserInfo";
import UserNew from "./layouts/UserNew";
import ProductList from "./layouts/ProductList";
import ProductInfo from "./layouts/ProductInfo";
import ProductNew from "./layouts/ProductNew";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="userlist" element={<UserList />} />
        <Route path="userlist/user/:id" element={<UserInfo />} />
        <Route path="newuser" element={<UserNew />} />
        <Route path="productlist" element={<ProductList />} />
        <Route path="productlist/product/:id" element={<ProductInfo />} />
        <Route path="newproduct" element={<ProductNew />} />
      </Route>
    )
  );

  return (
    <div className="h-screen w-full font-commisioner">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
