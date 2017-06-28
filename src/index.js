import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
// include middleware
// import { createStore, applyMiddleware } from 'redux'
// import reduxThunk from 'redux-thunk'

const defaultState = {
  msgcount: 2,
  messages: []
}

const reducer = (state=defaultState,action)=>{
  switch(action.type){
    case 'ADD_NEW_MESSAGE':
      return Object.assign({},state,{messages:[...state.messages,action.payload]})
    case 'INCREMENT_MSG_COUNT':
      return Object.assign({},state,{msgcount: state.msgcount + 1})
    case 'FETCH_ALL_MSGS':
      return Object.assign({},state,{messages: action.payload})
  }
  return state
}

const store = createStore(reducer,applyMiddleware(reduxThunk))
// set applyMiddleware and reduxThunk
// const store = createStore(reducer, applyMiddleware(reduxThunk))

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>

  , document.getElementById('root'));
registerServiceWorker();

// define a file called actions
// import it where needed
// set replace mapDispatchToProps
