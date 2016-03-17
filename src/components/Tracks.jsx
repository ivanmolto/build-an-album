import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';

let style = {
  border: '1px solid #333'
};

let buttonStyle = {
  float: 'right'
}

export const Tracks = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    console.log('Array.isArray(this.props.tracks)', Array.isArray(this.props.tracks))
    console.log('tracks', this.props.tracks)
    let input_name
    let input_featuring
    return (
      <div style={style}>
        {this.props.tracks.map(track =>
          track.currentlyEditing ?
          <form
            key={track.id}
            onSubmit={e => {
              e.preventDefault()
              this.props.saveTrack({
                id: track.id,
                name: input_name.value,
                featuring: input_featuring.value
              })
            }}
          >
            <label>Name</label>
            <input defaultValue={track.name} ref={node => { input_name = node }} />
            <br/>
            <label>Featuring</label>
            <input defaultValue={track.featuring} ref={node => { input_featuring = node }} />
            <button
              style={buttonStyle}
            > Save</button>
          </form>
          :
          <div key={track.id}>
            <h1>{track.name}</h1>
            <h3>Featuring: {track.featuring}</h3>
            <button
              style={buttonStyle}
              onClick={() => this.props.editTrack(track.id)}
            > Edit</button>
          </div>
        )}
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
    tracks: state.tracks
    // id: state.track.id,
    // name: state.track.name,
    // featuring: state.track.featuring,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    editTrack: (id) => dispatch({type: 'EDIT_TRACK', id}),
    saveTrack: (track) => dispatch({type: 'SAVE_TRACK', track})
  }
}

export const TracksContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tracks);

