import React, { Component } from 'react';
import { BrowserRouter } from "react-router-dom";
import Header from './pages/Header/Header'
import Items from './components/Items'

class App extends Component{
  state = {
    cart: {
      totalPrice: 0,
      itemCount: 0
    }
  }

  handleUpdateCart = (totalPrice,itemCount) => {
    console.log(totalPrice);
    this.setState(
      {
        cart: {
          totalPrice: totalPrice,
          itemsInCart: itemCount
        }
      }
    )
  }

  render() {
    return (
      <BrowserRouter>
        <Header {...this.state.cart}/>
        <Items handleUpdateCart={this.handleUpdateCart}/>
      </BrowserRouter>
    );
  }
}

export default App;
