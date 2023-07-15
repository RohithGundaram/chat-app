import React from 'react'
import Navbar from './Navbar'
import Search from './Search' 
import Chats from './Chats'
import Chatbot from './Chatbot'

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <Navbar></Navbar>
      <Search></Search>
      <Chatbot/>
      <Chats></Chats>
    </div>
  )
}

export default Sidebar
