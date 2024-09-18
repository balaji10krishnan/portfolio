import classes from "./Title.module.css";
const Title = ({ title1 = "title1", title2 = "title2" }) => {
  return (
    <>
      <div>
        <p className={`${classes[""]}`}>{title2}</p>
        <h2 className={`${classes[""]} fs-xl`}>{title1}</h2>
      </div>
    </>
  );
};

export default Title;
