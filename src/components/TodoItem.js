import React from 'react';

const TodoItem = (props) => {
  const {complete, text} = props.todo;
  return (
    <div className="todo-item">
      <p
        style={{
          textDecoration: complete ? 'line-through' : 'none',
          color: complete ? '#cdcdcd' : 'black',
          fontStyle: complete ? 'italic' : 'normal'
        }}
        onClick={props.toggleCompleted}
        className="todo-text"
      >
        {text}
      </p>
      <button onClick={props.deleteTodo} className="delete-btn">
        X
      </button>
    </div>
  );
}

export default TodoItem;
