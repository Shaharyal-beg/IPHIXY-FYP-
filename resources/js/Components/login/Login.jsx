import React from 'react'
import './login.css'

const Login = () => {
  return (
    <div className='log-for'>
        <div className='lform-top'>
        <h4 className='wt'>Welcome to</h4>
        {/* <img src={require('../../components/navbar/logo.png')} alt="logo" /> */}
        </div>
        <form className='l-form'>
        <label >
    <b> UserName/Email </b><br />
    <input type="text" name="name" placeholder='Enter Your User Name Email'/>
  </label>
  <br /><br />
  <label>
  <b>Password </b><br />
    <input type="text" name="name" placeholder='Enter Your Password'/>
  </label>
  <br /><br />
  <label className='rmr' >
    <input style={{width:'2vw',height:'2vh'}} type="checkbox" />
     Remember Me 
  </label>
  <label className='fg'>
   Forgot Password? 
  </label>
  <br />
  <button className='log-but'>Login</button>
        </form>
    </div>
  )
}

export default Login
