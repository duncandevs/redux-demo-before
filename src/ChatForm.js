import React, { Component } from 'react'
import { connect } from 'react-redux'
class ChatForm extends Component{
  constructor(){
    super()
    this.state = {
      message: ''
    }
  }

  handleChange(e){
    e.preventDefault()
    this.setState({
      message: e.target.value
    })
  }

  handleSubmit(e){
    e.preventDefault()
    this.props.addNewMessage(this.state.message)
    this.props.incrementMsgCount()
    this.setState({
      message: ''
    })
  }

  render(){
    return(
      <div className='chat-form-container'>
        <form onSubmit={this.handleSubmit.bind(this)} className='chat-form'>
          <input type='text' onChange={this.handleChange.bind(this)} value={this.state.message}/>
          <input type='submit'/>
        </form>
      </div>
    )
  }
}



const mapDispatchToProps = (dispatch)=>{
  return {
    addNewMessage: (message)=>dispatch({type:'ADD_NEW_MESSAGE',payload:message}),
    incrementMsgCount: ()=>dispatch({type:'INCREMENT_MSG_COUNT'})
   }
}

export default connect(state=>state,mapDispatchToProps)(ChatForm)
