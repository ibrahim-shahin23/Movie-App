import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";

const MostViewed = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const BASE_URL = import.meta.env.VITE_BASE_URL;

    fetch(`${BASE_URL}/movie/popular?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        setMovies(data.results.slice(0, 9)); 
      })
      .catch((error) => console.error("Error fetching movies:", error));
  }, []);

  return (
    <div className="most-viewed py-5 ">
      <h1 className="section-title" style={{ color: "#d10000" }}>
        Most Viewed
      </h1>
      <Carousel indicators={false} interval={null}>
        {movies.map((movie, index) => {
          if (index % 3 === 0) {
            return (
              <Carousel.Item key={index}>
                <div className="d-flex justify-content-center">
                  {movies.slice(index, index + 3).map((m) => (
                    <div key={m.id} className="mx-3">
                      <img
                        src={`https://image.tmdb.org/t/p/w500${m.poster_path}`}
                        alt={m.title}
                        className="movie-poster"
                      />
                    </div>
                  ))}
                </div>
              </Carousel.Item>
            );
          }
          return null;
        })}
      </Carousel>
    </div>
  );
};

export default MostViewed;
