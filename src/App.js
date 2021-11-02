import React, { useState } from "react";
import Input from "./components/Input";
import TodoList from "./components/TodoList";

function App() {
  const [todos, setTodos] = useState([
    { id: 1, name: "send message", completed: false },
    { id: 2, name: "fix auto", completed: false },
    { id: 3, name: "but something", completed: false },
  ]);

  function deleteTodoItem(id) {
    setTodos(todos.filter((todo) => todo.id !== id));
  }
  function addTodo(todo) {
    if (todo.name == "") return;
    const newTodos = [...todos, todo];
    setTodos(newTodos);
    console.log(todos);
  }
  function onCompleted(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  }

  return (
    <div className="app container mt-5 p-4 border rounded">
      <div className="row">
        <div className="col">
          <div className="container">
            <h1 className="d-flex align-items-center justify-content-center">
              Todo-app
            </h1>
            <Input todos={todos} addTodo={addTodo} />
            {todos.length ? (
              <>
                <TodoList
                  todos={todos}
                  deleteTodoItem={deleteTodoItem}
                  onCompleted={onCompleted}
                />
              </>
            ) : (
              <p className="d-flex justify-content-center align-items-center p-4">
                Todos not found
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
