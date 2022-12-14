import React from "react";
import { useState } from "react";
import "./header.scss";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <div className="header">
      <div className="header__container container">
        <p className="header__logo">
          <a href="#">Fallou</a>
        </p>
        <nav className="nav">
          <div className={openMenu ? "nav__menu visible" : "nav__menu"}>
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#" onClick={()=>setOpenMenu(false)}>Accueil</a>
              </li>
              <li className="nav__item">
                <a href="#about" onClick={()=>setOpenMenu(false)}>À propos</a>
              </li>
              <li className="nav__item">
                <a href="#skills" onClick={()=>setOpenMenu(false)}>Compétences</a>
              </li>
              <li className="nav__item">
                <a href="#work" onClick={()=>setOpenMenu(false)}>Projets</a>
              </li>
              <li className="nav__item">
                <a href="#contact" onClick={()=>setOpenMenu(false)}>Contact</a>
              </li>
            </ul>
          </div>

          <p className="nav__toggle" onClick={() => setOpenMenu(v=>!v)}>
            <i className="bx bx-grid-alt"></i>
          </p>
        </nav>
      </div>
    </div>
  );
};

export default Header;
