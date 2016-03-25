import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {TracksContainer} from '../Tracks';
import {InputField} from '../general/TextInput';
import {DropZone} from '../general/DropZone';
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
	render() {
		return (
			<div>
				<div className="row">
					<div className="col-xs-2">
						<div className="release-image" style={getStyle(this.props.image)}></div>
					</div>
					<div className="col-xs-5">
						<h1>{this.props.artist}</h1>
						<h3>{this.props.title}</h3>
					</div>
					<div className="col-xs-5">
						<h1>{this.props.label}</h1>
						<h3>{this.props.releaseName}<small>{this.props.releaseDate}</small></h3>
					</div>
				</div>
				<div className="row">
					<div className="col-xs-2"></div>
					<div className="col-xs-10">
						<TracksContainer 
							tracks={this.props.tracks}
						/>
					</div>
				</div>
				<InputField />
				<DropZone />
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
	mapStateToProps
)(Release)