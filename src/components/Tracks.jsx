import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { AddTrack, ChangeTrackInfo } from '../action_creators';
import {InputField} from './general/TextInput';
import {List, Map, toJS, fromJS} from 'immutable';
import {DropZone} from './general/DropZone';


export class Tracks extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  updateInput(ref) {
    // this.props.
  }
  cb(f,v,id) {
    this.props.ChangeTrackInfo(f,v,id)
  }
  render() {
    let input_name
    let input_featuring
    console.log('TRACKS', this.props.tracks.toJS());
    return (
      <div className="tracks-container">
        <DropZone />
        {this.props.tracks.map( (track, i) =>
          <div 
            key={track.get('id')}
            className="track-container"
          >
            <span>{track.get('sequence')}</span>
            <InputField 
              callback={(f,v) => this.cb(f,v,track.get('id'))}
              field="name"
              initialValue={track.get('name')}
              readOnly={false}
              placeholder={'Name'}
            />
            <InputField 
              callback={(f,v) => this.cb(f,v,track.get('id'))}
              field="featuring"
              initialValue={track.get('featuring')}
              readOnly={false}
              placeholder={'Featuring'}
            />
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
  { AddTrack, ChangeTrackInfo }
)(Tracks);

