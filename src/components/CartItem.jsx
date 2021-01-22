import React, { Component }from 'react';

export default class CartItem extends Component{
  render() {
     return(
        <aside class="cart">
          <h2>Your Cart</h2>
          <ul>
            <li class="cart-item">
              <div class="name">Sensei Ten</div>
              <div class="price">@ $89.99</div>
              <button><i class="far fa-times-circle"></i></button>
            </li>
            <li class="cart-item">
              <div class="name">Rival 3</div>
              <div class="price">@ $39.99</div>
              <button><i class="far fa-times-circle"></i></button>
            </li>
            <li class="cart-item">
              <div class="name">Rival 600</div>
              <div class="price">@ $109.99</div>
              <button><i class="far fa-times-circle"></i></button>
            </li>
            <li class="cart-item">
              <div class="name">Rival 650 Wireless</div>
              <div class="price">@ $159.99</div>
              <button><i class="far fa-times-circle"></i></button>
            </li>
            <li class="cart-item">
              <div class="name">Sensei Ten</div>
              <div class="price">@ $89.99</div>
              <button><i class="far fa-times-circle"></i></button>
            </li>
          </ul>
          <div class="total">Total: $489.95</div>
          <a class="keep-shopping" href="/"
            ><i class="fas fa-chevron-left"></i>Keep Shopping</a
          >
        </aside>)
  }
}