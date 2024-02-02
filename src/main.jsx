import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import "./GeneralStyle.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyPortfolio from './routes//MyPortfolio/MyPortfolio.jsx';
import Discover from './routes/Discover/Discover.jsx';
import { AuthProvider } from "./context/AuthContext.jsx"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/meus-projetos",
    element: <MyPortfolio />
  },
  {
    path: "/descobrir",
    element: <Discover />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>,
  
)
