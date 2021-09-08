import React, { useState, Fragment } from 'react';

import UITable from '../UITable/UITable';
import DropdownList from '../../common/DropdownList/DropdownList';

import { dropList, about } from './constants';

const UIDropdownList = () => {
  const [state, setState] = useState();
  return (
    <div className="ui__cont">
      <h2 className="ui__title">DropdownList</h2>
      <div className="ui__example">
        <UITable about={about} />

        <div className="ui__drop">
          {dropList.map(({ id, idFor, optionNames, placeHolder, action }) => (
            <Fragment key={id}>
              {idFor && (
                <label className="ui__label" htmlFor={idFor}>
                  label text
                </label>
              )}
              <DropdownList
                idFor={idFor}
                optionNames={optionNames}
                placeHolder={placeHolder}
                action={action}
              />
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIDropdownList;
