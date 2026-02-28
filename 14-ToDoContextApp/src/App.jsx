import { useState } from "react";
import Create from "./components/Create";
import Read from "./components/Read";
import "./App.css";

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = (todoName) => {
    setTodos((prevTodos) => [
      {
        id: crypto.randomUUID(),
        name: todoName,
        completed: false,
      },
      ...prevTodos,
    ]);
  };

  const deleteTodo = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const toggleTodo = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  return (
    <main className="todo-page">
      <section className="todo-panel">
        <header className="todo-header">
          <p className="eyebrow">Daily Planner</p>
          <h1>Create a personal list of tasks</h1>
          <p className="sub-copy">
            Capture your priorities and keep your day focused in one place.
          </p>
        </header>

        <section className="todo-body">
          <Create addTodo={addTodo} />
          <Read todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </section>

        <footer className="todo-stats">
          <article className="stat-card">
            <span>Total</span>
            <strong>{todos.length}</strong>
          </article>
          <article className="stat-card">
            <span>Pending</span>
            <strong>{todos.filter((todo) => !todo.completed).length}</strong>
          </article>
          <article className="stat-card">
            <span>Completed</span>
            <strong>{todos.filter((todo) => todo.completed).length}</strong>
          </article>
        </footer>
      </section>
    </main>
  );
};

export default App;
