import React, { useState } from "react";

const Home = () => {

  const [message, setMessage] = useState("Try the box below with your mouse.");

  const handleClick = () => setMessage("You clicked the box.");

  const handleDoubleClick = () => setMessage("You double-clicked the box.");

  const handleMouseEnter = () => setMessage("Mouse entered the box.");

  const handleMouseLeave = () => setMessage("Mouse left the box.");

  const handleMouseMove = () => setMessage("Mouse is moving inside the box.");

  const handleMouseOver = () => setMessage("Mouse is over the box.");

  const handleMouseOut = () => setMessage("Mouse moved out of the box.");

  const handleContextMenu = (event) => {
    event.preventDefault();
    setMessage("Right-click detected.");
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>React Mouse Events</h2>
      <p>{message}</p>

      <div
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onMouseMove={handleMouseMove}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        onContextMenu={handleContextMenu}
        style={{
          border: "2px solid #cab6b6",
          padding: "20px",
          width: "300px",
          cursor: "pointer",
          backgroundColor: "#e73333",
          
        }}
      >
        Try me with your mouse
      </div>

      <div style={{ marginTop: "20px" }}>
        {/* onClick -> runs when you click once */}
        {/* onDoubleClick -> runs when you double-click */}
        {/* onMouseEnter -> runs when the mouse enters the box */}
        {/* onMouseLeave -> runs when the mouse leaves the box */}
        {/* onMouseMove -> runs when the mouse moves inside the box */}
        {/* onMouseOver -> runs when the mouse goes over the box */}
        {/* onMouseOut -> runs when the mouse leaves the box area */}
        {/* onContextMenu -> runs when you right-click */}
      </div>
    </div>
  );
};

export default Home;
