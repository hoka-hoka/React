import React from 'react';
import Border from './Border';
import './Buttons.scss';

const Buttons = ({ btnType, btnText, callback }) => (
  <>
    {btnType === 'border' && <Border btnText={btnText} callback={callback} />}
  </>
);

Buttons.defaultProps = {
  btnType: 'border',
  btnText: 'click',
  callback: (f) => f,
};

export default Buttons;
