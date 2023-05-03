import React from 'react'
import './user.css'
import Avatar from 'react-avatar';
import avatar1 from './ava1.jpg';
import aksh from './aksh.jpg';
import anum from './anum.jpg';
import david from './david.jpg';
import Samsung from './Samsung.jpg';
import kho from './kho.jpg';
import tabish from './tabish.jpg';
import amjad from './amjad.jpg';
import alisha from './alisha.jpg'
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import LogoutIcon from '@mui/icons-material/Logout';
import AddBoxIcon from '@mui/icons-material/AddBox';
import ChatIcon from '@mui/icons-material/Chat';
import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import StarIcon from '@mui/icons-material/Star';
import white_logo from './Iphixy_white.png'
import Footer from '../footer/Footer';
import { Lastfooter, Navbar2 } from '../../Components';
import { Head } from '@inertiajs/react';

export default function Authenticated({ auth }) {
  return (

    <div className='user-mp'>
      <Head title="Dashboard" />
      <Navbar2 />
      <div className='ump-main-sec'>
        <div className='ump-sub-sec1'>
          <MoreHorizIcon style={{ marginLeft: '23.5vw' }} />
          <Avatar src={david} round size='9vw' style={{ marginLeft: '8vw' }} /> <br /><br />
          <h2 style={{ marginLeft: '8vw', fontWeight: 'bold', fontSize: '20px' }}>{auth.user.name}</h2>
          <h3 style={{ marginLeft: '5vw', color: '#a0a0a0', fontWeight: 'bold', fontSize: '20px' }}>{auth.user.email}</h3> <br />
          <h2 style={{ marginLeft: '8vw', color: 'orange' }}><StarIcon /><StarIcon /><StarIcon /><StarIcon /><StarIcon /></h2><br />
          <p style={{ marginLeft: '0', color: 'grey', fontWeight: 'bolder' }}>______________________________________</p><br />
          <p style={{ marginLeft: '3vw' }}><b>Gender</b><br />{gender(auth.user.gender)}</p>
          <p style={{ margin: ' -3.5vw 0 0 16vw' }}><b>City</b><br />Karachi</p><br /><br /><br />
          <p style={{ margin: '-2vw 0 0 3vw' }}><b>Last Active</b><br />24 hr ago</p><br /><br />
          <p style={{ margin: ' -7vw 0 1vh 16vw' }}><b>Age</b><br />{auth.user.age}</p> <br /><br /><br />
          <button style={{ marginLeft: '6vw', width: '10vw', height: '6vh', color: 'white', background: '#00acff', border: 'none', fontSize: '1vw' }}>Message Me</button>



        </div>
        <div className='ump-sub-sec2'>
          <img src={white_logo} alt="logo" className='w_logo' />
          <p style={{ margin: "2vw" }}>Works For <br /> RawTech Digital </p><br />
          <p style={{ margin: "2vw", marginTop: "-3vh" }}>Joining Date <br />12-dec-2001</p>
          <p style={{ marginTop: "-30vh", marginLeft: "20vw" }}>Availability <br /> 36 hours\week</p>
          <p style={{ marginTop: "4vh", marginLeft: "20vw" }}> Response Time <br /> 98%</p>
          <p style={{ marginTop: "-18.5vh", marginLeft: "35vw" }}>Order Given<br /> 6 </p>
          <p style={{ marginTop: "4vh", marginLeft: "35vw" }}> Repeat Hiring <br /> 8</p>
          <p style={{ marginTop: "4vh", marginLeft: "20vw" }}>----------------------------------------------------</p>
          <p style={{ marginTop: "4vh", marginLeft: "20vw" }}><FacebookIcon />&nbsp;&nbsp;<TwitterIcon />&nbsp;&nbsp;<InstagramIcon /></p>

        </div>
        <div className='ump-sub-sec3'>
          <h1 style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>Recommended Repair's</h1>
          <div className='RR-box rr1'>
            &nbsp;&nbsp;&nbsp;<Avatar src={aksh} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store &nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>

          </div>
          <div className='RR-box rr2'>
            &nbsp;&nbsp;&nbsp;<Avatar src={aksh} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>


          </div>
          <div className='RR-box rr3'>
            &nbsp;&nbsp;&nbsp;<Avatar src={anum} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>


          </div>
          <br />
          <h1 style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>Recommended Scraper's</h1>
          <div className='Rs-box rs1'>
            &nbsp;&nbsp;&nbsp;<Avatar src={david} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>

          </div>
          <div className='Rs-box rs2'>
            &nbsp;&nbsp;&nbsp;<Avatar src={Samsung} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>

          </div>
          <div className='Rs-box rs3'>
            &nbsp;&nbsp;&nbsp;<Avatar src={kho} round size='3.5vw' />
            <h2 style={{ marginTop: "-5vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>

          </div>
        </div>
        <div className='ump-sub-sec4'>
          <h2><a href='#' style={{ color: '#00acff' }} >Profile</a> &nbsp;&nbsp;&nbsp; <a href="#" style={{ color: '#a0a0a0' }}>About</a></h2>
        </div>
        <div className='ump-sub-sec5'>
          <h1 style={{fontWeight:'bold',fontSize:'1.3vw'}}>About ME</h1><br />
          <p style={{fontSize:'0.9vw'}}>I entered the field of content writing in 2010, driven by a passion for quality content creation. I managed several projects single-handedly which were published on reputed platforms on the web. I gained much experience while completing projects, and I decided to create my own venture. Sensing the demand for quality creative services that had the power to transform the web space, I incorporated SEOPage1 in 2013. <br />

            Over time, SEOPAGE1 has broadened the domain of its services into the following fields: <br />

            Content Writing<br />
            Web Designing<br />
            Developing Graphics Design<br />
            Search Engine Optimization<br />

            How did we become successful?<br />

            • We created a team of 50 writers, web developers, Graphics designers and marketers in our office located in Dhaka, Bangladesh.<br />
            • Enforced stringent quality checks on the content produced by our team members.<br />
            • Formed a pool of researchers with the necessary expertise in various fields to offer dynamic, insightful and well-researched end products to our clients.</p>
        </div>
        <div className='ump-sub-sec6'>
          <h1 >Reviews</h1>
          <div className='rew'>
            &nbsp;&nbsp;&nbsp;<Avatar src={tabish} round size='3.6vw' style={{ float: 'left' }} />
            <h4 style={{ marginLeft: '2vw' }}>NAME </h4> <h5 style={{ color: '#a0a0a0' }}>Gmail</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse quaerat repudiandae totam similique eos.</p>
          </div>
          <div className='rew'>
            &nbsp;&nbsp;&nbsp;<Avatar src={amjad} round size='3.6vw' style={{ float: 'left' }} />
            <h4 style={{ marginLeft: '2vw' }}>NAME </h4> <h5 style={{ color: '#a0a0a0' }}>Gmail</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse quaerat repudiandae totam similique eos.</p>
          </div>
          <div className='rew'>
            &nbsp;&nbsp;&nbsp;<Avatar src={alisha} round size='3.6vw' style={{ float: 'left' }} />
            <h4 style={{ marginLeft: '2vw' }}>NAME </h4> <h5 style={{ color: '#a0a0a0' }}>Gmail</h5>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad esse quaerat repudiandae totam similique eos.</p>
          </div>
        </div>

      </div>
      <Footer />
      <Lastfooter />
    </div>
  )
  function gender(gender){
    if(gender==4){
      return 'Male'
    }
    else if(gender==2){
      return 'Female';
    }
    else{
      return 'Other'
    }
  }
}

// export default User
