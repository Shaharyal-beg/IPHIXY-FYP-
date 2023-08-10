import React from 'react'
import './footer.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <div className='foot'>
      <div className='foot-cont'>
        <div className='b-foot'>
          <h1 style={{fontSize:'2.6vw',fontWeight:'bolder'}}>IPHIXY</h1> <br />
          <p>IPHIXY has very good strength in
             innovative technology and tools with over 35 years of experience..</p> <br />
          <p>We makes long-term
            investments goal in global
            companies in different sectors, mainly in Europe and other
            countries.</p><br />
            <p ><FacebookIcon/>&nbsp;&nbsp;<TwitterIcon/>&nbsp;&nbsp;<InstagramIcon/></p>
        </div>
        <div className='s-foot'>
          <br />
          <br />
          <h2 style={{fontWeight:'bolder'}}>Services</h2>
          <br />
          <p>Electronic Gadgets Repair</p><br />
          <p>Buy & Sell of Scrap</p>
        </div>
        <div className='s-foot'>
          <br /><br />
          <h2 style={{fontWeight:'bolder'}}>About</h2><br />
          <p>About Us</p> <br />
          <p>How it Works</p> <br /> 
          <p>Our mission</p>
        </div>
        <div className='s-foot'>
          <br /><br />
          <h2 style={{fontWeight:'bolder'}}>Terms</h2><br />
          <p>Privacy Policy</p><br />
          <p>Terms and Conditions</p><br />
          <p>Copyright Policy</p><br />
          <p>Code of Conduct</p><br />
          <p>Fees and Charges</p>
        </div>
      </div>
    </div>
  )
}


export default Footer
