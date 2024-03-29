import React, { useRef } from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { useGlobalContext } from "../Context/context";

import "./Background.css";

const MainSection = () => {
  const { name, image } = useGlobalContext();
  const newsletterRef = useRef(null);

  const scrollToNewsletter = () => {
    if (newsletterRef.current) {
      newsletterRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-main-data">
          <div className="box">
            <div> </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <h1 className="main-heading">{name}</h1>
          <h1 className="tagline">Ideate-Innovate-Ignite</h1>
          <p className="para-text">
            Our project-based club is a dynamic community of passionate
            individuals dedicated to bring ideas to life. Dive into
            collaborative projects spanning diverse fields, from cutting-edge
            technology to sustainable design. Join us in transforming
            inspiration into tangible results and embark on a journey of
            innovation, learning, and shared success!!
          </p>
          <Button className="btn explore-btn" onClick={scrollToNewsletter}>
            Explore
          </Button>
        </div>

        {/* for image  */}
        {
          <div className="section-logo-image">
            <picture>
              <img src={image} alt="logoimage" className="logo-img " />
            </picture>
          </div>
        }
      </div>
      {/* Newsletter Section */}
      <div ref={newsletterRef}></div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
  background-color: ${({ theme }) => theme.colors.bg};
  .section-main-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .main-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .tagline {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.black};
  }

  .para-text {
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
  }

  .section-logo-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .logo-img {
    max-width: 80%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default MainSection;
