import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {TracksContainer} from './Tracks';


export class Release extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
	render() {
		return (
			<div>
				<h1>THis is a release</h1>
				<h3>{this.props.title}</h3>
				<TracksContainer 
					tracks={this.props.tracks}
				/>
			</div>
		)
	}
}


const mapStateToProps = (state) => {
	return {
	  title: state.release.title,
	  artist: state.release.artist,
	  label: state.release.label,
	  releaseName: state.release.releaseNAme,
	  releaseDate: state.release.releaseDate,
	  country: state.release.country,
	  image: state.release.image,
	  tracks: state.release.tracks
	}
}

export const ReleaseContainer = connect(
	mapStateToProps
)(Release)