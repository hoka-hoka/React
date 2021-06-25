import React, { useState } from 'react';
import './Buttons.scss';

const Buttons = ({ btnText, action, callback }) => {
  const [active, setActive] = useState(action);

  const handlerClick = () => {
    setActive(false);
    callback();
  };

  return (
    <>
      <button
        className={`button${active ? ' button_active' : ''}`}
        type="button"
        onClick={handlerClick}
      >
        {btnText}
      </button>
    </>
  );
};

Buttons.defaultProps = {
  btnText: 'click',
  action: false,
  callback: (f) => f,
};

export default Buttons;
