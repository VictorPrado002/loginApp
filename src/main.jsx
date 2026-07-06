import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { UsersApp } from "./UsersApp";
import { LoginPage } from "./auth/pages/LoginPage";
import "./styles.css";
import { UsersPage } from "./pages/UsersPage";
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./auth/context/AuthProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <UsersApp />
      </AuthProvider>
    </BrowserRouter>
  </StrictMode>,
);
