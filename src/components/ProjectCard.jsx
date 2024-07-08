import React, { useState } from "react";
import styles from "./ProjectCard.module.scss";
import { Link } from "react-router-dom";

function ProjectCard({ data }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isHover, setIsHover] = useState(false);

  const handleOpen = () => {
    setIsPlaying(true);
  };

  const handleClose = () => {
    setIsPlaying(false);
  };

  return (
    <div
      className={styles.projectCard}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      {isPlaying ? (
        <iframe
          title={data.name}
          width="100%"
          height="100%"
          src={`/assets/Worldwise.mp4`}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          autoplay
        ></iframe>
      ) : (
        <img
          src={`assets/${data.name}.png`}
          alt={data.name}
          className={styles.projectCard__image}
        />
      )}
      {!isPlaying && (
        <span className={styles.projectCard__heading}>{data.name}</span>
      )}
      {!isPlaying && (
        <span className={styles.projectCard__subheading}>{data.about}</span>
      )}
      {!isPlaying && (
        <Link
          className={styles.projectCard__button}
          to={data.link}
          target="_blank"
        >
          {data.isLive ? "Live  demo" : "View code"}
          <i className={`uil uil-arrow-right ${styles.projectCard__icon}`}></i>
        </Link>
      )}

      {isHover && !isPlaying && (
        <div
          className={`${styles.projectCard__tags} ${isHover ? "visible" : ""}`}
        >
          <ul className={styles.projectCard__tagList}>
            {data.tags.map((tag) => (
              <li
                className={`${styles.projectCard__tag} ${
                  isHover ? "visible" : ""
                }`}
                key={tag}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
      )}

      {!isPlaying && data.isVideo && (
        <span className={styles.projectCard__video} onClick={handleOpen}>
          Watch video{" "}
          <i className={`uil uil-video ${styles.projectCard__icon}`}></i>
        </span>
      )}

      {isPlaying && (
        <span className={styles.projectCard__close} onClick={handleClose}>
          Close video{" "}
          <i className={`uil uil-times ${styles.projectCard__icon}`}></i>
        </span>
      )}
    </div>
  );
}

export default ProjectCard;
