import classes from "./Home.module.css";
import profileImg from "../../../assets/img/profile-pic.png";
import { GitHub, LinkedIn } from "../../../assets/svg/svgComponents";
import Title from "../../features/Title/Tiltle";
const Home = () => {
  return (
    <>
      <section className={classes["home-section"]}>
        <div>
          <img src={profileImg} />
        </div>
        <div className={classes["home-detail"]}>
          <p className={`${classes["greet"]} fs-n fw-b`}>Hello I'm</p>
          <p className={`${classes["name"]} fs-xl fw-b`}> Balaji Krishnan</p>
          <p className={`${classes["role"]} fs-l fw-b`}>Frontend Developer</p>
          <div className={classes["btn-group"]}>
            <button className={"btn-light"}>Download CV</button>
            <button className={"btn-dark"}>Contact Info</button>
          </div>
          <div className={classes["social-icons"]}>
            <a
              target="blank"
              href="https://www.linkedin.com/in/balaji-krishnan-b16a88254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK2Qn39N0RF6dO3N5VZWdIg%3D%3D"
            >
              <LinkedIn />
            </a>
            <a target="blank" href="https://github.com/balaji10krishnan">
              <GitHub />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
