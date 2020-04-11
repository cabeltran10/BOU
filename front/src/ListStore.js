import React, {Component} from 'react';
import PropTypes from "prop-types";


class ListStore extends Component {
  
render()
{
  return (
    <div>

  <ul className='shop-list'>

  {this.props.shops.map(shop => (


    <li key={shop.id} className='card shop-list-item'>

    <img className='card-img-top shop-avatar' src={shop.imageURL}>
    </img>


    <div className='shop-details'>
    <p>{shop.name}</p>
    </div>

    <button className='shop-go'>
    Comprar
    </button>
    
     </li>
    ))}

  </ul>

    </div>
  );
}
}

export default ListStore;
