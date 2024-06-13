import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Home from "./pages/Home";
import LoginPage from "./pages/LoginPage"
import Expense from "./pages/Expense";

const router = createBrowserRouter([
{
  path:"/",
  element:<Home/>
},
{
  path:"/login",
  element:<LoginPage/>
},
{
  path:"/expense",
  element:<Expense/>
}
])


function App() {
  return (
    <>
    <ToastContainer/>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
