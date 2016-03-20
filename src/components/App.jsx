import React, {PropTypes} from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import {connect} from 'react-redux';
import {ReleaseContainer} from './Release';
import * as actionCreators from '../action_creators';


export const App = React.createClass({
  mixins: [PureRenderMixin],
  render: function() {
    return (
      <div>
        <ReleaseContainer />
      </div>
    )
  }
});

