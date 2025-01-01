import React from "react";
import { useLocation } from "react-router-dom";

const Main = () => {
  const location = useLocation();
  console.log(location.state);
  return <div>main</div>;
};

export default Main;
