import React from "react";
import classes from "./Bass.module.css";
import { connect } from "react-redux";
import Product from "../Showcase/Product/Product";

const Bass = (products) => {
  return (
    <div className={`${classes.main} ${classes.container}`}>
      {products.products.map((gtr) => (
        <Product key={gtr.id} guitar={gtr} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.bass,
  };
};

export default connect(mapStateToProps)(Bass);
