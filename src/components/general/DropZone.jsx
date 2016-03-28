import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
var Dropzone = require('react-dropzone');


const getStyle = (image) => {
  return {
    // backgroundImage: 'url(' + image + ')'
    backgroundColor: 'beige',
    position: 'absolute',
    width: '100%',
    height: '100%',

  }
}

export class DropZone extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);

    this.state = {
      files: []
    };
  }
  onDrop(files) {
    console.log('Received files: ', files[0].type);
    //handle rejected file
    if(files[0].type === "audio/aiff" ||
      files[0].type === "audio/wav" ||
      files[0].type === 'audio/mp3') {
      this.props.onAcceptedFileDrop(files[0]);
      return
    }

      console.log('YOU FUCKED UP')
  }
  render() {
    return (
      <Dropzone
        ref="dzone"
        onDrop={(files) => this.onDrop(files)}
        style={getStyle()}
        accept={'audio/aiff,audio/wav,audio/mp3'}
      >
      </Dropzone>
    );
  }
};


DropZone.propTypes = {
  onAcceptedFileDrop: React.PropTypes.func.isRequired,
}