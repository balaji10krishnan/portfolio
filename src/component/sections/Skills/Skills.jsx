import SkillCard from "../../ui/SkillsCard/SkillCard";
import Title from "../../ui/Title/Tiltle";
import classes from "./Skills.module.css";
const Skills = (props) => {
  return (
    <>
      <Title title2="Explore My" title1={"Skills"} />
      <section className={classes["skill-section"]}>
        <div className={classes["skill-cards"]}>
          <SkillCard
            title="Frontend Development"
            skills={[
              { skill: "React", level: "Intermediate" },
              { skill: "Redux", level: "Intermediate" },
              { skill: "JavaScript", level: "Intermediate" },
              { skill: "Material UI", level: "Intermediate" },
              { skill: "CSS", level: "Intermediate" },
              { skill: "HTML", level: "Experienced" },
            ]}
          />
          <SkillCard
            title="Backend Development"
            skills={[
              { skill: "PostgreSQL", level: "Basic" },
              { skill: "MySQL", level: "Basic" },
              { skill: "Node JS", level: "Basic" },
              { skill: "Express JS", level: "Basic" },
            ]}
          />
        </div>
      </section>
    </>
  );
};
export default Skills;
