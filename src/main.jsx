import React, { useContext, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./index.css"
import "./GeneralStyle.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MyPortfolio from './routes//MyPortfolio/MyPortfolio.jsx';
import Discover from './routes/Discover/Discover.jsx';
import { AuthContext, AuthProvider } from "./context/AuthContext.jsx"
import Cad from './routes/Cad/Cad.jsx'
import Login from './routes/Login/Login.jsx'
import LoginTeste from './routes/LoginTeste/LoginTeste.jsx'
import CadTeste from './routes/CadTeste/CadTeste.jsx'



// eslint-disable-next-line react/prop-types
const Private = ({ Item }) => {
  const { authenticated } = useContext(AuthContext);
  
    return authenticated > 0 ? <Item /> : <Login />
}

export {Private};

const router = createBrowserRouter([
  {
    path: "/login",
    element: <LoginTeste />
  },
  {
    path: "/cadastro",
    element: <CadTeste />
  },
  {
    path: "/meus-projetos",
    element: <Private Item={MyPortfolio} />
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
