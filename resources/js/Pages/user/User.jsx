import React from 'react'
import './user.css'
import Avatar from 'react-avatar';
import avatar1 from './ava1.jpg';
import ava from './ava1.jpg'
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
import { Lastfooter, Navbar2 ,Main_nav } from '../../Components';
import { Head } from '@inertiajs/react';

export default function Authenticated({ auth,posts }) {
  var profile_picture= auth.user.avatar !== null ? `/storage/${auth.user.avatar}`:ava;
  const today = new Date();
  const birthDate = new Date(auth.user.dob);
  const diff = today.getTime() - birthDate.getTime();
  const ageInMilliseconds = new Date(diff);
  const calculatedAge = Math.abs(ageInMilliseconds.getUTCFullYear() - 1970);

  var date=new Date(auth.user.created_at)
  console.log(date)
  let heading='';
  if(posts.length>=1){
    heading=<h1>Posts</h1>  
  }
  var dateofmont=date.getDate()
  var month=date.getMonth()
  var year=date.getFullYear()
  var joiningdate=new Date(`${dateofmont} ${month},${year}`)
  let postsList = [];

  posts.forEach((post, index) => {
    let bidlist=[];
    post.bids.forEach(bid => {
      console.log(post)
      bidlist.push(
        <div className='bidsForUsersPost'>
          <p>Name:{bid.user.name}<br/>Email:{bid.user.email}<br></br>Bid amount:{bid.bid_price}</p><br></br>
           </div>
      )    
    })
    
    postsList.push(<div className='post-descriptionAndImage'>
    <div className='post-description'>
    <h4>Product Despcription</h4>
    <h5><b>Product Name:</b> {post.productname} <br/> <b>Job Title:</b> Screen repairing</h5>
    <h5><b>Area:</b> {post.area} <br/>  <b>Warranty Date:</b> {post.w_date}</h5>
    <h5><b>IntialBid Price:</b> {post.bid_price}  <br/> <b>Any Note:</b>{post.note}</h5>
    <h5><b>DESCRIPTION:</b> {post.description}</h5>
   </div>
   <div className='post-image'>
    <h4>Product Image</h4>
    <img src={`/storage/${post.image_path}`} alt="" srcset="" />
    
   </div>
   
   <h3 style={{padding:'2vh'}}>Bids:</h3>
   {bidlist}
   </div>);
  });
  var gender=''
  if(auth.user.gender==1){
    gender='male'
  }
  else if(auth.user.gender==2){
    gender='female'
  }
  else{
    gender='other'
  }
  return (

    <div className='user-mp'>
      <Head title="Dashboard" />
      <Main_nav props={auth.user}/>
      <div className='ump-main-sec'>
        <div className='ump-sub-sec1'>
          <Avatar src={profile_picture} round size='9vw' style={{ marginLeft: '6vw' }} /> <br /><br />
          <div className='user-email-name'>
          <h2 style={{  fontWeight: 'bold', fontSize: '20px' }}>{auth.user.name}</h2>
          <h3 style={{ color: '#a0a0a0', fontWeight: 'bold', fontSize: '20px' }}>{auth.user.email}</h3> <br />
          </div>
          {/* <p style={{ margin: '-2vh 0 0  3vw' }}><b>Gender</b><br />Male</p>
          <p style={{ margin: ' -4vw 0 0 16vw' }}><b>City</b><br />c</p><br /><br /><br />
          <p style={{ margin: '-4vw 0 0 3vw' }}><b>Last Active</b><br />24 hr ago</p><br /><br />
          <p style={{ margin: ' -7vw 0 0 16vw' }}><b>Age</b><br />21 years old</p> <br /><br /><br />
          <button style={{ margin: '-4vh 0 0 6vw', width: '10vw', height: '6vh', color: 'white', background: '#00acff', border: 'none', fontSize: '1vw' }}>Message Me</button> */}
          <div className='ump-sec1-information'>
          <div className='usi gender'>
            <span>Gender</span><br/><span>{gender}</span>
          </div>
          <div className='usi city'>
          <span>City</span><br/><span>{auth.user.city}</span>
          </div>
          <div className='usi lastactive'>
          <span>Last active</span><br/><span>24hrs ago</span>
          </div>
          <div className='usi age'>
          <span>Age</span><br/><span>{calculatedAge}</span>
          </div>
          <button className='message-but'>Message Me</button>

          </div>
        </div>
        <div className='ump-sub-sec2'>
          <img src={white_logo} alt="logo" className='w_logo' />
          <p style={{ margin: "6vh 0 0 5vw" }}>Works For <br />{auth.user.institute_job} </p>
          <p style={{ margin: "6vh 0 0 5vw" }}>Joining Date <br />{`${dateofmont} ${month},${year}`}</p>
          

        </div>
        <div className='ump-sub-sec3'>
          <h1 style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>Recommended Repair's</h1>
          
          <div className='RR-box rr2'>
            <Avatar src={aksh} round size='3.5vw' />
            <h2 style={{ marginTop: "-7vh", marginLeft: "6vw" }}>AL-Naz Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Naz998</h3>


          </div>
          <div className='RR-box rr3'>
            <Avatar src={anum} round size='3.5vw' />
            <h2 style={{ marginTop: "-7vh", marginLeft: "6vw" }}>techno Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@tec998</h3>


          </div>
          <br />
          <h1 style={{ fontSize: '1.5vw', fontWeight: 'bold' }}>Recommended Scraper's</h1>
          <div className='Rs-box rs1'>
            <Avatar src={david} round size='3.5vw' />
            <h2 style={{ marginTop: "-7vh", marginLeft: "6vw" }}>Ramzan Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@ramzan0909</h3>

          </div>
          <div className='Rs-box rs2'>
            <Avatar src={Samsung} round size='3.5vw' />
            <h2 style={{ marginTop: "-7vh", marginLeft: "6vw" }}>The Shahs Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@Shah-998</h3>

          </div>
          <div className='Rs-box rs3'>
            <Avatar src={kho} round size='3.5vw' />
            <h2 style={{ marginTop: "-7vh", marginLeft: "6vw" }}>AL-Amn Store&nbsp;<CheckCircleIcon style={{ marginLeft: '3vw', color: '#00acff' }} />98%</h2>
            <h3 style={{ marginTop: "0.5vh", marginLeft: "6vw", color: '#a0a0a0' }}>@AL-Amn</h3>

          </div>
        </div>
        <div className='ump-sub-sec4'>
          <h2><a href='#' style={{ color: '#00acff' }} >Profile</a>  <a href="#" style={{ color: '#a0a0a0' }}>About</a></h2>
        </div>
        <div className='ump-sub-sec5'>
          <h1 style={{fontWeight:'bold',fontSize:'1.3vw'}}>About ME</h1><br></br>
          <p style={{fontSize:'0.9vw'}}>
          <h1 style={{fontWeight:'bold',fontSize:'1.3vw'}}>Education</h1>
          <p> <b>Institue Name:</b> {auth.user.institute_uni} </p>
          <p> <b>Degree Name: </b>{auth.user.degree_name}</p>  
          <p><b>Start Date : </b>{auth.user.uni_start}</p>  
          <p><b>End Date : </b>{auth.user.uni_end} </p>  <br/>
            <h1 style={{fontWeight:'bold',fontSize:'1.3vw'}}>Experience</h1>
            <p><b>Institute Name : </b>{auth.user.institute_job}</p>
            <p><b>Position : </b>{auth.user.position_name}</p>
            <p><b>Job Start date : </b>{auth.user.job_start}</p>
            <p><b>Job End date : </b>{auth.user.job_end}</p>
            <p><b>Detail : </b>{auth.user.detail}</p>
          </p>
        </div>
        <div className='posts'>
          {heading}
           {postsList}
        </div>
        
      </div>
      <Footer />
      <Lastfooter />
    </div>
  )
}

// export default User
