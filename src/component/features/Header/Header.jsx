import { useCallback, useState } from "react";
import classes from "./Header.module.css";
import { Close, Menu } from "../../../assets/svg/svgComponents";

const Header = () => {
  const [show, setShow] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const scrollTo = useCallback((id) => {
    setShow((pre) => !pre);
    const targetElement = document.querySelector(id);
    const headerOffset = 100; // Adjust this value based on your header's height
    const elementPosition = targetElement?.getBoundingClientRect().top; // Get element's position relative to the viewport
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  }, []);
  return (
    <div
      style={{
        position: "fixed",
        width: "100%",
        top: 0,
      }}
    >
      <header className={classes.header}>
        <p
          className={`${classes.logo} fs-xl`}
          onClick={() => {
            scrollTo("#home");
          }}
          style={{ cursor: "pointer" }}
        >
          Balaji_K
        </p>
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
          <a
            className={`fs-l`}
            onClick={() => {
              scrollTo("#about");
            }}
          >
            About
          </a>
          <a
            className={`fs-l`}
            onClick={() => {
              scrollTo("#skills");
            }}
          >
            Skills
          </a>
          <a
            className={`fs-l`}
            onClick={() => {
              scrollTo("#projects");
            }}
          >
            Projects
          </a>
          <a
            className={`fs-l`}
            onClick={() => {
              scrollTo("#contact");
            }}
          >
            Contact
          </a>
        </nav>
      </header>
    </div>
  );
};
export default Header;
