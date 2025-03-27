import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser , FaHome } from "react-icons/fa";

const AppNavbar = () => {
  return (
    <Navbar expand="lg" className="custom-navbar">
      <Container>

        <Navbar.Brand href="#" className="text-danger fw-bold d-flex align-items-center">
          MovieApp
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#" className="text-white fw-bold">
              <FaHome className="me-2" />
              HOME
            </Nav.Link>
            <Nav.Link href="#" className="text-white fw-bold d-flex align-items-center">
              <FaFilm className="me-2" />
              MOVIES
            </Nav.Link>
            <Nav.Link href="#" className="text-white fw-bold d-flex align-items-center">
              WATCH LIST
            </Nav.Link>
          </Nav>
          
          <Nav>
            <Nav.Link href="#" className="text-white fw-bold d-flex align-items-center">
              <FaSearch className="me-2" />
              SEARCH
            </Nav.Link>
            <Nav.Link href="#" className="login-btn text-white fw-bold d-flex align-items-center">
              <FaUser className="me-2" />
              LOG-IN
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
