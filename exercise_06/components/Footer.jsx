import React from "react";

const Footer = ({ setTemperature }) => {
  const decreaseTemperature = () => setTemperature((prevTemp) => prevTemp - 1);
  const increaseTemperature = () => setTemperature((prevTemp) => prevTemp + 1);

  return (
    <>
      <button onClick={increaseTemperature}>Up</button>
      <button onClick={decreaseTemperature}>Down</button>
    </>
  );
};

export default Footer;
