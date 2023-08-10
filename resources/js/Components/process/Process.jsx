import React from 'react'
import './process.css'


const Process = () => {
  return (
    <div className='pro'>
      <h1 style={{marginTop: "3vh",fontSize: '2.8vw',fontWeight:'bolder'}}> OUR PROCESS </h1>
      <h3 style={{color:'grey',fontSize:'1.4vw'}}>Easy and effective way to get your
      device repaired or sell</h3>
      <div className='main-pcon'>
        <div className='sub-pcon pcon1'>
        <h1 >SELL OR REPAIR DEVICE</h1>
        <p style={{color:'grey',textAlign:'left',marginTop:'1vh'}}> Post your device with picture
        and brief describtion about it.</p>
        </div>
        <div className='sub-pcon pcon2'>
        <h1 >CHOOSE PROFESSIONAL</h1>
        <p style={{color:'grey',textAlign:'left',marginTop:'1vh'}}> Repairer & Scraper bid
        on your post.</p>
        </div>
        <div className='sub-pcon pcon3'>
        <h1 >CALL FOR INSPECTION</h1>
        <p style={{color:'grey',textAlign:'left',marginTop:'1vh'}}> Meet face to face with
        service provider.</p>
        </div>
        <div className='sub-pcon pcon4'>
        <h1 >QUICK RETURN</h1>
        <p style={{color:'grey',textAlign:'left',marginTop:'1vh'}}> After a fix, we just return
        it to your destination.</p>
        </div>

      </div>
    </div>
  )
}

export default Process
