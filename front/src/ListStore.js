import React, {Component} from 'react';

class ListStore extends Component {
  
render()
{
  return (
    <div>

  <ol className='shop-list'>

  { this.props.shops.map(shop => (


    <li key={shop.id} className='shop-list-item'>
    <div className='shop-avatar' style={ {backgroundImage: `url(${shop.imageURL})`}}>
    </div>

    <div className='shop-details'>
    <p>{shop.name}</p>
    </div>

    <button className='shop-go'>
    Comprar
    </button>
    
     </li>
    ))}

  </ol>

    </div>
  );
}
}

export default ListStore;
