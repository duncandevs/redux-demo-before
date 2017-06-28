import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChatHeader from './ChatHeader'
import ChatMessageList from './ChatMessageList'
import ChatForm from './ChatForm'
import { connect } from 'react-redux'
import * as actions from './actions'

class App extends Component {

  componentDidMount(){
    this.props.fetchMsgs()
  }

  render() {
    return (
      <div className="App">
        <ChatHeader/>
        <ChatMessageList/>
        <ChatForm/>
      </div>
    );
  }
}

export default connect(state=>state,actions)(App);
