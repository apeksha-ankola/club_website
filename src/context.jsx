import React, { useContext, useReducer, useEffect } from "react";
import reducer from "./reducer";

const AppContext = React.createContext();

// const API = "https://thapareactapi.up.railway.app";

const intialState = {
  name: "",
  image: "",
  // events: [],
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch(
      {
        type: "HOME_UPDATE",
        payload: {
          name: "InnovAIt-ON",
          image: "./images/logo-pink.gif",
      },
    });
  };

  //  to get the api data
  // const getEvents = async (url) => {
  //   try {
  //     const res = await fetch(url);
  //     const data = await res.json();
  //     dispatch({ type: "GET_EVENTS", payload: data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // // to call the  api
  // useEffect(() => {
  //   getEvents(API);
  // }, []);

  return (
    <AppContext.Provider value={{ ...state, updateHomePage }}>
      {children}
    </AppContext.Provider>
  );
};

// global custom hook
const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };