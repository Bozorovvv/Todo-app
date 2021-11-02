import React from "react";

function TodoItem({ todo, deleteTodoItem, onChange }) {
  return (
    <div className="todo border rounded p-3">
      <div>
        <input type="checkbox" onChange={() => onChange(todo.id)} />
        <h4 className={todo.completed ? "done" : ""}>
          {todo.id} &nbsp;
          {todo.name} &nbsp;
        </h4>
      </div>
      <button
        className="btn btn-danger"
        onClick={() => deleteTodoItem(todo.id)}
      >
        delete
      </button>
    </div>
  );
}

export default TodoItem;
