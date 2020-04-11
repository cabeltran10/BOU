import React, { Component, Fragment } from 'react';


class AddToCart extends Component{


render(){

const item= this.props.item;
	
	return(
		<div className="container">
		<div className="card add">
		<div className='row align-items-start' style={{backgroundImage: `url(${item.imageURL})`}}>
		</div>

		<div className="row">
			
			<div className="col-md">
			<div className='description'>
			<p>{item.name}</p>
			</div>

			<div className='description'>
			<p>{item.description}</p>
			</div>

			<div className='price-tag'>
			<p>{item.price}</p>
			</div>
			</div>

			<div className="col-sm">
			<button className='shop-go'>
			Agregar
			</button>

			</div>

			</div>

		</div>
		</div>



		);
}



}

export default AddToCart;