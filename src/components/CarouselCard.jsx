import React from 'react';
import '../assets/styles/components/CarouselCard.scss'

import iconPlay from '../assets/icons/play-icon.png';
import iconPlus from '../assets/icons/plus-icon.png';
// import imageMovie from '../assets/img/cat.jpg';

const CarouselCard = ({cover, title,year,contentRating,duration}) => (
    <div className="carousel-card">
            <img className="carousel-card__img" src={cover} alt="cover-Movie"/>
            <div className="carousel-card__details ">
                <div>
                    <img src={iconPlay} alt="play"/>
                    <img src={iconPlus} alt="more"/>
                </div>
                <p className="carousel-card__details--title">{title}</p>
                <p className="carousel-card__details--subtitle">{year} {contentRating} {duration}</p>
            </div>
        </div>
);

export default CarouselCard;