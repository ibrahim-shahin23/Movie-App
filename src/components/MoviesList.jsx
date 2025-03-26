import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const moviesPerPage = 12;

  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results);
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage]); 

  const totalPages = 5;

  return (
    <div className="movies-container">
      <h1 className="section-title" style={{ color: "#d10000" }}>
        Moives List
      </h1>
      <div className="row">
        {movies.slice(0, moviesPerPage).map((movie) => (
          <div key={movie.id} className="col-md-2 mb-4 col-lg-2 col-sm-6">
            <div className="movie-card">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                alt={movie.title}
                className="movie-image"
              />
              <div className="movie-info">
                <div className="text-left">
                  <span className="movie-title">{movie.title}</span>
                  <span className="movie-date">{movie.release_date}</span>
                </div>
                <FaHeart className="wishlist-icon" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <button
          className="btn btn-danger"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          {" "}
          &laquo;{" "}
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
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          {" "}
          &raquo;{" "}
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
