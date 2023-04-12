import { Lastfooter, Navbar3 } from '@/Components'
import React from 'react'
import product from './product.jpg'
import StarIcon from '@mui/icons-material/Star';
import { Footer } from '..'
import "./jobs.css"

const Jobs = () => {
  return (
    <div className='jobs-mp'>
      <Navbar3/>
      <div className='first-con'>
        <div className='selection-box'>
        <label style={{color:'#727171'}}>City</label><br />
        
        <select name="city" id="select-box">
          <option className='selectbox' value="karachi">karachi</option>
        </select>
        </div>
        <div className='selection-box'>
        <label style={{color:'#727171'}}>Time</label><br />
        <select name="city" id="select-box">
          <option className='selectbox' value="karachi">00:00</option>
        </select>
        </div>
        <div className='selection-box'>
        <label style={{color:'#727171'}}>Bid Price</label><br />
        <select name="city" id="select-box">
          <option className='selectbox' value="karachi">1000</option>
        </select>
        </div>
      </div>
      <div className='jobs-subpage'>
      <div className='jobs-subcon'>
        <div className='img-subcon'>
          <img className='product-pic' src={product} alt="" />

        </div>
        <div className='content-subcon'>
          <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
          <p>Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>

        </div>

      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
       </div>
       <div className='content-subcon'>
       <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>

      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
       </div>
       <div className='content-subcon'>
       <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
       </div>
       <div className='content-subcon'>
       <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
       </div>
      <div className='bid-area'>
        <br />
      <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
       </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
      </div>
      <div className='content-subcon'>
      <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
      </div>
      <div className='content-subcon'>
      <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
      </div>
      <div className='content-subcon'>
      <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
      </div>
      <div className='content-subcon'>
      <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      <div className='jobs-subcon'>
      <div className='img-subcon'>
      <img className='product-pic' src={product} alt="" />
      </div>
      <div className='content-subcon'>
      <p><b>Product Name:</b><br />Warranty Date: <br />Rating:<StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/> </p><br />
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nam distinctio dolorum corporis repellendus architecto! Laudantium asperiores nisi ea a, fugiat dolor temporibus nesciunt culpa?</p><br />
          <p><b>NOTE:</b>Lorem ipsum dolor sit amet consectetur adipisicing.</p> 
        </div>
        <div className='bid-area'>
          <br />
        <p>&nbsp;Rs:60000 <button style={{color:"#00ACFF",background:'white',marginLeft:'10vw',width:'5vw'}}>BID NOW</button></p>
        </div>
      </div>
      
      </div> 
      <Footer/>
      <Lastfooter/>
        </div>
  )
}

export default Jobs