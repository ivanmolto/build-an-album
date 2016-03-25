import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { connect } from 'react-redux';

require('./TextInput.scss');


export class InputField extends React.Component{
  constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }
  handleKeyDown(e){
    switch (e.key) {
      case 'Enter' :
        return this.onAddMessage();
      default :
        return null;
    }
  }
  render() {
  	return (
  		<div className="input_field_container">
  			<input
  				type="text"
  				placeholder="Stuff"
  				onKeyDown={(e) => this.handleKeyDown(e)}
  			/>
  		</div>
  	)
  }
}


InputField.propTypes = {
 // field: React.PropTypes.string.isRequired   
 // callback: React.PropTypes.func.isRequired   
}