import React, { useState } from "react";
import Monthly from "./components/Monthly.jsx";
import Yearly from "./components/yearly.jsx";
const App = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <>
      <div className="main">
        <div className="top">
          <h2>Pricing</h2>
          <h1>Choose the Plan That Fits You</h1>
          <p>
            Find the Perfect Plans For Your needs, whether your just getting
            started or looking for advanced tools
          </p>
        </div>

        <div className="toggle">
          <button
            className={toggle ? "yearly" : ""}
            onClick={() => setToggle(true)}
          >
            Yearly
          </button>
          <button
            className={!toggle ? "yearly" : ""}
            onClick={() => setToggle(false)}
          >
            Monthly
          </button>
        </div>

        <div className="pricecards">{toggle ? <Yearly /> : <Monthly />}</div>
      </div>
    </>
  );
};

export default App;
