import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {List, Map, toJS, fromJS} from 'immutable';


let style = {
  borderTop: '1px solid #333'
};

export const Tracks = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    let input_name
    let input_featuring
    console.log('TRACKS', this.props.tracks);
    return (
      <div>
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
          <div key={track.id}  style={style}>
            <h1>{track.name}</h1>
            <h3>Featuring: {track.featuring}</h3>
            <button
              onClick={() => this.props.EditTrack(track.id)}
            > Edit</button>
          </div>
        )}
        <div style={style}>
          <button
            onClick={() => this.props.AddTrack()}
          >+</button>
        </div>
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

