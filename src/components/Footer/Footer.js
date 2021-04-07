import React from "react";
import classes from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <p className={classes.p}>2021 | Arda Güngör</p>
      <a href="https://www.linkedin.com/in/ardagungor/" target="_blank">
        <img
          src="https://image.flaticon.com/icons/png/512/174/174857.png"
          className={classes.img}
        ></img>
      </a>
    </div>
  );
};

export default Footer;
