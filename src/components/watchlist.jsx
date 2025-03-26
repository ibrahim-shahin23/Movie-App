import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromwatchlist, clearwatchlist} from "../store/slices/watchlist";

export default function Watchlist() {
  const watchlistItems = useSelector(state => state.watchlist.watchlistItems);
  const dispatch = useDispatch();

  return (
    <div className="container mt-5">
      <h2 className="text-center text-white">Your watchlist</h2>

      {watchlistItems.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-light table-hover text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Poster</th>
                <th>Title</th>
                <th>Rating</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {watchlistItems.map((movie, index) => (
                <tr key={movie.id}>
                  <td>{index + 1}</td>
                  <td>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                      alt={movie.title}
                      style={{ width: "50px", height: "75px", objectFit: "cover" }}
                    />
                  </td>
                  <td>{movie.title}</td>
                  <td>⭐ {movie.vote_average.toFixed(1)}</td>
                  <td>
                    <button 
                      className="btn btn-sm" 
                      style={{ backgroundColor: "#FF5BA5", color: "white" }}
                      onClick={() => dispatch(removeFromwatchlist(movie.id))}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <h4 className="text-center text-white">Your watchlist is empty</h4>
      )}

      {watchlistItems.length > 0 && (
        <div className="text-center mt-4">
          <button 
            className="btn" 
            style={{ backgroundColor: "#1BB76E", color: "white" }}
            onClick={() => dispatch(clearwatchlist())}
          >
            Clear watchlist
          </button>
        </div>
      )}
    </div>
  );
}
