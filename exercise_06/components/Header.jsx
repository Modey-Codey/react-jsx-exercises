import React, { useState } from "react";

const Header = ({ temperature }) => {
  const [isOn, setIsOn] = useState(true);
  const toggleIsOn = () => setIsOn(!isOn);

  return (
    <div>
      <button onClick={toggleIsOn}>ON / OFF</button>
      {isOn && <span>Current Temperature: {temperature}°C</span>}
    </div>
  );
};

export default Header;
