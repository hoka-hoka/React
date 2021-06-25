import React, { Fragment, useState } from 'react';

import { viewMode } from '../../constants';

import UITable from '../UITable/UITable';
import Buttons from '../../common/Buttons/Buttons';
import ModalWindow from '../../common/ModalWindow/ModalWindow';

import { modal, about } from './constants';

const UIModalWindow = ({ view, updateState }) => {
  const [state, setState] = useState();

  const changeView = () => {
    updateState({ update: true })({ view: viewMode.modal });
  };

  return (
    <div className="ui__cont">
      <h2 className="ui__title">ModalWindow</h2>
      <div className="ui__example">
        <UITable about={about} />
        <div className="ui__modal">
          {modal.map((item) => (
            <Fragment key={item.id}>
              <Buttons btnText="open modal" callback={changeView} />
              {view === viewMode.modal && (
                <ModalWindow updateState={updateState} />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIModalWindow;
