import React from 'react'
import './service.css'
import { Head, Link, useForm } from '@inertiajs/react';
import {Navbar} from '../../Components'


const Service = () => {
  return (
    <>
    <div className='serv'>
    <Head title="Services" />
      <h1 className='ser-h'>Our Service</h1>
      <div className='main-scon'>
        <div className='sub-scon scon1'>
          <h1 style={{marginTop: "52vh",fontSize:'32px'}}><b> USER </b></h1>
        </div>
        <div className='sub-scon scon2'>
          
          <h1 style={{marginTop: "52vh",fontSize:'32px'}}><b> REPAIRER </b></h1>
        </div>
        <div className='sub-scon scon3'>
          <h1 style={{marginTop: "52vh",fontSize:'32px'}}><b> SCRAP BUYER </b></h1>
        </div>
      </div><br />
      <p className='ser-p'>You've come to the right place! We provide a safe haven for electronic devices where you can sell them at at reasonable price while taking care of their repair needs. Join the thousands of people who've used IPHIXY as their go-to source for electronics and stay satisfied with our high-quality services.</p>

    
    </div>
    </>
  )
}

export default Service
