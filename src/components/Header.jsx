import React from 'react'
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Header() {
  
  const watchlistItems = useSelector(state => state.watchlist.watchlistItems);
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: "#001F3F" }}>
    <div className="container">
      <Link className="navbar-brand fw-bold" to="/" style={{ color: "#1BB76E" }}>
        <i className="fa-solid fa-utensils"></i> movies
      </Link>
      <Link className="navbar-brand fw-bold" to="/Movies" style={{ color: "#1BB76E" }}>
        <i className="fa-solid fa-utensils"></i> movies
      </Link>
      <Link className="navbar-brand fw-bold" to="/watchlist" style={{ color: "#1BB76E" }}>
        <button class="btn text-danger" type="submit" ><i class="bi bi-heart"></i>{watchlistItems.length}</button>
      </Link>
     
    </div>
  </nav>
  </>
   
   

  )
}
