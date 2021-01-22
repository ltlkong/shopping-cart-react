import React, { Component }from 'react';
import { Link } from 'react-router-dom';

export default class CartItems extends Component{
  render() {
    const { inCart, totalPrice, handleRemoveCartItem } = this.props;

     return(
        <aside className="cart">
          <h2>Your Cart</h2>
          <ul>
            {
              inCart.map((item,index) => {
                return (
                  <li className="cart-item" key={index}>
                    <div className="name">{item.name}</div>
                    <div className="price">{`@ $${item.price}`}</div>
                    <button onClick={() => {handleRemoveCartItem(index)}}><i className="far fa-times-circle"></i></button>
                  </li>
                )
              })
            }
          </ul>
          <div className={"total"}>{`Total: $${totalPrice}`}</div>
          <Link className={"keep-shopping"} to={"/"}><i className={"fas fa-chevron-left"}></i>Keep Shopping</Link>
        </aside>)
  }
}