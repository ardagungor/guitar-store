import React from "react";
import classes from "./Showcase.module.css";
import { connect } from "react-redux";
import Product from "./Product/Product";

const Showcase = (products) => {
  return (
    <div className={`${classes.showcase} ${classes.container}`}>
      {products.products.map((gtr) => (
        <Product key={gtr.id} guitar={gtr} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.shop.featuredProducts,
  };
};

export default connect(mapStateToProps)(Showcase);
