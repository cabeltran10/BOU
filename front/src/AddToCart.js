import React, { Component, Fragment } from 'react';


class AddToCart extends Component{


render(){

const item= this.props.item;
	
	return(
		<div>

		<div className='row align-items-start' style={{backgroundImage: `url(${item.imageURL})`}}>
		</div>


			<div className='description'>
			<p>{item.name}</p>
			</div>

			<div className='description'>
			<p>{item.description}</p>
			</div>

			<div className='price-tag'>
			<p>{item.price}</p>
			</div>

			<button className='shop-go'>
			Agregar
			</button>

		</div>



		);
}



}

export default AddToCart;