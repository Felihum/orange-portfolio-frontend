import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyPortfolio from './routes/MyPortfolio/MyPortfolio.jsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/meus-projetos",
    element: <MyPortfolio />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
