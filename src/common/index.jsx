import React, { Component } from 'react';
import CheckBox from './CheckBox';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="ui">
        <div className="ui__check">
          <div className="ui__check-item">
            <CheckBox idFor="check_1" />
          </div>
          <div className="ui__check-item">
            <CheckBox labText="checkbox" idFor="check_2" action />
          </div>
        </div>
      </div>
    );
  }
}
