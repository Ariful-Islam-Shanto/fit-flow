import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import Root from "../Main Layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const Route = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
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
            path: 'register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default Route;
