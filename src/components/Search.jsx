import React from 'react'
import user from '../static/images/user.png'


const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find a User' />
      </div>
      <div className='userChat'>
        <img src={user} alt="user" />
        <div className="userChatInfo">
          <span>Rohith</span>
        </div>
      </div>
    </div>
  )
}

export default Search
