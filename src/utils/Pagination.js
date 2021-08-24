import React from "react";

const Pagination = ({ photosPerPage, totalPhotos, paginate, currentPage }) => {
  const pageNumbers = [];
  //TOTAL PAGES NEEDED
  for (let i = 1; i <= Math.ceil(totalPhotos / photosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className='pagination'>
        {pageNumbers.map((number, idx) => (
          <li key={number} className='page-item'>
            <a
              onClick={() => paginate(number)}
              className={
                currentPage === idx + 1 ? "page-link color-red" : "page-link" // SET CURRENT PAGE IN RED TEXT
              }
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
