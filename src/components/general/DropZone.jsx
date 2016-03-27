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
  }
  onDrop(files) {
    console.log('Received files: ', files);
  }
  render() {
    return (
      <Dropzone 
        onDrop={this.onDrop}
        style={getStyle()}
      >
        <div>Try dropping some files here, or click to select files to upload.</div>
      </Dropzone>
    );
  }
};