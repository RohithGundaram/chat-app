import React from 'react'
import attach from '../static/images/attach.png'
import img from '../static/images/img.png'
const Input = () => {
  return (
    <div className='input'>
      <input type="text" placeholder='type something....'/>
      <div className="send">
        <img src={attach} alt="" />
        <input type="file" style={{display:"none"}} id="file"/>
        <label htmlFor="file">
          <img src={img} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input