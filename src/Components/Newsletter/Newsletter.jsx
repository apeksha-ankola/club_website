import React, { useState } from "react";
import axios from "axios";

import "./Newsletter.css";

const Newsletter = () => {
  const [loading, setLoading] = useState(false);

  const [showDownload, setShowDownload] = useState(false);
  const [newsData, setNewsData] = useState({
    name: "",
    email: "",
  });

  // Function to handle input changes in the form fields
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewsData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
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
      setShowDownload(true);

      // Clear the form data after successful submission
      setNewsData({ name: "", email: "" });
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while subscribing.");
    }

    setLoading(false);
  };

  // Function to handle the download of the newsletter
  const handleDownload = () => {
    const pdfPath = "/images/newsletter-1.pdf";
    const link = document.createElement("a");
    link.href = pdfPath;
    link.setAttribute("download", "newsletter.pdf");

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Hide the "Download Newsletter" button after download
    setShowDownload(false)
  };

  return (
    <div className="contact-form">
      <div className="containerr">
        {/* Box with expanded class when showDownload is true */}
        <div className={`box ${showDownload ? "expanded" : ""}`}>
          <div></div>
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
                <div className="button-container">
                  <button className="btn" type="submit">
                    SUBSCRIBE
                  </button>
                  {/* Download Newsletter */}
                  {showDownload && (
                    <button className="download-btn" onClick={handleDownload}>
                      Download Newsletter
                    </button>
                  )}
                </div>
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
