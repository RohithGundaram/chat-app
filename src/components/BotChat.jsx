import React from 'react'

const BotChat = () => {
    return (
        <div className='chat'>
            <div className="chatInfo">
                <span>ChatBot</span>
                <div className="chatIcons">
                    <img src={cam} alt="cam" />
                    <img src={add} alt="add" />
                    <img src={more} alt="more" />
                </div>
            </div>
            <Messages />
            <Input />
        </div>
    )
}

export default BotChat
