import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {TracksContainer} from '../Tracks';
require('./release.scss');
var style = {};

const getStyle = (image) => {
	return {
		backgroundImage: 'url(' + image + ')'
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
					<div className="col-xs-10">
						<h1>THis is a release</h1>
						<h3>{this.props.title}</h3>
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
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
	  title: state.getIn(['release','title']),
	  artist: state.getIn(['release','artist']),
	  label: state.getIn(['release','label']),
	  releaseName: state.getIn(['release','releaseNAme']),
	  releaseDate: state.getIn(['release','releaseDate']),
	  country: state.getIn(['release','country']),
	  image: state.getIn(['release','image']),
	  tracks: state.getIn(['release','tracks']).toJS()
	}
}

export const ReleaseContainer = connect(
	mapStateToProps
)(Release)