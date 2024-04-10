import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout/>,
      children:[
          {
            path:'/',
            element:<Home/>,
            loader:()=> fetch("/Category.json")
          },
          {
            path:'/details/:id',
            element:<Details/>,
            loader:()=> fetch('/MainData.json')
          }
      ]
    },
  ]);
  export default router