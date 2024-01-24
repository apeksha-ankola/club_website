import React from "react";
import styled from "styled-components";

const Newsletter = () => {
  return (
    <Wrapper>
      <div className="contact-form">
        <div className="container">
          <div className="content">
            <h2>Subscribe to our Newsletter</h2>
            <form action="#" method="post">
              <input type="text" name="name" placeholder="Enter Your Name" />
              <input type="email" name="email" placeholder="Enter Your Email" />
              <button type="submit" className="btn">Subscribe <i className="fas fa-paper-plane"></i></button>
            </form>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .contact-form {
    position: relative;
    min-height: 100vh;
    z-index: 0;
    background: hsl(230, 100%, 97%);
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .container {
    max-width: 700px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .contact-form h1 {
    text-align: center;
    font-size: 2.5rem;
    font-weight: 400;
    color: hsl(230, 16%, 45%);
  }

  .contact-form h2 {
    line-height: 40px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 500;
    color: #212529;
    text-align: center;
  }

  .content {
    padding: 3em;
    background: #fff;
    box-shadow: 2px 9px 49px -17px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
    margin-bottom: 20px;
    width: 100%;
  }

  .subscribe-info {
    text-align: center;
  }

  .btn,
  button,
  input {
    border-radius: 35px;
  }

  .btn:hover,
  button:hover {
    color:  #212529;
    transition: 0.5s ease;
  }

  .contact-form form {
    margin: 30px 0;
  }

  .contact-form input {
    outline: none;
    margin-bottom: 15px;
    font-stretch: 16px;
    color: #999;
    padding: 14px 20px;
    width: 100%;
    display: inline-block;
    box-sizing: border-box;
    border: none;
    background: #fcfcfc;
    transition: 0.3s ease;
  }

  .contact-form input:focus {
    background: transparent;
    border: 1px solid  #212529;
  }

  .contact-form button {
    font-size: 18px;
    color: #fff;
    width: 100%;
    background: rgb(98 84 243);
    font-weight: 600;
    transition: 0.3s ease;
    padding: 14px 15px;
    border: 1px solid rgb(98 84 243);
  }
`;

export default Newsletter;

