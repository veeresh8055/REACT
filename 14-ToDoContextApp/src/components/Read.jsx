const Read = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <section className="read-card">
      <header className="read-header">
        <h2>Tasks</h2>
      </header>

      {todos.length == 0 ? (
        <div className="empty-state">
          <p>No tasks yet....!</p>
        </div>
      ) : (
        <ul className="task-list">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="task-item"
              style={{ animationDelay: `${index * 1000}ms` }}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`task-check ${todo.completed ? "is-done" : ""}`}
                title={
                  todo.completed ? "Mark task as pending" : "Mark task as done"
                }
              >
                {todo.completed ? "✓" : ""}
              </button>

              <span className={`task-title ${todo.completed ? "is-done" : ""}`}>
                {todo.name}
              </span>

              <button
                onClick={() => deleteTodo(todo.id)}
                className="task-delete"
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Read;
