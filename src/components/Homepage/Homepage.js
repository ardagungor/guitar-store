import React from "react";
import classes from "./Homepage.module.css";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className={classes.container}>
      <Link to="/featured">
        <div className={classes.card}>
          <img
            src="https://www.station-musicshop.de/WebRoot/Store8/Shops/64398533/5E5D/224E/5983/CC9C/1117/0A0C/6D12/80A4/strandberg_b6-nt-1069-yellow.jpg"
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
