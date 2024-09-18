import { Email, LinkedIn } from "../../../assets/svg/svgComponents";
import Title from "../../ui/Title/Tiltle";
import classes from "./Contact.module.css";
const Contact = () => {
  return (
    <>
      <Title title1="Contact" title2="Get in Touch" />
      <section className={`${classes["contact-section"]}`}>
        <div className={`${classes["contact"]}`}>
          <a href="mailto:balaji10krishnan@gmail.com">
            <Email />
            balaji10krishnan@gmail.com
          </a>
          <a
            target="blank"
            href="https://www.linkedin.com/in/balaji-krishnan-b16a88254?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BK2Qn39N0RF6dO3N5VZWdIg%3D%3D"
          >
            <LinkedIn />
            LinkedIn
          </a>
        </div>
      </section>
    </>
  );
};

export default Contact;
