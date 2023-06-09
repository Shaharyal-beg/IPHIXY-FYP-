import { Lastfooter, Navbar3 } from '@/Components'
import React from 'react'
import product from './product.jpg'
import StarIcon from '@mui/icons-material/Star';
import { Footer } from '..'
import "./jobs.css"

const Jobs = (posts) => {
  console.log(posts.posts)
  let postsList = [];
  var posts1=posts.posts;

  

  posts1.forEach((post, index) => {
    postsList.push(<div className='post-descriptionAndImage postsInJobPage'>
      <div className='post-head'>
        <div className="image"><img src={`/storage/${post.user.avatar}`} alt="" srcset="" /></div>
        <h1><b>Users Name: </b>{post.user.name} <br/> Date/Time: {post.created_at}</h1>
      </div>
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
   {/* <div className='rs-bidarea'>
    <form>
   <input type='text' placeholder='enter your bid here'/>
   <button>submit</button>
   </form>
   </div> */}
   <button className='goto-but'><a href={`/post/${post.id}`}>Goto bid</a></button>
   </div>);
  });
  return (
    <div className='jobs-mp'>
      <Navbar3/>
      <div className='posts-area'>
      {postsList}
      </div>
      
    </div>
    
  )
}

export default Jobs