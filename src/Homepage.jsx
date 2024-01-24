import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "./context";

// import Events from "./Events";
import Members from "./Members";
import Newsletter from "./Newsletter";

import MainSection from "./Components/MainSection";

const Homepage = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => updateHomePage());

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