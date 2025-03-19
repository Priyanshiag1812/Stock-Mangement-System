import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import First from "./pages/First";
import AddInventory from "./pages/AddInventory";
import InventoryTable from "./pages/InventoryTable";
import ChangeInventory from "./pages/ChangeInventory";
import IssueInventory from "./pages/IssueInventory";
import ReturnInventory from "./pages/ReturnInventory";
import Report from "./pages/Report";
import Summary from "./pages/Summary";
import Threshold from "./pages/Threshold";
import UserProfile from "./pages/UserProfile";
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
      { path: "/inventory-table", element: <InventoryTable /> },
      { path: "/add-inventory", element: <AddInventory /> },
      { path: "/change-inventory", element: <ChangeInventory /> },
      { path : "/issue-inventory", element: <IssueInventory />},
      { path: "/return-inventory", element: <ReturnInventory /> },
      { path: "/report", element: <Report /> },
      { path: "/summary", element: <Summary/> },
      {path :"/threshold", element: <Threshold />},
      {path: "/user_profile", element: <UserProfile />},
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
