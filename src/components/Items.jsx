import React from 'react';

export default function Items(props) {
    const { items, handleUpdateCart } = props;
    
    return (
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
                <button onClick={() => handleUpdateCart(item)}>
                  {'Add to Cart'}
                </button>
              </li>
            )
          })}
        </ul>
    )
}