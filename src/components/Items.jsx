import React, {Component} from 'react';

export default class Items extends Component{
  state = {
    items: [],
    inCart: [],
  }
  
  componentDidMount = () => {
    const url = 'https://5ed0108416017c00165e327c.mockapi.io/api/v1/items';

    fetch(url)
    .catch(err => console.log('Failed to fetch Items '+err))
    .then(res => res.json())
    .then(json => {
      this.setState({items:json})
    })
  }

  handleAddToCart = (item) => {
    const { handleUpdateCart } =this.props;

    this.setState(prevState => {
      return {
        inCart: prevState.inCart.concat([item]),
      };
    },() => {
      const { inCart } = this.state;
      let price = 0;

      inCart.forEach(eachItem => {
        price = price + eachItem.price;
      });
      handleUpdateCart(price, inCart.length)
    })

    
  }

  render() {
    const { items } = this.state;

    return (
      <main location={"[object Object]"} computedmatch={"[object Object]"}>
        <ul className={"items"}>
          {items.map(item => {
            return (
              <li className={"item"} key={item.id}>
                <img
                  src={item.imageURL}
                />
                <h2>{item.name}</h2>
                <div className="price">{`$${item.price}`}</div>
                <div className="description">{item.description}</div>
                <button onClick={() => this.handleAddToCart(item)}>
                  {'Add to Cart'}
                </button>
              </li>
            )
          })}
        </ul>
      </main>
    )
  }
}