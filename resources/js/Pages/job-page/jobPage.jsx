import { Lastfooter, Main_nav } from '@/Components'
import React from 'react'
import { Footer } from '..'
import './jobpage.css'
import { useState } from 'react'
import { router } from '@inertiajs/react'

const jobPage = (post,auth) => {
    const [values, setValues] = useState({
        bidAmount: 0
      });
      function handleChange(e) {
        const key = e.target.id;
        const value = e.target.value
        console.log(values)
        setValues(values => ({
            ...values,
            [key]: value,
        }))
      }


    var post1=post;
    post=post.post
    function handleSubmit(e) {
        e.preventDefault()
        router.post(`/bid/${post.id}`, values)
      }
  return (
    <div className='jobPage-1'>
        <Main_nav props={post1.auth.user} />
        <div className='post-descriptionAndImage'>
        <div className='post-head'>
        <div className="image post-avatar"><img src={`/storage/${post.user.avatar}`} alt="" srcset="" /></div>
        <h1><b>Users Name: </b>{post.user.name} <br/> Date/Time: {post.created_at}</h1>
      </div>
        {/* <div className='post-head'>
          <img className='bidsForUsersPost-avatar' src={`/storage/${post.user.avatar}`} alt="" />
        <h1 className='n-d'><b>{post.user.name}</b> <br/> {post.created_at}</h1>
      </div> */}
    <div className='post-description'>
    <h4>Product Despcription</h4>
    <h5>Product Name: {post.productname} <br/>Job Title: Screen repairing</h5>
    <h5>Area: {post.area}   <br/>Warranty Date: {post.w_date}</h5>
    <h5>IntialBid Price: {post.bid_price}  <br/> Any Note:{post.note}</h5>
    <h5>DESCRIPTION: {post.description}</h5>
   </div>
   <div className='post-image'>
    <img src={`/storage/${post.image_path}`} alt="" srcset="" />
   </div>
   <div className='rs-bidarea'>
    <form onSubmit={handleSubmit}>
   <input type='number' id='bidAmount' value={values.bidAmount} placeholder='enter your bid here'  onChange={handleChange}/>
   <button type='submit' className='goto-but'>submit</button>
   </form>
   </div>
       </div>
        <Footer/>
        <Lastfooter/>
    </div>
  )
}

export default jobPage