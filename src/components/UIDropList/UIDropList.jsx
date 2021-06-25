import React, { useState, Fragment } from 'react';

import UITable from '../UITable/UITable';
import DropList from '../../common/DropList/DropList';

import { dropList, about } from './constants';

const UIDropList = () => {
  const [state, setState] = useState();
  return (
    <div className="ui__cont">
      <h2 className="ui__title">DropList</h2>
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

              <DropList
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

export default UIDropList;
