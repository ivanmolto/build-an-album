import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {TracksContainer} from '../Tracks';
import {InputField} from '../general/TextInput';
import Container from '../general/DndContainer';
import { ChangeReleaseInfo } from '../../action_creators';

require('./release.scss');
var style = {};

const getStyle = (image) => {
	return {
		// backgroundImage: 'url(' + image + ')'
		backgroundColor: 'beige'
	}
}


export class Release extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  cb(field, value) {
  	this.props.ChangeReleaseInfo(field, value)
  }
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-2">
						<div className="release-image" style={getStyle(this.props.image)}></div>
					</div>
					<div className="col-xs-5">
						<div className="if-lg-text">
							<InputField
								callback={(f,v) => this.cb(f,v)}
								field="artist"
								initialValue={this.props.artist}
								readOnly={true}
							/>
						</div>
						<div className="if-md-text">
							<InputField
								callback={(f,v) => this.cb(f,v)}
								field="title"
								initialValue={this.props.title}
								placeholder={'Title'}
								readOnly={false}
							/>
						</div>
					</div>
					<div className="col-xs-5">
						<div className="if-lg-text">
							<InputField
								callback={(f,v) => this.cb(f,v)}
								field="label"
								initialValue={this.props.label}
								placeholder={'Label'}
								readOnly={false}
							/>
						</div>
						<div className="if-md-text">
							<InputField
								callback={(f,v) => this.cb(f,v)}
								field="releaseName"
								initialValue={this.props.releaseName}
								placeholder={'Catalog ID'}
								readOnly={false}
							/>
						</div>
						<small>{this.props.releaseDate}</small>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2">
					</div>
					<div className="col-xs-10">
						<TracksContainer
							tracks={this.props.tracks}
						/>
					</div>
				</div>
				<Container />
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
	  title: state.getIn(['release','title']),
	  artist: state.getIn(['release','artist']),
	  label: state.getIn(['release','label']),
	  releaseName: state.getIn(['release','releaseName']),
	  releaseDate: state.getIn(['release','releaseDate']),
	  country: state.getIn(['release','country']),
	  image: state.getIn(['release','image']),
	  tracks: state.getIn(['release','tracks'])
	}
}

export const ReleaseContainer = connect(
	mapStateToProps,
	{ ChangeReleaseInfo }
)(Release)