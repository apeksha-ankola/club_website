import React from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./Components/GlobalStyle/GlobalStyle.jsx";

import Header from "./Components/Header/Header.jsx";
import Homepage from "./Components/Homepage/Homepage.jsx";
import Newsletter from "./Components/Newsletter/Newsletter.jsx";
import Events from "./Components/Eventss/Events.jsx";
import Members from "./Components/Members/Members.jsx";
import Footer from "./Components/Footer/Footer.jsx";
import Error from "./Components/Error/Error.jsx";
import GoToTop from "./Components/GoToTop/GoToTop.jsx";

const App = () => {
  const theme = {
    colors: {
      heading: "hsl(230, 70%, 16%);",
      text: "hsl(230, 16%, 45%)",
      white: "hsl(0, 0%, 100%)",
      black: " #212529",
      helper: "#8490ff",
      bg: "hsl(230, 100%, 97%)",
      footer_bg: "#0a1435",
      btn: "rgb(98 84 243)",
      border: "hsl(230, 50%, 90%)",
      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg, rgb(132 144 255) 0%, rgb(98 189 252) 100%)",
      shadow:
        "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px,rgba(27, 31, 35, 0.15) 0px 0px 0px 1px;",
      shadowSupport: " rgba(0, 0, 0, 0.16) 0px 1px 4px",
    },
    media: { mobile: "768px", tab: "998px" },
  };

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <GoToTop />
      {/* <BrowserRouter> */}
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/newsletter" element={<Newsletter />} />
        <Route path="/members" element={<Members />} />
        <Route path="/events" element={<Events />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
      {/* </BrowserRouter> */}
    </ThemeProvider>
  );
};
export default App;
