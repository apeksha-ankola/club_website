import React, { useState } from "react";
import styled from "styled-components";
import axios from 'axios';

const Newsletter = () => {

  const[newsData, setNewsData] = useState({
    name: '',
    email: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Creating an object with user data
    const userData = { ...newsData };
    const response = await axios.post("http://localhost:9450/storeEmail", userData);
    alert(response.data.message);
    setNewsData({
      name: '',
      email: '',
  });

   

  }

  return (
    <Wrapper>
      <h2 className="main-text">INNOVAIT-ON Newsletter</h2>
      <div className="contact-form">
        <div className="container">
          <div className="contact-box">
            <div className="left"></div>
            <div className="right">
              <h2>Subscribe to Newsletter</h2>
              <form onSubmit={handleSubmit}>
              
              <input type="text" className="field" name="name" value={newsData.name}
                onChange={handleChange} placeholder="Enter Your Name" />

              <input type="email" className="field" name="email" value={newsData.email}
                onChange={handleChange} placeholder="Enter Your Email" />
              <button className="btn">SUBSCRIBE</button>
              </form>
            </div>
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
    font-family: 'Montserrat', sans-serif;
  }

  body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
  }

  .main-text {
    line-height: 40px;
    margin-bottom: 5px;
    font-size: 30px;
    font-weight: 500;
    text-align: center;
    background-color: hsl(230, 100%, 97%);
  }

  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    position: auto;
    width: 100%;
	  height: 100%;
    min-height: 100vh; 
    padding: 20px 100px; 
  }

  .container:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background-size: cover;
    background-color: hsl(230, 100%, 97%);
    z-index: -1;
  }


  .contact-box {
    position: center;
    width: 100%
    max-width: 900px; /* Increased max-width */
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: hsl(0, 0%, 100%);
    box-shadow: 0px 0px 19px 5px rgba(0, 0, 0, 0.19);
  }

  .left {
    background: url("images/newsletter.png") no-repeat center;
    background-size: contain;
    height: 100%;
  }

  .right {
    padding: 25px 40px;
  }

  h1
  {
    position: center;
  }

  h2 {
    position: relative;
    padding: 0 0 10px;
    margin-bottom: 10px;
    font-size: 2rem;
  }

  h2:after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    height: 4px;
    width: 50px;
    border-radius: 2px;
    background-color: hsl(230, 62%, 56%);
  }

  .field {
    width: 100%;
    border: 2px solid rgba(0, 0, 0, 0);
    outline: none;
    background-color: rgba(230, 230, 230, 0.6);
    padding: 1rem 1.5rem;
    font-size: 1.4rem;
    margin-bottom: 22px;
    transition: 0.3s;
  }

  .field:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }

  .btn {
    width: 100%;
    padding: 1rem 1.5rem;
    background-color: hsl(230, 62%, 56%);
    color: #fff;
    font-size: 1.4rem;
    border: none;
    outline: none;
    cursor: pointer;
    transition: 0.3s;
  }

  .btn:hover {
    background-color: #27ae60;
  }

  .field:focus {
    border: 2px solid rgba(30, 85, 250, 0.47);
    background-color: #fff;
  }

  @media screen and (max-width: 880px) {
    .contact-box {
      grid-template-columns: 1fr;
    }
    .left {
      height: 200px;
    }
  }
`;

export default Newsletter;
