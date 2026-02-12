import React, { useState } from "react";

const App = () => {
  const [todo, setTodo] = useState("");
  const [todoArray, setTodoArray] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (todo === "") {
      return  alert("Enter todo ");
    }

    setTodoArray([...todoArray, todo]);
    setTodo("");
  };

  return (
    <>
      <div className="container">
        <h2>Simple TO DO List</h2>

        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={todo}
            onChange={(e) => {
              setTodo(e.target.value);
            }}
          />

          <button type="submit">Add to list</button>
        </form>
      </div>

      <div className="display">
        {todoArray.map((element, index) => 
          <h2 id={index}>  <span>{index+1}</span> {element} </h2>
        )}
      </div>
    </>
  );
};

export default App;
