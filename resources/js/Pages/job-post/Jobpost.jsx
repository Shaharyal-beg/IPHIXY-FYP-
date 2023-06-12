import React from 'react'
import { Lastfooter, Navbar2,ImageUpload } from '../../Components'
import Footer from '../footer/Footer'
import "./job-post.css"
import { useState } from 'react'
import { Head } from '@inertiajs/react'
import { router } from '@inertiajs/react'


const Jobpost = () => {
  // const [values, setValues] = useState({
  //   productname: "",
  //   area: "",
  //   jobtype:"",
  //   date:"",
  //   bidprice:"",
  //   note:"",
  //   description:"",
  //   image:null

  // })
  // function handleChange(e) {
  //   const key = e.target.id;
  //   const value = e.target.value
  //   setValues(values => ({
  //       ...values,
  //       [key]: value,
  //   }))
  // }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   router.post('/post-job', values)
    
  // }
  const [formData, setFormData] = useState({
    productname: '',
    area: '',
    jobtype: '',
    date: '',
    bidprice: '',
    note: '',
    description: '',
    image: null,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setFormData((prevFormData) => ({
      ...prevFormData,
      image: file,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    router.post('/post-job', formData)
    console.log(formData);
  };
  return (
    <div className='jp_main'>
      <Head title="PostaJob" />
        <Navbar2/>
        <div className='jp-form-area'>
          <div className='jp-form-area-head'>
          <h1>Post a job</h1>
          </div><br/>
          <form onSubmit={handleSubmit}>
            <label className='label-small'>Product Name</label>
            <label className='label-small'>Address</label><br/>
            <input type='text' className='input-small' name='productname' placeholder='Product name' value={formData.productname} onChange={handleInputChange}/>
            <input type='text' className='input-small' name='area' placeholder='area'value={formData.area} onChange={handleInputChange} /><br/>
            <label className='label-small'>Job Title</label>
            <label className='label-small'>Warranty Date</label><br/>
            <input type='text' className='input-small' name='jobtype' placeholder='JOB TITLE' value={formData.jobtype} onChange={handleInputChange}/>
            <input type='text' className='input-small' name='date' placeholder='warranty date'value={formData.date} onChange={handleInputChange} /><br/>
            <label className='label-small'>Intial Bid Price</label>
            <label className='label-small'>Any Note</label><br/>
            <input type='text' className='input-small' name='bidprice' placeholder='Enter Bid Price' value={formData.bidprice} onChange={handleInputChange}/>
            <input type='text' className='input-small' name='note' placeholder='Any important Note'value={formData.note} onChange={handleInputChange} /><br/><br/><br/><br/>
            <br/><label>Description</label><br/>
            <textarea name="description"  cols="70" rows="7"  placeholder='Any important Note'value={formData.description} onChange={handleInputChange}></textarea><br/><br/>
            <label for="myfile">Select a Photo:</label><br/>
            <input type="file" id="file" name="file" onChange={handleFileInputChange}></input><br/><br/>
            {/* <ImageUpload/> */}
            <button type='submit'className='post-button' onClick={handleSubmit}>POST</button>
            </form>
        </div>
      <Footer/>
      <Lastfooter/>
    </div>
  )
}
export default Jobpost
