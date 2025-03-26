import './App.css'
import Header from './components/Header'
import Movies from './movies'
import Watchlist from './components/watchlist'
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>

    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/movies" element={<Movies />} />
        <Route path="/watchlist" element={<Watchlist />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
