import React, { useState } from "react";

function Input({ addTodo, todos }) {
  const [value, setValue] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    addTodo({ id: todos.length + 1, name: value });
    setValue("");
  }

  function handleChange(e) {
    setValue(e.target.value);
    console.log(value);
  }

  return (
    <div className="input-group mt-3">
      <form
        style={{ width: "100%" }}
        className="d-flex justify-content-between"
        onSubmit={handleSubmit}
      >
        <input
          value={value}
          onChange={handleChange}
          type="text"
          className="form-control"
          placeholder="Your todo"
          style={{ width: "100%" }}
        />
        <button className="input-group-text">Add todo</button>
      </form>
    </div>
  );
}

export default Input;
