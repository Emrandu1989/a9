import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../LayOut/MainLayout";
import Home from "../components/Home/Home";
import Details from "../components/Details/Details";
import Register from "../components/Authentication/Register";
import Login from "../components/Authentication/Login";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import About from "../components/About/About";
import PrivateRoute from "./PrivateRoute";
import UpdateProfile from "../components/UpdateProfile/UpdateProfile";

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
          },
          {
            path:'/register',
            element:<Register/>
          },
          {
            path:'/login',
            element:<Login/>
          },
          {
            path:'/updateProfile',
            element: <PrivateRoute> <UpdateProfile/> </PrivateRoute>
          },
          {
            path:'/about',
            element: <PrivateRoute> <About /> </PrivateRoute>
          },
      ]
    },
    {
      path:'*',
      element:<ErrorPage />
    }
  ]);
  export default router