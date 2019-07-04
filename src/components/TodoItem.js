import React from 'react';

function TodoItem(props) {
  return (
    <div className="todo-item">
      <p
        style={{
          textDecoration: props.todo.complete ? 'line-through' : 'none',
          color: props.todo.complete ? '#cdcdcd' : 'black',
          fontStyle: props.todo.complete ? 'italic' : 'normal'
        }}
        onClick={props.toggleCompleted}
        className="todo-text"
      >
        {props.todo.text}
      </p>
      <button onClick={props.deleteTodo} className="delete-btn">
        X
      </button>
    </div>
  );
}

export default TodoItem;
