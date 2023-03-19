import React from 'react'
import ChatList from '../../components/chatlist/ChatList'
import Message from '../../components/message/Message'
import './Chat.css'

const ChatScreen = () => {
  return (
    <div className='chatContainer'>
     <div className='chatList'>
      <div className='userInfo'>
        User Info
      </div>
      <div className='allChats'>
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      <ChatList />
      </div>
     </div>
     <div className='chatBox'>
        <div className='recipient'>
          <div>
            <h3 className='recipientName'>Robert Sam</h3>
            <p className='status'>typing...</p>
          </div>
        </div>
        <div className='messagesArea'>
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
          <Message />
        </div>
        <div className='inputArea'>
            <input type="text" placeholder='Send a message' />
            <button>Send</button>
        </div>
     </div>
    </div>
  )
}

export default ChatScreen
