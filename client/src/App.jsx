import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import First from "./pages/First";
import AddInventory from "./pages/AddInventory";
import InventoryTable from "./pages/InventoryTable";
import ChangeInventory from "./pages/ChangeInventory";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import PageNotFound from "./pages/PageNotFound";
import First from "./pages/First";

const router = createBrowserRouter([
  {
    // path: "/", element: <First />
    path: "/", element: <First/>,
    children: [
      { path: "/", element: <AddInventory /> },
      { path: "/add-inventory", element: <AddInventory /> },
      { path: "/inventory-table", element: <InventoryTable /> },
      { path: "/change-inventory", element: <ChangeInventory /> },
      { path: "*", element: <PageNotFound /> },
      { path: "/login", element: <Login /> },
      { path: "/signUp", element: <SignUp /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
