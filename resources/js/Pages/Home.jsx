import React from 'react'
import Sidebar from '../Components/Sidebar'
import Chat from '../Components/Chat'
import { AuthContextProvider } from "../context/AuthContext";
import "./style.scss";


import { ChatContextProvider } from "../context/ChatContext";
const Home = () => {
  return (
    <AuthContextProvider>
    <ChatContextProvider>
      <React.StrictMode>
      <div className='home'>
      <div className="container">
        <Sidebar/>
        <Chat/>
      </div>
    </div>
      </React.StrictMode>
    </ChatContextProvider>
  </AuthContextProvider>

  )
}

export default Home