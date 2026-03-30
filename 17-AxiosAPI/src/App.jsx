import React from "react";
import axios from './utils/axios';

const App = () => {
  async function getData() {
    try {
      // let response = await axios('https://fakestoreapi.com/products')
      // let { data } = await axios("https://fakestoreapi.com/products"); //destructure [response.data = data]
      // console.log(data);
       
      let {data} = await axios('/products')
      console.log(data.products)

    } catch {
      console.log(error);
    }
  }

  return (
    <div className="main">
      <h1>AXIOS API</h1>
      <button onClick={getData}>get DATA</button>
    </div>
  );
};

export default App;
