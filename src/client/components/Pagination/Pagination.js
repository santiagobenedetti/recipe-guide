import React from "react";
import s from "./Pagination.module.css"

export default function Pagination({postsPerPage, totalPosts, paginate, currentPage}) {
  var pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++) {
    pageNumbers.push(i);
  }

  // Get rid of the first and last element
  const lastPage = pageNumbers.pop();
  const firstPage = pageNumbers.shift();

  // Style of the pagination bar
  if (currentPage > 3 && currentPage <= pageNumbers.length - 2) {
    pageNumbers = pageNumbers.slice(currentPage-4, currentPage+1);
  } else if (currentPage === 1 || currentPage === 2 || currentPage === 3) {
    pageNumbers = pageNumbers.slice(0, 5);
  } else if (currentPage === lastPage || currentPage === lastPage -1 || currentPage === lastPage -2 || currentPage === lastPage -3) {
    pageNumbers = pageNumbers.slice(lastPage - 7, lastPage);
  }

  return(
    <div className={s.pagination}>
      <div key={1} className={currentPage === 1 ? `${s.active} ${s.first}`: s.first} onClick={() => paginate(1)}>1</div>
      {pageNumbers.map(page => (
          <div
              key={page}
              className={currentPage === page ? s.active : s.normal}
              onClick={() => paginate(page)}>{page}
          </div>
      ))}
      {
        lastPage === 1 ? <React.Fragment/>
            : <div key={lastPage} className={currentPage === lastPage ? `${s.active} ${s.last}` : s.last}
                   onClick={() => paginate(lastPage)}>{lastPage}</div>
      }
    </div>
  )
}