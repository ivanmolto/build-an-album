import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
var Dropzone = require('react-dropzone');

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
        <div>
          <Dropzone onDrop={this.onDrop}>
            <div>Try dropping some files here, or click to select files to upload.</div>
          </Dropzone>
        </div>
    );
  }
};