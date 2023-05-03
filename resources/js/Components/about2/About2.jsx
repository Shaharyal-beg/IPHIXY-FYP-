import React from 'react'
import './about2.css'
import customer from './customer.png'
import Profiles from './Profiles.png'
import repaired from './repaired.png'
import Scrap from './Scrap.png'


const About2 = () => {
  return (
    <div className='abt-2'>
      {/* <img src={require('../../components/about2/abt2-bg.jpg')} alt="logo" className='a2-bg'/> */}
      
      <div className='abt2-subcon'>
      <img src={customer} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}} >10,000</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>Satisfied Customer</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={Profiles} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>2500</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>No. of Profiles</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={repaired} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>4,700</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>Gagdet Repaired</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={Scrap} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>5,300</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>Scrap Item Sold</h1>
      </div>
    </div>
  );
}

export default About2
