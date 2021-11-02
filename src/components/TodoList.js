import React from "react";
import TodoItem from "./TodoItem";

function TodoList({ todos, deleteTodoItem, onCompleted }) {
  return (
    <div className="todoList">
      {todos.map((todo) => (
        <TodoItem
          todo={todo}
          key={todo.id}
          deleteTodoItem={deleteTodoItem}
          onChange={onCompleted}
        />
      ))}
    </div>
  );
}

export default TodoList;
