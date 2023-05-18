import React from 'react'
import './chat.css'
import david from './david.jpg'

const chat = () => {
  return (
    <div className='chat'>
        <div className='chat-sec1'>
            <div className='chathead-1'><h1>IPHIXY CHAT</h1></div>
            <div className='chat-search'><input type="text" placeholder='Search People' /></div>
            <div className='name-lm'>
                <img src={david} className='chat-avatar'/>
                <h2>NAME</h2>
                <h4>LAST MESSAGE</h4>
            </div>
            <div className='name-lm'>
            <img src={david} className='chat-avatar'/>
                <h2>NAME</h2>
                <h4>LAST MESSAGE</h4>
            </div>
            <div className='name-lm'>
            <img src={david} className='chat-avatar'/>
                <h2>NAME</h2>
                <h4>LAST MESSAGE</h4>
            </div>
        </div>
        <div className='chat-sec2'>
          <div className='name-status'>
            <h1>Name</h1>
            <h3>Active 3hrs ago</h3>
          </div>
          <div className='message-box'>
   
          </div>
          <div className='type-box'>
            <input type='text' placeholder='Enter your message' />
            <button>send</button>
          </div>

        </div>

    </div>
  )
}

export default chat