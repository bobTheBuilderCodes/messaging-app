import React from 'react'
import './Chat.css'

const ChatScreen = () => {
  return (
    <div className='chatContainer'>
     <div className='chatList'>Chat List</div>
     <div className='chatBox'>
        <div className='recipient'>Receipient info</div>
        <div className='messagesArea'>Messages area</div>
        <div className='inputArea'>
            <input type="text" placeholder='Send a message' />
            <button>Send</button>
        </div>
     </div>
    </div>
  )
}

export default ChatScreen
