import React from 'react';
import './product-form.scss';
import Basket from '../images/basket2.png';
import Size from '../offers/offers';


function ProductForm(props) {
	return (
		<div className="offers__item product-form">
			<div className="product-form__icon-wrapper">
				{props.product.icon}
			</div>
			<div className="product-form__title">
				{props.product.name}
			</div>
			<div className="product-form__description">
				Описание: {props.product.description}
			</div>
			<div className="product-form__info">
				<div className="product-form__size size">
				<div className="size__container">
					<div className="size__value">
						{props.product.size[0]}
					</div>
					<div className="size__value">
						{props.product.size[1]}
					</div>		
					<div className="size__value">
						{props.product.size[2]}
					</div>			
				</div>

					<div className="size__text">размер</div>
				</div>
				<div className="product-form__cost">
					{props.product.cost} р. 
					<img className="product-form__order" src={Basket}/>
				</div>
			</div>
			<div className="product-form__stocks">
				{props.product.country[1]}
				<div className="product-form__stocks-text">{props.product.stock}</div>
			</div>
			<div className="product-form__hover-info">
				<table className="product-form__hover-info hover-info">
					<tr className="hover-info-tr">
						<td className="hover-info-tr-td">Материал</td>
						<td className="hover-info-tr-td">{props.product.materials}</td>
					</tr>
					<tr className="hover-info-tr">
						<td className="hover-info-tr-td">Сезон</td>
						<td className="hover-info-tr-td">{props.product.season}</td>
					</tr>
					<tr className="hover-info-tr">
						<td className="hover-info-tr-td">Страна-производитель</td>
						<td className="hover-info-tr-td">{props.product.country[0]}</td>
					</tr>
					<tr className="hover-info-tr">
						<td className="hover-info-tr-td">Длина</td>
						<td className="hover-info-tr-td">{props.product.length}</td>
					</tr>
				</table>
			</div>
		</div>
	)
}



export default ProductForm;