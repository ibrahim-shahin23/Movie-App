import React from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const Pagination = ({ currentPage, setCurrentPage, totalPages }) => {
  return (
    <div className="pagination-container">
      <button
        className="btn btn-danger"
        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
        disabled={currentPage === 1}
      >
        <FaAngleLeft />
      </button>

      {[...Array(totalPages)].map((_, i) => (
        <button
          key={i}
          className={`btn ${
            currentPage === i + 1 ? "btn-danger" : "btn-outline-danger"
          }`}
          onClick={() => setCurrentPage(i + 1)}
        >
          {i + 1}
        </button>
      ))}

      <button
        className="btn btn-danger"
        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
        disabled={currentPage === totalPages}
      >
        <FaAngleRight />
      </button>
    </div>
  );
};

export default Pagination;
