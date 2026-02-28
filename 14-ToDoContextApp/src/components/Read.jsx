const Read = ({ todos, deleteTodo, toggleTodo }) => {
  return (
    <section className="read-card">
      <header className="read-header">
        <h2>Tasks</h2>
      </header>

      {!todos.length ? (
        <div className="empty-state">
          <p>No tasks yet. Start by adding one from the left.</p>
        </div>
      ) : (
        <ul className="task-list">
          {todos.map((todo, index) => (
            <li
              key={todo.id}
              className="task-item"
              style={{ animationDelay: `${index * 70}ms` }}
            >
              <button
                onClick={() => toggleTodo(todo.id)}
                className={`task-check ${todo.completed ? "is-done" : ""}`}
                aria-label={
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
                aria-label="Delete task"
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
