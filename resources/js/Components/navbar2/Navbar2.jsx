import React from 'react'
import './navbar2.css'
import logo from './logo.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import { Link,Route,Routes } from 'react-router-dom';
import Dropdown from '@/Components/Dropdown';


const Navbar2 = () => {
  return (
    <div className='ump-nav'>
        <div className='logo-nav2'>
        <img src={logo} alt="logo" />
        </div>
        <div className='ump-nav-list2'>
            <ul>
                <li > <a href="/dashboard"></a>  Dashboard</li>
                <li style={{marginTop:'3vh'}}> <ModeEditIcon/> <a href="/edit-profile">Edit Profile</a> </li>
                <li><AddBoxIcon/> <a href="/post-job"> Post a Job</a></li>
                <li><a href="/chat"><ChatIcon/> Chat</a></li>
                <li style={{marginLeft:'-4vw'}}><Dropdown.Link href={route('logout')} method="post" as="button"><LogoutIcon/> </Dropdown.Link></li>                           
                </ul>
                
        </div>
        
        
        </div>
    
  )
}

export default Navbar2
