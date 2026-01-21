import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);

  function setZero() {
    setNum(0);
  }
  function increase() {
    setNum(num + 1);
  }
  function decrease() {
    setNum(num - 1);
  }

  return (
    <div className="main">
      <div className="container">
        <h5>{num}</h5>
        <div className="btn">
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
        </div>
        <button onClick={setZero}>Set 0</button>
      </div>
    </div>
  );
};

export default App;
