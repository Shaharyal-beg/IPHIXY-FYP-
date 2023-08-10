import React from 'react'
import './navbar.css'
import logo from './Iphixy-logo.png'
import { Service,About } from '../../Pages';
import Login from '../login/Login';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    
    <div className='nav'>
      
      <div className='logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='nav-list'>
      <ul className='all-nav-items'>
        <li> <a href='/services'>Services</a></li>
        <li><a href='/about'>About us</a></li>
        <li><a href='/help'>Help</a></li>
        <li><a href='/login'>Login</a></li>
        <li><a href='/register'>SignUp</a></li>
        <div className='menu-icon'>
        menu
      </div>
      </ul>  
     
      </div>
    
    </div>
    
   
    
  );
}
export default Navbar
