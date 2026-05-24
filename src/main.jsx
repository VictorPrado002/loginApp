import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { UsersApp } from './UsersApp'
import { LoginPage } from './auth/pages/LoginPage'
import "./styles.css";
import { UsersPage } from './pages/UsersPage';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UsersApp/>
  </StrictMode>,
)
