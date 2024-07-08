import React from "react";

import styles from "./About.module.scss";

import Wrapper from "./Wrapper";
import Headings from "./Headings";
import { HiOutlineDocumentArrowDown } from "react-icons/hi2";

function About() {
  const handleDownload = () => {
    const pdfUrl = process.env.PUBLIC_URL + "/assets/Resume_Shivam-Dixit.pdf";

    const link = document.createElement("a");
    link.href = pdfUrl;
    link.download = "Resume_Shivam-Dixit.pdf";

    document.body.appendChild(link);
    link.click();

    document.body.removeChild(link);
  };
  return (
    <Wrapper>
      <Headings heading="About Me" subheading="My introduction" />

      <div className={styles.about} name="about">
        <div className={styles.about__left}>&nbsp;</div>
        <div className={styles.about__right}>
          <div className={styles.about__cardContainer}>
            <div className={styles.about__card}>
              <i className={`uil uil-award-alt ${styles.about__badge}`}></i>

              <p className={styles.about__title}>Certification</p>
              <p className={styles.about__number}>5 + earned</p>
            </div>

            <div className={styles.about__card}>
              <i
                className={`uil uil-brackets-curly ${styles.about__badge}`}
              ></i>

              <p className={styles.about__title}>Projects</p>
              <p className={styles.about__number}>4 + live</p>
            </div>
          </div>

          <div className={styles.about__text}>
            A skilled MERN developer proficient in ReactJS, JavaScript,
            ExpressJS, MongoDB, Node.js, and Tailwind CSS. Crafting dynamic web
            applications with seamless functionality and user-centric design.
          </div>

          <div>
            <button
              className={`${styles.about__button} button`}
              onClick={handleDownload}
            >
              Download CV
              <HiOutlineDocumentArrowDown
                className={styles.about__icon}
                size={24}
              />
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default About;
