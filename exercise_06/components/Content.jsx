import React from "react";
import Temperature from "./Temperature";

const Content = ({ temperature }) => {
  return (
    <div>
      <Temperature temperature={temperature} />
    </div>
  );
};

export default Content;
