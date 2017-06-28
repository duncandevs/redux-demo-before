import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatHeader from './ChatHeader'
import ChatMessageList from './ChatMessageList'
import ChatForm from './ChatForm'

class App extends Component {
  constructor(){
    super()
    this.state = {
      msgcount: 0,
      messages: []
    }
  }

  addNewMessage(message){
    this.setState({
      messages: [...this.state.messages, message]
    })
  }

  incrementMsgCount(){
    this.setState({
      msgcount: this.state.msgcount + 1
    })
  }

  render() {
    return (
      <div className="App">
        <ChatHeader msgcount={this.state.msgcount}/>
        <ChatMessageList messages={this.state.messages}/>
        <ChatForm incrementMsgCount={this.incrementMsgCount.bind(this)} addNewMessage={this.addNewMessage.bind(this)}/>
      </div>
    );
  }
}

export default App;
