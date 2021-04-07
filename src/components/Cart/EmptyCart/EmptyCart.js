import React from "react";
import classes from "./EmptyCart.module.css";

const EmptyCart = () => {
  return (
    <div className={classes.emptyCart}>
      <p className={classes.text}>The cart is empty!</p>
    </div>
  );
};

export default EmptyCart;
