import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import { AddTrack, ChangeTrackInfo, AddTrackWithFile } from '../action_creators';
import {InputField} from './general/TextInput';
import {List, Map, toJS, fromJS} from 'immutable';
import {DropZone} from './general/DropZone';


export class Tracks extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  cb(f,v,id) {
    this.props.ChangeTrackInfo(f,v,id)
  }
  addTrackFromFile(file) {
    this.props.AddTrackWithFile(file)
  }
  render() {
    let input_name
    let input_featuring
    console.log('TRACKS', this.props.tracks.toJS());
    return (
      <div className="tracks-container">
        <DropZone
          onAcceptedFileDrop={(file) => this.addTrackFromFile(file)}
        />
        {this.props.tracks.map( (track, i) =>
          <div
            key={track.get('id')}
            className="track-container"
          >
            <div
              className="track-sequence"
            >
              <span>{track.get('sequence')}</span>
            </div>
            <InputField
              callback={(f,v) => this.cb(f,v,track.get('id'))}
              field="name"
              initialValue={track.get('name') || ' '}
              readOnly={false}
              placeholder={'Name'}
            />
            <span><small>featuring</small></span>
            <InputField
              callback={(f,v) => this.cb(f,v,track.get('id'))}
              field="featuring"
              initialValue={track.get('featuring') || ' '}
              readOnly={false}
              placeholder={'Featuring'}
            />
          </div>
        )}
        <div className="add-track-container">
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
  { AddTrack,
    AddTrackWithFile,
    ChangeTrackInfo,
  }
)(Tracks);

