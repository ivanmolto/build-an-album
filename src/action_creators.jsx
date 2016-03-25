export function AddTrack(state) {
  return {
    type: 'ADD_TRACK',
    state
  }
}

export function EditTrack(id) {
	return {
		type: 'EDIT_TRACK',
		id
	}
}
