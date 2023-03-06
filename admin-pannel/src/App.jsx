import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Root from "./routes/Root";
import Home from "./layouts/Home";
import UserList from "./layouts/UserList";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="userlist" element={<UserList />} />
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
