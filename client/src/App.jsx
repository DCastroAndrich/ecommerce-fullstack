import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

const App = () => {
  return (
    <div className="font-commisioner">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
};

export default App;
