import React, { useState } from "react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import SwiperCore from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "./Events.css";
import EventsData from "./EventsData";

SwiperCore.use([EffectCoverflow, Pagination]);

const Events = () => {
  const [showPastEvents, setShowPastEvents] = useState(false);

  const togglePastEvents = () => {
    setShowPastEvents(!showPastEvents);
  };

  return (
    <>
      <h2 className="main-text">InnovAIt- Events</h2>
      <div className="gen-ai">
        <img
          src="./images/GenAI.png"
          alt="Image Description"
          className="gen-ai-image"
        />
        <h3 className="events-text">More events coming soon!!! Stay tuned *</h3>
      </div>
      {showPastEvents && (
        <div className="past-events">
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
            className="mySwiper"
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
          >
            {EventsData.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="card swiper-slide">
                  <div className="card__image">
                    <img src={event.imageUrl} alt="Event" />
                  </div>
                  <div className="card__content">
                    <span className="card__title">{event.name}</span>
                    <p className="card__text">{event.description}</p>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
      <button onClick={togglePastEvents} className="past-events-button">
        {showPastEvents ? "Hide Past Events" : "Past Events"}
      </button>
    </>
  );
};

export default Events;
