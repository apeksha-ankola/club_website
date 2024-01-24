import React from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination} from 'swiper/modules';

const Members = () =>{
  return (
    <> 
    <Wrapper>
    <h2 className="main-text">INNOVAIT-ON Members</h2>
       <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}

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
        autoplay={{ delay: 1000, disableOnInteraction: false }}
      >
        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/amogh-kotha.jpg" alt="card__image"/>
          </div>
          <div className="card__content">
            <span className="card__title">Amogh N Kotha</span>
            <span className="card__name">Head of the club</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>

            <a href="https://www.linkedin.com/in/amogh-kotha-a5617823b">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>

      <SwiperSlide> 
      <div className="swiper-wrapper">
        <div className="card swiper-slide">
          <div className="card__image">
            <img src="./images/members/aadi-kumar.jpg" alt="card__image"/>
          </div>

          <div className="card__content">
            <span className="card__title">Aadi B kumar</span>
            <span className="card__name">Head-Marketing team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="www.linkedin.com/in/aadi-b-kumar-584514254">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/anand-okade.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Anand Okade</span>
            <span className="card__name">Core member-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            
            <a href="https://www.linkedin.com/in/anand-okade-a9614a220/">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>
        
        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/ayaj-anand.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Ayaj Anand</span>
            <span className="card__name">Core member-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>

            <a href="https://www.linkedin.com/in/ayaj-anand-492986127/">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/amogh-athreya.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Amogh Athreya H</span>
            <span className="card__name">Core member-Marketing team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/amogh-athreya-454515254">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/ranjitha-s.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Ranjitha</span>
            <span className="card__name">Core member-Organising team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="1">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/sujal-jn.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Sujal S</span>
            <span className="card__name">Core member-Organising team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/sujal-sarode-3a5b3a25b">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/nishitha-L.jpg" alt="card__image"/>
          </div>

          <div className="card__content">
            <span className="card__title">Nishitha R Lokhande</span>
            <span className="card__name">Core member-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/nishitha-r-lokande-094509254">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>


        <SwiperSlide>

        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/dhruva-nu.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Dhruva N U</span>
            <span className="card__name">Core member-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/dhruva-n-u-b6788a249/">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide>
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/apeksha-d.jpg" alt="card__image"/>
          
          </div>

          <div className="card__content">
            <span className="card__title">Apeksha D Ankola</span>
            <span className="card__name">Core member-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/apeksha-d-ankola-aa4512254/">
                  <button className="card__btn">View Profile</button>
            </a>
            
          </div>
        </div>
        </SwiperSlide>

        <SwiperSlide> 
        <div className="card swiper-slide">
          <div className="card__image">
          <img src="./images/members/amogh-bharadwaj.jpg" alt="card__image"/>
            
          </div>

          <div className="card__content">
            <span className="card__title">Amogh M</span>
            <span className="card__name">Head-Technical team</span>
            <p className="card__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit veritatis labore provident non tempora odio est sunt, ipsum</p>
            <a href="https://www.linkedin.com/in/amogh-m-985490216/">
                  <button className="card__btn">View Profile</button>
            </a>
          </div>
        </div>
        </SwiperSlide>
        

        </Swiper>
    </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;

    background-color: #f4f4f4;
  }

  .swiper{
    width: 100%;
    background-color:hsl(230, 100%, 97%);
  }
  
  .swiper-wrapper{
    width: 100%;
    height: 35em;
    display: flex;
    align-items: center;
  }

  .main-text {
    line-height: 40px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    background-color:hsl(230, 100%, 97%);
  }

  .card{
    width: 20em;
    height: 90%;
    background-color: #fff;
    border-radius: 2em;
    box-shadow: 0 0 2em rgba(0, 0, 0, .2);
    padding: 2em 1em;
  
    display: flex;
    align-items: center;
    flex-direction: column;
  
    margin: 0 2em;
  }
  
  // .swiper-slide:not(.swiper-slide-active){
  //   filter: blur(1px);
  // }
  
  .card__image{
    width: 10em;
    height: 10em;
    border-radius: 50%;
    border: 5px solid  hsl(230, 62%, 56%);
    padding: 3px;
    margin-bottom: 2em;
  }
  
  .card__image img{
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
  
  .card__content{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  
  .card__title{
    font-size: 1.5rem;
    font-weight: 500;
    position: relative;
    top: .2em;
  }
  
  .card__name{
    color: hsl(230, 62%, 56%);
  }
  
  .card__text{
    text-align: center;
    font-size: 1.1rem;
    margin: 1em 0;
  }
  
  .card__btn{
    background-color: hsl(230, 62%, 56%);
    color: #fff;
    font-size: 1rem;
    text-transform: uppercase;
    font-weight: 600;
    border: none;
    padding: .5em;
    border-radius: .5em;
    margin-top: .5em;
    cursor: pointer;
  }
`;
export default Members;