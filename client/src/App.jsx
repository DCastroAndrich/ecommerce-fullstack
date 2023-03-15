import { RouterProvider } from "react-router-dom";
import { router } from "./routes/Router";

const App = () => {
  return (
    <div className="font-commisioner">
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
