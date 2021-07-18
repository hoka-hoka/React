import React from 'react';

import UITable from '../UITable/UITable';
import SelectBooleanButton from '../../common/SelectBooleanButton/SelectBooleanButton';

import { booleanButton, about } from './constants';

const UISelectBooleanButton = () => (
  <div className="ui__cont">
    <h2 className="ui__title">SelectBooleanButton</h2>
    <div className="ui__example">
      <UITable about={about} />
      <div className="ui__button-bool">
        {booleanButton.map(({ id, action }) => (
          <SelectBooleanButton key={id} action={action} />
        ))}
      </div>
    </div>
  </div>
);

export default UISelectBooleanButton;
