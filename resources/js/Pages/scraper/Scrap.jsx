import React from 'react'
import { Lastfooter, Navbar3 } from '../../Components'
// import './edit-profile.css'
import Avatar from 'react-avatar'
import avatar1 from './ava1.jpg'
import Footer from '../footer/Footer'
import { Head, Link, useForm } from '@inertiajs/react';


const scrap = () => {
  return (
    
    <div className='ep_main'>
      
      <Head title="Edit_profile" />
        <Navbar3/>
        <div className='ep-subpage'>
        <div className='ep-main-con'>
        <h1 style={{float:'left',margin:'6vh 0 0 2vw',fontSize:'3vw',color:'#7C7C7C'}}>EDIT PROFILE</h1>
        <button style={{margin:'6vh 0 0 50vw',backgroundColor:'#D9D9D9',border:'1px solid white',color:'#A0A0A0',width:'5vw',height:'5vh',borderRadius:'5px'}}>Reset</button>
        <button style={{backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'5vw',height:'5vh',borderRadius:'5px'}}>save</button><br /> <br />
        <div className='divider-ep'>
         </div>
          <div className='edit-avatar-content'>
            <Avatar src={avatar1} round size='12vw' className='ep-avatar'/><br /><br /><br />
            <button style={{marginLeft:'13vw',backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'5vw',height:'5vh',borderRadius:'5px'}}>Change</button>
            <div className='about-you'>
              <p>Something About your self.......</p>

            </div>
          </div>
          <div className='edit-form'>
            <h1 style={{fontSize:'2vw',fontWeight:'bolder'}}>BASIC INFO</h1>
            <div className='divider-ep' style={{backgroundColor:'black',width:"45vw",marginTop:'2vh'}}></div>
            <br />
          <label style={{marginLeft:'2vw'}}>Full Name</label><br />
          <input className='ep_input' placeholder='Enter your name'></input>
          <label style={{marginLeft:'2vw'}}>User Name</label><br />
          <input className='ep_input' placeholder='Enter your name'></input>
          <label style={{marginLeft:'2vw'}}>Email Address</label><br />
          <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
          <label style={{marginLeft:'2vw'}}>Password</label><br />
          <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
          <label style={{marginLeft:'2vw'}}>Confrim-Password</label><br />
          <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
          <label style={{marginLeft:'2vw'}}>DOB</label><br />
          <input className='ep_input' placeholder='Enter your name'></input>
          <label style={{marginLeft:'2vw'}}>Gender</label><br />
          <input className='ep_input' placeholder='Enter your name'></input>
          <label style={{marginLeft:'2vw'}}>City</label><br />
          <input className='ep_input' placeholder='Enter your name'></input>
          <label style={{marginLeft:'2vw'}}>Enter OTP</label><br />
          <input className='ep_input' placeholder='Enter your name'></input> 
          <h1 style={{fontSize:'2vw',fontWeight:'bolder'}}>About</h1>
            <div className='divider-ep' style={{backgroundColor:'black',width:"45vw",marginTop:'2vh'}}></div><br />
            <label style={{fontSize:'2vw',marginLeft:'2vw'}}>Education</label>
            <button  style={{marginLeft:'18vw',backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'4vw',height:'4vh',borderRadius:'5px'}}>Add Field</button>
            <button style={{backgroundColor:'#A0A0A0',border:'1px solid white',color:'white',width:'5vw',height:'4vh',borderRadius:'5px'}}>delete Field</button><br />
            <br /> <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
            <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
            <input className='ep_input' placeholder='Enter your name'></input>
            <input className='ep_input' placeholder='Enter your name'></input>
            <br />
            <label style={{fontSize:'2vw',marginLeft:'2vw'}}>Work Experience</label>
            <button  style={{marginLeft:'12vw',backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'4vw',height:'4vh',borderRadius:'5px'}}>Add Field</button>
            <button  style={{backgroundColor:'#A0A0A0',border:'1px solid white',color:'white',width:'5vw',height:'4vh',borderRadius:'5px'}}>delete Field</button><br />
            <br /> <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
            <input className='ep_input' placeholder='Enter your name' style={{width:'40vw'}}></input>
            <input className='ep_input' placeholder='Enter your name'></input>
            <input className='ep_input' placeholder='Enter your name'></input>
            <label style={{fontSize:'2vw',marginLeft:'2vw'}}>Education</label>
            <button  style={{marginLeft:'18vw',backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'4vw',height:'4vh',borderRadius:'5px'}}>Add Field</button>
            <button  style={{backgroundColor:'#A0A0A0',border:'1px solid white',color:'white',width:'5vw',height:'4vh',borderRadius:'5px'}}>delete Field</button><br /><br />
            <input className='ep_input' placeholder='Enter your name'></input>
            <input className='ep_input' placeholder='Enter your name'></input>
          </div>
        
        </div>
        </div>
     <Footer/>
     <Lastfooter/>
    </div>
  )
}

export default scrap
