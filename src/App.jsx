import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Bar from './components/Bar/Bar';
import Items from './components/ItemsPage';
import CartItems from './components/CartPage/CartPage';
// import TestC from './components/TestC'

class App extends Component{
  state = {
    items: [],
    inCart: []
  }

  componentDidMount() {
    const url = 'https://5ed0108416017c00165e327c.mockapi.io/api/v1/items';

    fetch(url)
    .catch(err => console.log('Failed to fetch Items '+err))
    .then(res => res.json())
    .then(json => {
      this.setState({items:json})
    });
  }

  handleUpdateCart = (item) => {
    this.setState(prevState => ({inCart:prevState.inCart.concat(item)}))
  }

  handleRemoveCartItem = (key) => {
    this.setState(prevState => {
      return {
        inCart: prevState.inCart.filter((eachItem,index) => index !== key)
      }
    });
  }

  render() {
    const { inCart } = this.state;
    let totalPrice = 0;

    inCart.forEach(eachItem => {
      totalPrice = totalPrice + eachItem.price;
    });
    totalPrice = totalPrice.toFixed(2);
    
    return (
      <BrowserRouter>
        <header>
          <Bar
            {...this.state}
            totalPrice={totalPrice}
            itemsInCart={inCart.length}
          />
        </header>
        <main location={"[object Object]"} computedmatch={"[object Object]"}>
          <Switch>
            <Route path={'/cart'} component={() => <CartItems inCart={inCart} totalPrice={totalPrice} handleRemoveCartItem={this.handleRemoveCartItem}/>}/>
            <Route path={'/'}
              component={() => <Items handleUpdateCart={this.handleUpdateCart} {...this.state}/>}
            />
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
