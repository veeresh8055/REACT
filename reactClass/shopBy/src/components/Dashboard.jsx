import axios from "axios";
import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [productData, setProductData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let response =  await axios.get("https://fakestoreapi.com/products");
      setProductData(response.data);
    }
    fetchData();
  }, []);

  return (
    <div className="dashboard">
      {productData.map((el, i) => (
        <div className="card" key={i}>
          <div className="img">
            <img src={el.image} alt={el.title} />
          </div>
          <div className="content">
            <h1>{el.title.slice(0,20)}...</h1>
            <p>${el.price}  <span className="ratingspan">{el.rating.rate}   <span className="heart"> &#11088; </span> </span></p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dashboard;
