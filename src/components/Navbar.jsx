import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser, FaHome, FaHeart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const AppNavbar = () => {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);

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
            <Nav.Link as={Link} to="/movies" className="text-white fw-bold d-flex align-items-center">
              <FaFilm className="me-2" /> MOVIES
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist" className="text-white fw-bold d-flex align-items-center position-relative">
              <FaHeart className="me-2" /> WATCHLIST
              {watchlistItems.length > 0 && (
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {watchlistItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>

          {/* Search & Login (Right Side) */}
          <Nav className="d-flex align-items-center">
            <Nav.Link href="#" className="text-white fw-bold d-flex align-items-center">
              <FaSearch className="me-2" /> SEARCH
            </Nav.Link>
            <Nav.Link href="#" className="login-btn text-white fw-bold d-flex align-items-center">
              <FaUser className="me-2" /> LOG-IN
            </Nav.Link>
          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
