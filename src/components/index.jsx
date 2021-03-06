import React, { Component } from 'react';
import { viewMode } from '../constants';

// import Buttons from '../common/Buttons';

// import TestComponent from './TestComponent.tsx';
import Sprite from '../common/Sprite';

import UIButtons from './UIButtons/UIButtons';
import UICheckBox from './UICheckBox/UICheckBox';
import UIDropList from './UIDropList/UIDropList';
import UIPagination from './UIPagination/UIPagination';
import UIModalWindow from './UIModalWindow/UIModalWindow';

import '../scss/normalize.scss';
import './App.scss';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { view: viewMode.main };
  }

  updateState = ({ update } = {}) => {
    if (!update) {
      return this.state;
    }
    return (params) => this.setState(params);
  };

  render() {
    const { view } = this.state;
    if (view === viewMode.error) {
      return false;
    }
    return (
      <div className="ui">
        {/* <TestComponent text="hello" /> */}
        <UIButtons />
        <UICheckBox />
        <UIDropList />
        <UIPagination />
        <UIModalWindow view={view} updateState={this.updateState} />
        <Sprite />
      </div>
    );
  }
}
