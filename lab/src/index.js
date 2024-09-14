import * as React from "react";
import { createRoot } from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./routes/Home.js";
import About from "./routes/About.js";
import Contact from "./routes/Contact.js";
import Navbar from "./components/Navbar.js";

 const AppLayout = function() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
 }
const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children:[
      {
        path: "/",
            element:<Home />,
      },
      {
        path: "about",
        element: <About />,  
      },
      {
        path: "contact",
        element: <Contact />
      },
    ]
  }
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);