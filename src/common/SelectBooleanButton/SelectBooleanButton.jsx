import React, { useEffect, useState } from 'react';

import './SelectBooleanButton.scss';

const SelectBooleanButton = ({ offText, onText, action }) => {
  const [state, setState] = useState();
  const [active, setActive] = useState(action);

  useEffect(() => {
    setState(active ? onText : offText);
  }, [active]);

  const changeState = () => {
    setActive((prevActive) => !prevActive);
  };

  return (
    <div className="button-bool">
      <button
        className={`button-bool__btn${
          active ? ' button-bool__btn_active' : ''
        }`}
        type="button"
        onClick={changeState}
      >
        {state}
      </button>
    </div>
  );
};

SelectBooleanButton.defaultProps = {
  offText: 'OFF',
  onText: 'ON',
  action: false,
};

export default SelectBooleanButton;
