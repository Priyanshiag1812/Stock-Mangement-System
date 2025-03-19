import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Dashboard from "../components/Dashboard";


function First() {
  return (
    <div className="flex min-h-screen bg-white-100">
      <Dashboard />
      <main className=" min-h-screen w-full bg-gray-100 ">
      <Header />
          <Outlet />
      </main>
    </div>
  );
}

export default First;
