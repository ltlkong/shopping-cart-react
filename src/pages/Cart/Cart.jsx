import React from 'react';

export default function Cart(props) {
  const { totalPrice, itemsInCart } = props;
  const itemString = itemsInCart > 1 ? ' items' : ' item';

  return (
    <React.Fragment>
      <div className={"cart-icon-values"}>
        <div className={"cart-total"}>{`$${totalPrice > 0 ? totalPrice : '0.00'}`}</div>
        <div className={"in-cart-items"}>{`${itemsInCart > 0 ? itemsInCart+itemString : '0'+itemString}`}</div>
      </div>
      <i className={"fas fa-shopping-cart"}></i>
    </React.Fragment>
  )
}