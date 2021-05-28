import React, { useEffect, useState } from 'react';
import './CheckBox.scss';

const CheckBox = ({ action, labText, extClass, idFor, bubling, callback }) => {
  const [active, setActive] = useState(action);

  useEffect(() => {
    if (bubling) {
      callback(active);
    }
  }, [bubling]);

  const changeActive = (event) => {
    if (event.type === 'keypress' && event.code !== 'Space') {
      return;
    }
    setActive((prevState) => !prevState);
  };

  return (
    <div
      className="check-box"
      tabIndex="0"
      role="checkbox"
      aria-checked={active}
      onKeyPress={changeActive}
    >
      <input
        id={idFor}
        className="check-box__field check-box__field_hiden"
        onChange={changeActive}
        type="checkbox"
        tabIndex="-1"
        checked={active}
        aria-hidden
      />
      <label className={`check-box__lab${extClass || ''}`} htmlFor={idFor}>
        {labText}
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  action: false,
  labText: 'label_text',
  bubling: false,
  callback: (f) => f,
};

export default CheckBox;
