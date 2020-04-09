
import React, {Component} from 'react';

class ShoppingCart extends Component {

state={
  total:' '
}

render(){
    
    return ( 
    	
      <div>

        <ul className='product-list'>
    
        { this.props.products.map(item => (
    
    
            <li key={item.id} className='product-list-item' >
            <div className='item-image' style={ {backgroundImage: `url(${item.imageURL})`}}>
            </div>

            < div className='item-details'>

            <p className='item-name'>{item.name}</p>
     
            </div>

    
    		<select className="mdb-select md-form" name="quantity" selected="1" >
    		
	<option value ="1" >1</option>
	<option value ="2" >2</option>
	<option value ="3">3</option>
	<option value ="4">4</option>
	<option value ="5">5</option>
	<option value ="6">6</option>
	<option value ="7">7</option>
	<option value ="8">8</option>
	<option value ="9">9</option>
	<option value ="10">10</option>

    		</select>


            
            <button onClick={( )=>this.props.OnRemoveItem(item)} className='item-remove'>
            Remove
            </button>

                   <p>{item.price}</p>
            
             </li>
            ))}
    
        </ul>

        <div className='total' >
        <p>Total</p>
        <p>{this.state.total}</p>
        </div>
          </div>
    
    )
        }
}
export default ShoppingCart