import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../components/Home/Home";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
          {
            path:'/',
            element:<Home/>,
            loader:()=> fetch("/Category.json")
          }
      ]
    },
  ]);
  export default router