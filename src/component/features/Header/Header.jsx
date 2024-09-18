import { useState } from "react";
import classes from "./Header.module.css";
import { Close, Menu } from "../../../assets/svg/svgComponents";

const Header = () => {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <header className={classes.header}>
        <p className={`fs-xl`}>Balaji Krishnan</p>
        <p className={classes["menu-bar"]}>
          <span
            onClick={(e) => {
              setAnchorEl(e.currentTarget);
              setShow((pre) => !pre);
            }}
          >
            {!show ? <Menu /> : <Close />}
          </span>

          {/* */}
        </p>
        <nav
          className={`${classes.nav} ${show ? classes.active : null}`}
          style={{
            top: anchorEl ? anchorEl.offsetTop + anchorEl.offsetHeight : 0,
            right: "80px",
          }}
        >
          <a className={`fs-l`}>About</a>
          <a className={`fs-l`}>Skills</a>
          <a className={`fs-l`}>Project</a>
          <a className={`fs-l`}>Contact</a>
        </nav>
      </header>
    </div>
  );
};
export default Header;
