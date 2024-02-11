import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";

import membersData from "./MembersData";

const Members = () => {
  return (
    <>
      <Wrapper>
        <h2 className="main-text">InnvoAIt-on Members</h2>
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
          {membersData.map((member, index) => (
            <SwiperSlide key={index}>
              <div className="card swiper-slide">
                <div className="card__image">
                  <img src={member.imageUrl} alt="card__image" />
                </div>
                <div className="card__content">
                  <span className="card__title">{member.name}</span>
                  <span className="card__name">{member.role}</span>
                  <br></br>
                  <a
                    href={member.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="card__btn">View Profile</button>
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.section`
  * {
    margin: 0;
    padding: 0;
  }

  body {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: hsl(230, 50%, 90%);
    
  }

  .swiper {
    width: 100%;
    background-color: hsl(230, 100%, 97%);
  }

  .swiper-wrapper {
    width: 100%;
    height: 35em;
    display: flex;
    align-items: center;
  }

  .main-text {
    line-height: 1.5;
    padding: 10px;
    font-size: 28px;
    font-weight: 600;
    text-align: center;
  }

  .card {
    width: 20em;
    height: 90%;
    border-radius: 2em;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
    padding: 2em 1em;

    display: flex;
    align-items: center;
    flex-direction: column;
    cursor: grabbing;

    margin: 0 2em;
    background-color: hsl(0, 0%, 100%);

  }

  .card__image {
    width: 10em;
    height: 10em;
    border-radius: 50%;
    border: 5px solid hsl(230, 62%, 56%);
    padding: 3px;
    margin-bottom: 2em;
  }

  .card__image img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }

  .card__content {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .card__title {
    font-size: 1.6rem;
    font-weight: 500;
    position: relative;
    top: 0.2em;
  }

  .card__name {
    color: hsl(230, 62%, 56%);
    font-size: 1.1rem;
  }

  .card__text {
    text-align: center;
    font-size: 1.1rem;
    margin: 1em 0;
  }

  .card__btn {
    background-color: hsl(230, 62%, 56%);
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: 0.5em;
    border-radius: 0.5em;
    margin-top: 0.5em;
    cursor: pointer;
  }
`;
export default Members;