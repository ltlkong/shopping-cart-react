import React, { Component } from 'react';
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Bar from './pages/Bar'
import Items from './components/Items'
import CartItems from './components/CartItem';
import TestC from './components/TestC'

class App extends Component{
  constructor(props) {
    super(props)
  }
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
    })
  }

  handleUpdateCart = (item) => {
    this.setState(prevState => { 
      return {inCart:prevState.inCart.concat(item)};
    })
  }

  render() {
    const { inCart } = this.state;
    let totalPrice = 0;

    inCart.forEach(eachItem => {
      totalPrice = totalPrice + eachItem.price;
    });
    
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
          <Items handleUpdateCart={this.handleUpdateCart} {...this.state}/>
          <Switch>
            <Route path={'/cart'} component={CartItems}/>
            {/* <Route path={'/'} component={() => <Items handleUpdateCart={this.handleUpdateCart}/>}/> */}
          </Switch>
        </main>
      </BrowserRouter>
    );
  }
}

export default App;
