import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home/Home";
import Configure from "./routes/Configure/Configure";
import Navbar from "./components/layouts/Menu/Sidebar";
import Footer from "./components/layouts/Footer/Footer";
import Login from "./components/Auth/Login/Login";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";


const AppLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/configure",
        element: <Configure />,
      },
      {
        path: "/login",
        element: <Login />
      }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);