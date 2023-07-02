import React from 'react'
import  EditProfile from './EditProfile'
import { AuthContextProvider } from "../../context/AuthContext";

const EditProfile1 = (auth) => {
  return (
    <AuthContextProvider>
    <React.StrictMode>
        <EditProfile props={auth}/>
    </React.StrictMode>
  </AuthContextProvider>
  )
}

export default EditProfile1