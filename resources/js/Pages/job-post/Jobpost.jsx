import React from 'react'
import { Lastfooter, Navbar2 } from '../../components'
import Footer from '../footer/Footer'
import "./job-post.css"
import { Head } from '@inertiajs/react'


const Jobpost = () => {
  return (
    <div className='jp_main'>
      <Head title="PostaJob" />
        <Navbar2/>
        <div className='jp-main-page'>
          <div className='jp-sub-page' >
          <h1 style={{float:'left',margin:'3vh 0 0 2vw',fontSize:'3vw',color:'#7C7C7C'}}>Post a Job</h1>
        <button style={{margin:'6vh 0 0 55vw',backgroundColor:'#007DBA',border:'1px solid white',color:'white',width:'4vw',height:'4vh',borderRadius:'5px'}}>Time</button> <br />
        <div className='divider-ep' style={{width:'80vw',height:'4px',marginTop:'2.5vh'}}>
         </div><br /><br />
         <button style={{marginLeft:'35vw',backgroundColor:'#D9D9D9',border:'1px solid white',color:'#A0A0A0',width:'5vw',height:'5vh',borderRadius:'5px'}}>Repair</button>
         <button style={{marginLeft:"-0.35vw",backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'5vw',height:'5vh',borderRadius:'5px'}}>Sell</button><br /><br /><br />
         <label style={{margin:' 0 5vw 0 2vw',float:'left'}}>Email Address</label><br /><br />
         <label style={{margin:' -3.3vh 5vw 0 36vw',float:'left'}}>Product Name</label><br /><br />
         <input className='ep_input' placeholder='Enter your name' style={{width:'30vw',marginTop:'-4.5vh'}}></input>
         <input className='ep_input' placeholder='Enter your name' style={{width:'30vw',marginTop:'-4.5vh'}}></input><br /><br />
         <label style={{margin:' 0 5vw 0 2vw',float:'left'}}>Email Address</label><br /><br />
         <label style={{margin:' -3.3vh 5vw 0 36vw',float:'left'}}>Product Name</label><br /><br />
         <input className='ep_input' placeholder='Enter your name' style={{width:'30vw',marginTop:'-4.5vh'}}></input>
         <input className='ep_input' placeholder='Enter your name' style={{width:'30vw',marginTop:'-4.5vh'}}></input><br /><br />
         <label style={{marginLeft:'2vw'}}>Important Note</label><br />
         <input className='ep_input' placeholder='Enter your name' style={{width:'60vw'}}></input><br /><br /><br /><br /><br />
         <label style={{marginLeft:'2vw'}}>Job Description</label><br />
         <input className='ep_input' placeholder='Enter your name' style={{width:'60vw',height:'30vh'}}></input><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <label style={{marginRight:'2vw'}}>Add an Attachment</label><br /><br />
         <input className='ep_input' placeholder='Drag And Drop File' type='file' style={{width:'60vw',height:'30vh'}}></input>
         <button style={{marginLeft:'30vw',backgroundColor:'#D9D9D9',border:'1px solid white',color:'#A0A0A0',width:'7vw',height:'5vh',borderRadius:'5px'}}>Reset Job</button>
         <button style={{backgroundColor:'#00ACFF',border:'1px solid white',color:'white',width:'7vw',height:'5vh',borderRadius:'5px'}}>Post Job</button><br /><br /><br />
         

          </div>
        </div>
      <Footer/>
      <Lastfooter/>
    </div>
  )
}

export default Jobpost
