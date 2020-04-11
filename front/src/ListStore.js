import React, {Component} from 'react';

class ListStore extends Component {
  
render()
{
  return (
    <div>
  <h1>Selecciona la tienda</h1>
  <ul className='shop-list'>

  {this.props.shops.map(shop => (


    <li key={shop.id} className='card shop-list-item'>

    <img className='card-img-top shop-avatar' src={shop.imageURL}>
    </img>


    <div className='card-body shop-details'>

    <h3 className='card-title'>{shop.name} </h3>
   


    <button className='shop-go'>
    Comprar
    </button>

    </div>
     </li>
    ))}

  </ul>

    </div>
  );
}
}

export default ListStore;
