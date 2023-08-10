import React from 'react'
import './landingpage.css'
import { Outlet, Link } from 'react-router-dom'
import { Head } from '@inertiajs/react'


const Landingpage = () => {
  return (
    <div className='main-page'>
      
      
      <div className='content-mp'>
        <h2 style={{textAlign : "left"}}><b>Looking to sell or repair your smarthphone,laptops....</b></h2><br />
        <p >Join thousand of people who've used IPHIXY as their go to source for electronics and stay satisfied with our high quality service.</p><br />        
      </div>
      <br/>
      <br/>
      <br/>
      <button className=' bt bt1'><a href="/services"> Services</a></button>
     <button className='bt bt2'><a href='/about'>About US</a></button>
    </div>
  )
}
export default Landingpage
