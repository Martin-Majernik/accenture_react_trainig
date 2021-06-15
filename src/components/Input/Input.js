import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

export default class Input extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    console.log('input component');
    return <div>input component</div>;
  }
}
