import React, { useState } from 'react';

import './Search.scss';

const Search = ({}) => {
  const [state, setState] = useState();
  return (
    <div className="search">
      <input className="search__field" type="text" />
      <svg width="16" height="16">
        <use xlinkHref="#search" />
      </svg>
    </div>
  );
};

export default Search;
