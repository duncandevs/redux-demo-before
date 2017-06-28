import React, {Component} from 'react'
import { connect } from 'react-redux'
function ChatHeader(props){
  return(
    <div className='chat-header'>
      <div className='chat-msg-count'>{props.msgcount}</div>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {msgcount:state.msgcount}
}

export default connect(mapStateToProps)(ChatHeader)
