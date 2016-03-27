import {List, Map, toJS, fromJS} from 'immutable';
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

function addTrack(state) {
  console.log('ADD TRACK FIRING');
  const sequence = state.getIn(['release','tracks']).size;
  return state.updateIn(['release', 'tracks'], (todos) => {
    return todos.push(fromJS({
      id: 2,
      sequence: sequence,
      name: '',
      featuring: '',
      currentlyEditing: true
    }))
  });
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
        id: 0,
        sequence: 1,
        name: 'Cabinet Kickin',
        featuring: 'Samwise Gamgy',
        currentlyEditing: false
      },{
        id: 1,
        sequence: 2,
        name: 'Doodie and Kids',
        featuring: '',
        currentlyEditing: false
      }
    ]
  }
})


export default function reducer(state = INITIAL_STATE, action) {
  console.log('STATE BEFORE', state)
  console.log('action', action)
  switch (action.type) {
    case 'ADD_TRACK' :
      return addTrack(state);
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




















