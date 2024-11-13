import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import Root from "./src/routes/Root.js";
import About from "./src/routes/About.js";
import ErrorPage from "./src/ErrorPage.js";
import Menu from "./src/routes/Menu.js";
import Home from "./src/routes/Home.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about/",
        element: <About />
      },
      {
        path: "menu/",
        element: <Menu />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);