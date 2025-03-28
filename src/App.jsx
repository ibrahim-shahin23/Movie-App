import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import { useState, useEffect } from 'react';
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'
import Watchlist from "./components/watchlist";
import languageContext from './context/languageContext';

function WatchlistLayout() {
  return (
    <>
      <Watchlist />
    </>
  );
}

function App() {
  const [language, setLanguage] = useState('en')
  const [isRTL, setIsRTL] = useState(false)
  
  const changeLang = (lang) => {
    setLanguage(lang);
    setIsRTL(lang === "ar"); 
  };
  
  useEffect(() => {
    document.documentElement.dir = isRTL ? "rtl" : "ltr";
  }, [isRTL]);
  
  return (
            <BrowserRouter>
              <languageContext.Provider value = {{language,isRTL,changeLang}}>
                <AppNavbar />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/movie/:id" element={<MovieDetails />} />
                  <Route path="/search" element={<SearchPage />} />
                  <Route path="/watchlist" element={<WatchlistLayout />} />
                </Routes>
              </languageContext.Provider>
            </BrowserRouter>
  );
}
export default App
