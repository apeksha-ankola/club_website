import React, { useState } from "react";
import axios from "axios";

import "./Newsletter.css";
import "./Background.css";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);
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
    if (!newsData.name || !newsData.email) {
      alert("Please enter both name and email.");
      return;
    }
    setLoading(true);

    try {
      const userData = { ...newsData };
      const response = await axios.post(
        "https://be-innovait-on.onrender.com/storeEmail",
        userData
      );
      alert(response.data.message);
      setNewsData({ name: "", email: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while subscribing.");
    }

    setLoading(false);
  };

  return (
    <div className="contact-form">
      <div className="containerr">
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
              {loading ? (
                <p>Loading...</p>
              ) : (
                <button className="btn" type="submit">
                  SUBSCRIBE
                </button>
              )}
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
