import './App.css'
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AppNavbar from "./components/Navbar";
import Home from './pages/Home'
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'



function App() {
  return (
            <BrowserRouter>
              <AppNavbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/movie/:id" element={<MovieDetails />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
            </BrowserRouter>
  );
}
export default App
