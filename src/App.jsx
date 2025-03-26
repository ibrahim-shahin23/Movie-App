import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'
import SearchPage from './pages/SearchPage'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/search" element={<SearchPage />} />
        </Routes>
      </BrowserRouter>
  )
}
export default App
