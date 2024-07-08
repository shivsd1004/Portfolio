import React from "react";
import Wrapper from "./Wrapper";
import styles from "./Hero.module.scss";
import { Link } from "react-router-dom";
import Scroll from "./Scroll";
import { Link as ScrollLink } from "react-scroll";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { PiHandWavingFill } from "react-icons/pi";
import { CiLocationArrow1 } from "react-icons/ci";

function Hero() {
  return (
    <Wrapper>
      <div className={styles.hero} name="home">
        <div className={styles.hero__inner}>
          <div className={styles.hero__left}>
            <Link
              className={styles.hero__social}
              to="https://github.com/shivsd1004"
              target="_blank"
            >
              <FaGithub size={30} />
            </Link>

            <Link
              className={styles.hero__social}
              to="https://www.linkedin.com/in/shivam-dixit-46655425a/"
              target="_blank"
            >
              <FaLinkedin size={30} />
            </Link>

            <Link
              className={styles.hero__social}
              to="shivsd1234@gmail.com"
              target="_blank"
            >
              <HiOutlineMail size={30} />
            </Link>
          </div>

          <div className={styles.hero__middle}>
            <h3 className={styles.hero__heading}>
              Shivam Dixit <PiHandWavingFill fill="#ffe066" />
            </h3>

            <h5 className={styles.hero__subheading}>Software developer</h5>

            <p className={styles.hero__about}>
              I'm a software developer, my passion is to solve the problems of
              users keeping business in mind..{" "}
            </p>

            <ScrollLink to="contact" smooth={true} duration={200} offset={-250}>
              {
                <Link
                  className={`${styles.hero__button} button`}

                  // onClick={() => scrollToSection("contactSection")}
                >
                  Say Hello{" "}
                  <CiLocationArrow1
                    className={` ${styles.hero__send}`}
                    size={25}
                  />
                </Link>
              }
            </ScrollLink>
          </div>

          <div className={styles.hero__right}>
            <div className={styles.hero__img}></div>
          </div>
        </div>

        <Scroll />
      </div>
    </Wrapper>
  );
}

export default Hero;
