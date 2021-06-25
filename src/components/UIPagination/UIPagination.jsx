import React, { useState, Fragment, useEffect, useRef } from 'react';

import UITable from '../UITable/UITable';
import Pagination from '../../common/Pagination/Pagination';

import { pagination, about } from './constants';

const UIPagination = () => {
  const [totalPages, setTotalPages] = useState();
  const [totalRecords, setTotalRecords] = useState(50);
  const [pageLimit, setPageLimit] = useState(10);
  const [pageNeighbours, setPageNeighbours] = useState(0);

  useEffect(() => {
    setTotalPages(Math.ceil(totalRecords / pageLimit));
  }, [totalRecords, pageLimit]);

  const changeTotalRecords = (event) => {
    const { value } = event.target;
    setTotalRecords(+value);
  };

  const changePageLimit = (event) => {
    const { value } = event.target;
    setPageLimit(+value);
  };

  const changePageNeighbours = (event) => {
    const { value } = event.target;
    setPageNeighbours(+value);
  };

  return (
    <div className="ui__cont">
      <h2 className="ui__title">Pagination</h2>
      <div className="ui__example">
        <UITable about={about} />
        <div className="ui__pagination">
          {pagination.map(({ id, targetPage }) => (
            <Fragment key={id}>
              <div className="ui__text">{`totalPages = ${totalPages}`}</div>
              <Pagination
                totalRecords={totalRecords}
                pageLimit={pageLimit}
                pageNeighbours={pageNeighbours}
                currentPage={targetPage}
              />

              <div className="ui__menu">
                <div className="ui__item">
                  <div className="ui__text">{`totalRecords = ${totalRecords}`}</div>
                  <input
                    className="ui__range"
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={totalRecords}
                    onChange={changeTotalRecords}
                  />
                </div>

                <div className="ui__item">
                  <div className="ui__text">{`pageLimit = ${pageLimit}`}</div>
                  <input
                    className="ui__range"
                    type="range"
                    min="1"
                    max="50"
                    step="1"
                    value={pageLimit}
                    onChange={changePageLimit}
                  />
                </div>

                <div className="ui__item">
                  <div className="ui__text">{`pageNeighbours = ${pageNeighbours}`}</div>
                  <input
                    className="ui__range"
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={pageNeighbours}
                    onChange={changePageNeighbours}
                  />
                </div>
              </div>
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UIPagination;
