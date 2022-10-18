import React from 'react'
import './chat.css'
import sagni2 from '../../asset/images/sagni2.jpg'

 const Chat = () => {
  return (
    <div className='chat'>
       <div className='flex justify__between m__bottom__2'>
        <h3 className='font__small'>Conversation</h3>
        <p className='font__15 link__color cursor__pointer'>Hide Chat</p>
      </div>
      <div className='chats flex align__center flex__gap__1 m__bottom__1'>
        <div className = 'chat__img cursor__pointer'>
        <img src={sagni2} alt = 'friends'/>
        </div>
          <p className='font__15'>Mike Van</p>
      </div>
      <div className='chats flex align__center flex__gap__1 m__bottom__1'>
        <div className = 'chat__img cursor__pointer'>
        <img src={sagni2} alt = 'friends'/>
        </div>
          <p className='font__15'>Mike Van</p>
      </div>
    </div>
  )
}

export default Chat
