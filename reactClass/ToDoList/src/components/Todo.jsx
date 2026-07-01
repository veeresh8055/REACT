import React, { useState } from "react";

const Todo = () => {
  
  const [inputVal, setInputVal] = useState("");
  const [todoList, setTodoList] = useState([]);

  function addTodo() {
    if (inputVal ===  "" ) { 
      return alert("todo should not be empty..!");
    }
    setTodoList((pre) => [...pre, inputVal.trim()]);
    setInputVal("");
  }

  function deleteTodo(index) {
    let newTodos = todoList.filter((el, i) => i != index);
    setTodoList(newTodos);
  }
  // FIXED: Corrected prompt variable, validation, and immutable state update
  function updateTodo(index) {
    let updatedTodoText = prompt("update the TODO..", todoList[index]);

    // If user clicks "Cancel", updatedTodoText will be null
    if (updatedTodoText === null) return;

    if (updatedTodoText.trim() === "") {
      return alert("todo should not be empty..!");
    }

    // Use .map() to create a brand new state array
    const updatedList = todoList.map((el, i) => {
      if (i === index) {
        return updatedTodoText.trim();
      }
      return el;
    });

    setTodoList(updatedList);
  }

  return (
    <div className="todoCard">
      <div className="todoInput">
        <input
          type="text"
          placeholder="add task"
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
        />
        <button onClick={addTodo}>Add task</button>
      </div>
      {todoList.length != 0 ? (
        <div className="todoList">
          {todoList.map((el, i) => (
            <p className="todo" key={i}>
              {" "}
              {el}
              <small className="innerp">
                <small onClick={() => updateTodo(i)}>edit</small>{" "}
                <span onClick={() => deleteTodo(i)}> + </span>{" "}
              </small>
            </p>
          ))}
        </div>
      ) : (
        <div className="todoList">
          <p className="todo noTask">No Task Present</p>
        </div>
      )}
    </div>
  );
};

export default Todo;
