import React from 'react'
import cam from '../static/images/cam.png'
import add from '../static/images/add.png'
import more from '../static/images/more.png'
import Messages from './Messages'
import Input from './Input'
const Chat = () => {
  return (
    <div className='chat'>
      <div className="chatInfo">
        <span>Rohit</span>
        <div className="chatIcons">
          <img src={cam} alt="cam" />
          <img src={add} alt="add" />
          <img src={more} alt="more" />
        </div>
      </div>
      <Messages></Messages>
      <Input></Input>
    </div>
  )
}

export default Chat
