import { createBrowserRouter } from "react-router-dom";
import Root from "./Root";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Register from "./Pages/Register";
import TabCategory from "./component/TabCategory";
import DeshBoard from "./Pages/DeshBoard";
import Dashboard from "./Pages/Dashboard";
import PrivateRoute from "./component/PrivateRoute";
import AddItem from "./Pages/AddItem";
import AdminRoute from "./component/AdminRoute";
import Cart from "./component/Cart";
import Payment from "./Pages/Payment";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: async () => {
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
        path: "/login",
        element: <LogIn></LogIn>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/tab",
        element: <TabCategory></TabCategory>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DeshBoard></DeshBoard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "cart",
        element: <Cart></Cart>,
      },
     
      {
        path: "userallfordashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "additem",
        element: (
          <AdminRoute>
            <AddItem></AddItem>
          </AdminRoute>
        ),
        // loader: ({ params }) =>
        //   fetch(`http://localhost:5000/menu/${params.id}`),
      },
      {
        path:"payment",
        element:<Payment></Payment>,
      },
    ],
  },
]);
