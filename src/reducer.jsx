import {List, Map, toJS, fromJS} from 'immutable';
import uuid from 'node-uuid';
// import fetch from 'whatwg-fetch';

function editTrack(state, id) {
  return state.updateIn(['release', 'tracks'], (tracks) => {
    return tracks.map((track) => {
      if(track.get('id') === id){
        console.log('INSIDE')
        return track.set('currentlyEditing', true) //= true
      }
      return track;
    })
  })
}

const INITIAL_STATE = fromJS({
  release: {
    title: 'No Take Backs',
    artist: 'Often Frequent',
    label: 'Supply the Demand',
    releaseName: 'STD001',
    releaseDate: '2016',
    country: 'United States',
    image: 'http://lorempixel.com/image_output/food-q-g-640-480-2.jpg',
    tracks: [
      {
        id: uuid.v1(),
        sequence: 1,
        name: 'Cabinet Kickin',
        featuring: 'Samwise Gamgy',
        currentlyEditing: false
      },{
        id: uuid.v1(),
        sequence: 2,
        name: 'Doodie and Kids',
        featuring: '',
        currentlyEditing: false
      }
    ]
  }
})


export default function reducer(state = INITIAL_STATE, action) {
  let sequence;
  console.log('STATE BEFORE', state)
  console.log('action', action)
  switch (action.type) {
    case 'ADD_TRACK_WITH_FILE' :
      sequence = state.getIn(['release','tracks']).size + 1;
      return state.updateIn(['release','tracks'], tracks => {
        console.log('IN TRACKS', action)
        return tracks.push(fromJS({
          id: uuid.v1(),
          sequence: sequence,
          name: action.file.name,
          featuring: '',
          currentlyEditing: true
        }))
      });
    case 'ADD_TRACK' :
      sequence = state.getIn(['release','tracks']).size + 1;
      return state.updateIn(['release','tracks'], tracks => {
        console.log('IN TRACKS', action)
        return tracks.push(fromJS({
          id: uuid.v1(),
          sequence: sequence,
          name: '',
          featuring: '',
          currentlyEditing: true
        }))
      });
    case 'EDIT_TRACK' :
      return editTrack(state, action.id)
    case 'CHANGE_RELEASE_FIELD' :
      return state.update('release', release => release.set(action.field, action.value))
    case 'CHANGE_TRACK_FIELD' :
      console.log('change track')
      return state.updateIn(['release', 'tracks'], tracks => {
        return tracks.map(track => {
          console.log('MAP')
          if(track.get('id') === action.id) {
            console.log('MAP =', action.id)
            return track.set(action.field, action.value);
          }
          return track;
        });
      });
    case 'UPDATE_TRACK_FIELD'  :
      return state
    default :
      return state
  }
}




















