import React from 'react'
import './landingpage.css'
import { Outlet, Link } from 'react-router-dom'
import { Head } from '@inertiajs/react'


const Landingpage = () => {
  return (
    <div className='main-page'>
      
      
      <div className='content-mp'>
        <h2 style={{textAlign : "left"}}><b>Looking to sell or repair your smarthphone,laptops....</b></h2><br />
        <p style={{textAlign : "left", lineHeight: '4vh',fontSize:'25px'}}>Join thousand of people who've used IPHIXY as their go to source for electronics and stay satisfied with our hiogh quality service.</p><br />        
      </div>
      <br />
      <br />
      <br />
      
      <button className='bt1'><a href=""> Services</a></button>
     <button className='bt2'><a href=''>About US</a></button>
    </div>
  )
}
export default Landingpage
