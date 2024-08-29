import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/home.tsx";
import Products from "./pages/products.tsx";
import AboutUs from "./pages/about-us.tsx";
import NavbarLayout from "./layouts/navbar-layout.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavbarLayout>
        <Home />
      </NavbarLayout>
    ),
  },
  {
    path: "/products",
    element: (
      <NavbarLayout>
        <Products />
      </NavbarLayout>
    ),
  },
  {
    path: "/about-us",
    element: (
      <NavbarLayout>
        <AboutUs />
      </NavbarLayout>
    ),
  },
]);

const root = document.getElementById("root");

root!.style.height = "100vh";
root!.style.width = "100vw";

ReactDOM.createRoot(root!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
