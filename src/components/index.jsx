import React, { Component } from 'react';
import { viewMode } from '../constants';
// import DropList from '../common/DropList';
// import Buttons from '../common/Buttons';
// import ModalWindow from '../common/ModalWindow';
// import Pagination from '../common/Pagination';
// import TestComponent from './TestComponent.tsx';

import UICheckBox from './UICheckBox/UICheckBox';
import UIDropList from './UIDropList/UIDropList';

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

  changeView = () => {
    this.setState({ view: viewMode.modal });
  };

  render() {
    const { view } = this.state;
    if (view === viewMode.error) {
      return false;
    }
    return (
      <div className="ui">
        {/* <TestComponent text="hello" /> */}

        <UICheckBox />
        <UIDropList />

        {/* <div className="ui__modal">
          <Buttons
            btnType="border"
            btnText="open modal"
            callback={this.changeView}
          />
          {view === viewMode.modal && (
            <ModalWindow updateState={this.updateState} />
          )}
        </div> */}

        {/* <div className="ui__pagination">
          <Pagination totalRecords="50" pageLimit="10" pageNeighbours="1" />
        </div> */}
      </div>
    );
  }
}
