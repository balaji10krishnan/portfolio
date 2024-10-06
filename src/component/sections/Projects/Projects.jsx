import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import Title from "../../ui/Title/Tiltle";
import classes from "./Projects.module.css";
import sky from "../../../assets/img/skyscanner.png";
import expense_tracker from "../../../assets/img/expense_tracker.png";
const Projects = () => {
  return (
    <>
      <Title title1="Projects" title2="Browse My Recent" />
      <section className={classes["project-section"]}>
        <ProjectCard
          img={expense_tracker}
          github="https://github.com/balaji10krishnan/expense_tracker"
          livedemo="https://expense-tracker-ce79e.web.app/"
          title="Expense Tracker"
        />
        <ProjectCard
          img={sky}
          github="https://github.com/balaji10krishnan/weather"
          livedemo="https://balaji10krishnan.github.io/weather/"
          title="Sky Scanner"
        />
      </section>
    </>
  );
};
export default Projects;
