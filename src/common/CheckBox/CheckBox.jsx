import React, { useEffect, useState } from 'react';
import './CheckBox.scss';

const CheckBox = ({
  idFor,
  labelText,
  labelClassName,
  bubbling,
  action,
  callback,
}) => {
  const [active, setActive] = useState(action);

  useEffect(() => {
    if (bubbling) {
      callback(active);
    }
  }, [bubbling]);

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

      <label className={labelClassName} htmlFor={idFor}>
        {labelText && <span>{labelText}</span>}
      </label>
    </div>
  );
};

CheckBox.defaultProps = {
  action: false,
  labelText: 'label_text',
  labelClassName: '',
  bubbling: false,
  callback: (f) => f,
};

export default CheckBox;
