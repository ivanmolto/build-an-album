import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import * as actionCreators from '../action_creators';
import {List, Map, toJS, fromJS} from 'immutable';


export class Tracks extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  updateInput(ref) {
    // this.props.
  }
  render() {
    let input_name
    let input_featuring
    console.log('TRACKS', this.props.tracks.toJS());
    return (
      <div className="track-container">
        {this.props.tracks.map(track =>
          track.get('currentlyEditing') ?
          <div key={track.get('id')}>
            <label>Name</label>
            <input 
              defaultValue={track.get('name')} 
              ref="trackName"
              placeholder="Track Title"
              onKeyDown={() => this.handleKeyDown("trackName")}
            />
            <br/>
            <label>Featuring</label>
            <input 
              defaultValue={track.get('featuring')} 
              placeholder="Featuring"
              ref="trackFeaturing" 
              onKeyDown={() => this.handleKeyDown("trackFeaturing")}
            />
          </div>
          :
          <div key={track.get('id')}>
            <h4>{track.get('name')}</h4>
            <h5>Featuring: {track.get('featuring')}</h5>
            <button
              onClick={() => this.props.EditTrack(track.get('id'))}
            > Edit</button>
          </div>
        )}
        <div>
          <button
            onClick={() => this.props.AddTrack()}
          >+</button>
        </div>
      </div>
    )
  }
};

const mapStateToProps = (state) => {
  return {
  }
}

export const TracksContainer = connect(
  mapStateToProps,
  actionCreators
)(Tracks);

