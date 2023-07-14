import React from 'react'
import user from '../static/images/user.png'

const Chats = () => {
  return (
    <div className='chats'>
    
      <div className='userChat'>
        <img src={user} alt="user" />
        <div className="userChatInfo">
          <span>yash</span>
          <p>Hello world</p>
        </div>
      </div>
      
    </div>

  )
}

export default Chats
