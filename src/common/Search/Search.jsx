import React, { useEffect, useState } from 'react';

import './Search.scss';

const Search = ({ callback, focused }) => {
  const [focus, setFocus] = useState(focused);

  useEffect(() => {}, []);

  const changeFieldHandler = ({ target }) => {
    callback(target.value);
  };

  return (
    <div className="search">
      <input
        ref={}
        className="search__field"
        type="text"
        onChange={changeFieldHandler}
      />
      <svg className="search__icon" width="12" height="12">
        <use xlinkHref="#search" />
      </svg>
    </div>
  );
};

Search.defaultProps = {
  callback: () => {},
  focused: true,
};

export default Search;
