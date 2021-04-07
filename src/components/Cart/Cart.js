import React, { useState, useEffect } from "react";
import classes from "./Cart.module.css";

import CartItem from "./CartItem/CartItem";
import EmptyCart from "./EmptyCart/EmptyCart";
import { connect } from "react-redux";

const Cart = ({ cart }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    let items = 0;
    let price = 0;

    cart.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;
    });

    setTotalItems(items);
    setTotalPrice(price);
  }, [cart, totalPrice, totalItems, setTotalPrice, setTotalItems]);

  const checkout = () => {
    alert("Redirecting to checkout!");
  };

  return (
    <div className={classes.flex}>
      <div className={classes.products}>
        {cart.length === 0 ? (
          <div>
            <EmptyCart />
          </div>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
      <div className={classes.summary}>
        <p className={classes.summaryText}>Cart</p>
        <p className={classes.summaryText}>{totalItems} items</p>
        <p className={classes.summaryText}>${totalPrice}</p>
        <button className={classes.button} onClick={checkout}>
          Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Cart);
