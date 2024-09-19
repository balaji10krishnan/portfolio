import classes from "./ProjectCard.module.css";
const ProjectCard = ({ title = "title", img, github = "", livedemo = "" }) => {
  return (
    <div className={classes["project-card"]}>
      <p className={`${classes.title} fw-b`}>{title}</p>
      <img src={img} />
      <div className={classes.links}>
        {github && (
          <a href={github} target="blank">
            <button className="btn-light">Github</button>
          </a>
        )}
        {livedemo && (
          <a href={livedemo} target="blank">
            <button className="btn-light">Live Demo</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
