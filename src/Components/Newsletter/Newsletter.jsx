import React, { useState } from "react";
import axios from "axios";

import "./Newsletter.css";

const Newsletter = () => {
  const [newsData, setNewsData] = useState({
    name: "",
    email: "",
  });

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
    const response = await axios.post(
      "http://localhost:9450/storeEmail",
      userData
    );
    alert(response.data.message);
    setNewsData({
      name: "",
      email: "",
    });
  };

  return (
      <div className="contact-form">
        <div className="containerr">
        <h2 className="main-text">InnovAIt-on Newsletter</h2>
          <div className="main">
            <div className="content">
              <h2>Subscribe to Newsletter</h2>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  className="field"
                  name="name"
                  value={newsData.name}
                  onChange={handleChange}
                  placeholder="Enter Your Name"
                />

                <input
                  type="email"
                  className="field"
                  name="email"
                  value={newsData.email}
                  onChange={handleChange}
                  placeholder="Enter Your Email"
                />
                <button className="btn">SUBSCRIBE</button>
              </form>
            </div>
            <div className="form-img">
              <img src="./images/newsletter.png" alt=" " />
            </div>
          </div>
        </div>
      </div>
  );
};
export default Newsletter;
