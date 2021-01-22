import React from 'react';
import { Link } from "react-router-dom";

export default function Cart(props) {
  const { totalPrice, itemsInCart } = props;

  return (
    <Link className={"cart-icon"} to={"/cart"}>
      <div className={"cart-icon-values"}>
        <div className={"cart-total"}>{`${totalPrice > 0 ? '$'+totalPrice : ''}`}</div>
        <div className={"in-cart-items"}>{`${itemsInCart > 0 ? itemsInCart+' items' : ''}`}</div>
      </div>
      <i className={"fas fa-shopping-cart"}></i>
    </Link>
  )
}