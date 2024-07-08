import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.scss";
import Wrapper from "./Wrapper";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
function Navbar() {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isOpen, setIsOpen] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "skills",
    },
    {
      id: 5,
      link: "projects",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <Wrapper id="navbar">
      <div className={styles.navbar}>
        <div className={styles.navbar__inner}>
          <div className="navbar__left">
            <NavLink to="#" onClick={() => scrollToSection("navbar")}>
              <p className={styles.navbar__logo}>Shivam</p>
            </NavLink>
          </div>

          <div className={styles.navbar__right}>
            {links.map(({ id, link }) => (
              <NavLink
                key={id}
                exact={true}
                to="/"
                activeClassName={styles.activeLink}
                onClick={() => scrollToSection("navbar")}
              >
                <p className={styles.navbar__link}>
                  <Link to={link} smooth={true} duration={200} offset={-250}>
                    {link}
                  </Link>
                </p>
              </NavLink>
            ))}
          </div>
          <span
            className={styles.navbar__close}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
          </span>

          {isOpen && (
            <div className={styles.navbar__phone}>
              {links.map(({ id, link }) => (
                <NavLink
                  exact={true}
                  to="/"
                  activeClassName={styles.activeLink}
                  onClick={() => scrollToSection("navbar")}
                  key={id}
                >
                  <p className={styles.navbar__link}>{link}</p>
                </NavLink>
              ))}
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
}

export default Navbar;
