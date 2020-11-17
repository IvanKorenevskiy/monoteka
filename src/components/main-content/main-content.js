import React from 'react';
import './main-content.scss';
import Blous from '../images/blous.png'
import Coat from '../images/coat.png'
import Dresses from '../images/dresses.png'
import Jackets from '../images/jackets.png'
import Jeans from '../images/jeans.png'
import Shirt from '../images/shirt.png'
import Slide_1 from '../images/slide-1.png'
import Girl_5 from '../images/girl-5.png'
import Girl_6 from '../images/girl-6.png'
import SwiperCore, {A11y, Navigation, Pagination, Scrollbar} from 'swiper';
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';



SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

function MainContent() {
	return (
		<div className="main-content">
			<Swiper 
				className="carousel"
				slidesPerView={1}
	      		navigation
	      		EffectFade
	      		Parallax
	      	>
				<SwiperSlide className="carousel__item">
					<div className="carousel__target">
						<img className="carousel__icon" src={Slide_1}/>
					</div>
						<div className="carousel__container">
							<div className="carousel__title">
								Monoteka-group — лучшие моменты  жизни вместе с нашими платьями
							</div>
							<button className="carousel__button">
								купить
							</button>
					</div>
				</SwiperSlide>
				<SwiperSlide className="carousel__item">
					<div className="carousel__target">
						<img className="carousel__icon" src={Slide_1}/>
					</div>
						<div className="carousel__container">
							<div className="carousel__title">
								Monoteka-group — лучшие моменты  жизни вместе с нашими платьями
							</div>
							<button className="carousel__button">
								купить
							</button>
					</div>
				</SwiperSlide>
				
			</Swiper>
			<div className="main-content__container">
				<div className="main-content__item">
					<div className="target">
						<div className="icon-wrapper">
							<img className="main-content__icon" src={Girl_6}/>
						</div>
					</div>
					<div className="main-content__text">
						<div className="main-content__name">Пиджаки</div>
						<a className="main-content__link">в наших магазинах</a>
					</div>			
				</div>
				<div className="main-content__item partition">
					<div className="target">
						<div className="icon-wrapper">
							<img className="main-content__icon" src={Girl_5}/>
						</div>
					</div>
					<div className="main-content__text">
						<div className="main-content__name">Деловой стиль</div>
						<a className="main-content__link">узнать больше</a>
					</div>
				</div>
			</div>
		</div>
	)
}

export default MainContent;



