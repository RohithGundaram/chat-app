import React from 'react'
import user from '../static/images/user.png'

const Chatbot = () => {
  return (
    <div className='chatbot'>
      <div className='userChat'>
        <img src={user} alt="user" />
        <div className="userChatInfo">
          <span>ChatBot</span>
          <p>Hello world this is ChatGPT</p>
        </div>
      </div>
    </div>
  )
}

export default Chatbot
