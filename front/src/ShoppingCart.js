
import React, {Component, useState} from 'react';



function ShoppingCart(props){

const [total, setTotal]=React.useState(0);
const [quantity, setQuantity]=React.useState(1);

let onClickTotal =(item)=>
{
 setTotal(total+item.price*item.quantity);
 setQuantity(item.quantity+1);

}

let onClickremove =(item)=>
{
 setTotal(total-item.price*item.quantity);
 setQuantity(item.quantity=0);
 props.onDelete(item.id);

}

    
    return ( 
	
      <div>
        <h1>Resumen de productos</h1>
       

        <div className='card product-list'>
    
        { props.products.map(item => (
    
        <div className='container'>
            <div key={item.id} className='product-list-item' >
            <div className='item-image' style={ {backgroundImage: `url(${item.imageURL})`}}>
            </div>

            < div className='item-details'>

            <p className='item-name'>{item.name}</p>
     
            </div>

           <button onClick={ ( )=> onClickTotal(item) }  className='item-add'>
            +
            </button>
            <span>{item.quantity}</span>


            
            <button onClick={( )=> onClickremove(item)} className='item-remove'>
            Remove
            </button>

                   <p>{item.price}</p>
            
             </div>
             </div>
            ))}
    
        </div>


        <div className='total' >
        <h2>Total</h2>
        <p>{total}</p>
        </div>
          </div>

    
    )
        }

export default ShoppingCart