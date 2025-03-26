import React from 'react'
import { BrowserRouter , Routes ,Route } from 'react-router-dom'
import MovieDetails from './pages/MovieDetails'

function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </BrowserRouter>
  )
}

export default App
