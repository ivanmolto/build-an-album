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
  handleBlur(){
    console.log('BLUR');
    this.props.callback(this.props.field, this.refs.inputField.value);
  }
  render() {
  	return (
			<input
        ref="inputField"
				type="text"
				placeholder={this.props.placeholder}
				onKeyDown={(e) => this.handleKeyDown(e)}
        onBlur={() => this.handleBlur()}
        defaultValue={this.props.initialValue}
        readOnly={this.props.readOnly || false}
			/>
  	)
  }
}


InputField.propTypes = {
  field: React.PropTypes.string.isRequired,
  callback: React.PropTypes.func.isRequired,
  initialValue: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  readOnly: React.PropTypes.bool
}