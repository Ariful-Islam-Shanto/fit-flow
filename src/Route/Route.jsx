import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Main Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "../Private Routes/Private Route/PrivateRoute";
import Details from "../Private Routes/Details/Details";
import CreateEvent from "../Private Routes/Event/CreateEvent";
import FindEvent from "../Private Routes/Event/FindEvent";
import ErrorPage from "../Components/Error Page/ErrorPage";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        {
            path: '/details/:id',
            element: <PrivateRoute><Details></Details></PrivateRoute>
        },
        {
            path: '/createEvent',
            element: <CreateEvent></CreateEvent>
        },
        {
            path: '/findEvent',
            element: <FindEvent></FindEvent>
        }
      ]
    },
  ]);

export default Route;
