import React, { useEffect, useState } from 'react';

import './Pagination.scss';

const LEFT_PAGE = 'LEFT';
const RIGHT_PAGE = 'RIGHT';

const Pagination = ({
  totalRecords = 1,
  pageNeighbours = 0,
  pageLimit = 30,
  currentPage: current = 1,
  onPageChanged = (f) => f,
}) => {
  const [totalPages, setTotalPages] = useState();
  const [currentPage, setCurrentPage] = useState(current);

  const calculateTotalPages = () => {
    const rezult = Math.ceil(totalRecords / pageLimit);
    return rezult;
  };

  useEffect(() => {
    setTotalPages(calculateTotalPages());
  }, [totalRecords, pageLimit]);

  useEffect(() => {
    const paginationData = {
      currentPage,
      totalPages,
      pageLimit,
      totalRecords,
    };
    onPageChanged(paginationData);
  }, [currentPage]);

  const range = (from, to, step = 1) => {
    let i = from;
    const rezult = [];
    while (i <= to) {
      rezult.push(i);
      i += step;
    }
    return rezult;
  };

  const fetchPageNumbers = () => {
    const totalPageNeighbours = pageNeighbours * 2;
    const totalNumbers = totalPageNeighbours + 3; // 3 (leftNumber + centerNumber + rightNumber)
    const totalBlocks = totalNumbers + 2; // 2 (leftNumber + leftArrow)
    const startPage = Math.max(2, currentPage - pageNeighbours);
    const endPage = Math.min(totalPages - 1, currentPage + pageNeighbours);

    const hasLeftSpill = startPage > 2;
    const hasRightSpill = totalPages - endPage > 1;

    let pages = range(startPage, endPage);
    const spillOffset = totalNumbers - (pages.length + 1); // value leftNumber

    if (totalPages <= totalBlocks) {
      return range(1, totalPages);
    }

    switch (true) {
      // handle: (1) < {5 6} [7] {8 9} (10)
      case hasLeftSpill && !hasRightSpill: {
        // (1) [extraPages] {5 6} [7] {8, 9} (10)
        const extraPages = range(startPage - spillOffset, startPage - 1);
        pages = [LEFT_PAGE, ...extraPages, ...pages];
        break;
      }
      // handle: (1) {2 3} [4] {5 6} > (10)
      case !hasLeftSpill && hasRightSpill: {
        // (1) {2 3} [4] {5, 6} extraPages (10)
        const extraPages = range(endPage + 1, endPage + spillOffset);
        pages = [...pages, ...extraPages, RIGHT_PAGE];
        break;
      }
      // handle: (1) < {4 5} [6] {7 8} > (10)
      case hasLeftSpill && hasRightSpill:
      default: {
        pages = [LEFT_PAGE, ...pages, RIGHT_PAGE];
        break;
      }
    }
    return [1, ...pages, totalPages];
  };

  const gotoPage = (page) => {
    setCurrentPage(page);
  };

  const handleMoveLeft = (event) => {
    event.preventDefault();
    gotoPage(currentPage - pageNeighbours * 2 - 1);
  };

  const handleMoveRight = (event) => {
    event.preventDefault();
    gotoPage(currentPage + pageNeighbours * 2 + 1);
  };

  const handleClick = (page) => (event) => {
    event.preventDefault();
    gotoPage(page);
  };

  return (
    <ul className="pagination" aria-label="Countries Pagination">
      {fetchPageNumbers().map((page, index) => {
        if (page == LEFT_PAGE) {
          return (
            <li className="pagination__item" key={index}>
              <button
                className="pagination__btn pagination__btn_painted pagination__btn_turned"
                type="button"
                aria-label="Previous"
                onClick={handleMoveLeft}
              >
                <svg width="16" height="16">
                  <use xlinkHref="#arrow" />
                </svg>
              </button>
            </li>
          );
        }
        if (page == RIGHT_PAGE) {
          return (
            <li className="pagination__item" key={index}>
              <button
                className="pagination__btn pagination__btn_painted"
                type="button"
                aria-label="Next"
                onClick={handleMoveRight}
              >
                <svg width="16" height="16">
                  <use xlinkHref="#arrow" />
                </svg>
              </button>
            </li>
          );
        }
        return (
          <li key={index} className="pagination__item">
            <button
              className={`pagination__btn${
                currentPage === page ? ' pagination__btn_active' : ''
              }`}
              type="button"
              onClick={handleClick(page)}
            >
              {page}
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default Pagination;
