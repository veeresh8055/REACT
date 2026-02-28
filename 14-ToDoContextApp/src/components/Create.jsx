import { useState } from "react";

const Create = ({ addTodo }) => {
  const [todo, setTodo] = useState("");

  const handleCreate = (event) => {
    event.preventDefault();

    if (!todo.trim()) {
      return;
    }

    addTodo(todo.trim());

    setTodo("");
  };

  return (
    <form className="create-card" onSubmit={handleCreate}>
      <label htmlFor="todo-input" className="card-label">
        Add a new task
      </label>
      <div className="create-row">
        <input
          id="todo-input"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
          placeholder="What needs to be done today?"
          className="create-input"
        />

        <button type="submit" className="create-btn">
          Add Task
        </button>
      </div>
    </form>
  );
};

export default Create;
