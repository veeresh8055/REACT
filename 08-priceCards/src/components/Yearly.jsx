import React from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";

const Yearly = () => {
  return (
    <>
      <div className="card">
        <div className="cardtop">
          <h4>Basic</h4>
          <h2>$39.00/year</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              AI Assistant
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Warranty Tracking
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardtop">
          <h4>premium</h4>
          <h2>$99.99/year</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Smart AI Assistant
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Warranty Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Subscription Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Event Categorization
            </li>
          </ul>
        </div>
      </div>

      <div className="card">
        <div className="cardtop">
          <h4>pro</h4>
          <h2>$69.50/year</h2>
          <p>One Time Payment + Local taxes</p>
        </div>
        <div className="cardbottom">
          <ul>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Smart AI Assistant
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Income Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Expense tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Warranty Tracking
            </li>
            <li>
              {" "}
              <RiCheckboxCircleFill style={{ color: "greenyellow" }} />
              Subscription Tracking
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Yearly;
