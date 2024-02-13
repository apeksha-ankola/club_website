import React, { useContext, useReducer } from "react";
import reducer from "../Reducer/reducer";

const AppContext = React.createContext();

const intialState = {
  name: "",
  image: "",
};

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, intialState);

  const updateHomePage = () => {
    return dispatch({
      type: "HOME_UPDATE",
      payload: {
        name: "InnovAIt-ON",
        image: "./images/logo.png",
      },
    });
  };

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
