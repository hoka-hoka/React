import React, { useState, useEffect, useRef } from 'react';
import { Fragment } from 'react';

import Search from '../Search/Search';

import './DropList.scss';

const DropList = ({ idFor, optionNames, placeHolder, action, callback }) => {
  const [active, setActive] = useState(action);
  const [curOption, setCurOption] = useState({
    val: '',
    index: null,
  });
  const par = useRef();

  useEffect(() => {
    if (!active) {
      par.current.focus();
    }
    callback(active);
  }, [active]);

  const handlerBlur = () => {
    setTimeout(() => {
      const $elem = $(document.activeElement);
      const $focused = $(par.current);
      if (!$focused.is($elem) && !$focused.find($elem).length) {
        setActive(false);
      }
    });
  };

  const bubblingTargetOption = () => {
    if (!curOption.index) {
      return;
    }
    setCurOption({
      val: optionNames[curOption.index - 1],
      index: curOption.index - 1,
    });
  };

  const diveTargetOption = () => {
    if (curOption.index === optionNames.length - 1) {
      return;
    }
    const newIndex = (curOption.index ?? -1) + 1;
    setCurOption({
      val: optionNames[newIndex],
      index: newIndex,
    });
  };

  const handlerKeyDown = (event) => {
    event.stopPropagation();
    const keyCode = event.keyCode || event.charCode;
    if (keyCode === 38) {
      bubblingTargetOption();
    }
    if (keyCode === 40) {
      diveTargetOption();
    }
    if (![32, 13].includes(keyCode)) return;
    setActive((prevState) => !prevState);
  };

  const rasingFocus = (elem) => {
    const $focused = $(elem).parent();
    setTimeout(() => {
      $focused.focus();
    });
  };

  const handlerClick = ({ target }) => {
    if (!optionNames.length) {
      return;
    }
    setActive((prevState) => !prevState);
    rasingFocus(target);
  };

  const selectOption = (event) => {
    event.stopPropagation();
    const { type } = event;
    if (type === 'keydown') {
      const keyCode = event.keyCode || event.charCode;

      if (keyCode === 38) {
        bubblingTargetOption();
        return;
      }

      if (keyCode === 40) {
        diveTargetOption();
        return;
      }
      if ([32, 13, 27].includes(keyCode)) {
        setActive(false);
      }
    }
  };

  const changeActiveOption = ({ target }, i) => {
    setCurOption({ val: target.innerHTML, index: i });
  };

  const defaultFocusOption = (el, i) => {
    if (!el || curOption.index != i) {
      return;
    }
    setTimeout(() => {
      el.focus();
    });
  };

  return (
    <div
      ref={par}
      className={`drop-list${active ? ' drop-list_active' : ''}`}
      tabIndex="0"
      onBlur={handlerBlur}
      onKeyDown={handlerKeyDown}
      role="button"
      aria-expanded={active}
      aria-haspopup="true"
    >
      <input
        id={idFor}
        className="drop-list__field"
        type="text"
        onClick={handlerClick}
        placeholder={placeHolder}
        tabIndex="-1"
        value={curOption.val}
        readOnly
        aria-hidden
      />
      <button
        className="drop-list__btn"
        type="button"
        onClick={handlerClick}
        tabIndex="-1"
        aria-hidden
      />
      {active && (
        <div className="drop-list__panel">
          <div className="drop-list__searh">
            <Search />
          </div>
          <div className="drop-list__options">
            {optionNames.map((item, i) => (
              <div
                ref={(el) => defaultFocusOption(el, i)}
                className={`drop-list__item${
                  i == curOption.index ? ' drop-list__item_focused' : ''
                }`}
                onClick={(event) => selectOption(event, i)}
                onKeyDown={(event) => selectOption(event, i)}
                onFocus={(event) => changeActiveOption(event, i)}
                key={i}
                tabIndex="0"
                role="button"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

DropList.defaultProps = {
  callback: (f) => f,
  idFor: '',
  optionNames: [],
  placeHolder: '',
  action: false,
};

export default DropList;
