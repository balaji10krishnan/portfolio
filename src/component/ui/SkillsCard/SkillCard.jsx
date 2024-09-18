import { Tick } from "../../../assets/svg/svgComponents";
import classes from "./SkillCard.module.css";
const SkillCard = ({ title = "title", skills = [] }) => {
  return (
    <div className={classes["skill-card"]}>
      <p className={`${classes["title"]} fs-xl fw-b`}>{title}</p>
      <div className={classes["skills-item"]}>
        {skills?.map((skill, i) => {
          return (
            <div className={classes["skill"]}>
              <Tick />
              <div>
                <p className="fw-b">{skill.skill}</p>
                <p style={{ color: "var(--font-gray)" }}>{skill.level}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
