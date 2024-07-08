import React, { useMemo, useState } from "react";
import styles from "./Projects.module.scss";
import Wrapper from "./../components/Wrapper";
import Headings from "./../components/Headings";
import ProjectCard from "../components/ProjectCard";

const backendData = [
  {
    name: "Natours-API",
    about: "Rest API built utilising the node.js and noSQL database MongoDB",
    isLive: false,
    isVideo: false,
    link: "https://github.com/shivsd1004/Natours-API",
    tags: ["Node.js", "Express.js", "MongoDB", "JWT"],
  },
];

const webAppsData = [
  {
    name: "Doctero",
    about:
      "Complete web-app build utilising as frontend next.js, backend node.js ",
    isLive: true,
    isVideo: false,
    link: "https://main.d13shu2fa3llxr.amplifyapp.com/",
    tags: ["Node.js", "React.js", "MongoDB", "JWT", "webRTC", "Socket.io"],
  },
  {
    name: "Worldwise",
    about:
      "App built over react.js and utilising the context api custom react hooks",
    isLive: true,
    link: "https://worldwise-shivam.netlify.app",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "HTML/CSS"],
  },
  {
    name: "Fysio",
    about:
      "RESTful application build on node.js and having the HTML/CSS powering frontend",
    isLive: true,
    isVideo: false,
    link: "https://deepak-physio.netlify.app/",
    tags: ["Node.js", "Express", "MongoDB", "JWT", "Node mailer", "HTML/CSS"],
  },
];

const frontendData = [
  {
    name: "Bankist",
    isLive: true,
    isVideo: false,
    link: "https://bankist-shivam.netlify.app/",
    about:
      "The Bankist landing page showcases the services and features offered by Bankist, a modern digital bank",
    tags: ["HTML/CSS", "SCSS", "Flexbox", "UI", "Netlify"],
  },
];

function Projects() {
  const [active, setActive] = useState(0);
  const [webApps] = useState([...webAppsData]);
  const [backend] = useState([...backendData]);
  const [frontend] = useState([...frontendData]);

  const allProjects = useMemo(() => {
    switch (active) {
      case 0:
        return [...webApps, ...backend, ...frontend];
      case 1:
        return [...webApps];
      case 2:
        return [...backend];
      case 3:
        return [...frontend];
      default:
        return [];
    }
  }, [active, webApps, backend, frontend]);

  return (
    <Wrapper id="projectsSection">
      <Headings heading="Projects" subheading="Most recent works" />

      <div className={styles.projects} name="projects">
        <div className={styles.projects__tagContainer}>
          <span
            className={`${styles.projects__tag} ${
              active === 0 && `${styles.active}`
            }`}
            onClick={(active) => setActive(0)}
          >
            All
          </span>

          <span
            className={`${styles.projects__tag} ${
              active === 1 && `${styles.active}`
            }`}
            onClick={(active) => setActive(1)}
          >
            Fullstack
          </span>

          <span
            className={`${styles.projects__tag} ${
              active === 2 && `${styles.active}`
            }`}
            onClick={(active) => setActive(2)}
          >
            Backend
          </span>

          <span
            className={`${styles.projects__tag} ${
              active === 3 && `${styles.active}`
            }`}
            onClick={(active) => setActive(3)}
          >
            Frontend
          </span>
        </div>

        <div className={styles.projects__container}>
          {allProjects.map((project) => (
            <ProjectCard data={project} key={project.name} />
          ))}
        </div>
      </div>
    </Wrapper>
  );
}

export default Projects;
