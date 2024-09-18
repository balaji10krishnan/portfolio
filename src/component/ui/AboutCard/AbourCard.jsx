import classes from "./AboutCard.module.css";
const AboutCard = ({ title = "title", Icon, lists = [] }) => {
  return (
    <div className={classes["about-card"]}>
      <span>{Icon}</span>
      <p className={`fs-n fw-b`}>{title}</p>
      {lists?.map((list, i) => {
        return (
          <p className={classes["list"]} key={i}>
            {list}
          </p>
        );
      })}
    </div>
  );
};

export default AboutCard;
