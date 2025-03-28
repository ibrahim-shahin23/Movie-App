import React from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import { FaFilm, FaSearch, FaUser, FaHome, FaHeart, FaGlobe } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const AppNavbar = () => {
  const watchlistItems = useSelector((state) => state.watchlist.watchlistItems);
  const { t, i18n } = useTranslation();


  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <Navbar expand="lg" className="custom-navbar" style={{ backgroundColor: "#001F3F" }}>
      <Container>
        
  =
        <Navbar.Brand as={Link} to="/" className="text-danger fw-bold d-flex align-items-center">
          {t("app")}
        </Navbar.Brand>

   
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav" className="d-flex justify-content-between align-items-center">
       
          <Nav className="mx-auto d-flex align-items-center">
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
              <FaHome className="me-2" /> {t("home")}
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="text-white fw-bold d-flex align-items-center">
              <FaFilm className="me-2" /> {t("movies")}
            </Nav.Link>
            <Nav.Link as={Link} to="/watchlist" className="text-white fw-bold d-flex align-items-center position-relative">
              <FaHeart className="me-2" /> {t("watchlist")}
              {watchlistItems.length > 0 && (
                <span className="position-absolute top-3 start-100 translate-middle badge rounded-pill bg-danger">
                  {watchlistItems.length}
                </span>
              )}
            </Nav.Link>
          </Nav>

  
          <Nav className="d-flex align-items-center">
            <Nav.Link as={Link} to="/search" className="text-white fw-bold d-flex align-items-center">
              <FaSearch className="me-2" /> {t("search")}
            </Nav.Link>
            <Nav.Link as={Link} to="" className="login-btn text-white fw-bold d-flex align-items-center">
              <FaUser className="me-2" /> {t("login")}
            </Nav.Link>

            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-language" className="d-flex align-items-center">
                <FaGlobe className="me-2" /> {t("language")}
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={() => changeLanguage("en")}>🇬🇧 English</Dropdown.Item>
                <Dropdown.Item onClick={() => changeLanguage("es")}>🇪🇸 Español</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
