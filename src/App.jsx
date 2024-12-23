import { Outlet } from "react-router-dom";
import Navber from "./components/Navber";

const App = () => {
  return (
    <>
      <header className="py-4">
        <Navber />
        <Outlet />
      </header>
    </>
  );
};

export default App;
