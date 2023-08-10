import React from 'react'
import './about2.css'
import customer from './customer.png'
import scrapper1 from './scrap.png'
import Profiles from './Profiles.png'
import repaired from './repaired.png'
import Scrap from './Scrap.png'
import post from './post.png'
import scraper from './scraper.png'


const About2 = (props) => {
  console.log(props)
  return (
    <div className='abt-2'>
      {/* <img src={require('../../components/about2/abt2-bg.jpg')} alt="logo" className='a2-bg'/> */}
      
      <div className='abt2-subcon'>
      <img src={customer} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}} >{props.props.nums[2]}</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>No. of Customer</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={post} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>{props.props.nums[3]}</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>No. of Posts</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={repaired} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>{props.props.nums[1]}</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>No. of Repairers</h1>
      </div>
      <div className='abt2-subcon'>
      <img src={scrapper1} alt="/" className='customer' />
      <h1 style={{marginLeft:'-6vw'}}>{props.props.nums[0]}</h1>
      <h1 style={{marginLeft:'-6vw'}}>-----------</h1>
      <h1 style={{marginLeft:'-4vw'}}>No. of Scrapper</h1>
      </div>
    </div>
  );
}

export default About2