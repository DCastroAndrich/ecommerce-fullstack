import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";

function App() {
  return (
    <div className="h-screen w-full font-commisioner">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
