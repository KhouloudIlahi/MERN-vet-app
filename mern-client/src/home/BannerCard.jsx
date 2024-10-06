import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';


import './BannerCard.css';

const BannerCard = () => {
    
  return (
    <div >
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        slidesPerView={1} // Affiche une seule slide par vue
        spaceBetween={30} // Espace entre les slides
        loop={false} // Désactive la boucle (cycle infini)
        className="mySwiper"
      >
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        <SwiperSlide></SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default BannerCard;
