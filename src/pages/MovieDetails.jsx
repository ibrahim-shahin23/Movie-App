import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Recommendations from "../components/Recommendations";
import "../css/MovieDetails.css";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id]);
  console.log(movie);

  if (!movie) return <p>Loading...</p>;

  return (
    <>
    <div className="movie-container">
        <div className="poster-container">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="poster"
          />
        </div>

        <div className="details-container">
          <h1 className="title">{movie.title} <span>({new Date(movie.release_date).getFullYear()})</span></h1>
          <p className="rating">{movie.vote_average.toFixed(1)} / 10</p>
          <p className="overview">{movie.overview}</p>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>

          <p><strong>Duration:</strong> {movie.runtime} minute</p>
          <p><strong>language:</strong> {movie.original_language.toUpperCase()}</p>

          <div className="production">
            {movie.production_companies.slice(0, 2).map((company) => (
              company.logo_path ? (
                <img
                  key={company.id}
                  src={`https://image.tmdb.org/t/p/w200${company.logo_path}`}
                  alt={company.name}
                  className="company-logo"
                />
              ) : (
                <span key={company.id} className="company-name">{company.name}</span>
              )
            ))}
          </div>

        
          {movie.homepage && (
            <a href={movie.homepage} className="website-btn" target="_blank" rel="noopener noreferrer">
              Website
            </a>
          )}
       </div>
    
  </div>
  <div class="hr-container">
    <hr/>
</div>
  <Recommendations movieId={id} />
    </>
    

  );
}



export default MovieDetails;
