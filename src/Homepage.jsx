import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./context";

import MainSection from "./Components/MainSection";
// import Events from "./Events";
import Members from "./Members";
import Newsletter from "./Newsletter";

const Homepage = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    // Use a callback function to avoid potential issues
    updateHomePage();
  }, []);
  
  return (
    <>
      <MainSection />
      {/* <Events /> */}
      <Newsletter />
      <Members />

      
    </>
  );
};

export default Homepage;