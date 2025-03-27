import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import MostViewed from "./components/MostViewed";
import MoviesList from "./components/MoviesList";


function App() {
  return (
    <div>
      <AppNavbar />
      <HeroSection />
      <MostViewed />
      <MoviesList />
    </div>
  );
}

export default App
