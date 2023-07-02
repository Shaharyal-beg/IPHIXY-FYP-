import React from 'react'
import { AuthContextProvider } from "../../context/AuthContext";
import Updatepp from './Updatepp';

const Layout = (path) => {
  return (
    <AuthContextProvider>
    <React.StrictMode>
        <Updatepp props={path}/>
    </React.StrictMode>
  </AuthContextProvider>
  )
}

export default Layout