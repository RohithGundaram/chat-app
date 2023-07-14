import React from 'react'
import user from '../static/images/user.png'

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='one'>My chat</div>
      <div className='two'>
        <img src={user} alt="user" />
        <span>UserName</span>
        <button>Logout</button>
      </div>
    </div>
  )
}

export default Navbar
