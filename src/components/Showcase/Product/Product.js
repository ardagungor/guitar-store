import React from "react";
import classes from "./Product.module.css";
import { connect } from "react-redux";
import { addToCart } from "../../../redux/Shopping/shopping-actions";

const Product = ({ guitar, addToCart }) => {
  return (
    <div className={classes.container}>
      <div className={classes.card} key={guitar.name}>
        <img src={guitar.img} alt={guitar.name} />
        <div className={classes.info}>
          <h3>
            <b>{guitar.name}</b>
          </h3>
          {guitar.description}
          <p className={classes.price}>
            <p>
              <b> ${guitar.price}</b>
            </p>
            <button onClick={() => addToCart(guitar.id)}>Add to cart</button>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (id) => dispatch(addToCart(id)),
  };
};

export default connect(null, mapDispatchToProps)(Product);
