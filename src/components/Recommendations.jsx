import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const API_KEY = "05164e0087a514986ed5b30bc77851d6";
const BASE_URL = "https://api.themoviedb.org/3";

const Recommendations = ({ movieId }) => {
  const [recommendations, setRecommendations] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movie/${movieId}/recommendations?api_key=${API_KEY}`)
      .then((response) => setRecommendations(response.data.results))
      .catch((error) => console.error("Error fetching recommendations:", error));
  }, [movieId]);

  if (recommendations.length === 0) {
    return <p>No recommendations available.</p>;
  }

  return (
    <div className="recommendations">
      <h2>Recommended Movies</h2>
      <Swiper
        slidesPerView={6}  
        spaceBetween={5}  
        navigation={true} 
        modules={[Navigation]}
        className="movie-slider"
      >
        {recommendations.map((movie) => (
          <SwiperSlide key={movie.id}>
            <Link to={`/movie/${movie.id}`} className="recommendation-item">
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                className="recommendation-img"
              />
              <p>{movie.title}</p>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Recommendations;
