import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import HomePage from "./HomePage.jsx";
import Pagination from "./Pagination.jsx";
import AutoComplete from "./AutoComplete.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
  },
  {
    path: "/pagination",
    element: <Pagination/>,
  },
  {
    path: "/autoComplete",
    element: <AutoComplete/>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
