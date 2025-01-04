import React, { useState } from "react";
import "./style.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <React.Fragment>
      <nav className="navbar bg-body-tertiary">
        <div className="container">
          
          <div className="burger-menu" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <ul className={`navbaritemlist ${isMenuOpen ? "open" : ""}`}>
            {["Home", "Post", "Mega Menu", "Pages", "Lifestyle", "Gadgets"].map(
              (item, index) => (
                <li key={index}>{item}</li>
              )
            )}
          </ul>
          <form className="d-flex" role="search">
            <div
              className="d-flex form-control"
              style={{
                borderRadius: "20px",
                backgroundColor: "#F0F2F5",
              }}
            >
              <i
                className="fa-solid fa-magnifying-glass"
                style={{
                  marginTop: "5px",
                }}
              ></i>
              <input
                style={{
                  border: "none",
                  outline: "none",
                  backgroundColor: "#F0F2F5",
                }}
                className="navInput"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

            <button className="Navbtn">
              <i className="fas fa-bookmark"></i>
            </button>
            <button className="Navbtn">
              <i className="fas fa-bell"></i>
            </button>
          </form>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default Header;
