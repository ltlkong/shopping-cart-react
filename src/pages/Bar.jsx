import React from 'react';
import { Link, Route} from "react-router-dom";
import Cart from '../components/Cart';

export default function Bar(props) {
  return (
  <React.Fragment>
    <Link to={{pathname:"/",}}><h1>MouseHeavan</h1></Link>
    <Link className={"cart-icon"} to={"/cart"}><Cart {...props}/></Link>
  </React.Fragment>
  )
}