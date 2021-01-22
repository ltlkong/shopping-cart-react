import React from 'react';

export default function YourCart(props) {
  const { inCart, totalPrice, handleRemoveCartItem } = props;

  return (
    <React.Fragment>
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
    </React.Fragment>
  )
}