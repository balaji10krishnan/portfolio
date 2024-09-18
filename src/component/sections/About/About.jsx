import classes from "./About.module.css";
import aboutImg from "../../../assets/img/about-pic.png";
import { Education, Experience } from "../../../assets/svg/svgComponents";
import Title from "../../ui/Title/Tiltle";
import AboutCard from "../../ui/AboutCard/AbourCard";
const About = () => {
  return (
    <>
      <Title title1="About Me" title2="Get To Know More" />
      <section className={classes["about-section"]}>
        <div className={classes["about-img"]}>
          <img src={aboutImg} />
        </div>
        <div
          style={{
            alignSelf: "stretch",
          }}
        >
          <div className={classes["about-items"]}>
            <AboutCard
              Icon={<Experience />}
              lists={["1+ years", "Frontend Developer"]}
              title={"Experience"}
            />{" "}
            <AboutCard
              Icon={<Education />}
              lists={["B.Sc. Compter Science"]}
              title={"Education"}
            />{" "}
          </div>
          <p className={classes["about-content"]}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!{" "}
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
