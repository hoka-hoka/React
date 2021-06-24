import React from 'react';
import './Buttons.scss';

const Buttons = ({ btnText, callback }) => (
  <>
    <button className="button" type="button" onClick={callback}>
      {btnText}
    </button>
  </>
);

Buttons.defaultProps = {
  btnText: 'click',
  callback: (f) => f,
};

export default Buttons;
