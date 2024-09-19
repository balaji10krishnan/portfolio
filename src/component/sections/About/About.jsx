import classes from "./About.module.css";
import aboutImg from "../../../assets/img/profile_d_1.jpeg";
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
            I am a front-end developer specializing in building dynamic,
            responsive web applications using React. With strong skills in
            HTML5, CSS3, and JavaScript (ES6+), I focus on creating
            high-performance, user-friendly interfaces. Proficient in React's
            ecosystem, including React Router, Redux, and hooks, I build
            scalable and maintainable web applications that deliver seamless
            user experiences.
          </p>
        </div>
      </section>
    </>
  );
};
export default About;
