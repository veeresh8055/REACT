import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let nonParaFnc = () => {
    alert("this is non paramaterised function");
  };

  let ParaFnc = () => {
    alert("this is parameterised fnction ");
  };

  let wrapperFunc = () => {
    paraFnc("veeresh ");
  };
  let paraFnc = (naam) => {
    alert("hello " + naam + "this is parafunc with wrapperFunction ");
  };

  let nextparaExample = (naam) => {
    alert("Hellllooo" + naam);
  };

  return (
    <>
      {/* function calling  */}
      <h1>HELLO REACT..!</h1>

      {/* calling para Function  */}
      <button onClick={nonParaFnc}>nonParaFnc</button>

      {/* There are two types to call para function  */}
      <button onClick={wrapperFunc}>ParaFnc</button>

      <button
        onClick={() => {
          nextparaExample("INDIA ");
        }}
      >
        nextParaExample{" "}
      </button>
    </>
  );
}

export default App;
