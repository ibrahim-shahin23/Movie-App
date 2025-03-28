import React, { useEffect, useState } from "react";
import { FaHeart } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { addTowatchlist, removeFromwatchlist } from "../store/slices/watchlist";
import "bootstrap/dist/css/bootstrap.min.css";
import { useTranslation } from "react-i18next";


const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const { t } = useTranslation();
  

  const moviesPerPage = 12;

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
      <h1 className="section-title" style={{ color: "#d10000" }}>{t("movieslist")}</h1>
      <div className="row">
        {movies.slice(0, moviesPerPage).map((movie) => {
          const isInwatchlist = watchlistItems.some((item) => item.id === movie.id);
          return (
            <div key={movie.id} className="col-md-2 mb-4 col-lg-2 col-sm-6">
              <div className="movie-card position-relative">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="movie-image"
                />
                <div className="movie-info d-flex flex-column justify-content-between">
                  <div>
                    <span className="movie-title">{movie.title}</span>
                    <span className="movie-date">{movie.release_date}</span>
                  </div>
                  <button
                    className="btn position-absolute bottom-0 end-0 me-2 mb-2"
                    onClick={() => {
                      isInwatchlist
                        ? dispatch(removeFromwatchlist(movie.id))
                        : dispatch(addTowatchlist(movie));
                    }}
                  >
<i 
  className="bi bi-heart-fill" 
  style={{ fontSize: "1.5rem", color: isInwatchlist ? "#250101" : "white" }}
></i>



                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      <div className="pagination-container">
        <button
          className="btn btn-danger"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          &laquo;
        </button>
        {[...Array(totalPages)].map((_, i) => (
          <button
            key={i}
            className={`btn ${currentPage === i + 1 ? "btn-danger" : "btn-outline-danger"}`}
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
          &raquo;
        </button>
      </div>
    </div>
  );
};

export default MoviesList;
