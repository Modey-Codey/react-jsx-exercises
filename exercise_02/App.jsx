import React from "react";

const App = () => {
	const temperature = 25;
	return (
	  <>
		<Header />;
		<Content />
		<Footer />
	  </>
	);
  };
  const Header = () => {
	return (
	  <div>
		<button>ON / OFF</button>
		<span>Current Temperature: 25°C</span>
	  </div>
	);
  };
  const Content = () => {
	return (
	  <div>
		<Temperature />
	  </div>
	);
  };
  const Temperature = () => {
	return <div>25°C</div>;
  };
  const Footer = () => {
	return (
	  <div>
		<button>Down</button>
		<button>Up</button>
	  </div>
	);
  };

export default App;
