import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Container, Row, Col } from "react-bootstrap";
import { addTowatchlist,removeFromwatchlist } from "./store/slices/watchlist";

const API_KEY = import.meta.env.VITE_API_KEY;
const BASE_URL = import.meta.env.VITE_BASE_URL;

function Movies() {
  const [movies, setMovies] = useState([]);
  const watchlistItems = useSelector(state => state.watchlist.watchlistItems);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovies(data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <Container className="mt-4">
      <h2 className="text-center mb-4">Popular Movies</h2>
      <Row>
        {movies.map((movie) => {
          const isInwatchlist = watchlistItems.some(item => item.id === movie.id);
          
          return (
            <Col key={movie.id} sm={6} md={4} lg={3} className="mb-4">
              <Card>
                <Card.Img
                  variant="top"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <Card.Body>
                  <Card.Title>{movie.title}</Card.Title>
                  <Card.Text>⭐ {movie.vote_average.toFixed(1)}</Card.Text>
                  
                
                  <button 
                    className="btn"
                    onClick={() => {
                      isInwatchlist 
                        ? dispatch(removeFromwatchlist(movie.id)) 
                        : dispatch(addTowatchlist(movie));
                    }}
                  >
                    <i 
                      className={`bi bi-heart${isInwatchlist ? "-fill text-danger" : ""}`}
                      style={{ fontSize: "1.5rem" }}
                    ></i>
                  </button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}

export default Movies;
