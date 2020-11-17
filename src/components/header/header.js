import React from 'react';
import './header.scss';
import Basket from '../images/basket.png';
import Search from '../images/search.png';
import Monoteka from '../images/monoteka.png';
import Arrow from '../images/arrow.png';


function Header() {
  return (
    <header className="header">
    	<div className="header__media-hide">
			<div className="header__left-nav">
				<a className="header__item">
					<div className="header__catalog">
						каталог
						<img className="header__arrow" src={Arrow}/>
					</div>
				</a>
				<a className="header__item">
					компания
				</a>
				<a className="header__item">
					новости
				</a>
			</div>
				<img className="header__logo" src={Monoteka}/>
			<div className="header__right-nav">
				<a className="header__item">
					поставщикам
				</a>
				<a className="header__item">
					контакты
				</a>
				<a className="header__item">
					кабинет
				</a>
				<a className="header__item">
					<img className="header__tool" src={Search}/>
				</a>
				<a className="header__item">
					<img className="header__tool" src={Basket}/>
				</a>
			</div>
		</div>
		<div className="header__media-show">
			<a className="header__item">
				компания
			</a>
			<a className="header__item">
				новости
			</a>
			<a className="header__item">
				поставщикам
			</a>
			<a className="header__item">
				контакты
			</a>
			<a className="header__item">
				кабинет
			</a>
		</div>
	</header>	
  );
}


export default Header;