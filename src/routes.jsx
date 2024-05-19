import {
    createBrowserRouter
    
  } from "react-router-dom"; 
import Root from "./Root";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";



  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/login",
            element:<LogIn></LogIn>
        },
        {
          path:"/register",
          element:<Register></Register>
        }
      ]
    },
  ]);


