import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';


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
    // increment: function() {
    //   dispatch({type: 'INCREMENT'})
    // }
    increment: () => dispatch({type: 'INCREMENT'}),
    decrement: () => dispatch({type: 'DECREMENT'})
  }
}

export const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

  // ,
  // mapDispatchToProps
// const App = ({ total, increment }) => {
//   return(
//     <div>
//       <h3>Total - {total}</h3>
//       <button onClick={increment()}>Button - Dude</button>
//     </div>
//   )
// }

// App.propTypes = {
//   total: PropTypes.number.isRequired,
//   increment: PropTypes.func.isRequired
// }

  // increment: function() {
  //   console.log('incremenetttighansdjkfa')
  //   dispatch({
  //     type: 'INCREMENT'
  //   })
  // },
  // render: function() {
  //   return <div>
  //     <h3>Total - {this.props.total}</h3>
  //     <button onClick={this.increment}>Button - Dude</button>
  //   </div>
  // }




// export default App = React.createClass({
//   increment: function() {
//     console.log('incremenetttighansdjkfa')
//     dispatch({
//       type: 'INCREMENT'
//     })
//   },
//   render: function() {
//     return <div>
//       <h3>Total - {this.props.total}</h3>
//       <button onClick={this.increment()}>Button - Dude</button>
//     </div>
//   }

// });
