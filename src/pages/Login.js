import React from 'react'

const Login = () => {
  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <div className='logo'>Chat App</div>
        <div className='title'>Login</div>
        <div>
          <form>
            <input type="email" placeholder="email"></input>
            <input type="password" placeholder="password"></input>
            <button>Sign in</button>
          </form>
        </div>
        <div>
          <p>Don't have an account? Register</p>
        </div>
      </div>
    </div>
  )
}

export default Login
