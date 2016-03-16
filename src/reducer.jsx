// import {List, Map} from 'immutable';
import fetch from 'whatwg-fetch';

function increment(total) {
  console.log('TOTAL', total)
  console.log('TOTAL+1', total+1)
  return total+1;
}

function decrement(total) {
  console.log('TOTAL', total)
  console.log('TOTA-1', total-1)
  return total-1;
}

// function decrement(state, action) {

// }

// function fetchData(state, action) {

// }

const INITIAL_STATE = {
  total: 0,
  tracks: [{
    name: 'Doodie and Kids',
    featuring: 'Samwise Gamgy',
    id: 0
  }]
}


export default function reducer(state = INITIAL_STATE, action) {
  console.log('STATE BEFORE', state)
  console.log('action', action)
  switch (action.type) {
    case 'INCREMENT' :
      let aftState = {
        total: increment(state.total)
      }
      console.log('state after', aftState)
      return aftState;
    case 'DECREMENT' :
      aftState = {
        total: decrement(state.total)
      }
      console.log('state after', aftState)
      return aftState;
    // case 'GET_DATA' :
    //   return fetchData(state, action)
    default :
      return state
  }
}