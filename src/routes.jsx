
import {
  createBrowserRouter
  
} from "react-router-dom"; 
import Root from "./Root";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import TabCategory from "./component/TabCategory";
import DeshBoard from "./Pages/DeshBoard";
import Dashboard from "./Pages/Dashboard";




export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
          path:"/",
          element:<Home></Home>,
          loader:async () => {
            const response = await fetch("http://localhost:5000/items");
            if (!response.ok) {
                throw new Response("Failed to fetch items", {
                    status: response.status,
                    statusText: response.statusText,
                });
            }
            return response.json();
        },
         
      },
      {
          path:"/login",
          element:<LogIn></LogIn>
      },
      {
        path:"/register",
        element:<Register></Register>
      },
      {
        path:"/tab",
        element:<TabCategory></TabCategory>,
        
      }
    ]
  },
  {
    path:"dashboard",
    element:<DeshBoard></DeshBoard>,
    children:[
   {
    path:"userallfordashboard",
    element:<Dashboard></Dashboard>
   }
    ]
  }
]);


