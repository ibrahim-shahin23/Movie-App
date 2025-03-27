import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwatchlist, clearwatchlist } from "../store/slices/watchlist";

export default function Watchlist() {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center text-white">Your Watchlist</h2>

      {watchlistItems.length > 0 ? (
        <div className="row mt-4">
          {watchlistItems.map((movie) => (
            <div key={movie.id} className="col-md-3 mb-4">
              <div className="card bg-dark text-white h-100 d-flex flex-column">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                  className="card-img-top"
                  style={{ height: "350px", objectFit: "cover" }}
                />
                <div className="card-body d-flex flex-column justify-content-between" style={{ minHeight: "150px" }}>
                  <div>
                    <h5 className="card-title text-center">{movie.title}</h5>
                    <p className="card-text text-center">⭐ {movie.vote_average.toFixed(1)}</p>
                  </div>
                  <button
                    className="btn btn-danger w-100 mt-auto"
                    onClick={() => dispatch(removeFromwatchlist(movie.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <h4 className="text-center text-white mt-4">Your watchlist is empty</h4>
      )}

      {watchlistItems.length > 0 && (
        <div className="text-center mt-4">
          <button
            className="btn btn-warning"
            onClick={() => dispatch(clearwatchlist())}
          >
            Clear Watchlist
          </button>
        </div>
      )}
    </div>
  );
}
