import {List, Map, toJS, fromJS} from 'immutable';
// import fetch from 'whatwg-fetch';

function editTrack(state, id) {
  console.log('EDIT FIRING');
  return state;
}

function addTrack(state) {
  console.log('ADD TRACK FIRING');
  return state.setIn(['release', 'tracks'], (todos) => {
    return todos.push({
      id: 2,
      sequence: 3,
      name: '',
      featuring: '',
      currentlyEditing: true
    })
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
    default :
      return state
  }
}




















