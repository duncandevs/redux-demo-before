import React, {Component} from 'react'
function ChatHeader(props){
  return(
    <div className='chat-header'>
      <div className='chat-msg-count'>{props.msgcount}</div>
    </div>
  )
}

export default ChatHeader
