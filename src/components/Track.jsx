import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';


export const Track = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        {this.props.tracks.map(track =>
          <div key={track.id}>
            <h1>{track.name}</h1>
            <h3>Featuring: {track.featuring}</h3>
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
    // increment: () => dispatch({type: 'INCREMENT'}),
    // decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export const TrackContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Track);

