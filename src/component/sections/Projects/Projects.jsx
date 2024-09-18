import ProjectCard from "../../ui/ProjectCard/ProjectCard";
import Title from "../../ui/Title/Tiltle";
import classes from "./Projects.module.css";
import img from "../../../assets/img/project-1.png";
const Projects = () => {
  return (
    <>
      <Title title1="Projects" title2="Browse My Recent" />
      <section className={classes["project-section"]}>
        <ProjectCard
          img={img}
          github="dflskdj"
          livedemo="ldfjsdl"
          title="Sky Scanner"
        />
        <ProjectCard img={img} />
        <ProjectCard img={img} />
      </section>
    </>
  );
};
export default Projects;
