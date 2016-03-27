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

export function ChangeReleaseInfo(field, value) {
	return {
		type: 'CHANGE_RELEASE_FIELD',
		field,
		value
	}
}

export function ChangeTrackInfo(field, value, id) {
	return {
		type: 'CHANGE_TRACK_FIELD',
		field,
		value,
		id
	}
}