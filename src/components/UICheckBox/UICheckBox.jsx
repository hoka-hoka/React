import React, { useEffect, useState } from 'react';

import UITable from '../UITable/UITable';
import CheckBox from '../../common/CheckBox/CheckBox';
import Buttons from '../../common/Buttons/Buttons';

import { checkBoxes, about } from './constants';

const UICheckBox = () => {
  const [bubbling, setBubbling] = useState(false);
  const [active, setActive] = useState([]);

  const showText = (isActive, index) => {
    setActive((prevState) => {
      prevState[index] = isActive;
      return [...prevState];
    });
  };

  const handlerClick = () => {
    setBubbling(true);
  };

  useEffect(() => {
    if (bubbling) {
      setBubbling(false);
    }
  }, [bubbling]);

  return (
    <div className="ui__cont">
      <h2 className="ui__title">CheckBox</h2>
      <div className="ui__example">
        <UITable about={about} />
        <div className="ui__check">
          {checkBoxes.map(
            ({ id, idFor, labelText, labelClassName, action }, index) => (
              <div className="ui__check-item" key={id}>
                <CheckBox
                  idFor={idFor}
                  labelText={labelText}
                  labelClassName={labelClassName}
                  action={action}
                  bubbling={bubbling}
                  callback={(isActive) => showText(isActive, index)}
                />
                <div className="ui__status">{`${active[index] ?? action}`}</div>
              </div>
            ),
          )}
          <div className="ui__check-button">
            <Buttons btnText="Всплытие" callback={handlerClick} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UICheckBox;
