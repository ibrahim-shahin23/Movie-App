import React, {useEffect, useState} from 'react'
import axios from 'axios';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from 'react-router-dom';
import '../css/searchPage.css'

export default function SearchPage() {
  
  const API_KEY = import.meta.env.VITE_API_KEY;
  const BASE_URL = import.meta.env.VITE_BASE_URL;

  const [movies,setMovies] = useState([])
  const [movieName,setMovieName] = useState('')

  function handleInput(e){
    setMovieName(e.target.value)
    console.log(movieName)
  }
  useEffect(() => {
    axios
      .get(`${BASE_URL}/search/movie?api_key=${API_KEY}&query=${movieName}`)
      .then((response) => setMovies(response.data.results))
      .catch((error) => console.error("Error fetching movies:", error));
  }, [movieName]);

  return (
    <div className='search-page'>
    <div className='search-container container '> 
    <div className='form mb-5'>
      <input className='form-control mx-5' onChange={handleInput} type="text" placeholder="search your movies here" name="search-movie" id="search-movie" value={movieName} />
    </div>
      <Swiper
        slidesPerView={5}  
        spaceBetween={1}  
        navigation={true} 
        modules={[Navigation]}
        className="movie-slider"
      >
      {movies.map((movie) => (
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
    </div>
  )
}
