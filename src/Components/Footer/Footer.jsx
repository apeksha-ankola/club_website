import React from "react";
import styled from "styled-components";
import { Button } from "../Button/Button";
import { NavLink } from "react-router-dom";
import { FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <Wrapper>
      <section className="contact-short">
        <div className="grid grid-two-column">
          <div>
            <h3>InnovAIt-ON, AI & ML, RNSIT</h3>
            <h3>Talk to us today</h3>
          </div>

          <div className="contact-short-btn">
            <NavLink to="/">
              <Button>Get Started</Button>
            </NavLink>
          </div>
        </div>
      </section>

      {/* footer section  */}

      <footer>
        <div className="container grid grid-three-column">
          {/* 4 cols to 3 cols */}
          <div className="footer-about">
            <h3>InnovAIt-ON</h3>
            <p>
              Dive into collaborative projects spanning diverse fields, from
              cutting-edge technology to sustainable design.
            </p>

            <p>
              Join us in transforming inspiration into tangible results and
              embark on a journey of innovation, learning, and shared success!!
            </p>
          </div>

          {/* <div className="footer-subscribe">
            <h3>Subscribe to our newsletter get latest updates</h3>
            <form action="#">
              <input
                type="email"
                required
                autoComplete="off"
                placeholder="Email"
              />
              <input type="submit" value="Subscribe" />
            </form>
          </div> */}

          {/* 2nd column  */}
          <div className="footer-social">
            <h3>Follows Us</h3>
            <div className="footer-social--icons">
              <div>
                <a
                  href="https://www.linkedin.com/company/innovaiton-rnsit/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaLinkedin className="icons" />
                </a>
              </div>

              <div>
                <a
                  href="https://www.instagram.com/innovaiton_rnsit/?igsh=MTNsb3M2dmo4YTBxcQ%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaInstagram className="icons" />
                </a>
              </div>
            </div>
          </div>

          {/* 3rd column  */}
          <div className="footer-contact">
            <h3>Call Us</h3>
            <h3>Amogh N Kotha: +91 99019 88625</h3>
          </div>
        </div>

        {/* bottom section  */}
        <div className="footer-bottom--section">
          <hr />
          <div className="container grid grid-two-column">
            <p>@{new Date().getFullYear()} InnovAIt-ON. Technical Team</p>
            <div>
              <p>PRIVACY POLICY</p>
              <p>TERMS & CONDITIONS</p>
            </div>
          </div>
        </div>
      </footer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .contact-short {
    max-width: 60vw;
    margin: auto;
    padding: 5rem 10rem;
    background-color: ${({ theme }) => theme.colors.bg};
    border-radius: 1rem;
    box-shadow: ${({ theme }) => theme.colors.shadowSupport};
    transform: translateY(50%);
  }
  .contact-short-btn {
    justify-self: end;
    align-self: center;
    border-radius: 2em;
    box-shadow: 0 0 2em rgba(0, 0, 0, 0.2);
  }

  footer {
    padding: 14rem 0 9rem 0;
    background-color: ${({ theme }) => theme.colors.footer_bg};

    h3 {
      color: ${({ theme }) => theme.colors.hr};
      margin-bottom: 2.4rem;
    }
    p {
      color: ${({ theme }) => theme.colors.white};
    }

    .footer-social--icons {
      display: flex;
      gap: 2rem;

      div {
        padding: 1rem;
        border-radius: 50%;
        border: 2px solid ${({ theme }) => theme.colors.white};
        // circle around

        .icons {
          color: ${({ theme }) => theme.colors.white};
          font-size: 2.4rem;
          position: relative;
          cursor: pointer;
        }
      }
    }

    .footer-bottom--section {
      padding-top: 9rem;

      hr {
        margin-bottom: 2rem;
        color: ${({ theme }) => theme.colors.hr};
        height: 0.1px;
      }
    }
  }

  // responsive
  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .contact-short {
      max-width: 95vw;
      padding: 2rem 0rem;
      display: flex;
      justify-content: center;
      align-items: center;

      .contact-short-btn {
        text-align: center;
        justify-self: flex-start;
      }
    }

    footer .footer-bottom--section {
      padding-top: 3.2rem;
    }
  }
`;

export default Footer;
