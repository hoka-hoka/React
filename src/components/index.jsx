import React, { Component } from 'react';
import { viewMode } from '../constants';

// import Buttons from '../common/Buttons';

// import TestComponent from './TestComponent.tsx';
import Sprite from '../common/Sprite';

import UIButtons from './UIButtons/UIButtons';
import UISelectBooleanButton from './UISelectBooleanButton/UISelectBooleanButton';
import UICheckBox from './UICheckBox/UICheckBox';
import UIDropdownList from './UIDropdownList/UIDropdownList';
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
        {/* <UIButtons /> */}
        {/* <UISelectBooleanButton /> */}
        {/* <UICheckBox /> */}
        <UIDropdownList />
        {/* <UIPagination />
        <UIModalWindow view={view} updateState={this.updateState} /> */}
        <Sprite />
      </div>
    );
  }
}
