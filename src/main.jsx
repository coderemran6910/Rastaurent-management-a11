import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import routes from "./routes/routes.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import { HelmetProvider } from 'react-helmet-async';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
    <AuthProvider>
      <RouterProvider router={routes}>
        <App></App>
      </RouterProvider>
    </AuthProvider>
    </HelmetProvider>
  </React.StrictMode>
);
