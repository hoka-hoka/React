import React, { useState } from 'react';

import UITable from '../UITable/UITable';
import Buttons from '../../common/Buttons/Buttons';

import { buttons, about } from './constants';

const UIButtons = () => {
  const [state, setState] = useState();
  return (
    <div className="ui__cont">
      <h2 className="ui__title">CheckBox</h2>
      <div className="ui__example">
        <UITable about={about} />
        <div className="ui__buttons">
          {buttons.map(({ btnText, action }) => (
            <Buttons btnText={btnText} action={action} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIButtons;
