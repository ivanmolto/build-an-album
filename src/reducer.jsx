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

function editTrack(track, id) {
  if(track.id !== id) {
    return track
  }

  return Object.assign({}, track, {
    currentlyEditing: !track.currentlyEditing
  });
}

function saveTrack(track, newTrackInfo) {
  if(track.id !== newTrackInfo.id) {
    return track
  }

  return Object.assign({}, track, {
      name: newTrackInfo.name,
      featuring: newTrackInfo.featuring,
      id: newTrackInfo.id,
      currentlyEditing: false
  });
}

const INITIAL_STATE = {
  total: 0,
  tracks: [
    {
      name: 'Doodie and Kids',
      featuring: 'Samwise Gamgy',
      id: 0,
      currentlyEditing: false
    }
  ]
}


export default function reducer(state = INITIAL_STATE, action) {
  console.log('STATE BEFORE', state)
  console.log('action', action)
  switch (action.type) {
    case 'INCREMENT' :
      let aftState = {
        total: increment(state.total),
        tracks: state.tracks
      }
      console.log('state after', aftState)
      return aftState;
    case 'DECREMENT' :
      aftState = {
        total: decrement(state.total),
        tracks: state.tracks
      }
      console.log('state after', aftState)
      return aftState;
    case 'EDIT_TRACK' :
      let blah = {
        total: state.total,
        tracks: state.tracks.map(t => editTrack(t, action.id))
      }
      console.log('new tracklist', blah)
      return blah;
      // return editTrack(state, action.id)
    case 'SAVE_TRACK' :
      let meh = {
        total: state.total,
        tracks: state.tracks.map(t => saveTrack(t, action.track))
      }
      console.log('new tracklist at save', meh)
      return meh;
    // case 'GET_DATA' :
    //   return fetchData(state, action)
    default :
      return state
  }
}




















