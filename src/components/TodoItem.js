import React from "react";
import "../styles/TodoItem.css";

export const TodoItem = props => {
  const { complete, text } = props.todo;
  return (
    <div className="todo-item">
      <p
        onClick={props.toggleCompleted}
        className={complete ? "todo-complete-text todo-text" : "todo-text"}
      >
        {text}
      </p>
      <button onClick={props.deleteTodo} className="delete-btn">
        X
      </button>
    </div>
  );
};
