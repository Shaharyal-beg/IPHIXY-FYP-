import React from 'react'
import './about.css'
import Quality from './Quality.png'
import BestPrices from './BestPrices.png'
import cusSup from './cusSup.png'
import Experience from './Experience.png'
import pkr from './pkr-icon.png'
import { Head } from '@inertiajs/react'

const About = () => {
  return (
    <div className='abt'>
      <Head title="About Us" />
      <div className='abt-pic'>
      </div>
      <div className='abt-cont'>
        <h1 style={{textAlign:"left",fontSize:"4.3vw",color:'#00acff',fontWeight:'bolder'}}>About Us</h1>
        <br /><br />
        <h4 style={{textAlign:"left",color:'grey',fontWeight:'bold'}}>Our Mission</h4>
        
        <p className='first-para' style={{textAlign:'left',color:'#a0a0a0',fontWeight:'normal'}}> Our platform provides a seamless, integrated experience for selling and repairing electronic devices, allowing you to maximize profits and minimize labor costs. Whether you're a novice or an experienced technician, iphixy has the tools and resources needed to help you succeed. Try us today and start earning more!</p>
        <br />
        <div className='abt-main-con'>
          <div className='abt-sub-con abt-sub-con1'>
            <div className='sub-icon sub-icon1'>
              <img className='icon-img' src={Quality}alt="Qa" />
            </div>
            <div className='sub-con sub-conn1'>
            <br />
              <h3 >Quality service</h3>
              <br />
              <p style={{color:'#a0a0a0'}}>There can be have various and
              huge number of devices under
              our repairing service.</p>
            </div>
          </div>
          <div className='abt-sub-con abt-sub-con2'>
          <div className='sub-icon sub-icon2'>
            <img className='icon-img' src={pkr} alt="BestPrice" />
          </div>
            <div className='sub-con sub-conn2'>
            <br />
            <h3 >Best Prices</h3>
            <br />
            <p style={{color:'#a0a0a0'}}>Negotiate with our dealers and
            get the best prices of your
            product.</p>
            </div>
          </div>
          <div className='abt-sub-con abt-sub-con3'>
          <div className='sub-icon sub-icon3'>
            <img className='icon-img' src={Experience} alt="Quality"  />
          </div>
            <div className='sub-con sub-conn3'>
            <br />
              <h3 >Experience ANd talented</h3>
              <br />
              <p style={{color:'#a0a0a0'}}>We are proud to say that we
              have extremely most talented
              and exepertised teams.</p>
            </div>
          </div>
          <div className='abt-sub-con abt-sub-con4'>
          <div className='sub-icon sub-icon4'>
          <img className='icon-img' src={cusSup} alt="Quality"  />
          </div>
            <div className='sub-con sub-conn4'>
            <br />
              <h3 >24/7 Customer Service</h3>
              <br />
              <p style={{color:'#a0a0a0'}}>You're only one call away to get
              help from us wether to it is your
              home or an office.</p>
            </div>
          </div>
        </div>
      </div>
      </div>
    
  )
}

export default About
