import React from 'react';
import './offers.scss';
import ProductForm from '../product-form/product-form';
import {FranceImg, ItalyImg, Girl_1Img, Girl_2Img, Girl_3Img, Girl_4Img} from '../images/images';
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



let product = [
	{
		id: 1,
		icon: <Girl_1Img/>,
		country: ["Франция",<FranceImg/>],
		stock: "new",
		name: "Кожаная юбка",
		description: "Полосатая кофта из полосатого трикотажа, без молнии",
		size: ["44","46", "48"],
		cost: "790",
		materials: "Хлопок",
		season: "Лето",
		length: "Мини"
	},
	{
		id: 1,
		icon: <Girl_2Img/>,
		country: ["Италия",<ItalyImg/>],
		stock: "new",
		name: "Платье в горох с поясом",
		description: "Полосатая кофта из полосатого трикотажа, без молнии",
		size: ["44", "46", "48"],
		cost: "790",
		materials: "Хлопок",
		season: "Лето",
		length: "Мини"
	},
	{
		id: 1,
		icon: <Girl_3Img/>,
		country: ["Франция",<FranceImg/>],
		stock: "new",
		name: "Розовое платье",
		description: "Полосатая кофта из полосатого трикотажа, без молнии",
		size: ["44","46", "48"],
		cost: "790",
		materials: "Хлопок",
		season: "Лето",
		length: "Мини"
	},
	{
		id: 1,
		icon: <Girl_4Img/>,
		country: ["Франция",<FranceImg/>],
		stock: "new",
		name: "Полосатая кофта",
		description: "Полосатая кофта из полосатого трикотажа, без молнии",
		size: ["44","46", "48"],
		cost: "790",
		materials: "Хлопок",
		season: "Лето",
		length: "Мини"
	}
]

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function Offers() {
	return (
		<div className="offers">
			<div className="offers__bottom-nav bottom-nav">
				<a className="bottom-nav__item">Лучшие предложения недели</a>
				<a className="bottom-nav__item">Новинки</a>
				<a className="bottom-nav__item">Рекомендуем</a>
			</div>
			<Swiper 
				className="offers__slider"
				slidesPerView={'auto'}
	      		navigation
	      	>
				<SwiperSlide className="product-form">
					<ProductForm product={product[0]}/>
				</SwiperSlide>
				<SwiperSlide className="product-form">
					<ProductForm product={product[1]}/>
				</SwiperSlide>
				<SwiperSlide className="product-form">
					<ProductForm product={product[2]}/>
				</SwiperSlide>
				<SwiperSlide className="product-form">
					<ProductForm product={product[3]}/>
				</SwiperSlide>
				<SwiperSlide className="product-form">
					<ProductForm product={product[2]}/>
				</SwiperSlide>
				<SwiperSlide className="product-form">
					<ProductForm product={product[0]}/>
				</SwiperSlide>
			</Swiper>
		</div>
	)
}

export default Offers;