import React, { Component } from 'react';
import { dropList, viewMode } from '../constants';
import CheckBox from './CheckBox';
import DropList from './DropList';
import Buttons from './Buttons';
import ModalWindow from './ModalWindow';

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
        <div className="ui__modal">
          <Buttons
            btnType="border"
            btnText="open modal"
            callback={this.changeView}
          />
          {view === viewMode.modal && (
            <ModalWindow updateState={this.updateState} />
          )}
        </div>
      </div>
    );
  }
}
