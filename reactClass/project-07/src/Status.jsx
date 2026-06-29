import React, { useState } from "react";

const Status = () => {
  // if user is login and product is available then show the product

  const [isLogin, setIsLogin] = useState(false);
  const [isProductAvailable, setIsProductAvailable] = useState(false);

  function loginStatus() {
    setIsLogin(!isLogin);
  }

  return (
    <>
      {isLogin ? <h1>LogIn success</h1> : <h1> LogOut </h1>}
      <button onClick={loginStatus}>{isLogin ? "LogOut" : "LogIn"} </button>
      <br />
      <hr />
      {isProductAvailable && <h1> Product available </h1>}

      <button onClick={() => setIsProductAvailable(!isProductAvailable)}>
        chaneg availability
      </button>

      {isLogin && isProductAvailable ? (
        <h1> welcome to the Store </h1>
      ) : (
        <h1> Pl login </h1>
      )}

    </>
  );
};

export default Status;
