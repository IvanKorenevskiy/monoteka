import React from 'react';
import './menu.scss';
import Blous from '../images/blous.png'
import Coat from '../images/coat.png'
import Dresses from '../images/dresses.png'
import Jackets from '../images/jackets.png'
import Jeans from '../images/jeans.png'
import Shirt from '../images/shirt.png'



function Menu() {
	return (
		<div className="menu">
		<div className="menu__container">
			<a className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Dresses}/></div>
				<div className="menu__title">платья</div>
			</a>
			<div className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Coat}/></div>
				<div className="menu__title">шубы</div>
			</div>
			<a className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Jackets}/></div>
				<div className="menu__title">пиджаки</div>
			</a>
			</div>
			<div className="menu__container">			
			<a className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Blous}/></div>
				<div className="menu__title">блузки</div>
			</a>
			<a className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Jeans}/></div>
				<div className="menu__title">джинсы</div>
			</a>
			<a className="menu__item">
				<div className="menu__icon-wrapper"><img className="menu__icon" src={Shirt}/></div>
				<div className="menu__title">рубашки</div>
			</a>
			</div>
		</div>
	)
}



export default Menu;