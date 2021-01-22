import React from 'react';
import { Link } from "react-router-dom";
import Cart from './Cart';

export default function Bar(props) {
  return (
  <React.Fragment>
    <Link to={{pathname:"/",}}><h1>MouseHeavan</h1></Link>
    <Link className={"cart-icon"} to={"/cart"}><Cart {...props}/></Link>
  </React.Fragment>
  )
}