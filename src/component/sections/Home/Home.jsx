import classes from "./Home.module.css";
import profileImg from "../../../assets/img/profile_r_1.png";
import { GitHub, LinkedIn } from "../../../assets/svg/svgComponents";
const Home = () => {
  const handleDownload = async () => {
    // Fetch the PDF from an API or local source
    const response = await fetch(
      "https://balaji10krishnan.github.io/resume/resume/BalajiK_CV.pdf"
    );
    const blob = await response.blob();

    // Create a link element
    const url = window.URL.createObjectURL(new Blob([blob]));
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "BalajiK_CV.pdf"); // Specify the download file name
    document.body.appendChild(link);
    link.click();

    // Clean up
    link.parentNode.removeChild(link);
  };

  return (
    <>
      <section className={classes["home-section"]}>
        <div className={classes["home-detail"]}>
          <p className={`${classes["greet"]} fs-n fw-b`}>Hello I'm</p>
          <p className={`${classes["name"]} fs-xl fw-b`}> Balaji Krishnan</p>
          <p className={`${classes["role"]} fs-l fw-b`}>Frontend Developer</p>
          <div className={classes["btn-group"]}>
            <button className={"btn-light"} onClick={handleDownload}>
              Download CV
            </button>

            <button
              className={"btn-dark"}
              onClick={() => {
                const targetElement = document.querySelector("#contact");
                targetElement?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
            >
              Contact Info
            </button>
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
        <div>
          <img
            src={profileImg}
            style={{ border: "1px solid black", borderRadius: "50%" }}
          />
        </div>
      </section>
    </>
  );
};

export default Home;
