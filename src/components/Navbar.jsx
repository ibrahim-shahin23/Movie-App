import React, { useState } from "react";
import { Container, Nav, Navbar ,Button } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser, FaHome, FaHeart ,FaSignOutAlt} from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import LoginModal from "./Login";

const AppNavbar = () => {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);

  // State for Login Modal
  const [user, setUser] = useState(null);
    const [showLogin, setShowLogin] = useState(false);

    const handleLogin = (username) => {
        setUser({ name: username }); 
    };

    const handleLogout = () => {
        setUser(null); 
    };

  return (
    <Navbar expand="lg" className="custom-navbar" style={{ backgroundColor: "#001F3F" }}>
      <Container>
        
        {/* Logo */}
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold d-flex align-items-center">
          MovieApp
        </Navbar.Brand>

        {/* Navbar Toggle for Small Screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between align-items-center">
          
          {/* Navigation Links (Centered) */}
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
              <FaHome className="me-2" /> HOME
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
              <FaFilm className="me-2" /> MOVIES
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist" className="text-white fw-bold d-flex align-items-center position-relative">
              <FaHeart className="me-2" /> WATCHLIST
              {watchlistItems.length > 0 && (
                <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                  {watchlistItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>

          {/* Search & Login (Right Side) */}
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/search" className="text-white fw-bold d-flex align-items-center">
              <FaSearch className="me-2" /> SEARCH
            </Nav.Link>

            {user ? (
              <div className="d-flex align-items-center">
                <span className="welcome-message">Welcome, {user.name}</span>
                <button onClick={handleLogout} className="auth-btn">
                  <FaSignOutAlt className="me-2" /> LOG-OUT
                </button>
              </div>
            ) : (
              <button onClick={() => setShowLogin(true)} className="auth-btn">
                <FaUser className="me-2" /> LOG-IN
              </button>
            )}

            {/* <Nav.Link as={Link} to="" className="login-btn text-white fw-bold d-flex align-items-center">
              <FaUser className="me-2" /> LOG-IN
            </Nav.Link> */}
          </Nav>
            
        </Navbar.Collapse>
      </Container>
      <LoginModal show={showLogin} handleClose={() => setShowLogin(false)} onLogin={handleLogin} />
    </Navbar>
  );
};

export default AppNavbar;
