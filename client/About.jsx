import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class About extends Component {

  setVar() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render() {
    return (
      <div>
        <h1>About us</h1>
        <p>the quick brown fox jumps over the lazy dog</p>
        <button onClick={this.setVar}>sign up</button>
      </div>
    )
  }

}
