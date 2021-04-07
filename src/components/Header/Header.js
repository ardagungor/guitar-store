import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.css";

import { connect } from "react-redux";

const Header = ({ cart }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let counter = 0;
    cart.forEach((item) => {
      counter += item.qty;
    });

    setCount(counter);
  }, [cart, count]);

  return (
    <div className={`${classes.container} ${classes.flex}`}>
      <Link to="/">
        <h1>Guitar Shop</h1>
      </Link>
      <nav>
        <ul>
        <li>
            <Link to="/featured">
              <a className={classes.a} href="#">
                Featured
              </a>
            </Link>
          </li>
          <li>
            <Link to="/guitars">
              <a className={classes.a} href="#">
                Guitars
              </a>
            </Link>
          </li>
          <li>
            <Link to="/bass">
              <a className={classes.a} href="#">
                Bass
              </a>
            </Link>
          </li>
          <li>
            <Link to="/cart">
              <a className={classes.a}>
                <b>Cart ({count})</b>
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    cart: state.shop.cart,
  };
};

export default connect(mapStateToProps)(Header);
