import '../scss/normalize.scss';
import './App.scss';

import React, { Component } from 'react';
import CheckBox from './CheckBox';
import DropList from './DropList';

import { dropList } from '../constants';

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
        <div className="ui__drop">
          <div className="ui__drop-item">
            <DropList
              optNames={dropList.opts.map((item) => item.name)}
              placeHolder="select"
            />
          </div>
          <div className="ui__drop-item">
            <label className="ui__drop-label" htmlFor="drop">
              label text
            </label>
            <DropList
              labFor="drop"
              optNames={dropList.opts.map((item) => item.name)}
              placeHolder="select"
            />
          </div>
          <div className="ui__drop-item">
            <DropList
              optNames={dropList.opts.map((item) => item.name)}
              placeHolder="select"
              listActive
            />
          </div>
        </div>
      </div>
    );
  }
}
