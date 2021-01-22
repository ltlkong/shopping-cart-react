import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Bar from './pages/Bar'
import Items from './components/Items'
import CartItems from './components/CartItem';
import TestC from './components/TestC'

class App extends Component{
  state = {
    cart: {
      totalPrice: 0,
      itemCount: 0
    }
  }

  handleUpdateCart = (totalPrice,itemCount) => {
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
        <header>
          <Bar {...this.state.cart}/>
        </header>
        <main location={"[object Object]"} computedmatch={"[object Object]"}>
          {/* <Items handleUpdateCart={this.handleUpdateCart}/> */}
          <Switch>
            <Route path={'/cart'} component={CartItems}/>
            <Route path={'/'} component={() => <Items handleUpdateCart={this.handleUpdateCart}/>}/>
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
