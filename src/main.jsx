import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import Account from "./pages/Account.jsx";
import Signin from "./pages/Signin.jsx";

const router = createBrowserRouter([
  {
    path: "/Multi-Page-Portfolio//*",
    element: <App />,
    children: [
      {
        path: "",
        element: <Account />,
      },
      {
        path: "",
        element: <Signin />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
