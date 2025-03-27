import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Watchlist from "./components/watchlist";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MostViewed from "./components/MostViewed";
import MoviesList from "./components/MoviesList";

function MainLayout() {
  return (
    <>
      <AppNavbar />
      <HeroSection />
      <MostViewed />
      <MoviesList />
    </>
  );
}

function WatchlistLayout() {
  return (
    <>
      <AppNavbar />
      <Watchlist />
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<MainLayout />} />
        <Route path="/watchlist" element={<WatchlistLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
