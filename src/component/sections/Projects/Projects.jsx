import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import Title from "../../ui/Title/Tiltle";
import classes from "./Projects.module.css";
import sky from "../../../assets/img/skyscanner.png";
import google_clone from "../../../assets/img/google-clone.png";
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

        <ProjectCard
          img={google_clone}
          github="https://github.com/balaji10krishnan/google-clone"
          livedemo="https://clone-11111.web.app/"
          title="Google Clone"
        />
      </section>
    </>
  );
};
export default Projects;
