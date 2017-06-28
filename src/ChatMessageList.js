import React, {Component} from 'react'
import ChatMessage from './ChatMessage'
function ChatMessageList(props){
  const displayMessages = props.messages.map((message)=> <ChatMessage message={message}/>)

  return(
    <div className='chat-message-list'>{ displayMessages }</div>
  )
}
export default ChatMessageList
