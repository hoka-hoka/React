import React, { useState, useEffect, useRef } from 'react';

import Search from '../Search/Search';
import { keyCodeNames, langData } from './constants';

import './DropdownList.scss';

const DropdownList = ({
  idFor,
  optionNames,
  placeHolder,
  action,
  callback,
}) => {
  const [active, setActive] = useState(action);
  const [options, setOptions] = useState(optionNames);
  const [curOption, setCurOption] = useState({
    val: '',
    index: null,
  });
  const parentNode = useRef();
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (!active) {
      parentNode.current.focus();
    }
    callback(active);
  }, [active]);

  const handlerBlur = () => {
    setTimeout(() => {
      const $elem = $(document.activeElement);
      const $focused = $(parentNode.current);
      if (!$focused.is($elem) && !$focused.find($elem).length) {
        setActive(false);
      }
    });
  };

  const bubblingCurOption = () => {
    if (!curOption.index) {
      return;
    }
    setCurOption({
      val: options[curOption.index - 1],
      index: curOption.index - 1,
    });
  };

  const diveCurOption = () => {
    if (curOption.index === options.length - 1) {
      return;
    }
    const index = (curOption.index ?? -1) + 1;
    setCurOption({
      index,
      val: optionNames[index],
    });
  };

  const onKeyDown = (event) => {
    event.stopPropagation();
    const keyCode = event.keyCode || event.charCode;
    switch (keyCode) {
      case keyCodeNames.ArrowUP:
        bubblingCurOption();
        break;
      case keyCodeNames.ArrowDown:
        diveCurOption();
        break;
      case keyCodeNames.Space:
        setActive(true);
        break;
      case keyCodeNames.Escape:
        setActive(false);
        break;
      case keyCodeNames.Enter:
        setActive((prevState) => !prevState);
        break;
      default:
        break;
    }
  };

  const onClick = () => {
    setActive((prevState) => !prevState);
  };

  const selectOption = (event, index) => {
    event.stopPropagation();
    setCurOption({
      index,
      val: optionNames[index],
    });
  };

  const optionsFilter = (value) => {
    const regexp = new RegExp(value, 'ig');
    const filteredOptions = optionNames.filter(
      (option) => ~option.search(regexp),
    );
    setSearchText(value);
    setOptions(filteredOptions);
  };

  return (
    <div
      ref={parentNode}
      className={`drop-list${active ? ' drop-list_active' : ''}`}
      tabIndex="0"
      onBlur={handlerBlur}
      onKeyDown={onKeyDown}
      role="button"
      aria-expanded={active}
      aria-haspopup="true"
    >
      <input
        id={idFor}
        className="drop-list__field"
        type="text"
        onClick={onClick}
        placeholder={placeHolder}
        tabIndex="-1"
        value={curOption.val}
        readOnly
        aria-hidden
      />
      <button
        className="drop-list__btn"
        type="button"
        onClick={onClick}
        tabIndex="-1"
        aria-hidden
      />
      {active && (
        <div className="drop-list__panel">
          <div className="drop-list__search">
            <Search
              searchText={searchText}
              active={active}
              callback={optionsFilter}
            />
          </div>
          <div className="drop-list__options">
            {options.map((item, index) => (
              <div
                className={`drop-list__item${
                  index == curOption.index ? ' drop-list__item_focused' : ''
                }`}
                onClick={(event) => selectOption(event, index)}
                onKeyDown={onKeyDown}
                key={index}
                tabIndex="-1"
                role="button"
              >
                {item}
              </div>
            ))}
            {!options.length && (
              <div className="drop-list__text">{langData.notFound}</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

DropdownList.defaultProps = {
  callback: (f) => f,
  idFor: '',
  optionNames: [],
  placeHolder: '',
  action: false,
};

export default DropdownList;
