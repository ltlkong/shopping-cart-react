import React from 'react';
import { Link } from 'react-router-dom';
import YourCart from './YourCart';
import Condition from '../Condition';

export default function CartPage(props){
  let shouldYourCartRender,shouldNoItemsRender;

  if(props.inCart.length > 0) {
    shouldYourCartRender = true;
  }else {
    shouldNoItemsRender = true;
  }

  return(
    <aside className="cart">
      <h2>Your Cart</h2>
      <Condition shouldRender={shouldYourCartRender}>
        <YourCart {...props}/>
      </Condition>
      <Condition shouldRender={shouldNoItemsRender}>
        <div>{'Your cart is empty'}</div>
      </Condition>
      <Link className={"keep-shopping"} to={"/"}><i className={"fas fa-chevron-left"}></i>Keep Shopping</Link>
    </aside>)
}