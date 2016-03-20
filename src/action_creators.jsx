export function AddTrack(state) {
  return {
    type: 'ADD_TRACK',
    state
  }
}

export function EditTrack(track) {
	return {
		type: 'EDIT_TRACK',
		track
	}
}