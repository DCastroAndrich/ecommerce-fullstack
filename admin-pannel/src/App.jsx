import Navbar from "./layouts/Navbar";
import Sidebar from "./layouts/Sidebar";
import Pages from "./pages/Pages";

function App() {
  return (
    <div className="h-screen w-full font-commisioner">
      <Navbar />
      <div className="mt-3 flex w-full">
        <Sidebar />
        <Pages />
      </div>
    </div>
  );
}

export default App;
