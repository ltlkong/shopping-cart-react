import React from 'react';
import { Link } from "react-router-dom";
import Cart from "./Cart/Cart";

export default function Header(props) {
  return (
  <header>
    <Link to="/"><h1>MouseHeavan</h1></Link>
    <Cart {...props}/>
  </header>
  )
}