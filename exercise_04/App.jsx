import React, { useState } from "react";

const App = () => {
	const [temperature, setTemperature] = useState(25);

	return (
		<>
			<Header temperature={temperature} />
			<Content temperature={temperature} />
			<Footer setTemperature={setTemperature} />
		</>
	);
};

const Header = ({ temperature }) => {
	return (
		<div>
			<button>ON / OFF</button>
			<span>Current Temperature:
			{temperature}°C</span>
		</div>
	);
};

const Content = ({ temperature }) => {
	return (
	  <div>
		<Temperature temperature={temperature} />
	  </div>
	);
  };

  const Temperature = ({ temperature }) => {
	return <div>{ temperature }°C</div>;
  };

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

export default App;
