import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";


const Monthly = () => {
  return (
    <>
      <div className="card">
        <div className="cardtop">
          <h4>Starter</h4>
          <h2>$15/month</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}} />
               AI Assistant
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}} />
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}} />
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}} />
              Warranty Tracking
            </li>
            
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardtop">
          <h4>premium</h4>
          <h2>$30/month</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Smart AI Assistant
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}} />
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Warranty Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Subscription Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Event Categorization
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardtop">
          <h4>pro</h4>
          <h2>$25/month</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
           
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Warranty Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Subscription Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{color:"greenyellow"}}/>
              Event Categorization
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Monthly;
