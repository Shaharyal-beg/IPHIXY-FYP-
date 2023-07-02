import React, { useContext } from 'react'
import {signOut} from "firebase/auth"
import { auth } from '../firebase'
import { AuthContext } from '../context/AuthContext'
import ava from './ava1.jpg'

const Navbar = (auth) => {
  const {currentUser} = useContext(AuthContext)
  var profile_picture= currentUser.photoURL !== null ? `/storage/${currentUser.photoURL}`:ava;
  return (
    <div className='navbar'>
      <span className="logo">IPHIXY Chat</span>
      <div className="user">
        <img src={profile_picture} alt="" />
        <span>{currentUser.displayName}</span>
        {/* <button onClick={()=>signOut(auth)}>logout</button> */}
      </div>
    </div>
  )
}

export default Navbar