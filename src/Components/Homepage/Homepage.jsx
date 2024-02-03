import React from "react";
import { useEffect } from "react";
import { useGlobalContext } from "../Context/context";

import MainSection from "../MainSection/MainSection";
import Events from "../Eventss/Events";
import Members from "../Members/Members";
import Newsletter from "../Newsletter/Newsletter";

const Homepage = () => {
  const { updateHomePage } = useGlobalContext();

  useEffect(() => {
    updateHomePage();
  }, [updateHomePage]);
  return (
    <>
      <MainSection />
      <Events />
      <Newsletter />
      <Members />
    </>
  );
};

export default Homepage;
