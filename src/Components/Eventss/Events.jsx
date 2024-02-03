import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import "./Events.css";
import EventsData from "./EventsData";

const Events = () => {
  return (
    <>
      <h2 className="main-text">INNOVAIT-ON Events</h2>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={"auto"}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        navigation={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        {EventsData.map((events, index) => (
          <SwiperSlide key={index}>
            <div className="card swiper-slide">
              <div className="card__image">
                <img src={events.imageUrl} alt="card__image" />
              </div>
              <div className="card__content">
                <span className="card__title">{events.name}</span>
                <p className="card__text">{events.description}</p>
                <button className="card__btn">Register-Now!!</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Events;
