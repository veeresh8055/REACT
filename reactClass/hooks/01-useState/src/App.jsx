import React, { useState } from "react";
import { useSatate } from "react";
const App = () => {
  // counter app
  const [count, setCount] = useState(0);

  function increment() {
    setCount((pre) => pre + 1);
  }

  function decrement() {
    setCount((pre) => pre - 1);
  }

  function reset() {
    setCount(0);
  }

  return (
    <>
      <div className="card">
        <div>Counter : {count}</div>
        <div className="btn">
          <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
        </div>
      </div>


    </>
  );
};

export default App;
