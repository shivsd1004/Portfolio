import React from "react";
import styles from "./Footer.module.scss";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  return (
    <div className={styles.footer}>
      <span className={styles.footer__logo}>Shivam</span>
      <nav className={styles.footer__nav}>
        <NavLink>
          <p className={styles.footer__link}>About</p>
        </NavLink>

        <NavLink>
          <p className={styles.footer__link}>Projects</p>
        </NavLink>

        <NavLink>
          <p className={styles.footer__link}>Services</p>
        </NavLink>
      </nav>

      <div className={styles.footer__socials}>
        <Link
          className={styles.footer__social}
          to="https://github.com/shivsd1004"
          target="_blank"
        >
          <span>
            <i className={`uil uil-github-alt ${styles.footer__icon}`}></i>
          </span>
        </Link>

        <Link
          className={styles.footer__social}
          to="https://www.linkedin.com/in/shivam-dixit-46655425a/"
          target="_blank"
        >
          <span>
            <i className={`uil uil-linkedin-alt ${styles.footer__icon}`}></i>
          </span>
        </Link>

        <Link
          className={styles.footer__social}
          // to={}
          target="_blank"
        >
          <span>
            <i className={`uil uil-twitter-alt ${styles.footer__icon}`}></i>
          </span>
        </Link>
      </div>

      <copyright className={styles.footer__copyright}>
        &copy; Shivam. All rights reserved
      </copyright>
    </div>
  );
}

export default Footer;
