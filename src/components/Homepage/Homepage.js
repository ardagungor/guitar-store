import React from "react";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <Link to="/featured">
        <div className={classes.card}>
          <img
            src="https://thumbs.static-thomann.de/thumb/orig/pics/bdb/464783/14062337_800.jpg"
            className={classes.img}
          />
          <h2>Featured Products</h2>
        </div>
      </Link>
      <Link to="/guitars">
        <div className={classes.card}>
          <img
            src="https://cdn.akakce.com/iv/10022/881/881852941z.jpg"
            className={classes.img}
          />
          <h2>Guitars</h2>
        </div>
      </Link>
      <Link to="/bass">
        <div className={classes.card}>
          <img
            src="https://www.woodbrass.com/images/woodbrass/GSP-LG5ST-BC.JPG"
            className={classes.img}
          />
          <h2>Bass</h2>
        </div>
      </Link>
    </div>
  );
};

export default Homepage;
