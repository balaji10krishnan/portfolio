import classes from "./Title.module.css";
const Title = ({ title1 = "title1 ok ok", title2 = "title2" }) => {
  return (
    <>
      <div className={`${classes["title"]}`}>
        <p className={`${classes["title2"]}`}>{title2}</p>
        <h2 className={`${classes["title1"]} fs-xl`}>{title1}</h2>
      </div>
    </>
  );
};

export default Title;
