
import React, {Component, useState} from 'react';



function ShoppingCart(props){

const [total, setTotal]=React.useState(0);
const [quantity, setQuantity]=React.useState(0);


    
    return ( 
    	
      <div>

        <ul className='product-list'>
    
        { props.products.map(item => (
    
    
            <li key={item.id} className='product-list-item' >
            <div className='item-image' style={ {backgroundImage: `url(${item.imageURL})`}}>
            </div>

            < div className='item-details'>

            <p className='item-name'>{item.name}</p>
     
            </div>

           <button onClick={( )=> setQuantity(quantity+1)} className='item-add'>
            +
            </button>
            <span>{quantity}</span>


            
            <button onClick={( )=>this.props.OnRemoveItem(item)} className='item-remove'>
            Remove
            </button>

                   <p>{item.price}</p>
            
             </li>
            ))}
    
        </ul>

        <div className='total' >
        <p>Total</p>
        <p>{total}</p>
        </div>
          </div>
    
    )
        }

export default ShoppingCart