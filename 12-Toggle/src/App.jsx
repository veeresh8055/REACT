import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleHandler = () => {
    setIsOn(!isOn);
  };

  return (
    <>
      <div
        className="toggle  "
        style={{ backgroundColor: isOn ? "#008000bb" : "tomato" }}
        onClick={toggleHandler}
      >
        <div className={`switch ${isOn ? "on" : "off"} `}>
          <span> {isOn ? "on " : "off"} </span>
        </div>
      </div>
    </>
  );
};

export default App;
