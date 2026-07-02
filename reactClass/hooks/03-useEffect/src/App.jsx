import React, { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [login, setLogin] = useState(false);

  useEffect(() => {
    console.log("count new value " + count);
  }, [count, login]);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>count : {count} </button>
      <hr />
      <button onClick={() => setLogin(!login)}>
        {login ? "logout" : "login"}
      </button>
    </>
  );
};

export default App;
