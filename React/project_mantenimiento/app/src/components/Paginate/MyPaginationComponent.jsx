import React, { useState, useContext } from 'react';
import ReactPaginate from 'react-paginate';
import { TitleContext } from "../../provider/titleContext"
import './MyPaginationComponent.css';

export const MyPaginationComponent = ({ data, PerPage, handlePageChange }) => {
  // Estado para mantener el número de página actual
  const [currentPage, setCurrentPage] = useState(0);

  const title = useContext(TitleContext);
  // Manejar el cambio de página
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage);
    handlePageChange(selectedPage); // Llamar a la función de manejo de cambio de página externa
  };

  return (
    <div className="pagination-container">
     {/*  {title} */}
    <ReactPaginate
      previousLabel={'Anterior'}
      nextLabel={'Siguiente'}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={Math.ceil(data.length / PerPage)}
      marginPagesDisplayed={2}
      pageRangeDisplayed={5}
      onPageChange={handlePageClick} // Pasar la función de manejo de cambio de página
      containerClassName={'pagination'}
      subContainerClassName={'pages pagination'}
      activeClassName={'active'}
      previousClassName={'page-item'}
      nextClassName={'page-item'}
      previousLinkClassName={'page-link'}
      nextLinkClassName={'page-link'}
      pageClassName={'page-item'}
      pageLinkClassName={'page-link'}
      breakLinkClassName={'page-link'}
    />
    </div>
  );
};