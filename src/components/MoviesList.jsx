import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieCard from "./MovieCard";
import Pagination from "./Pagination";

const MoviesList = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const moviesPerPage = 12;
  const totalPages = 5;

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;
    const baseUrl = import.meta.env.VITE_BASE_URL;

    fetch(`${baseUrl}/movie/popular?api_key=${apiKey}&page=${currentPage}`)
      .then((response) => response.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [currentPage]);

  return (
    <div className="movies-container">
      <h1 className="section-title" style={{ color: "#d10000" }}>
        Movies List
      </h1>
      <div className="row">
        {movies.slice(0, moviesPerPage).map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
    </div>
  );
};

export default MoviesList;
