import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addTowatchlist, removeFromwatchlist } from "../store/slices/watchlist";
import axios from "axios";
import { FaHeart } from "react-icons/fa";
import StarRating from "../components/Rating";
import Recommendations from "../components/Recommendations";
import MovieReviews from "../components/Reviews";
import "../css/MovieDetails.css";
import languageContext from './../context/languageContext';

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function MovieDetails() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const { language } = useContext(languageContext);
  const dispatch = useDispatch();
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);

  // التحقق مما إذا كان الفيلم في قائمة المشاهدة
  const isInWatchlist = watchlistItems.some((item) => item.id === Number(id));

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}&language=${language}`)
      .then((response) => setMovie(response.data))
      .catch((error) => console.error("Error fetching movie details:", error));
  }, [id, language]);

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
          {/* اسم الفيلم مع أيقونة القلب */}
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="title">{movie.title}</h1>
            <FaHeart
              style={{ fontSize: "1.8rem", color: isInWatchlist ? "#d10000" : "white", cursor: "pointer" }}
              onClick={() =>
                isInWatchlist
                  ? dispatch(removeFromwatchlist(movie.id))
                  : dispatch(addTowatchlist(movie))
              }
            />
          </div>

          <span className="date">{new Date(movie.release_date).toLocaleDateString('en-US',
             { month: 'short', day: 'numeric', year: 'numeric' })}</span>

          <StarRating rating={movie.vote_average} />
          <p className="overview">{movie.overview}</p>

          <div className="genres">
            {movie.genres.map((genre) => (
              <span key={genre.id} className="genre">{genre.name}</span>
            ))}
          </div>

          <div className="movie-info">
            <p><strong>Duration:</strong> {movie.runtime} min</p>
            <p><strong>Language:</strong> {movie.original_language.toUpperCase()}</p>
          </div>

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

      <div className="hr-container">
        <hr />
      </div>

      <Recommendations movieId={id} />
      <div className="hr-container">
        <hr />
      </div>

      <MovieReviews movieId={movie.id} />
    </>
  );
}

export default MovieDetails;
