import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {TrackContainer} from './Track'


export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <h1>Hiiyyaa</h1>
        <h3>Total - {this.props.total}</h3>
        <button
          onClick={() => this.props.increment()}
        >Increment</button>
        <button
          onClick={() => this.props.decrement()}
        >Decrement</button>
        <TrackContainer />
      </div>
    )
  }
});



const mapStateToProps = (state) => {
  return {
    total: state.total
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

