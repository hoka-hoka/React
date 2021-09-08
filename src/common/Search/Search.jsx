import React, { useEffect, useRef } from 'react';

import './Search.scss';

const Search = ({ searchText, active, callback }) => {
  const inputField = useRef();

  useEffect(() => {
    if (active) {
      inputField.current.focus();
    }
  }, []);

  const onChangeField = ({ target }) => {
    callback(target.value);
  };

  return (
    <div className="search">
      <input
        ref={inputField}
        className="search__field"
        type="text"
        defaultValue={searchText}
        onChange={onChangeField}
      />
      <svg className="search__icon" width="12" height="12">
        <use xlinkHref="#search" />
      </svg>
    </div>
  );
};

Search.defaultProps = {
  focused: true,
  callback: () => {},
};

export default Search;
