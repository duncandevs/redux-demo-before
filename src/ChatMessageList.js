import React, {Component} from 'react'
import ChatMessage from './ChatMessage'
import { connect } from 'react-redux'

function ChatMessageList(props){
  const displayMessages = props.messages.map((message)=> <ChatMessage message={message.body}/>)

  return(
    <div className='chat-message-list'>{ displayMessages }</div>
  )
}

const mapStateToProps = (state)=>{
  return {messages: state.messages}
}

export default connect(mapStateToProps)(ChatMessageList)
