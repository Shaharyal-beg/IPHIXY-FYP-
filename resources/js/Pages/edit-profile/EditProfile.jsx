
import React from 'react';
import { Lastfooter,ImageUpload, Navbar2, Navbar3,Main_nav } from '../../Components'
import './edit-profile.css'
import avatar from './default-avatar.png'
import ava from './ava1.jpg'
import Footer from '../footer/Footer'
import { Head, Link, useForm } from '@inertiajs/react';
import { useState } from 'react'
import { router } from '@inertiajs/react'
import { Inertia } from '@inertiajs/inertia';
import { InertiaLink } from '@inertiajs/inertia-react';


const EditProfile = (auth) => {
  console.log(auth);

  const [values, setValues] = useState({
    name: "",
    username: "",
    email: "",
    password:'',
    avatar:'',
    password_confirmation:'',
    dob:'',
    gender:'',
    city:'',
    institute:'',
    degree:'',
    company:'',
    position:'',
    detail:'',
    estartdate:'',
    eenddate:'',
    wstartdate:'',
    wenddate:''

  })
  const [Image, setImage]= useState('');
  function handleImage(e){
      console.log(e.target.files)
      setImage(e.target.files[0])
  }
 
  function handleChange(e) {
    const key = e.target.id;
    const value = e.target.value
    console.log(values)
    setValues(values => ({
        ...values,
        [key]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    router.post('/edit-profile', values)
    
  }
  function handleSubmit1(e) {
    e.preventDefault()
    router.post('/update-user', values)
    
  }
  
  // function handleSubmit2(e) {
  //   e.preventDefault()
  //   router.post('/avatar', values)  
  // }
  // function handlesubmit2(e) {
  //   const formData = new FormData()
  //   formData.append('avatar',Image)
  //   console.log(formData)
  //   router.post('/avatar',formData);
  // }
  const { post, errors, setData } = useForm();

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setData('image', file);
  };

  const handleSubmit3 = (event) => {
    event.preventDefault();
    post('/avatar', {
      preserveScroll: true, // optional
    });
  };
  var profile_picture= auth.auth.avatar !== null ? `/storage/${auth.auth.avatar}`:ava;

  return (
    
    <div className='ep_main'>
      
      <Head title="Edit_profile" />
        <Main_nav props={auth}/>
        
        <div className='ep_main-container'>
          <div className='ep_main-container-head'>
            <h1>EDIT PROFILE</h1>
            <div className='rs-sa-but'>
              {/* <button  type='submit'>Submit</button> */}
            </div>
          </div>
          <div className='ep_main-container-body1'>
            <img src={profile_picture} alt='check' />
            <form onSubmit={handleSubmit3}>
      <input type="file" name="image" onChange={handleFileChange} />
      <button type="submit">Upload</button>
    </form>
{/* 
            <form>
            <input type="file" name="avatar" onChange={handleImage}/> */}
            {/* <input type="file" className="form-control" id="avatar" value={values.avatar} onChange={(event) => {
    let file = event.target.files[0]
    yourUploadFunction(file, url)
    setImageURL(URL.createObjectURL(file))
}}  /> */}
            {/* <button type='submit' onClick={handlesubmit2}>Change</button>
            </form> */}
            <br/>
            <input type='long-text' placeholder='Tell about yourself....'/>            
          </div>
          <div className='ep_main-container-body2'>
            <h2>
              Basic Info<br/>
              ________________________________________
            </h2><br />
            
            <form onSubmit={handleSubmit1}>
            <label className='label-small'>Name</label>
            <br/>
            <input type='text' className='input-small' id='name' placeholder='name' value={values.name} onChange={handleChange}/>
            <br/>
            <label>Email/Gmail</label><br/>
            <input type='text' className='input-long' id='email' placeholder='Email' value={values.email} onChange={handleChange}/><br/>
            <label>Password</label><br/>
            <input type='text' className='input-long' id='password' placeholder='Password'onChange={handleChange}/><br/>
            <label>Confrim Password</label><br/>
            <input type='text' className='input-long' id='password_confirmation' placeholder='Confrim-Password' onChange={handleChange}/><br/>
            <label className='label-small'>DOB</label>
            <label className='label-small'>City</label><br/>
            <input type='date' className='input-small' placeholder='DOB' id='dob' value={values.dob} onChange={handleChange}/>
            <input type='text' className='input-small' placeholder='City' id='city' value={values.city} onChange={handleChange}/><br/>
            <label>Gender</label><br/>
            <input type='text' className='input-small' placeholder='Gender' id='gender' value={values.gender} onChange={handleChange}/><br/><br/>
            <button type='submit' onClick={handleSubmit1}>Submit</button>
            </form>
            <form onSubmit={handleSubmit}>
            <h2>About____________________________
              </h2><br/><br/>
            <h3>Education</h3><br/>
            <input type='text' className='input-long' placeholder='Name of institute' id='institute' value={values.institute} onChange={handleChange}/><br/>
            <input type='text' className='input-long' placeholder='Degree Name' id='degree' value={values.degree} onChange={handleChange}/><br/>
            <label className='label-small'>Start</label>
            <label className='label-small'>End</label><br/>
            <input type='date' className='input-small' placeholder='name' id='estartdate' value={values.estartdate} onChange={handleChange} />
            <input type='date' className='input-small' placeholder='Username'  id='eenddate' value={values.eenddate} onChange={handleChange} /><br/><br/>
            <h3>Work-Experience</h3><br/>
            <input type='text' className='input-long' placeholder='Company Name' id='company' value={values.company} onChange={handleChange}/><br/>
            <input type='text' className='input-long' placeholder='Position' id='position' value={values.position} onChange={handleChange}/><br/>
            <label className='label-small'>Start</label>
            <label className='label-small'>End</label><br/>
            <input type='date' className='input-small' placeholder='name' id='wstartdate' value={values.wstartdate} onChange={handleChange}/>
            <input type='date' className='input-small' placeholder='Username'  id='wenddate' value={values.wenddate} onChange={handleChange} /><br/><br/>
            <input type='text' className='input-long' placeholder='details'id='detail' value={values.detail} onChange={handleChange}/><br/>
            <button type='submit' onClick={handleSubmit}>Submit</button>
            </form>
         </div>
        </div>
     <Footer/>
     <Lastfooter/>
    </div>
  )
}

export default EditProfile

