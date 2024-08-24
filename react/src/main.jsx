import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Profile from "./Profile";
import DefaultProfile from "./Default";
import Spinach from "./Spinach";
import Popeye from "./Popeye";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "profile",
    element: <Profile />,
    children: [
      { index: true, element: <DefaultProfile /> },
      { path: "spinach", element: <Spinach /> },
      { path: "popeye", element: <Popeye /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);






