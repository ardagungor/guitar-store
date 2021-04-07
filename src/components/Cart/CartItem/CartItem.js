import classes from "./CartItem.module.css";
import React, { useState } from "react";
import { connect } from "react-redux";
import {
  removeFromCart,
  adjustItemQty,
} from "../../../redux/Shopping/shopping-actions";

const CartItem = ({ item, removeFromCart, adjustItemQty }) => {
  const [input, setInput] = useState(item.qty);

  const onChangeHandler = (e) => {
    setInput(e.target.value);
    adjustItemQty(item.id, e.target.value);
  };

  return (
    <div class={classes.flex}>
      <img src={item.img} alt={item.name} className={classes.img} />
      <div className={classes.details}>
        <h3>{item.name}</h3>
        <p>{item.description}</p>
        <p>${item.price}</p>
      </div>
      <div className={classes.qtyAndButton}>
        <div>
          <label htmlFor="qty">Qty </label>
          <input
            min="1"
            type="number"
            id="qty"
            name="qty"
            value={input}
            onChange={onChangeHandler}
          />
        </div>
        <button
          className={classes.button}
          onClick={() => removeFromCart(item.id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromCart: (id) => dispatch(removeFromCart(id)),
    adjustItemQty: (id, value) => dispatch(adjustItemQty(id, value)),
  };
};

export default connect(null, mapDispatchToProps)(CartItem);
