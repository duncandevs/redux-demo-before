import axios from 'axios'
export function fetchMsgs(){
  return function(dispatch){
    axios('http://localhost:3000').then(res=>{
      dispatch({type: 'FETCH_ALL_MSGS',payload:res.data})
    })
  }
}
