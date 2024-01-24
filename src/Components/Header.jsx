import React from "react";
import { NavLink } from "react-router-dom";
// import { motion } from "framer-motion";

import Navbar from "./Navbar";
import styled from "styled-components";


const Header = () => {
  return (
    <MainHeader>
       <NavLink to="/">
        <h2 className="logo-text">INNOVAIT-ON</h2>
      </NavLink>
      {/* <motion.div
      initial={{ opacity: 0, y: -180 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        ease: "easeInOut",
        duration: 1,
        delay: 0.6,
      }}>
    </motion.div> */}
      <Navbar />
    </MainHeader>
  );
};

const MainHeader = styled.header`
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;

  .logo {
    height: auto;
    max-width: 30%;
  }
`;

export default Header;