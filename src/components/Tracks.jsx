import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';

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
              onClick={() => this.props.EditTrack(track.id)}
            > Edit</button>
          </div>
        )}
      </div>
    )
  }
});

const mapStateToProps = (state) => {
  return {
  }
}

export const TracksContainer = connect(
  mapStateToProps,
  actionCreators
)(Tracks);

