import React from "react";
import styles from "./Skills.module.scss";
import Wrapper from "./../components/Wrapper";
import Headings from "./../components/Headings";
import Skill from "../components/Skill";
import SkillBox from "../components/SkillBox";

function Skills() {
  return (
    <Wrapper>
      <Headings heading="Skills" subheading="My technical skills" />

      <div className={styles.skills}>
        <Skill heading="Frontend">
          <div className={styles.uFlex}>
            <SkillBox name="HTML/CSS" level="Advance" />{" "}
            <SkillBox name="Javascript" level="Intermediate" />
            <SkillBox name="Tailwind" level="Intermediate" />
            <SkillBox name="Next.js" level="Intermediate" />
            <SkillBox name="React.js" level="Intermediate" highlight={true} />
          </div>
        </Skill>
        <Skill heading="Backend">
          <div className={styles.uFlex}>
            <SkillBox name="MongoDb" level="Intermediate" highlight={true} />
            <SkillBox name="Express.js" level="Intermediate" />
            <SkillBox name="Node.js" level="Advance" highlight={true} />{" "}
            <SkillBox name="DSA" level="Intermediate" />
            <SkillBox name="Firebase" level="Basic" />
          </div>
        </Skill>
      </div>
    </Wrapper>
  );
}

export default Skills;
