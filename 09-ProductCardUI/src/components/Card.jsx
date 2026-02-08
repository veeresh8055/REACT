import React from "react";
import { FcLike, FcLikePlaceholder } from "react-icons/fc";

const Card = ({ element }) => {
    // console.log(element);
    //image badge likedor not brand name price--

  return (
    <div className="card">
      <div className="imagecontainer">
        <img src={element.image} alt={element.name} />
        <div className="likecontainer">
          <h4>{element.badge}</h4>
          <h4 className="like">
            {element.isLiked ? <FcLike /> : <FcLikePlaceholder />}
          </h4>
        </div>
      </div>

      <div className="details">
        <h2>{element.brand}</h2>
        <h1>{element.name}</h1>
        <p>${element.price}</p>
      </div>
      <button>Buy Now</button>
    </div>
  );
};

export default Card;