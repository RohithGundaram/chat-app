import React from 'react'
import Add from "../static/images/addAvatar.png"
const Signup = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>Chat App</div>
        <div className='title'>Register</div>
        <div>
          <form>
            <input type="text" placeholder="profile name"></input>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <input style={{display:"none"}} type="file" id='file'></input>
            <label htmlFor='file' className='file'>
                <img className='avatar' src={Add} alt=""></img>
                <span>Add an avatar</span>
            </label>
            <button>Sign up</button>
          </form>
        </div>
        <div>
          <p>You do have an account? Login</p>
        </div>
      </div>
    </div>
  )
}

export default Signup
