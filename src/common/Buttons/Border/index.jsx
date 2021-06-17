import React, { useState } from 'react';

const Border = ({ btnText, callback }) => (
  <button className="button" type="button" onClick={callback}>
    {btnText}
  </button>
);

Border.defaultProps = {
  btnText: '',
  callback: (f) => f,
};

export default Border;
