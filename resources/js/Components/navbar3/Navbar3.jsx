import React from 'react'
import './navbar3.css'
import logo from './logo.png'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxIcon from '@mui/icons-material/AddBox'; 
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import { Link,Route,Routes } from 'react-router-dom';
import Dropdown from '@/Components/Dropdown';


const Navbar3 = () => {
  return (
    <div className='ump-nav'>
        <div className='logo'>
        <img src={logo} alt="logo" />
        </div>
        <div className='ump-nav-list3'>
            <ul className='nav-item3'>
                <li style={{marginTop:'3vh'}}> <ModeEditIcon/> <a href="/edit-profile">Edit Profile</a> </li>
                <li><AddBoxIcon/> <a href="/jobs">Jobs</a></li>
                <li><ChatIcon/> <a href='/chat'> Chat</a></li>
                <li a className='logout-but'><a><Dropdown.Link  href={route('logout')} method="post" as="button">Logout </Dropdown.Link></a></li>
                {/* <li><SearchIcon/><input type="Search" placeholder='Search here' style={{color:'black'}}/></li> */}
                {/* <li ><a><Dropdown.Link href={route('logout')} method="post" as="button">Logout </Dropdown.Link></a></li>                            */}
                
                </ul>
                
        </div>
        
        
        </div>
    
  )
}

export default Navbar3
